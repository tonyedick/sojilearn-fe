import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import toast from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const { user, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    full_name: '',
    academic_background: '',
    preferred_countries: [] as string[],
    degree_level: '',
    interests: [] as string[]
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (profile) {
      setProfileData({
        full_name: profile.full_name || '',
        academic_background: profile.academic_background || '',
        preferred_countries: profile.preferred_countries || [],
        degree_level: profile.degree_level || '',
        interests: profile.interests || []
      });
    }
  }, [profile]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: profileData.full_name,
          academic_background: profileData.academic_background,
          preferred_countries: profileData.preferred_countries,
          degree_level: profileData.degree_level,
          interests: profileData.interests,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) {
        toast.error('Failed to update profile');
      } else {
        toast.success('Profile updated successfully!');
        setIsEditing(false);
      }
    } catch (error) {
      toast.error('An error occurred while updating profile');
    }
  };

  const addCountry = (country: string) => {
    if (country && !profileData.preferred_countries.includes(country)) {
      setProfileData(prev => ({
        ...prev,
        preferred_countries: [...prev.preferred_countries, country]
      }));
    }
  };

  const removeCountry = (countryToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      preferred_countries: prev.preferred_countries.filter(country => country !== countryToRemove)
    }));
  };

  const addInterest = (interest: string) => {
    if (interest && !profileData.interests.includes(interest)) {
      setProfileData(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      interests: prev.interests.filter(interest => interest !== interestToRemove)
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Sojilearn Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, {profile?.full_name || user.email}</span>
              <button
                onClick={handleSignOut}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Section */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Profile Information
                  </h3>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>

                {isEditing ? (
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        value={profileData.full_name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, full_name: e.target.value }))}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Academic Background</label>
                      <input
                        type="text"
                        value={profileData.academic_background}
                        onChange={(e) => setProfileData(prev => ({ ...prev, academic_background: e.target.value }))}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="e.g., Computer Science, Engineering"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Degree Level</label>
                      <select
                        value={profileData.degree_level}
                        onChange={(e) => setProfileData(prev => ({ ...prev, degree_level: e.target.value }))}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="">Select degree level</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="masters">Masters</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="diploma">Diploma</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Preferred Countries</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {profileData.preferred_countries.map((country, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                          >
                            {country}
                            <button
                              type="button"
                              onClick={() => removeCountry(country)}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                      <select
                        onChange={(e) => {
                          addCountry(e.target.value);
                          e.target.value = '';
                        }}
                        className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="">Add a country</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                        <option value="Australia">Australia</option>
                        <option value="Malta">Malta</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Interests</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {profileData.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                          >
                            {interest}
                            <button
                              type="button"
                              onClick={() => removeInterest(interest)}
                              className="ml-2 text-green-600 hover:text-green-800"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Add an interest and press Enter"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addInterest(e.currentTarget.value);
                            e.currentTarget.value = '';
                          }
                        }}
                        className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Save Profile
                    </button>
                  </form>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Email:</span>
                      <p className="text-sm text-gray-900">{user.email}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Full Name:</span>
                      <p className="text-sm text-gray-900">{profile?.full_name || 'Not set'}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Academic Background:</span>
                      <p className="text-sm text-gray-900">{profile?.academic_background || 'Not set'}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Degree Level:</span>
                      <p className="text-sm text-gray-900">{profile?.degree_level || 'Not set'}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Preferred Countries:</span>
                      <p className="text-sm text-gray-900">
                        {profile?.preferred_countries?.length ? profile.preferred_countries.join(', ') : 'Not set'}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Interests:</span>
                      <p className="text-sm text-gray-900">
                        {profile?.interests?.length ? profile.interests.join(', ') : 'Not set'}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Role:</span>
                      <p className="text-sm text-gray-900">{profile?.role || 'student'}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Scholarship Search Section */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Scholarship Search
                </h3>
                <div className="text-center py-6">
                  <div className="text-gray-500 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">Find Your Perfect Scholarship</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Search through thousands of scholarships tailored to your academic background and preferences.
                  </p>
                  <button 
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => toast('Scholarship search feature coming soon!', { icon: 'ℹ️' })}
                  >
                    Start Searching
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white overflow-hidden shadow rounded-lg md:col-span-2">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => toast('SOP writing feature coming soon!', { icon: '✍️' })}
                  >
                    <div className="text-center">
                      <div className="text-blue-600 mb-2">
                        <svg className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900">Write SOP</h4>
                      <p className="text-sm text-gray-500">AI-powered statement of purpose</p>
                    </div>
                  </button>

                  <button 
                    className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => toast('Resume builder feature coming soon!', { icon: '📄' })}
                  >
                    <div className="text-center">
                      <div className="text-green-600 mb-2">
                        <svg className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900">Build Resume</h4>
                      <p className="text-sm text-gray-500">ATS-compliant resume builder</p>
                    </div>
                  </button>

                  <button 
                    className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => toast('Application planner feature coming soon!', { icon: '📋' })}
                  >
                    <div className="text-center">
                      <div className="text-purple-600 mb-2">
                        <svg className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4V7a2 2 0 012-2h4a2 2 0 012 2v4M8 19h8a2 2 0 002-2v-5a2 2 0 00-2-2H8a2 2 0 00-2 2v5a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900">Plan Applications</h4>
                      <p className="text-sm text-gray-500">Track deadlines and progress</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;