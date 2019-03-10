// Angular  中的服务

/* 
    一、服务的作用

    Angular中如果一个组件想要用另一个组件的方法或者属性，是不能够直接用的，
    也就是说组件之间的数据和方法是相互隔离的，那么我们要在不同的组件用相同的方法，
    或者数据怎么办呢？这里就用到服务，服务为我们统一管理数据和方法，当哪个组件需要时，
    引入这个服务，然后调用里面的数据或者组件即可；

    二、创建服务命令

    ng g s 服务名字

    创建指定目录下面
    ng g s 目录名/服务名字

    三、app.module.ts里引入创建的服务

    // 引入并配置服务
    import { StoreService } from './services/store.service';

    四、在用到的地方引入服务

*/