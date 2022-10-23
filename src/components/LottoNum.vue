<template>
    <div class="hj-lotto-num-box">
        <div class="hj-lotto-num">
            <font-awesome-icon :icon="'fa-solid fa-' + num[0]" class="hj-lotto-num-icon" />
        </div>
        <div class="hj-lotto-num">
            <font-awesome-icon :icon="'fa-solid fa-' + num[1]" class="hj-lotto-num-icon" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'LottoNum',
  props: {
    num: []
  }
}
</script>

<style lang="scss" scoped>

.hj-lotto-num-box {
    width: 80px;
    height: 50px;
    display: flex;
    flex-flow: row;
    border: 2px solid #aaa;

    > .hj-lotto-num {
        background-color: rgb(247, 242, 242);
        width: 40px;
        height: 50px;
        > .hj-lotto-num-icon {
            height:30px;
            margin-top: 10px;
        }
    }
}

</style>
