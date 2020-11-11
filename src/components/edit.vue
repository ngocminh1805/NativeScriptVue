<template>
  <Page class="page">
    <ActionBar title="Edit" class="action-bar"></ActionBar>

    <StackLayout class="home-panel">
      <TextField hint="item" class="edit_text" />
      <StackLayout orientation="horizontal">
        <Button text="edit" class="btn" @tab="console.log('Props',props)" />
        <Button text="exit" class="btn" @tap="$navigateBack" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script lang="js">
export default {
 props:["item"],
  data(){
    return{
      //  text: this.props.item
      
    };
  },

  
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.edit_text {
  height: 40;
  margin-bottom: 50;
  font-size: 20;
}
.btn {
  background-color: #ffffff;
  color: #53ba82;
  width: 40%;
}
</style>
