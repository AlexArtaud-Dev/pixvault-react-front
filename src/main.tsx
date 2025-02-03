import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/public/about/About';
import Contact from './pages/public/contact/Contact';
import Layout from './layout/layout';

createRoot(document.getElementById('root')!).render(
      <StrictMode>
         <Router>
            <Layout>
               <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
               </Routes>
            </Layout>
         </Router>
      </StrictMode>,
);