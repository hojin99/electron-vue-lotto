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
      isRunning: false, // 번호 생성 중 여부 (번호 생성 중일 경우 start 버튼 비활성화)
      currentStep: 0, // 번호 생성 Step (0~5)
      numList: [] // 번호 목록 [6][2], 2자리 번호가 총 6개
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
      this.isRunning = true // 번호 생성 여부 true
      this.init() // 번호 초기화

      for (let i = 0; i < 6; i++) {
        this.currentStep = i

        await this.animateNum() // 잠시 멈춤 처리 (추후 필요 시 애니메이션 처리)
        console.log(`step:${i}`)

        while (true) {
          this.setNum(i) // 현재 step 번호 생성
          if (!this.checkDup(i)) break // 이전 step에 동일 번호가 없으면 중지
          console.log('dup')
        }
      }

      this.isRunning = false // 번호 생성 여부 false
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
