import Vue from 'vue'
import App from './App'


// 导入 Element_ui
import ElementUI from 'element-ui'
// 导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 插件 Element-ui
Vue.use(ElementUI)

// 导入全局初始化样式
import './assets/index.css'

// 导入router路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入对应的路由
import discovery from './router/discovery.vue'
import playlists from './router/playlists.vue'
import songs from './router/songs.vue'
import mvs from './router/mvs.vue'
import result from './router/result.vue'
import playlist from './router/playlist.vue'
import mv from './router/mv.vue'

const router = new VueRouter({
    routes: [{
            // 重定位回搜索页
            path: '/',
            redirect: '/discovery'
        },
        {
            // 发现音乐
            path: '/discovery',
            component: discovery
        },
        {
            // 推荐歌单
            path: '/playlists',
            component: playlists
        },
        {
            // 推荐歌单
            path: '/playlist',
            component: playlist
        },
        {
            // 最新音乐
            path: '/songs',
            component: songs
        },
        {
            // 最新mv
            path: '/mvs',
            component: mvs
        },
        {
            // mv详情
            path: '/mv',
            component: mv
        },
        {
            // 搜索结果页
            path: '/result',
            component: result
        }
    ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})