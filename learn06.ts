// 6.Angular父子组件以及组件之间通讯

/* 
    一、父组件给子组件传值-@input
    父组件不仅可以给子组件传递简单的数据，还可以吧自己的方法以及整个父组件传给子组件

    1.父组件调用子组件的时候传递数据
    2.子组件引入input模块
    3.子组件中@input接受父组件传过来的数据

    二、子组件通过-@output触发父组件方法传值

    1.子组件引入output和EventEmitter
    2.子组件中实例化EventEmitter
    3.子组件通过EventEmitter对象output实例广播数据
    4.父组件调用子组件的时候，定义接收事件，outer就是子组件的EventEmitter对象outer
    5.父组件接收到数据会调用自己的runParent方法，这个时候就能拿到子组件的数据

    三、非父子组件传值

    1.localstorge来实现非父子组件的通信
    2.服务实现非父子组件的通信
*/