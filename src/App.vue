<template>
    <div class="comment-layout">
        <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
            <el-menu-item>
                <router-link to="/index">
                    <MostlyCloudy class="" style="width: 50px;height: 60px"></MostlyCloudy>
                    index
                </router-link>
            </el-menu-item>
            <el-menu-item>
                <router-link to="/about">
                    <Cloudy class="" style="width: 50px;height: 60px"></Cloudy>
                    About
                </router-link>
            </el-menu-item>
        </el-menu>
    </div>
    <router-view/><hello-world></hello-world>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import {Cloudy, MostlyCloudy} from "@element-plus/icons-vue";

export default {
    name: "App",
    components: {
        Cloudy,
        MostlyCloudy,
        HelloWorld
    }
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
