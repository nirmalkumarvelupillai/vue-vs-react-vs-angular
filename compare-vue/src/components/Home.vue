<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{heading}}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtile is-4">{{subheading}}</h2>
          </div>
          <a href="" class="button is-primary" id="learn">Read More</a>
        </div>
      </div>
    </section>
  
    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-bolt is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title">
              <strong>We provider quality product services to grow your bussiness with low cost</strong>
            </p>
          </div>
          <div class="column">
            <p>
              <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at suscipit purus. </strong>
            </p>
          </div>
        </div>
      </div>
      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“We are growing as fast with poomugam product services. Quality at its first place.”</p>
              <p class="subtitle">- Gary Simon</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“We are growing as fast with poomugam product services. Quality at its first place.”</p>
              <p class="subtitle">- Gary Simon</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“We are growing as fast with poomugam product services. Quality at its first place.”</p>
              <p class="subtitle">- Gary Simon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    heading: 'Digital Innovation Master',
    subheading: 'However it was a lion. Gluten. Not just my sorrow, carrots easy to put passengers. For, not to the supreme ends of. The refinancing. Clinical it is now. Volleyball court football macro developer need Vulputate'
  })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import '../mq'

  .hero
    background-color : #42BEDB
    background-size : cover

    .title
      +mobile
        font-weight : bold
      +tablet
        font-size : 2.5rem
      +desktop
        font-size : 4rem
        margin-top : 2rem
  h2
    margin : 1.5rem 0 2rem 0 !important

  .fa-bolt
    font-size : 60px
    color: $primary
  
  #learn
    +desktop
      margin-bottom : 2rem

  .pd
    margin-bottom: 1.5rem
    +tablet-only
      padding : 2em 0

</style>
