import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatarApp from '../src/assets/img/favicon.png';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Application from './Pages/Application';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Disclaimer from './Pages/Disclaimer';
import TermsOfUse from './Pages/TermsOfUse';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
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
      <BrowserRouter>
        <ScrollToTop />
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
            <Route path="/apply" element={<Application />} />
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
            <Route path="*" element={<Navigate to="/not-found" replace />} />
            {/*<Route path="/blog" element={<UnderConstruction />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
