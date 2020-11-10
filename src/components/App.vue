// view component
<template>
  <Page>
    <!-- <StackLayout >
      <Home/> -->
      <BottomNavigation
        id="bottomNav"
        class="bottomNav"
        automationText="tabNavigation"
        selectedIndex="0"
        selectedIndexChanged="onSelectedIndexChanged"
      >
        <TabStrip>
          <TabStripItem>
            <Label text="Home"></Label>
          </TabStripItem>
          <TabStripItem>
            <Label text="Screen 1"></Label>
          </TabStripItem>
          <TabStripItem>
            <Label text="Screen 2"></Label>
          </TabStripItem>
        </TabStrip>
        <TabContentItem>
          <Frame id="featured" defaultPage="home"></Frame>
        </TabContentItem>
        <TabContentItem>
          <Frame id="browse" defaultPage="screen1"></Frame>
        </TabContentItem>
        <TabContentItem>
          <Frame id="search" defaultPage="screen2"></Frame>
        </TabContentItem>
      </BottomNavigation>
    <!-- </StackLayout> -->
  </Page>
</template>

// script - logic

<script lang="ts">
// import ListItem from "@/components/list-comp/ListItem.vue";
import Home from "@/components/home.vue";

export default {
  components: { Home },
  data() {
    return {
      msg: "Hello World!",
      countries: [
        { text: "countries 1" },
        { text: "countries 2" },
        { text: "countries 3" },
        { text: "countries 4" },
        { text: "countries 5" },
      ],
      textFieldValue: "",
    };
  },
  methods: {},
};
</script>

// css - style of component

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #ffffff;
}

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #53ba82;
  color: #ffffff;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}

.input_container {
  display: flex;
  flex-direction: row;
  padding: 10;
}
.input_text {
  width: 75%;
}
.listview {
  width: 100%;
  background: #ffffff;
}

.button_item {
  height: 30;
  width: 30;
  color: #53ba82;
  background-color: #ffffff;
  border-radius: 20;
}

.bottomNav{
  position: absolute;
  /* bottom: 0; */
}
</style>
