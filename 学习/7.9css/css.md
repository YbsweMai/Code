# CSS

### 引入方式    
- 内联

- 外链

- 内嵌

- 导入


###  特性  
- 继承性：儿子继承父容器的某些样式
- 层叠性：样式优先级和上下顺序层叠
- 优先级：内联样式表>id选择器>类选择器>标签选择器

### 常见样式
- background-image：背景图片
- background-repeat：是否铺满 no-repeat：否 
- background-size:背景图片大小  cover：铺满
- background-attachment：背景图片是否跟随页面滚动 fixed；不跟随背景图片滚动 
- height：200px （view height）背景高度
- text-aligin:center 表示居中
- text-indent：首行缩进
- word-spacing：表示英文单词之间的间隔
- letter-spacing：表示中文单词之间间隔
- text-decoration:表示装饰
- font-size: 字体大小
- font-family：字体
- font-weight：字体粗细
- font-itallc:字体斜体
- line-height:字体行高

### 边框
- border-style：边框样式
- border-width：边框粗细
- 遵循顺时针原则

### 盒子模型
- padding （20px）内边距
- margin  外边距  margin-top会出现高度塌陷 解决方式 使用BFC（块级格式化上下文）：

具有BFC特性            
只要元素满足
- overflow: hidden;
- padding:0.1px
- border
- display:inline-block
- 给子盒子加浮动flort　


###
- 块级元素 例：div
- 行内元素 例：
```
<span style="line-height:200px;">123</span>
```
（span 超级链 
- 行内块元素  例：
```
<span style="display:inline-block;width......"></span> 
```
是否在一行取决于display:inline-block(行内块);或block（块级元素）inline（默认 内联元素）
- 行内块解决缝隙：
- 复合子font-size 0
- div display:inline-block（写在统一行）
- margin-left：-值
### 选择器
- .+名称 类选择器
- .div 元素选择器
- #+名称 ID选择器
- *全局选择
#### 复合选择器
- 后代选择器     .class p or h1
- 子元素选择器    .class > P （class元素包含p）
- 属性选择器    div「name=“xx”」{} （<div name="xx"></div>)
- 交集选择器    p.class（类名为class的段落标签）
- 并集选择器    .class,p,#id（任何形式的选择器都可以作为并集选择器一部分）

#### 伪选择器
- hover  鼠标悬停变色 例子 a：hover
- visited 访问过变色
- active 点击时颜色
- link  已激活的链接（访问过后则不显示样式）
- 由于层叠性关系 正常书写顺序 link visited hover active
- first-child/nth-child 第一个或第n个 odd（基数）even（偶数）

### 伪元素 
- ::before 举例 content；‘before’ 内容之前
- :: after

### 选择器优先级权重计算
- A 内联 （style=“”）  
- B ID选择器 #J   
- C 类 伪类 属性选择器 .J
- D 元素和伪元素选择器 .div p ul ol

### CSS定位 position（定位选择）
- static 默认
- 相对定位 （relative）相对于自身原先的位置移动 会遮挡其他（原先位置未动）
- 绝对定位 （absolute）脱离标准流 （什么都不做的前提下 绝对定位于浏览器页面）（当父类不是static的时候，绝对定位于父类）
- 固定定位 （fixed） 相对于游览器位置固定不变
- 浮动  （float) 使元素脱离标准流之后，按设置方向排列，一行满了之后自动换行 clear:both  清除全部浮动 最好写成
```
.XXX::after{
   content:" ";
   display:block; 
   clear:both;
}
```
### 超出边框
- overflow:hidden：隐藏
- overflow:scroll:滚动条

### 居中
- text-aligin: center 行内文本居中 line-height：center（单行字垂直居中 行高要与元素块高度一致）
- margin 0 auto 块元素水平居中
```
width
height
border:1px solid black
margin 0auto
```

-  transform: translate(-50%,-50%)根据自身比例移动

### 布局
- 一列布局
```
.J{
    width
    height
    background
    margin:0 auto;
}
```
- 两列布局 在一列布局里添加两个div横向排列 长宽要等同于一列
- 定宽自适应 定宽边需要flort(左边定宽left 右边right) 自适应边(宽或长）不加宽或长 再加上margin-left(左边left 右边right）方式移动时被其他边覆盖内容 自适应边需要写在最下面！！！


### CSS动画
### animation （动画属性 设置动画时必须先写动画名）
### @keyframes (创建动画必须加动画名)
### transform 旋转

### transition：
- duration 动画开始到结束整个过程时间
- delay 延迟时间 （多久开始动画）
- xx 选择某个元素（可选全部all）

### 文字省略号
- overflow:hidden 超出范围隐藏
- white-space:nowrap; 不换行
- text-overflow:ellipsis; 文字超出显示范围显示省略号 

### 精灵图（雪碧图）
- 定义：将多个图片合成一个图片，减少网络使用，加快页面的渲染。
- background-position

### 图标
- 

### 三角形
- 
