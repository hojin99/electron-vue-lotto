<template>
  <div>
    Games : <input type="number" v-model="nums">
    <lotto-gen v-for="num in nums" :key="num"></lotto-gen>
  </div>
</template>

<script>
import LottoGen from './LottoGen.vue'

export default {
  components: {
    LottoGen
  },
  props: {
  },
  data () {
    return {
      nums: 5
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
