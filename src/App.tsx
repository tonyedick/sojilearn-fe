import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatarApp from '../src/assets/img/favicon.png';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';
import ScrollToTop from './Components/ScrollToTop';
import StudyInUK from './Pages/StudyInUK';
import StudyInMalta from './Pages/StudyInMalta';
import StudyInCanada from './Pages/StudyInCanada';
import StudyInUSA from './Pages/StudyInUSA';
import StudyInGermany from './Pages/StudyInGermany';

const NotFound = React.lazy(() => import('./Pages/NotFound'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

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
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/page404" element={<NotFound />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog-detail/:id" element={<BlogDetail />} /> */}
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/study-in-uk" element={<StudyInUK />} />
          <Route path="/study-in-malta" element={<StudyInMalta />} />
          <Route path="/study-in-usa" element={<StudyInUSA />} />
          <Route path="/study-in-canada" element={<StudyInCanada />} />
          <Route path="/study-in-germany" element={<StudyInGermany />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Suspense>
  </BrowserRouter>
  );
}

export default App;
