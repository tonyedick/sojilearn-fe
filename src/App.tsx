import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './hooks/useAuth';
import avatarApp from '../src/assets/img/favicon.png';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Disclaimer from './Pages/Disclaimer';
import TermsOfUse from './Pages/TermsOfUse';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import ScrollToTop from './Components/ScrollToTop';
import StudyInUK from './Pages/StudyInUK';
import StudyInMalta from './Pages/StudyInMalta';
import StudyInCanada from './Pages/StudyInCanada';
import StudyInUSA from './Pages/StudyInUSA';
import StudyInGermany from './Pages/StudyInGermany';
// import UnderConstruction from './Pages/UnderConstruction';

const NotFound = React.lazy(() => import('./Pages/NotFound'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const queryClient = new QueryClient();

function App() {

  const phoneNumber = '+2348137806643'; 
  const accountName = 'Sojilearn - Study in Malta | UK | USA | Canada | Germany | Ireland'; 

  // Other optional props
  const avatar = avatarApp; 
  const statusMessage = 'We\'re online'; 

  // Handle chat message submission
  const handleFormSubmit = (event: any, formValue: any) => {
    console.log('Form submitted:', formValue);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4AED88',
                  secondary: '#FFFAEE',
                },
              },
            }}
          />
          <FloatingWhatsApp
            phoneNumber={phoneNumber}
            accountName={accountName}
            avatar={avatar}
            statusMessage={statusMessage}
            onSubmit={handleFormSubmit}
          />
          <Suspense fallback={loading}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page404" element={<NotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/study-in-uk" element={<StudyInUK />} />
              <Route path="/study-in-malta" element={<StudyInMalta />} />
              <Route path="/study-in-usa" element={<StudyInUSA />} />
              <Route path="/study-in-canada" element={<StudyInCanada />} />
              <Route path="/study-in-germany" element={<StudyInGermany />} />
              <Route path="/blog" element={<Blog />} /> 
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
              {/*<Route path="/blog" element={<UnderConstruction />} /> */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
