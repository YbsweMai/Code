import React, { Component } from 'react';
import './center.css';
import Item from './item';

export default class Center extends Component {
   renderItem (){
      const list = [
         { id:1, cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_MACBOOK.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
         { id:2, cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_markdown.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
         { id:3, cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_terminal.jpg', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
         { id:4, cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/online/frontcover/PRE_code.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
      ];

      const eles = list.map((item)=>{
         return (
            <Item item={ item } key= { item.id }></Item>
         );
      });
      return eles;
   }

   render () {
      return (
         <div className='center-container'>
            { this.renderItem()}
         </div>
      );
   }
}
