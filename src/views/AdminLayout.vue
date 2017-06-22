<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <page-header></page-header>
    <side-menu></side-menu>
    <div class="content-wrapper">
      <section class="content">
        <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
          <router-view></router-view>
        </transition>
        <page-footer></page-footer>
      </section>
    </div>
  </div>
</template>
<script>
  import PageHeader from '@/components/PageHeader'
  import PageFooter from '@/components/PageFooter'
  import SideMenu from '@/components/SideMenu'

  export default {
    data () {
      return {}
    },
    created () {
    },
    methods: {},
    components: {
      PageHeader,
      PageFooter,
      SideMenu
    },
    filters: {}
  }
</script>
<style scoped>
  .content-wrapper {
    -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    margin-left: 230px;
    z-index: 820;
    padding-top: 50px;
    min-height: 100%;
    z-index: 800;
  }

  .content-wrapper .content {
    padding: 1.25rem;
  }
</style>
