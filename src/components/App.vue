<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label
          text="MENU"
          @tap="$refs.drawer.nativeView.showDrawer()"
          col="0"
        />
        <Label class="title" text="Welcome to NativeScript-Vue!" col="1" />
      </GridLayout>
    </ActionBar>
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="Drawer" />

        <Label class="drawer-item" text="Item 1" />
        <Label class="drawer-item" text="Item 2" />
        <Label class="drawer-item" text="Item 3" />
      </StackLayout>
    </RadSideDrawer>
    <StackLayout >
      <StackLayout class="input_container" orientation="horizontal">
        <TextField :text ="textFieldValue" hint="Enter text..." @textChange="onTextChange" class="input_text"  id = "input_text"/>
         <Button text="+" @tap="onAdd" class="button_item" />
      </StackLayout>
      <ListView for="item in countries" @itemTap="onItemTap">
        <v-template>
          <StackLayout
            orientation="horizontal"
            backgroundColor="#3c495e"
            class="item_container"
          >
            <Label :text="item.text" flex="1" class="item_title" />
            <Button text="x" @tap="onButtonTap" class="button_item" />
            <Button text="E" @tap="onButtonTap" class="button_item" />
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
export default {
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
      textFieldValue : ''
      
    };
  },
  methods: {
    onItemTap: function(args) {},
    onAdd: function() {
      
        this.countries.push({text:this.textFieldValue})
        
        
    },
    onButtonTap: function () {

    },
    onTextChange: function (args) {
        this.textFieldValue = args.value
    }
  },
};
</script>

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

.item_container {
  display: flex;
  flex-direction: row;
}

.item_title {
  width: 65%;
  color: #ffffff;
}
.button_item {
  height: 30;
  width: 30;
  color: #53ba82;
  background-color: #ffffff;
  border-radius: 20;
}

.input_container{
    display: flex;
    flex-direction: row;
    padding: 10;
}
.input_text{
    width: 75%;
}
.listview {
  width: 100%;
  background: #ffffff;
}
</style>
