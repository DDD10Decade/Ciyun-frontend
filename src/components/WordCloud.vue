<template>
    <div class="common-layout bgimg">
        <el-container class="" style="padding: 40px">
            <el-header class="card-img-top" style="color: white;font-size: 50px;">
                <strong>词云</strong>
            </el-header>
            <div id="word-text-area" style="width: 70%;margin: auto;padding: 40px">
                <el-input type="textarea" :autosize="{minRows:6,maxRows:8}" placeholder="请输入内容"
                          v-model="textarea" name="word"></el-input>
            </div>
        </el-container>
        <el-container v-if="pic">
            <div id="word-img" style="margin: auto">
                <el-image :src="'data:image/png;base64,'+pic " :fit="fit">
                    <div class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
        </el-container>
        <el-container>
            <div id="word-operation" style="margin: auto">
                <el-row>
                    <el-button type="primary" plain @click="onSubmit" round
                               style="margin: auto" :icon="Select">
                        生成词云
                    </el-button>
                    <div style="width: 60px"></div>
                    <el-button type="success" plain @click="onDownload" round
                               style="margin: auto" :icon="Download">
                        下载图片
                    </el-button>
                </el-row>
            </div>
        </el-container>
    </div>
</template>
<script>
import {Download, Select} from "@element-plus/icons-vue";

export default {
    name: "WordCloud",
    computed: {
        Download() {
            return Download
        },
        Select() {
            return Select
        }
    },
    data() {
        return {
            word: "",
            textarea: '',
            pic: "",
            pageTitle: "Flask Vue Word Cloud"
        }
    },
    methods: {
        onSubmit() {
            var param = {
                "word": this.textarea
            }
            this.$axios.post("/word/generate", param).then(
                res => {
                    this.pic = res.data
                    console.log(res.data)
                }
            ).catch(res => {
                console.log(res.data.res)
            })
        },
        onDownload() {
            const imgUrl = 'data:image/png;base64,' + this.pic
            const a = document.createElement('a')
            a.href = imgUrl
            a.setAttribute('download', 'word-cloud')
            a.click()
        }
    }
}
</script>
<style>
.bgimg {
    background-image: url("../assets/bg.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    padding: 0;
}
</style>