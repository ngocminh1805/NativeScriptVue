<template>
  <Page class="page">
    <ActionBar title="News"></ActionBar>
    <FlexboxLayout flexDirection="column">
      <ListView
        for="(item, index) in news"
      >
        <v-template>
          <StackLayout orientation="horizontal">
            <StackLayout width="70%">
              <Label :text="index" class="news_title"/>
              <Label :text="item.author" class="news_author" />
              <Label :text="item.url" maxLength="100" />
            </StackLayout>
            <Image :src="url(item.download_url,item.id)" class="img" />
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
      position: 0,
      page: 0,
      news:[]
   
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
          this.news = this.news.concat(r)

      }, (e) => {
          console.log('ERROR',e);
      });

    },

    // onItemTap : function (){
    //   alert('tep Item')
    // },

    // loadMore: function () {
    //     // alert('load more')
    //     this.news = this.news.concat(this.addNews);
    // },
    url: function (url,id) {
        const index = url.indexOf(id)
        var str = url.slice(0,index)

        str = str.concat(""+id+"/200")
         console.log('URL',str);

        return str;
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
  height: 100;
  width: 100;
}

.news_item {
  color: #ffffff;
}
.news_title {
  font-size: 20;
  font-weight: bold;
}

.news_author {
  font-size: 10;
  color: #53ba82;
}

</style>
