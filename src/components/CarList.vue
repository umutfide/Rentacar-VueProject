<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 740px ;" @click="modalShow = !modalShow">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="item.image[0]" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
            <b-card-body class="titleItem" :title="item.title">
            <b-card-text>
              {{item.about}}
            </b-card-text>
              <div>
                <b-card-text class="priceItem">
                  ${{item.price}}
                </b-card-text>
                <b-icon icon="cart-plus-fill" class="h4 mb-2" ></b-icon>
              </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <b-modal v-model="modalShow">
      <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="item.image[0]" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body class="titleItem" :title="item.title">
          <b-card-text>
            {{item.about}}
          </b-card-text>
          <div>
            <b-card-text class="priceItem">
              ${{item.price}}
            </b-card-text>
            <b-icon icon="cart-plus-fill" class="h4 mb-2" @click="modalShow = !modalShow"></b-icon>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
    </b-modal>
  </div>
 </template>

<script>
export default {
  props: {
    item:Object
  },
  data(){
    return{
      modalShow:false
    }
  }
}
</script>

<style>
.priceItem{
  font-weight: bold;
  font-size: larger;
  font-family: Diploma;
}
.titleItem{
  font-weight: bolder;
  font-size: x-large;
}
</style>