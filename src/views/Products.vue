<template>
  <div class="cardRow">
    <car-list :item="item" class="cardDizilim" v-for="i in 20":key="i"/>
  </div>
</template>

<script>
import CarList from "../components/CarList"
export default {
  components: {
    CarList
  },
  data(){
    return{
      item:
        ['Toros', 'About car...',250]
    }
  }
}
</script>


<style>
  .cardRow{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
  }
  .cardDizilim{
    margin-left: 25px;
    padding: 25px;
  }
</style>