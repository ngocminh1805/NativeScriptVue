<template>
  <Page class="page">
    <ActionBar title="Images"></ActionBar>
    <FlexboxLayout flexDirection="column">
      <ListView
        for="(item, index) in images"
      >
        <v-template>
          <StackLayout>
                <Image :src="item.download_url" class="img" />
          </StackLayout>
        </v-template>
      </ListView>
      <Button text="get data" @tap="getData" class="btn" />
    </FlexboxLayout>
  </Page>
</template>

<script lang="js">
import * as http from "http";

export default {
  data() {
    return {
      page: 0,
      images:[]
   
    };
  },
  

  methods: {
    getData: function () {
    //   alert('get data');
      const httpModule = require("tns-core-modules/http");

      this.page ++ ;

      httpModule.getJSON("https://picsum.photos/v2/list?page="+this.page.toString()+"&limit=50")
      .then((r) => {
          // console.log('RESPONSE',r);
          this.images = this.images.concat(r)

      }, (e) => {
          console.log('ERROR',e);
      });

    },

  },

};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.btn {
  height: 20%;
  background-color: #ffffff;
  color: #53ba82;
}
.img {
  height: 300;
  width: 600;
}

/* .Images_item {
  color: #ffffff;
}
.Images_title {
  font-size: 20;
  font-weight: bold;
}

.Images_author {
  font-size: 10;
  color: #53ba82;
} */

</style>
