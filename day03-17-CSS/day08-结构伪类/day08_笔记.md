relative 是相对定位，相对于自己的原始位置。

fixed 是固定定位，把元素从标准流中拿出来，然后相对于视口进行定位，在滚动中，位置也不会发生变化，在视口中的固定位置保持不变。

### 固定定位的练习
对于line-height 的设置，MDN上面推荐设置为无属性数字，一般设置为1.5，不会在继承时产生不确定的结果。


### border设置图形
使用border可以做出来很多种图形，有一个网站可以找到很多做好的图形。

#### 设置border图形的网站
https://css-tricks.com/the-shapes-of-css/#top-of-site


### 网络字体
在页面上设置字体使用font-family，浏览器会在列表中搜寻，直到找到一个可以使用的。

#### 获取网络字体的网站
https://www.fonts.net.cn/fonts-zh-1.html

#### 网络字体更改格式
https://font.qqe2.com/#

下载的文件中有icon.css文件，里面有兼容性写法的代码，记得把字体的路径改成自己的。最后再
把font-style设置为normal，font-weight设置为400。

### 生成精灵图的网站
https://www.toptal.com/developers/css/sprite-generator











### 遇到的问题
在导入字体图标的时候，出了一点小问题，不管用类选择器还是svg的方式都无法显示，最终
的解决办法是导入了.ttf文件，并在html文件中引入字体文件，然后才是选择CSS或者svg格式的
引入。

















