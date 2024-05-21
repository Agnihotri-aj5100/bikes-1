import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>This is a dummy footer</p>
      <ul style={styles.footerList}>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    marginTop: 10,
  },
};

export default Footer;
