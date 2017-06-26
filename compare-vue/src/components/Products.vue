<template>
  <div class="products">
    <div class="container">
      <div class="section">
        <h1 class="title">test</h1>
        <h2 class="subtitle is-4">test</h2>
        <div class="columns">
          <div class="column is-one-third" v-for="product in products" :key="product.id">
            <div class="card">
              <div class="card-content">
                <p class="title">{{product.title}}</p>
                <p class="answer">{{product.body}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'products',
  data: () => ({
    products: [{
      id: '001',
      title: 'title',
      body: 'body'
    }],
    errors: []
  }),
  created () {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log('response.data', response.data, this)
        this.products = response.data.slice(0, 10)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.pd 
  padding : 2.5rem 0 1.5rem 0
.card
  min-height: 350px
  max-height: 350px
.answer
  margin-top:10px !important
  color:gray

.columns
  flex-wrap : wrap


</style>
