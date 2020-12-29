import React, { Component } from 'react';
import moment from 'moment';
import './item.css';

export default class Item extends Component {
   constructor (){
      super();
      this.state = {
         date: new Date()
      };
   }

   render () {
      return (
         <div className="box-container">
            <div className="box-top">
               <img src={ this.props.item.cover } alt=""/>
               <div className="box-title">{ this.props.item.title }</div>
            </div>

            <div>创建时间:{ moment(this.state.date).format('YYYY-M-D') }</div>
            <p>{ this.props.item.decp }</p>
         </div>
      );
   }
}
