// 2.Angular目录解构分析、app.module.ts详解、以及Angular中创建组件、组件详解、绑定数据

/*  

    一、目录结构分析：

    e2e——在e2e下是端到端的测试文件
    node_modules——安装的第三放模块 *
    src——我们的项目的所有文件放在src中 *
        app——组件、以及app.module.ts定义根模块 *
        assets——静态资源
        environments——这个文件夹中包括每个项目环境准备的文件
        index.html——主页的html *
        main.ts——这是应用的主要入口
        polyfills.ts——填充库能帮我们把这些不同点进行标准化
        test.ts——这是测试的主要入口
        style.css——这是全局样式 *
        tsconfig.app.json——ts编译的配置文件
        tsconfig。spec.json——ts编译测试文件
        typings.d.ts——官方没有写，暂时不介绍
    .angular.cli.json——angularcli的配置文件
    .editorconfig——给你的编辑器看的一个简单配置文件
    .gitgnore——一个git的配置文件
    kama.conf.js——给kama的单元测试
    package.json——npm配置文件 *
    protarctor.conf.js——给protrator使用的端到端测试配置文件，当运行ng e2e的时候会用到
    README.md——项目的说明文档
    tsconfig.json——ts编译器配置
    tslint.json——给TSLint和Codelyzer用的配置信息	Lint功能可以帮助你保持代码风格统一

*/

/* 

    二、app.module.ts详解

    1.截图笔记  

    2.自定义组件
    ng g c components/news

    <app-news></app-news>
*/

