<template lang="html">
    <div class="index-container">
    <!-- 导航区域 -->
    <div class="nav">
        <ul>
            <li>
                <router-link to="/discovery">
                    <span class="iconfont icon-tubiaozhizuomobanyihuifu-">
                        发现音乐
                    </span>
                </router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/playlists">
                    <span class="iconfont icon-yinlegedan-">
                        推荐歌单
                    </span>
                </router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/songs">
                    <span class="iconfont icon-zuixinchanpin">
                        最新音乐
                    </span>
                </router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/mvs">
                    <span class="iconfont icon-chakanMV">
                        最新MV
                    </span>
                </router-link>
            </li>
        </ul>
    </div>

    <!-- 主体区域_路由跳转展示 -->
    <div class="main">
        <router-view></router-view>
    </div>

    <!-- 播放标签 -->
    <div class="player">
        <audio :src='musicUrl' controls autoplay loop></audio>
    </div>
    </div>
</template>

<script>
export default{
    name:'index',
    data(){
        return{
            musicUrl:"http://m7.music.126.net/20200303182550/8aa5971b1630d1527a922ccd2b97f392/ymusic/035d/0109/520e/478f86cc9f6c6539f7c8ed3e06c1bf8e.mp3"
        }
    }
}
</script>

<style lang="css">
</style>