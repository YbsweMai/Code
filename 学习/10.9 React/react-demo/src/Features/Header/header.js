import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
   render () {
      return (
         <div className="header-container">
            <div className="header-left">
               <a href="https://www.banyuan.club/index"><img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo.png" alt=""/></a>
            </div>

            <div className="header-right">
               <div className="header-nav">
                  <a href="https://www.banyuan.club/index">首页</a>
               </div>
               <div className="header-nav">
                  <a href="https://www.banyuan.club/index">职前集训</a>
               </div>
               <div className="header-nav">
                  <a href="https://www.banyuan.club/index">高校俱乐部</a>
               </div>
            </div>
         </div>
      );
   }
}
