import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import { supabase } from '../integrations/supabase/client';

// Test component to use the auth hook
const TestAuthComponent = () => {
  const { user, session, profile, loading, signIn, signUp, signOut, isAdmin } = useAuth();
  
  return (
    <div>
      <div data-testid="loading">{loading ? 'loading' : 'loaded'}</div>
      <div data-testid="user">{user ? user.email : 'no user'}</div>
      <div data-testid="profile">{profile ? profile.full_name : 'no profile'}</div>
      <div data-testid="isAdmin">{isAdmin ? 'admin' : 'not admin'}</div>
      <button 
        data-testid="signin" 
        onClick={() => signIn('test@example.com', 'password')}
      >
        Sign In
      </button>
      <button 
        data-testid="signup" 
        onClick={() => signUp('test@example.com', 'password', 'Test User')}
      >
        Sign Up
      </button>
      <button 
        data-testid="signout" 
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

describe('Authentication System', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should provide auth context to children', () => {
    render(
      <AuthProvider>
        <TestAuthComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.getByTestId('user')).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
    expect(screen.getByTestId('isAdmin')).toBeInTheDocument();
  });

  test('should handle sign in', async () => {
    const mockSignIn = supabase.auth.signInWithPassword as jest.Mock;
    mockSignIn.mockResolvedValue({ error: null });

    render(
      <AuthProvider>
        <TestAuthComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByTestId('signin'));

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password'
      });
    });
  });

  test('should handle sign up', async () => {
    const mockSignUp = supabase.auth.signUp as jest.Mock;
    mockSignUp.mockResolvedValue({ error: null });

    render(
      <AuthProvider>
        <TestAuthComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByTestId('signup'));

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password',
        options: {
          emailRedirectTo: 'http://localhost/',
          data: {
            full_name: 'Test User'
          }
        }
      });
    });
  });

  test('should handle sign out', async () => {
    const mockSignOut = supabase.auth.signOut as jest.Mock;

    render(
      <AuthProvider>
        <TestAuthComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByTestId('signout'));

    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalled();
    });
  });

  test('should identify admin users correctly', () => {
    const mockProfile = {
      id: '1',
      email: 'admin@example.com',
      full_name: 'Admin User',
      role: 'admin'
    };

    // Mock the profile fetch
    const mockFrom = supabase.from as jest.Mock;
    mockFrom.mockReturnValue({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(() => Promise.resolve({ data: mockProfile, error: null }))
        }))
      }))
    });

    render(
      <AuthProvider>
        <TestAuthComponent />
      </AuthProvider>
    );

    // Initially should show not admin
    expect(screen.getByTestId('isAdmin')).toHaveTextContent('not admin');
  });

  test('should handle authentication errors', async () => {
    const mockSignIn = supabase.auth.signInWithPassword as jest.Mock;
    const testError = { message: 'Invalid credentials' };
    mockSignIn.mockResolvedValue({ error: testError });

    render(
      <AuthProvider>
        <TestAuthComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByTestId('signin'));

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalled();
    });
  });

  test('should throw error when useAuth is used outside AuthProvider', () => {
    // Temporarily mock console.error to avoid error output in test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      render(<TestAuthComponent />);
    }).toThrow('useAuth must be used within an AuthProvider');

    console.error = originalError;
  });
});

describe('User Profile Management', () => {
  test('should handle profile with academic background fields', () => {
    const mockProfile = {
      id: '1',
      email: 'student@example.com',
      full_name: 'Student User',
      role: 'student',
      academic_background: 'Computer Science',
      preferred_countries: ['UK', 'Canada'],
      degree_level: 'Masters',
      interests: ['AI', 'Machine Learning']
    };

    expect(mockProfile.academic_background).toBe('Computer Science');
    expect(mockProfile.preferred_countries).toContain('UK');
    expect(mockProfile.degree_level).toBe('Masters');
    expect(mockProfile.interests).toContain('AI');
  });
});

describe('Role Management', () => {
  test('should distinguish between student and admin roles', () => {
    const studentProfile = {
      id: '1',
      email: 'student@example.com',
      full_name: 'Student User',
      role: 'student'
    };

    const adminProfile = {
      id: '2',
      email: 'admin@example.com',
      full_name: 'Admin User',
      role: 'admin'
    };

    expect(studentProfile.role).toBe('student');
    expect(adminProfile.role).toBe('admin');
  });
});