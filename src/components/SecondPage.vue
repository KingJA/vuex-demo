<template>
  <div>
    <h1>Welcome to SecondPage</h1>
    <span>Msg:</span><span>{{msg}}</span>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    name: "second",
    computed: {
      ...mapGetters([
        'msg'
      ])
    }
  }
</script>

<style >

</style>
