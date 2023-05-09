<template>
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false"
             style="background-color: #a0cfff;padding: 0;margin: auto;width: 100%;height: 100%">
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
    <el-main>
        <router-view/>
        <hello-world></hello-world>
    </el-main>
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

el-menu {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
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
