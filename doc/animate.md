实现转场动画

计划3中动画
- 同级 fade
- 父子 right-left
- 子父 left-right

实现原理：
根据路由path的层级做判断
to from

translate 的 mode 属性，有两个值 out-in in-out，默认是同时
可以使用这个属性来增强体验
例如：
打开子页面的时候，可以使用in-out，用来表达新加入了一个页面
离开子页面时，使用out-in，表达页面被关闭了