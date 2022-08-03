<template>
  <div class="cardRow">
    {{userData}}
    <car-list :item="item" class="cardDizilim" v-for="i in 20":key="i"/>
  </div>
</template>

<script>
import CarList from "../components/CarList"
export default {
  components: {
    CarList
  },
  props:{
  userData: Array
  },
  data(){
    return{
      item:
        ['Toros', 'About car...',1500]
    }
  }
}
</script>


<style>
  .cardRow{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cardDizilim{
    margin-left: 25px;
    padding: 25px;
  }
</style>