## 常见属性
### 1. 文本属性
```html
text-align
<!-- 对齐方式，对于行级元素有效 -->
      text-align: left;
      text-align: right;
      text-align: center;
      text-align: justify; 
text-decoration
      text-decoration: underline; /* 下划线 */
      text-decoration: none;/* 无效果，可用于去除a元素的效果 */
      text-decoration: line-through;/* 中划线 */
      text-decoration: overline;/* 上划线，很少用 */
text-indent
<!-- 缩进2字符 -->
      text-indent: 2em;

word/letter-spacing
      word-spacing: 10px;
      <!-- 字母间距 -->
      letter-spacing: 10px;
      <!-- 单词间距 -->
      text-transform
<!-- 实际开发中，使用JS实现较多 -->
      text-transform: capitalize;/* 所有单词首字母大写 */
      text-transform: uppercase;/* 所有字母大写 */
      text-transform: lowercase;/* 所有字母小写 */
      text-transform: none;/* 无效果 */
```

### 2. 字体属性
```html
font-size
<!-- 字体大小，用px，em，% 表示 -->
font-family
<!-- 字体种类，到操作系统中寻找，可设置多个值 -->
font-weight
<!-- 字体粗细，常见取值100-900，整百，normal是400，bold是700 -->
line-height
<!-- 两行文字基线之间的间距，表示的是每一行的高度，height表示的是元素整体高度 -->

font-style
<!--  -->
      font-style: italic;
      <!-- 斜体，用字体的斜体 -->
      font-style: oblique;
      <!-- 仅仅让文字倾斜 -->
      font-style: normal;
      <!-- 正常显示 -->
font-variant
<!-- 将小写字母替换成大写字母，但是高度不变-->
      font-variant: small-caps;
      font-variant: normal;


font缩写
顺序
font-style font-variant font-weight font-size/line-height font-family
      <!-- 前三项可以互换位置和省略，后面的需要写，例如 -->
      font: 20px/1.5 "宋体"
```







## 常见选择器
### 通用选择器
使用方式
```html
* {
  }
```
实际中使用较少
### 类选择器
**使用方式**
```html
    .box {
      background-color: orange;

    }
```
### id选择器
**使用方式**
```html
    #box {
      background-color: orange;

    }
```

### 属性选择器
**使用方式**
```html
这两种都可以
    [title=box] {
      background-color: orange;

    [title] {
      background-color: orange;
    }
```
### 后代选择器
```html
所有后代，用空格分隔
.box span {}
直接后代，用>分割
.box > span {}
```

### 兄弟选择器
```html
相邻兄弟(向后)
.box + div {}
普遍兄弟(向后)
.box ~ div {}
```


### 选择器组
```html
交集选择器
div.box {}

并集选择器
div, span, p {}
```
### 伪类选择器
```html
Pseudo-classes
动态伪类, dynamics pseudo-classes
:link, :visited, :focus, :hover, :active

    .box1:link {
      color: rgb(27, 123, 207);
    }

    .box1:visited {
      color: aqua;
    }
    .box1:focus {
      color: yellow;
    }
    .box:hover {
      color: brown;
    }
    .box:active {
      color:skyblue;
    }
    .box2:hover {
      color: greenyellow;
    }


```
### 伪元素
```html
类型
::first-line
::first-letter
::before
::after
建议使用双引号
使用方式
     .box-cab::before {
      /* 为具体内容添加 */
      content: "yes";
      background-color: #ff4400;
    }
    .item::before {
      /* 添加工具，哪个元素需要添加直接添加item类即可 */
      content: "you need some apples";
      background-color: #ff4400;

```









