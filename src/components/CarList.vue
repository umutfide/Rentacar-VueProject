<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
            <b-card-body class="titleItem" :title="item[0]">
            <b-card-text>
              {{item[1]}}
            </b-card-text>
              <div>
                <b-card-text class="priceItem">
                  ${{item[2]}}
                </b-card-text>
                <b-icon icon="cart-plus-fill" class="h4 mb-2"></b-icon>
              </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    item:Array
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