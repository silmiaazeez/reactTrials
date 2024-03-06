import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Header from './Components/header';
import Footer from './Components/footer';
import  './Components/labelClass.css';
import BodyComponent from  './Components/divBody';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* ListArr.propTypes={
  name:PropTypes.string.isRequired
} */
/* LabelComponentFn.propTypes={
  id:PropTypes.string.isRequired
} */


root.render(
  <React.StrictMode>  
  <Header />
    <BodyComponent />
  <Footer />
  
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
