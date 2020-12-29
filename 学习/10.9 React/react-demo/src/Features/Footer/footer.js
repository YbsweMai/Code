import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
   render () {
      return (
         <div className="footer-container">

            <div className="footer1">
               <a href="https://www.banyuan.club/index"><img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo-footer.png" alt=""/></a>
               <h3 className="footer1-words">半圆的发展历程和背景，
                            更清晰的了解我们</h3>
            </div>

            <div className="footer1">
               <h2 className="footer1-title">我们的故事</h2>
               <h3 className="footer1-words">半圆的发展历程和背景，
                            更清晰的了解我们</h3>
            </div>

            <div className="footer1">
               <h2 className="footer1-title">成为一员</h2>
               <h3 className="footer1-words">半圆学社致力于数字领域的 不断开拓，欢迎志同道合的朋友加入我们。</h3>
            </div>

            <div className="footer1">
               <h2 className="footer1-title">成为一员</h2>
               <h3 className="footer1-words">半圆学社致力于数字领域的 不断开拓，欢迎志同道合的朋友加入我们。</h3>
            </div>
         </div>
      );
   }
}
