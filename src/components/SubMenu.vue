<template>
  <div>
    <el-submenu :index="item.href" v-if="item.children && item.children.length>0">
      <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
      <template v-for="child in item.children">
        <sub-menu v-if="child.children && child.children.length>0" :param="child"></sub-menu>
        <el-menu-item :index="child.href" v-else><i :class="child.icon"></i>{{child.name}}</el-menu-item>
      </template>
    </el-submenu>
    <el-menu-item :index="item.href" v-else><i :class="item.icon"></i>{{item.name}}</el-menu-item>
  </div>
</template>
<script>
  export default {
    name: 'subMenu',
    props: ['param'],
    data () {
      return {
        item: this.param
      }
    },
    created () {
    },
    methods: {},
    components: {},
    filters: {}
  }
</script>
<style scoped>
  .el-menu .fa {
    margin-right: 10px;
  }
</style>
