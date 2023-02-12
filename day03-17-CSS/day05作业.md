## 一. 写出案例，证明CSS属性的继承性
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box2 {
      margin: 10px auto;
      background-color: #f40;
    }
    
  </style>
</head>
<body>
  <div class="box-cab">我有一颗白菜，I have a cabbage</div>
  <div class="box1">i am a div element，试试中文会有什么效果</div>
  <div class="box2">
    <div id="box-one">
      <span class="demo">你好，世界</span>好好学习，天天向上。
    </div>
    <a class="a1" href="https://www.taobao.com">淘宝一下</a>
    <a class="a2" href="https://www.baidu.com">百度一下</a>
    <a class="a3" href="https://www.jd.com">京东一下</a>
    <a class="a4" href="https://www.mi.com">进入小米</a>
  </div>
  <input class="box-one" type="text">

</body>
</html>
```
## 二. 写出案例，证明CSS属性的层叠性
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box2 {
      margin: 10px auto;
      background-color: #f40;
    }
    .box3 {
      margin: 100px;
    }
  </style>
</head>
<body>
  <div class="box-cab">我有一颗白菜，I have a cabbage</div>
  <div class="box1">i am a div element，试试中文会有什么效果</div>
  <div class="box2">
    <div class="box3" id="box-one">
      <span class="demo">你好，世界</span>好好学习，天天向上。
    </div>
    <a class="a1" href="https://www.taobao.com">淘宝一下</a>
    <a class="a2" href="https://www.baidu.com">百度一下</a>
    <a class="a3" href="https://www.jd.com">京东一下</a>
    <a class="a4" href="https://www.mi.com">进入小米</a>
  </div>
  <input class="box-one" type="text">

</body>
</html>
```

## 三. 默写出display常见的值，并且说出对应的特性，并且写出测试案例
```html
      display: block; 块级元素
      display: inline; 行内级
      display: inline-block; 行内块级
      display: none; 不显示
```

## 四. 总结元素隐藏的方法，并且说出他们的区别
```html
      display: none;
      该方法可以让元素隐藏，并且不占据空间。
      opacity: 0;
      该方法让元素隐藏，但是元素的位置还在
```

## 五. 说说你对margin的传递和折叠的理解



## 六. 块级元素在设置padding/border的上下时，有什么特殊的地方？



## 七. 进行下面的案例练习

* 可以先不做两行显示不全的...
* 可以先不做评论的靠右内容

![image-20220330230100029](https://tva1.sinaimg.cn/large/e6c9d24egy1h0sb01sx1yj207p09ydfw.jpg)