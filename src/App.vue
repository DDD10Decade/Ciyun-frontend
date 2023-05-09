<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="margin-top:-10px">
        <el-menu class="el-menu-demo navimg" mode="horizontal" :ellipsis="false"
                 style="padding: 0;margin: auto;width: 100%;height: 100%">
            <el-menu-item>
                <router-link to="/index" class="nav-link">
                    <MostlyCloudy class="" style="width: 50px;height: 60px"></MostlyCloudy>
                    主页
                </router-link>
            </el-menu-item>
            <el-menu-item>
                <router-link to="/about" class="nav-link">
                    <Cloudy class="" style="width: 50px;height: 60px"></Cloudy>
                    其他
                </router-link>
            </el-menu-item>
        </el-menu>
    </nav>
    <el-main style="margin-top:-25px;margin-left: -20px">
        <router-view/>
    </el-main>
</template>
<script>
import {Cloudy, MostlyCloudy} from "@element-plus/icons-vue";

export default {
    name: "App",
    components: {
        Cloudy,
        MostlyCloudy,
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
    padding: 0;
    align-items: center;
}

nav {
    padding: 0;
}

html, body {
    height: 100%;
}

.navimg {
    background: url("../src/assets/navbg.jpg") no-repeat center/cover;
//background-image: url("../src/assets/navbg.jpg"); //background-size: 100%; //background-repeat:no-repeat;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
