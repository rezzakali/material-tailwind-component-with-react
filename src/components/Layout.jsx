import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

Layout.defaultProps = {
  description: 'Web Application',
  title: 'React-Vite Application',
};

function Layout({ children, description, title }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `React-Vite -${title}` : 'Reac-Vite App'}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Nav />
      <main className="container px-2 mx-auto">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
