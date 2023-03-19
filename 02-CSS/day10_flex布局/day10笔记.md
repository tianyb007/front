### 认识flexbox
Flexbox翻译为弹性盒子：
弹性盒子是一种用于按行或按列布局元素的**一维布局**方法；
元素可以膨胀以填充额外的空间，收缩以适应更小的空间：
通常我们使用Flexbox来进行布局的方案称之为flex布局(flex layout):


flex布局是目前web开发中使用最多的布局方案：
flex布局(Flexible)布局(弹性布局）：
目前特别在移动端可以说已经完全普及：
在PC端也几乎已经完全普及和使用，只有非常少数的网站依然在用浮动来布局；

### flex布局的重要概念
两个重要的概念：
  开启了flex布局的元素叫flex container
  flex container里面的直接子元素叫做flex item

当flex container中的子元素变成了flex item时，具备一下特点：
  flex item的布局将受flex container属性的设置来进行控制和布局：
  flex item不再严格区分块级元素和行内级元素；但是大盒子flex还是区分块级元素和行内级元素。
  flex item默认情况下是包裹内容的，但是可以设置宽度和高度：


设置display属性为flex或者inline-flex可以成为flex container
  flex:flex container以block-level形式存在
  inline-flex:flex container以inline-level形式存在



#### 应用在flex container上的CSS属性
▣flex-flow
▣flex-direction，改变主轴的方向，默认是row，反向是row-reverse，按照交叉轴的方向是column，反向是column-reverse
▣flex-wrap
▣justify-content
▣align-items
▣align-content,在有剩余空间的情况下才会用到，用的比较少。

##### fles-direction 改变主轴的方向。


#### 应用在flex items上的CSS属性
▣flex-grow
▣flex-basis
▣flex-shrink
▣order，设置item的顺序，值越小越在前面。
▣align-self
▣flex










