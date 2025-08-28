// Test setup for Jest
import '@testing-library/jest-dom';

// Mock Supabase client globally
jest.mock('./integrations/supabase/client', () => {
  const mockSubscription = {
    unsubscribe: jest.fn()
  };

  const mockAuthStateListener = jest.fn((callback) => {
    // Simulate no session initially
    setTimeout(() => callback('SIGNED_OUT', null), 0);
    return { data: { subscription: mockSubscription } };
  });

  return {
    supabase: {
      auth: {
        signInWithPassword: jest.fn(() => Promise.resolve({ error: null })),
        signUp: jest.fn(() => Promise.resolve({ error: null })),
        signOut: jest.fn(() => Promise.resolve()),
        onAuthStateChange: mockAuthStateListener,
        getSession: jest.fn(() => Promise.resolve({ data: { session: null } }))
      },
      from: jest.fn(() => ({
        select: jest.fn(() => ({
          eq: jest.fn(() => ({
            single: jest.fn(() => Promise.resolve({ data: null, error: null }))
          }))
        }))
      }))
    }
  };
});

// Mock environment variables
process.env.REACT_APP_SUPABASE_URL = 'https://test.supabase.co';
process.env.REACT_APP_SUPABASE_ANON_KEY = 'test-key';