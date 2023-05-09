<template>
    <div class="common-layout">
        <el-container>
            <el-header>小词云</el-header>
            <div id="word-text-area" style="width: 70%;margin: auto">
                <el-input type="textarea" :autosize="{minRows:4,maxRows:4}" placeholder="请输入内容"
                          v-model="textarea"></el-input>
            </div>
        </el-container>
        <el-container>
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
                    <el-button type="primary" plain @click="onSubmit" round :icon="Select" style="margin: auto">
                        生成词云
                    </el-button>
                    <div style="width: 60px"></div>
                    <el-button type="success" plain @click="onDownload" round :icon="Download" style="margin: auto">
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
            textarea: "",
            pic: "",
            pageTitle: "Flask Vue Word Cloud"
        }
    },
    methods: {
        onSubmit() {
            var param = {
                "word": this.textarea
            }
            this.axios.post("/word/generate", param).then(
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

</style>