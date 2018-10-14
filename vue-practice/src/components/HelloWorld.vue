<template>
  <div class="drinks">
      <h3>{{title}}</h3>
      <ul>
        <li  v-for="(item, index) in drinkList"
             v-bind:key="index">
          <p>{{item.name}}</p>
          <p>Y: {{item.price}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      title: '饮料集市',
      drinkList: [{
        name: '红牛',
        price: '5'
      }, {
        name: 'cockcola',
        price: '2.5'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
