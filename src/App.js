import React from 'react';
import Header from './component/header/header.jsx';
import Footer from './component/footer/footer.jsx';

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default App;