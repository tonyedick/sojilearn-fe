import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatarApp from '../src/assets/img/favicon.png';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';
import ScrollToTop from './Components/ScrollToTop';

const NotFound = React.lazy(() => import('./Pages/NotFound'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {

  const phoneNumber = '+2348137806643'; 
  const accountName = 'Sojilearn - Study in UK | USA | Canada | Dubai | Ireland'; 

  // Other optional props
  const avatar = avatarApp; 
  const statusMessage = 'We\'re online'; 

  // Handle chat message submission
  const handleFormSubmit = (event: any, formValue: any) => {
    console.log('Form submitted:', formValue);
  };

  return (
    <BrowserRouter>
      <FloatingWhatsApp
        phoneNumber={phoneNumber}
        accountName={accountName}
        avatar={avatar}
        statusMessage={statusMessage}
        onSubmit={handleFormSubmit}
      />
      <ScrollToTop />
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/page404" element={<NotFound />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Suspense>
  </BrowserRouter>
  );
}

export default App;
