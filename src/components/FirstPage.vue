<template>
  <div class="hello">
    <h1>Welcome to FirstPage</h1>
    <button @click="reduceCount"> -</button>
    <span>{{currentCount}}</span>
    <button @click="addCount"> +</button>
    <div v-if="false">
      <input v-model="msg"/>
      <button @click="saveMsg(msg)">Save Msg</button>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  import Second from './SecondPage'

  export default {
    name: 'FirstPage',
    data() {
      return {
        msg: 'Message from FirstPage',

      }
    },
    methods: {
      addCount() {
        this.add();
      },
      reduceCount() {
        this.reduce();
      },
      saveMsg(msg) {
        this.setMsg(msg);
      },
      ...mapMutations({
        add: 'ADD',
        reduce: 'REDUCE',
        setMsg: 'SET_MSG'
      })

    },
    computed: {
      ...mapGetters([
        'currentCount'
      ])
    },
    components: {
      Second
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
