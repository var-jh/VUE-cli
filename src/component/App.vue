<template>
  <main>
      <p>{{ msg }}</p>
  </main>
</template>

<script>
//这里vue要求我们对外暴露一个组件的配置项
// 这里应为template已经在上面独立编写了，vue-loader到时候会帮我们处理
// 配置项中不用写template
export default {
  data(){
      return {
        msg:'你好，这个世界，请对这土地上的人们给予足够的宽容与友善。'
      }
  }
}
</script>

<style>
main p{
  font-size: 18px;
  color: red;
  font-weight: 600;

}
</style>


