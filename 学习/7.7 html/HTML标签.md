# HTML

## 全局标签

| 标签                      | 功能                                 |
| ------------------------- | ------------------------------------ |
| 文档声明类型!DOCTYPE html | 声明是用html5，让游览器使用html5解析 |
| 语言声明lang=“en”         | 声明网页语言（爬虫关注）             |
| title                     | 网页标题                             |
| link                      | 外部文件链接                         |
| meta                      | 元数据（放一些关键字，供爬虫爬取）   |
| script                    | 里面放js代码                         |
| style                     | 里面放css样式                        |
| data-*                    | 在元素里面保存一份数据               |

# 常见标签

| 标签            | 功能                                                         |
| --------------- | ------------------------------------------------------------ |
| div             | 盒子标签 块级元素 独占一行                                       |
| span            | 盒子标签 行内元素 所有内容只在一行                                 |
| a               | 超链接必须提供herf和name属性（target:__blank:在新页面打开 _self:在当前页面打开）错点 |
| select  option  | 选择列表                                                     |
| button          | 按钮标签                                                     |
| input           | 输入框：name autocomplete：自动完成功能  placeholder：规定帮助用户填写输入字段的提示 |
| type text       | 文本输入框                                                   |
| type   password | 密码输入框                                                   |
| img             | 图片                                                         |
| p               | 段落                                                         |
| code            | 代码块                                                       |
| pre             | 格式化显示 主要用作显示源代码或歌词                              |
| h1 2 3          | 各级标题                                                     |
| ol              | 有序列表                                                     |
| ul              | 无序列表                                                     |
| li              | 标签定义列表项目 用于ol ul menu
| dl              | 定义列表 dt（标题） dd（描述内容）用于其中                       |
| audio           | 音频  autoplay：自动播放                     |
| video           | 视频 autoplay需要muted（静音）后可用                         
|  controls：控制台| 用于音频视频属性后面 会出现控制器 
| table           | 表格    text-align:center 文本居中  |
| thead头部 tbody内容 |   tr行   td行内容    |
| border          | 边框宽度           |
| cellpadding      | 单元边缘和内容之间距离
| cellspacing      | 单元格之间距离 |
| rowspan          | 单元格所占行数|
| colspan          | 单元格所占列数 |
| textarea         | 多行文本输入；文本域   |
| form             | 表单    action上传地址 |
| method           | 如何发送表单数据  |
| sumbit           | 提交       |