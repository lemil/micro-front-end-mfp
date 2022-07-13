import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MaketingApp from './components/MaketingApp';
import Header from './components/Header'

export default() => {
 return (
   <BrowserRouter>
      <div>
         <Header />
         <MaketingApp />
      </div>
   </BrowserRouter>
 );

};

