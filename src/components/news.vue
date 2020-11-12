<template>
  <Page class="page">
    <ActionBar title="News"></ActionBar>
    <FlexboxLayout flexDirection="column">
      <ListView
        for="(item, index) in news"
        @itemTap="onItemTap"
        @loadMore="loadMore"
      >
        <v-template>
          <StackLayout orientation="horizontal">
            <StackLayout width="70%">
              <Label :text="index" class="news_title" />
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
      news:[]
    //   news: [
    //   {title:'News 1', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=1"},
    //   {title:'News 2', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=2"},
    //   {title:'News 3', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=3"},
    //   {title:'News 4', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=4"},
    //   {title:'News 5', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=5"},
    //   {title:'News 6', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=6"},
    //   {title:'News 7', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=7"},
    //   {title:'News 8', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=8"},
    //   {title:'News 9', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=9"},
    //   {title:'News 10', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=10"},
    //   {title:'News 11', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=11"},
    //   {title:'News 12', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=12"},
    //   {title:'News 13', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=13"},
    //   {title:'News 14', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=14"},],

    //   addNews: [
    //    {title:'News 1', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=1"},
    //   {title:'News 2', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=2"},
    //   {title:'News 3', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=3"},
    //   {title:'News 4', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=4"},
    //   {title:'News 5', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=5"},
    //   {title:'News 6', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=6"},
    //   {title:'News 7', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=7"},
    //   {title:'News 8', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=8"},
    //   {title:'News 9', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=9"},
    //   {title:'News 10', author: "Minh Bé Tí", content: "What happened \r\nChinese internet stocks were hit hard on Tuesday. By the close of trading in the U.S., shares of Alibaba Group (NYSE:BABA), Tencent Holdings(OTC:TCEHY), and JD.com(NASDAQ:JD) were dow… [+1201 chars]", img: "https://picsum.photos/200/300?random=10"},
    //   ]
    };
  },
  

  methods: {
    getData: function () {
    //   alert('get data');
      const httpModule = require("tns-core-modules/http");
      httpModule.getJSON("https://picsum.photos/v2/list?page=2&limit=100")
      .then((r) => {
          console.log('RESPONSE',r);
          this.news = this.news.concat(r)

      }, (e) => {
          console.log('ERROR',e);
      });

    },

    onItemTap : function (){
      alert('tep Item')
    },

    loadMore: function () {
        // alert('load more')
        this.news = this.news.concat(this.addNews);
    },
    url: function (url,id) {
        const index = url.indexOf(id)
        var str = url.slice(0,index)

        str = str.concat(""+id+"/200")
        // console.log('URL',str);

        return str;
    },
    count: function () {
       this.position = count + 1;
       return this.position
        
        
    }
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

.news_content {
}
</style>
