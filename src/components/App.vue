// view component
<template>
  <Page actionBarHidden="true">
    <!-- <StackLayout class="container">
      <Home/>
    </StackLayout> -->
     <BottomNavigation>
      <TabStrip>
        <TabStripItem>
          <Label text="Home"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="News"></Label>
        </TabStripItem>
         <TabStripItem>
          <Label text="Images"></Label>
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <Frame id="homeTabFrame">
          <Home/>
        </Frame>
      </TabContentItem>
      <TabContentItem>
        <Frame id="newsTabFrame">
          <News/>
        </Frame>
      </TabContentItem>
      <TabContentItem>
        <Frame id="imagesTabFrame">
          <Images/>
        </Frame>
      </TabContentItem>

    </BottomNavigation>
  </Page>
</template>

// script - logic

<script lang="ts">
import Vue from "nativescript-vue";
import Home from "@/components/home.vue";
import News from "@/components/news.vue"
import Images from "@/components/images.vue"

export default {
  components: { Home , News,Images},
  data() {
    return {
    
    };
  },
};
</script>

// css - style of component

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
BottomNavigation{
  background-color: #53ba82;
  color: #ffffff;
}



.container{
  display: flex;
  flex-direction:c;
}
</style>
