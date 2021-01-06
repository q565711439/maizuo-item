<template>
    <div>
        <Hander></Hander>
        <router-view></router-view> 
    </div>
</template>

<script>
    import Hander from '@/components/Hander'
    export default {
        components:{
            Hander
        }
    }
</script>
