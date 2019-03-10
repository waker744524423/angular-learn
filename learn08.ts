// 8.Rxjs异步数据流变成-Rxjs快速入门教程

/* 
    一、Rxjs介绍

    Rxjs是ReactiveX变成理念的js版本。ReactiveX来自微软，他是一种针对异步数据流的变成。简单来说，它将一切数据，
    包括http请求，DOM事件或者普通数据等包装成流的形式，然后用强大丰富的操作符对流进行处理，
    使你能以同步变成的方式处理异步数据，并组合不同的操作符来轻松优雅的实现你所需要的功能。

    Rxjs是一种针对异步数据流变成工具，或者叫响应式扩展变成：可不管如何结石Rxjs其目标就是异步变成，Angular引入Rxjs为了就是让异步可控、更简单。

    Rxjs里面提供了很多模块。这里我们主要给大家讲Rxjs里面最常用的Observable和fromEvent；

    1.目前常见的异步编程的几种方法

        1、回调函数
        2、事件监听、发布订阅
        3、Promise
        4、Rxjs

    二、Promise和Rxjs处理异步对比

    从上面例子可以看到Rxjs和Promise的基本用法非常类似，除了一些关键词不同。
    Promise里面用的是then()和resolve(),Rxjs用的是next()和subscribe()。
    从上面例子我们感觉Promise和Rxjs的用法基本类似。其实Rxjs相比Promise要强大很多，
    比如Rxjs中可以中途撤回、Rxjs可以发射多个值、Rxjs提供了多重工具函数等等。

    三、Rxjs unsubscribe取消订阅

    Promise的创建之后，动作是无法撤回的。Observable不一样，动作可以通过unsubscribe()方法中途撤回，
    而且Observable在内部做了只能的处理

    四、Rxjs订阅后多次执行

    如果我们想让异步里面的方法多次执行，比如下面代码

    这一点Promise是做不到的，对于Promise来说，最终结果要么resolve、要么reject，而且都只能触发一次。
    如果在同一个Promise对象上多次调用resolve方法，则会抛出异常。而Observable不一样，他可以不断触发下一个值，
    就像next()这个方法的名字所暗示的那样。

    五、Angular6.x之前使用Rxjs的工具函数map filter

    注意：Angular6以后使用以前的rxjs方法，必须安装rxjs-compat模块才可以使用map、filter方法。

        Angular6后官方使用的是rxjs6的新特性，所以官方给出了一个可以暂时延缓我们不需要修改rxjs代码的方法。
        npm install rxjs-compat
        
        import {Observable} from 'rxjs';
        import 'rxjs/Rx';
    
    六、Angular6.x以后Rxjs6.x的变化以及使用

    rxjs6改变包的解构，主要变化在import方式和operator上面以及使用pipe()

    import {Observable} from 'rxjs';
    import {map,filter} from 'rxjs/operators';
    


    
*/