<template>
  <header class="main-header animated">
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">&nbsp;&nbsp; <b>Vue-Admin</b></span>
    </a>
    <nav class="navbar navbar-static-top">
      <a><i class="fa fa-menu"></i></a>
    </nav>
  </header>
</template>
<script>
  export default {
    data () {
      return {}
    },
    created () {
    },
    methods: {},
    components: {},
    filters: {}
  }
</script>
<style scoped>
  .animated {
    animation-duration: .5s;
  }

  .main-header a {
    text-decoration: none;
  }

  .main-header {
    position: fixed;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    z-index: 1030;
    animation-name: slideInDown;
    animation-fill-mode: both;
  }

  .main-header .logo {
    -webkit-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 300;
    overflow: hidden;
    text-decoration: none;
  }

  .main-header .logo .logo-lg {
    display: block;
    /*background-image: url("../../../static/img/foot_icon.png");*/
    background-repeat: no-repeat;
    background-position: 15px -6px;
    height: 38px;
    line-height: 38px;
    margin-top: 6px;
  }

  .main-header .navbar {
    -webkit-transition: margin-left 0.3s ease-in-out;
    -o-transition: margin-left 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out;
    margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;
  }

  .main-header .navbar {
    background-color: #3c8dbc;
  }

  .main-header .logo {
    background-color: #367fa9;
    color: #ffffff;
    border-bottom: 0 solid transparent;
  }

  .main-header .logo:hover {
    background-color: #357ca5;
  }
</style>
