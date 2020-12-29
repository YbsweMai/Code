import React, { Component } from 'react';
import Header from '../Header/header';
import Center from '../Center/center';
import Footer from '../Footer/footer';

export default class Home extends Component {
   render () {
      return (
         <div>
            <Header></Header>
            <Center></Center>
            <Footer></Footer>
         </div>
      );
   }
}
