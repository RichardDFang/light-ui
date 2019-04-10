import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../main';
import DemoCell from '../test/cell';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App
        }, {
            path: '/test/cell',
            component: DemoCell
        }
    ]
});