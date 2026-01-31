import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './app/layout';
import Page from './app/page';
import Resume from './app/resume';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
