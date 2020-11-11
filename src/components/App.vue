// view component
<template>
  <Page>
    <StackLayout class="container">
      <Home/>
    </StackLayout>
  </Page>
</template>

// script - logic

<script lang="ts">
import Vue from "nativescript-vue";
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
};
</script>

// css - style of component

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.container{
  display: flex;
  flex-direction:c;
}
</style>
