<template>
  <div class="cardRow">
    {{userData}}
    <car-list :item="dataJS.data[index]" class="cardDizilim" v-for="(i,index) in dataJS.data.length":key="index"/>
  </div>
</template>

<script>
import CarList from "../components/CarList"
import dataJS from "../assets/datas.json"
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
        ['Toros', 'About car...',1500],
        dataJS : dataJS
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