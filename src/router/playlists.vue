<template lang="html">
    <div class="">
        <div class="playlists-container">
            <!-- 顶部音乐卡片 -->
            <div class="top-card">
                <div class="icon-wrap">
                    <img :src="topList.coverImgUrl" alt="">
                </div>
                <div class="content-wrap">
                    <div class="tag">精品歌单</div>
                    <!-- 标题 -->
                    <div class="tilte">{{topList.name}}</div>
                    <!-- 简介 -->
                    <div class="info">{{topList.description}}</div>
                </div>
                <!-- 背景图片 -->
                <img :src="topList.coverImgUrl" alt="" class="bg">
                <div class="bg-mask"></div>
            </div>

            <!-- 导航栏 -->
            <div class="tab-container">
                <!-- 歌单类别 -->
                <div class="tab-bar">
                    <span class="item" :class="{active:tag=='全部'}" @click="tag='全部'">全部</span>
                    <span class="item" :class="{active:tag=='欧美'}" @click="tag='欧美'">欧美</span>
                    <span class="item" :class="{active:tag=='华语'}" @click="tag='华语'">华语</span>
                    <span class="item" :class="{active:tag=='流行'}" @click="tag='流行'">流行</span>
                    <span class="item" :class="{active:tag=='说唱'}" @click="tag='说唱'">说唱</span>
                    <span class="item" :class="{active:tag=='摇滚'}" @click="tag='摇滚'">摇滚</span>
                    <span class="item" :class="{active:tag=='民谣'}" @click="tag='民谣'">民谣</span>
                    <span class="item" :class="{active:tag=='电子'}" @click="tag='电子'">电子</span>
                    <span class="item" :class="{active:tag=='轻音乐'}" @click="tag='轻音乐'">轻音乐</span>
                    <span class="item" :class="{active:tag=='影视原声'}" @click="tag='影视原声'">影视原声</span>
                    <span class="item" :class="{active:tag=='ACG'}" @click="tag='ACG'">ACG</span>
                    <span class="item" :class="{active:tag=='怀旧'}" @click="tag='怀旧'">怀旧</span>
                    <span class="item" :class="{active:tag=='治愈'}" @click="tag='治愈'">治愈</span>
                    <span class="item" :class="{active:tag=='旅行'}" @click="tag='旅行'">旅行</span>
                </div>

                <!-- 歌单内容 -->
                <div class="tab-content">
                    <div class="items">
                        <div class="item" v-for="(item,index) in list" :key="index">
                            <div class="img-wrap" @click="toPlaylist(item.id)">
                                <div class="num-wrap">播放量：<span class="num">{{item.playCount}}</span></div>
                                <img :src="item.coverImgUrl" alt="">
                                <span class="iconfont icon-play"></span>
                            </div>
                            <p class="name">{{item.name}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 分页器 -->
            <el-pagination
                :small="small"
                :disabled="disabled"
                background
                layout="prev, pager, next, jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name:'recommend',
    data(){
        return{
            total:0,
            page:1,
            // 顶部歌单
            topList: [],
            // 歌单列表
            list:[],
            // 当前选择的数据
            tag:'全部'
        }
    },
    // 设置监听器
    watch:{
        tag(){
            this.topData()
            this.listData()
            this.page=1
        }
        
    },
    created(){
        // 顶部精品歌单
        this.topData()

        // 歌单列表
        this.listData()
    },
    methods:{
        // 顶部数据
        topData() {
            axios({
                url: 'https://autumnfish.cn/top/playlist/highquality',
                method: 'get',
                params: {
                    limit: 1,
                    // 分类数据
                    cat: this.tag
                }
            }).then(res => {
                // console.log(res)
                this.topList = res.data.playlists[0]
            })
        },
    //   列表数据
        listData(){
            axios({
                url: 'https://autumnfish.cn/top/playlist/',
                method: 'get',
                params: {
                    // 限制每页歌单为10条
                    limit: 15,
                    // 起始的值 （页码-1）*每页多少条数据
                    offset: (this.page - 1) * 10,
                    // 分类数据
                    cat: this.tag
                }
            }).then(res => {
                // console.log(res)
                // 保存总条数
                this.total = res.data.total
                // 保存数据
                this.list = res.data.playlists
            })
        },
        toPlaylist(id){
            this.$router.push(`/playlist?q=${id}`)
        },
        handleCurrentChange(val){
            // console.log(val);
            this.page=val
            this.listData()
        }
    }
}
</script>

<style lang="css">
</style>