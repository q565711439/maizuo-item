<template>
    <div class='top'>
        <van-tabs @click="onClick" v-model="active">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>


<script>

import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
// import { Toast } from 'vant';

export default {
    data() {
        return{
            active:0,
            uri:['/films/NowPlaying','/films/ComingSoon']
        }
    },
    created(){
        this.active = this.uri.indexOf(this.$route.path) > -1 ? this.uri.indexOf(this.$route.path) : 0
    },
    methods: {
        onClick(index) {
            this.$router.push(this.uri[index])
        },
    },
};
</script>
