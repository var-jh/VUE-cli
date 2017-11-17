// 要把组件渲染到页面中，我们必须先导入vue这个库,然后才可以new他
// import  Vue  from "Vue";
// import App from '../component/App.vue';

// new Vue({
//     el:'#app',
//     render:function (c) {  
//         return  c (App)//这个函数需要我们返回一个组件，把返回的组件渲染到el标签中
//     }
// })

import Vue from 'Vue';
import App from '../component/App.vue';
new Vue({
    el: '#app',
    render: function (c) {
        return c(App); //这个函数需要我们返回一个组件，把返回的组件渲染到el标签中，上面要导入才能使用
    }
})