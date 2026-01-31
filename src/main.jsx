import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './app/layout';
import Page from './app/page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Page />
    </Layout>
  </React.StrictMode>
);
