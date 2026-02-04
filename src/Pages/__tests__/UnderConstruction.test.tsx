import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import UnderConstruction from '../UnderConstruction';

// Mock the supabase client properly
jest.mock('../../integrations/supabase/client', () => {
  const mockInsert = jest.fn();
  const mockFrom = jest.fn();
  
  // Set up the mock to return the proper structure
  mockFrom.mockReturnValue({
    insert: mockInsert
  });
  
  return {
    supabase: {
      from: mockFrom
    },
    // Export for testing
    __mockInsert: mockInsert,
    __mockFrom: mockFrom
  };
});

// Mock the layout components to avoid complex dependencies
jest.mock('../../Components/Layouts/ConstructionLayout', () => {
  return function MockConstructionLayout({ children }: { children: React.ReactNode }) {
    return <div data-testid="construction-layout">{children}</div>;
  };
});

// Mock window.alert for testing user feedback
const mockAlert = jest.fn();
global.alert = mockAlert;

// Mock console.error to check error logging
const mockConsoleError = jest.fn();
global.console.error = mockConsoleError;

describe('UnderConstruction Newsletter Subscription', () => {
  // Get access to the mocks
  const mockModule = require('../../integrations/supabase/client');
  const mockSupabaseInsert = mockModule.__mockInsert;
  const mockSupabaseFrom = mockModule.__mockFrom;
  
  // Wrapper component to provide React Router context
  const renderWithRouter = (component: React.ReactElement) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockAlert.mockClear();
    mockConsoleError.mockClear();
    
    // Reset the return value to ensure proper chaining
    mockSupabaseFrom.mockReturnValue({
      insert: mockSupabaseInsert
    });
  });

  describe('Component Rendering', () => {
    test('renders the newsletter subscription form', () => {
      renderWithRouter(<UnderConstruction />);
      
      // Check for main form elements - use placeholder text since email input doesn't have accessible name
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
      
      // Check for newsletter section content
      expect(screen.getByText('Join Our Newsletter')).toBeInTheDocument();
      expect(screen.getByText(/Get the latest study abroad tips/i)).toBeInTheDocument();
    });

    test('renders the under construction message', () => {
      renderWithRouter(<UnderConstruction />);
      
      expect(screen.getByText(/We're building something unique for you/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument();
    });

    test('form has correct attributes', () => {
      renderWithRouter(<UnderConstruction />);
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const submitButton = screen.getByRole('button', { name: /subscribe/i });
      
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('name', 'email');
      expect(emailInput).toBeRequired();
      expect(submitButton).toHaveAttribute('type', 'submit');
    });
  });

  describe('Form Validation', () => {
    test('does not submit when email is empty', async () => {
      renderWithRouter(<UnderConstruction />);
      
      const submitButton = screen.getByRole('button', { name: /subscribe/i });
      
      userEvent.click(submitButton);
      
      // Verify Supabase insert was not called
      expect(mockSupabaseInsert).not.toHaveBeenCalled();
    });

    test('requires email field for form submission', () => {
      renderWithRouter(<UnderConstruction />);
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      expect(emailInput).toBeRequired();
    });
  });

  describe('Email Input Behavior', () => {
    test('updates email state when user types', async () => {
      renderWithRouter(<UnderConstruction />);
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      
      await userEvent.type(emailInput, 'test@example.com');
      
      expect(emailInput).toHaveValue('test@example.com');
    });

    test('clears email input after successful submission', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock successful insert
      mockSupabaseInsert.mockResolvedValue({ error: null });
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'test@example.com');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(emailInput).toHaveValue('');
      });
    });
  });

  describe('Loading States', () => {
    test('shows loading state during submission', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock a delayed response
      mockSupabaseInsert.mockImplementation(() => 
        new Promise(resolve => setTimeout(() => resolve({ error: null }), 100))
      );
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'test@example.com');
      fireEvent.submit(form);
      
      // Check loading state
      expect(screen.getByRole('button', { name: /subscribing.../i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /subscribing.../i })).toBeDisabled();
      
      // Wait for submission to complete
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
      });
      
      expect(screen.getByRole('button', { name: /subscribe/i })).not.toBeDisabled();
    });
  });

  describe('Successful Submission', () => {
    test('handles successful newsletter subscription', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock successful insert
      mockSupabaseInsert.mockResolvedValue({ error: null });
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'test@example.com');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(mockAlert).toHaveBeenCalledWith('Successful! Thank you for subscribing to our newsletter.');
      });
      
      // Verify Supabase was called with correct data
      expect(mockSupabaseInsert).toHaveBeenCalledWith([
        {
          email: 'test@example.com',
          source: 'blog_signup'
        }
      ]);
    });

    test('normalizes email before submission (trim and toLowerCase)', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock successful insert
      mockSupabaseInsert.mockResolvedValue({ error: null });
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      // Test with email that has uppercase and whitespace
      await userEvent.type(emailInput, '  TEST@EXAMPLE.COM  ');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(mockSupabaseInsert).toHaveBeenCalledWith([
          {
            email: 'test@example.com',
            source: 'blog_signup'
          }
        ]);
      });
    });
  });

  describe('Error Handling', () => {
    test('handles duplicate email error (code 23505)', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock duplicate email error
      mockSupabaseInsert.mockResolvedValue({ 
        error: { code: '23505', message: 'duplicate key value violates unique constraint' }
      });
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'existing@example.com');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(mockAlert).toHaveBeenCalledWith('This email is already subscribed to our newsletter.');
      });
      
      // Email should not be cleared for duplicate error
      expect(emailInput).toHaveValue('existing@example.com');
    });

    test('handles other Supabase errors', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock other type of error
      mockSupabaseInsert.mockResolvedValue({ 
        error: { code: '42501', message: 'permission denied' }
      });
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'test@example.com');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(mockAlert).toHaveBeenCalledWith('Subscription failed, Please try again later.');
      });
      
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Newsletter subscription error:',
        { code: '42501', message: 'permission denied' }
      );
    });

    test('handles network/exception errors', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock network error (rejected promise)
      mockSupabaseInsert.mockRejectedValue(new Error('Network error'));
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'test@example.com');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(mockAlert).toHaveBeenCalledWith('Subscription failed, Please try again later.');
      });
      
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Newsletter subscription error:',
        expect.any(Error)
      );
    });
  });

  describe('Form Submission Flow', () => {
    test('prevents submission when email is empty string', async () => {
      renderWithRouter(<UnderConstruction />);
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      // Ensure email is empty
      expect(emailInput).toHaveValue('');
      
      fireEvent.submit(form);
      
      // Should not call Supabase
      expect(mockSupabaseInsert).not.toHaveBeenCalled();
      expect(mockAlert).not.toHaveBeenCalled();
    });

    test('prevents double submission during loading', async () => {
      renderWithRouter(<UnderConstruction />);
      
      // Mock slow response
      mockSupabaseInsert.mockImplementation(() => 
        new Promise(resolve => setTimeout(() => resolve({ error: null }), 200))
      );
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'test@example.com');
      
      // Submit form
      fireEvent.submit(form);
      
      // Button should be disabled during loading
      await waitFor(() => {
        const loadingButton = screen.getByRole('button', { name: /subscribing.../i });
        expect(loadingButton).toBeDisabled();
      });
      
      // Wait for the request to complete
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
      });
      
      // Should have been called once
      expect(mockSupabaseInsert).toHaveBeenCalledTimes(1);
    });
  });

  describe('Integration with Supabase', () => {
    test('calls correct Supabase table and method', async () => {
      renderWithRouter(<UnderConstruction />);
      
      mockSupabaseInsert.mockResolvedValue({ error: null });
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'test@example.com');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(mockSupabaseFrom).toHaveBeenCalledWith('newsletter_subscribers');
        expect(mockSupabaseInsert).toHaveBeenCalledWith([
          {
            email: 'test@example.com',
            source: 'blog_signup'
          }
        ]);
      });
    });

    test('includes correct source in subscription data', async () => {
      renderWithRouter(<UnderConstruction />);
      
      mockSupabaseInsert.mockResolvedValue({ error: null });
      
      const emailInput = screen.getByPlaceholderText('Enter your email');
      const form = emailInput.closest('form')!;
      
      await userEvent.type(emailInput, 'user@test.com');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(mockSupabaseInsert).toHaveBeenCalledWith([
          expect.objectContaining({
            source: 'blog_signup'
          })
        ]);
      });
    });
  });
});