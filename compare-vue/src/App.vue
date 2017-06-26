<template>
  <div id="app">
  
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a href="" class="nav-item">POOMUGAM</a>
        </div>
  
        <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{'is-active':isActive}">
          <span></span>
          <span></span>
          <span></span>
        </span>
  
        <div class="nav-right nav-menu" v-bind:class="{'is-active':isActive}">
  
          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="/products" class="nav-item r-item">Products</router-link>
          <router-link to="/" class="nav-item r-item">About</router-link>
          <router-link to="/" class="nav-item r-item">Contact</router-link>
  
          <div class="nav-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-rss"></i>
                </span>
                <span>Blog</span>
              </a>
            </p>
          </div>
  
        </div>
  
      </div>
    </div>
  
    <router-view></router-view>
  
    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>Service at first in footer.</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="icon" href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    isActive: false
  }),
  methods: {
    toggleNav: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

body
  font-family : Verdana, Geneva, sans-serif
.nav
  background-color : #163A4A
  a:hover
    color: $primary

.nav-left a 
  color: #fff
  font-weight:bold

.nav-toggle span
  background-color:#95989A

a.r-item 
  color: #C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color:gray
    &:hover
      background-color:#F1F1F1

.footer
  background-color : #163A4A
  color: #fff

  .icon
    color:#fff
    margin-left: 20px

</style>
