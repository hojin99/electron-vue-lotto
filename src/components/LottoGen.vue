<template>
  <div>
    <div class="hj-lotto-num-area">
      <lotto-num :num="numList[0]"></lotto-num>
      <lotto-num :num="numList[1]"></lotto-num>
      <lotto-num :num="numList[2]"></lotto-num>
      <lotto-num :num="numList[3]"></lotto-num>
      <lotto-num :num="numList[4]"></lotto-num>
      <lotto-num :num="numList[5]"></lotto-num>
    </div>
    <button @click="startLottoNum ()" :disabled="isRunning">Start</button>
  </div>
</template>

<script>
import LottoNum from './LottoNum.vue'

export default {
  name: 'LottoGen',
  components: {
    LottoNum: LottoNum
  },
  data () {
    return {
      isRunning: false,
      currentStep: 0,
      numList: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.numList = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    },
    async startLottoNum () {
      this.isRunning = true
      this.init()

      for (let i = 0; i < 6; i++) {
        this.currentStep = i

        await this.animateNum()
        console.log(`step:${i}`)

        while (true) {
          this.setNum(i)
          if (!this.checkDup(i)) break
          console.log('dup')
        }
      }

      this.isRunning = false
    },
    animateNum () {
      return new Promise((resolve) => setTimeout(() => resolve(), 500))
    },
    setNum (step) {
      this.numList[step][0] = Math.round(Math.random() * 4)

      if (this.numList[step][0] === 0) {
        this.numList[step][1] = Math.round(Math.random() * 8) + 1
      } else if (this.numList[step][0] === 4) {
        this.numList[step][1] = Math.round(Math.random() * 5)
      } else {
        this.numList[step][1] = Math.round(Math.random() * 9)
      }
    },
    checkDup (step) {
      let ret = false
      const stepNum = this.numList[step]

      this.numList.forEach((value, index) => {
        // console.log(stepNum)
        // console.log(value)
        // console.log(index)
        // console.log(stepNum === value)

        if (index < step && stepNum[0] === value[0] && stepNum[1] === value[1]) {
          ret = true
          return false
        }
      })
      return ret
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .hj-lotto-num-area {
    margin: 30px;
    display: flex;
    flex-flow: row;
  }

</style>
