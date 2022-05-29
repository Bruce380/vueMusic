<template>
    <div class="top-container">
        <div class="left-box">
            <!-- 返回主页/最小化/最大化图标 -->
            <div class="icon-wrapper">
                <span class="iconfont icon-shouye"></span>
                <span class="iconfont icon-shousuo"></span>
                <span class="iconfont icon-fangda"></span>
            </div>

            <!-- 返回/向前按键 -->
            <div class="history-wrapper">
                <span class="iconfont icon-qianjin"></span>
                <span class="iconfont icon-houtui"></span>
            </div>
        </div>

            <!-- 搜索窗口 -->
        <div class="right-box">
            <div class="el-input el-input--small el-input--prefix">
                <!-- 搜索框 -->
                <input type="text" 
                    placeholder="请输入你想听的歌曲" 
                    class="el-input__inner" 
                    v-model="inputValue" 
                    @keyup.enter="toResult">
                <span class="el-input__prefix">
                    <i class="el-input__icon el-icon-search"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>


export default{
    name:'top',
    data(){
        return{
            // 输入的内容
            inputValue:''
        }
    },
    methods:{
        toResult(){
            // 判断为空
            if(this.inputValue==''){
                this.$message.warning("请输入您想搜索的歌曲")
            }else{
                // 携带数据到搜索页
                this.$router.push('/result?q='+this.inputValue)
            }
        }
    }
}
</script>


<style scoped>

</style>