<template>
  <div>
     <van-tabbar v-model="active" active-color="#ff5f16" @change='link'>
        <van-tabbar-item><van-icon class-prefix="iconfont icon-dianying" slot="icon" size="1.5rem"/><span>电影</span></van-tabbar-item>
        <van-tabbar-item><van-icon class-prefix="iconfont icon-yingyuan" slot="icon" size="1.5rem"/><span>影院</span></van-tabbar-item>
        <!-- <van-tabbar-item><van-icon class-prefix="iconfont icon-mianshou" slot="icon" size="1.5rem"/><span>资讯</span></van-tabbar-item> -->
        <van-tabbar-item><van-icon class-prefix="iconfont icon-wode" slot="icon" size="1.5rem"/><span>我的</span></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
    import { Tabbar, TabbarItem, Icon} from 'vant';
    import '@/assets/icon/iconfont.css'
    Vue.use(Tabbar);
    Vue.use(Icon);
    Vue.use(TabbarItem);
    export default {
        data() {
            return {
                active: 0,
                uri:["/films/NowPlaying", "/cinemas", "/center"]
            };
        },
        created(){
        // this.$http.get(rui.getCites).then(ret => {console.log(...ret.data.cities)})

        this.active = this.uri.indexOf(this.$route.path) > -1 ? this.uri.indexOf(this.$route.path) : 0
        },
        methods:{
            link(th){
                this.$router.push(this.uri[th])
            }
        }
    }
</script>
