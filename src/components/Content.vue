<template>
  <div>
    <b-carousel
        id="carousel-1"
        :interval="3000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
              class="carouselSlide"
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="carouselSlide"
              src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="carouselSlide"
              src="https://images.alphacoders.com/101/thumb-1920-1012728.jpg"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>


    </b-carousel>
    <b-form class="formRent" @submit.stop.prevent>
      <label class="mr-sm-2">Pick Location</label>
      <b-form-select v-model="locationValue" :options="location" size="sm" class="mt-2"></b-form-select>
      <hr>
      <label class="mr-sm-2">Return Location</label>
      <b-form-select v-model="returnlocationValue" :options="returnlocation" size="sm" class="mt-2"></b-form-select>
      <hr>
      <label for="selectdate">Date</label>
      <div class="timeAnddate">
        <b-form-datepicker id="selectdate" v-model="pickDate" ></b-form-datepicker>
        <b-form-timepicker v-model="pickTime" locale="en"></b-form-timepicker>
      </div>
      <hr>
      <label for="selectReturnDate">Return Date</label>
      <div class="timeAnddate">
        <b-form-datepicker id="selectReturnDate" v-model="returnDate" class="mr-2"></b-form-datepicker>
        <b-form-timepicker v-model="returnTime" locale="en" class="mr-2"></b-form-timepicker>
      </div>
      <b-button class="mt-3" @click="goRent()" block variant="outline-primary">Search</b-button>

    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
      location: ['Izmir','Manisa','Ankara','Eskisehir'],
      locationValue: 'Izmir',
      returnlocation: ['Izmir','Manisa','Ankara','Eskisehir'],
      returnlocationValue: 'Izmir',
      pickDate:'',
      pickTime:'',
      returnDate:'',
      returnTime:'',
      userInfo:[

      ]
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    goRent(){
      this.userInfo.push(this.locationValue,this.returnlocationValue,this.pickDate,this.pickTime,this.returnDate,this.returnTime)
      const userInfo= this.userInfo;
      this.$router.push({name:'Cars',params:{userData:userInfo}})
    }
  }
}
</script>
<style>
.formRent{
  position: absolute;
  height: 500px;
  background-color: rgba(255,255,255,0.6);
  padding:  15px;
  margin-top: -800px;
  margin-left: 140px;
  z-index: 999;
}
.timeAnddate{
  display: flex;
  flex-direction: row;
}
.carouselSlide{
  width: 100%;
  height: 950px;
}

</style>