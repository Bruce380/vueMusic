<template>
    <div class="songs-container">
        <!-- 导航栏 -->
        <div class="tab-bar">
            <span class="item" @click="tag=0" :class="{active:tag==0}">全部</span>
            <span class="item" @click="tag=7" :class="{active:tag==7}">华语</span>
            <span class="item" @click="tag=96" :class="{active:tag==96}">欧美</span>
            <span class="item" @click="tag=8" :class="{active:tag==8}">日本</span>
            <span class="item" @click="tag=16" :class="{active:tag==16}">韩国</span>
        </div>

        <!-- 歌曲列表 -->
        <table class="el-table playlit-table">
            <thead>
                <th></th>
                <th></th>
                <th>音乐标题</th>
                <th>歌手</th>
                <th>专辑</th>
                <th>时长</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in lists" :key="index" class="el-table__row">
                    <td>{{index+1}}</td>
                    <td>
                        <div class="img-wrap" @click="playMusic(item.id)">
                            <img :src="item.album.picUrl" alt="">
                            <span class="iconfont icon-play"></span>
                        </div>
                    </td>
                    <td>
                        <div class="song-wrap">
                            <div class="name-wrap">
                                <span>{{item.name}}</span>
                                <span class="iconfont icon-mv"></span>
                            </div>
                        </div>
                    </td>
                    <td>{{item.album.artists['0'].name}}</td>
                    <td>{{item.album.name}}</td>
                    <td>{{item.duration}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name:'songs',
    data(){
        return{
            // 歌单列表
            lists:[],
            // 歌单分类
            tag:'0'
        }
    },
    watch:{
        tag(){
            this.getList()
        }
    },
    created(){
        this.getList()
    },
    methods:{
        // 获取歌单列表
        getList(){
            axios({
                url:'https://autumnfish.cn/top/song',
                method:'get',
                params:{
                    // 传递设置的数据
                    type:this.tag
                }
            }).then(res=>{
                // console.log(res);
                this.lists=res.data.data
                // 将毫秒转化成分/秒
                for (let i = 0; i < this.lists.length; i++) {
                    // 获取到总毫秒
                    let duration=this.lists[i].duration
                    // 假定 	350750 毫秒
                    // 秒 350750/1000  350秒
                    // 分 350 /60
                    // 秒 350 % 60
                    let min=parseInt(duration/1000/60)
                    if (min < 10) {
                        min = '0' + min
                    }
                    let sec=parseInt((duration/1000)%60)
                    if (sec < 10) {
                        sec = '0' + sec
                    }
                    // console.log(min + '|' + sec)
                    this.lists[i].duration = `${min}:${sec}`
                }
            })
        },
        playMusic(id){
            axios({
                url:'https://autumnfish.cn/song/url',
                method:'get',
                params:{
                    id
                }
            }).then(res=>{
                let url=res.data.data[0].url
                // 获取父组件设置播放地址
                this.$parent.musicUrl=url
            })
        }
    }
}
</script>

<style>
</style>