<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="addCount">添加</button>
    <button @click="reduceCount">减少</button>
    <p>{{count}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      addCount() {
        this.add();
      },
      reduceCount() {
        this.reduce();
      },
      ...mapMutations({
        add: 'ADD',
        reduce: 'REDUCE'
      })

    },
    computed: {
      ...mapGetters([
        'count'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
