<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <div class="grid-content ">

        </div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="9">
        <div class="grid-content ">

        </div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="9">
        <div class="grid-content ">

        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <div class="grid-content ">
          <router-link to="/"><span>首页</span></router-link>
          <router-link to="/blogs">文章</router-link>
          <router-link to="/tools">工具</router-link>
        </div>
      </el-col>
    </el-row>



    <!--路由显示-->
    <router-view/>
    <!--页脚-->
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/components/foot'
export default {
  name: 'index',
  components: {
    foot
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
