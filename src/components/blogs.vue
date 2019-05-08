<template>

  <div>
    <el-row>
      <el-col :span="5">
        <el-card class="card" shadow="hover">
          <el-link type="primary" :underline="false">JAVA</el-link>
        </el-card>
        <el-card class="card" shadow="hover">
          <el-link type="primary" :underline="false">JavaScript</el-link>
        </el-card>
        <el-card class="card" shadow="hover">
          <el-link type="primary" :underline="false">Linux</el-link>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div style="width: 70%;margin:0 auto;text-align:left">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
      <el-col :span="3">

      </el-col>
    </el-row>
  </div>


</template>

<script>
export default {
  name: 'blogs',
  data() {
    return{
      // dateValue: new Date()
    }
  }
}
</script>

<style scoped>
  .card {
    width: 50%;
    margin: 10px auto;
  }

</style>
