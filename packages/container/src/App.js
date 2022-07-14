import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MaketingApp from './components/MaketingApp';
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


const generatedClassName = createGenerateClassName({
   'co',
});

export default() => {
 return (
   <StylesProvider generateClassName={generatedClassName}>
      <BrowserRouter>
         <div>
            <Header />
            <MaketingApp />
         </div>
      </BrowserRouter>
   </StylesProvider>
 );

};

