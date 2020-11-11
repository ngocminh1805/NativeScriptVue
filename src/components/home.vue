<template>
  <Page class="page">
    <ActionBar title="Home"></ActionBar>
    <StackLayout>
      <StackLayout class="input_container" orientation="horizontal">
        <TextField
          :text="textFieldValue"
          hint="Enter text..."
          @textChange="onTextChange"
          class="input_text"
          id="input_text"
          @blur="onTextBlur"
          (load)="loadedField($event)"
        />
        <Button text="+" @tap="onAdd" class="button_item" />
      </StackLayout>
      <ListView for="item in countries" @itemTap="onItemTap">
        <v-template>
          <!-- <ListItem v-bind:item="item" v-on:on-delete="onButtonTap(item)" /> -->
          <StackLayout
            orientation="horizontal"
            backgroundColor="#3c495e"
            class="item_container"
          >
            <Label :text="item.text" flex="1" class="item_title" />
            <Button text="x" @tap="onDelete(item)" class="button_item" />
            <Button text="E" @tap="onEdit(item)" class="button_item" />
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="js">
import ListItem from "@/components/list-comp/ListItem.vue";
import Edit from "@/components/edit.vue";

export default {
  components: { ListItem },
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
  methods: {

    updated: function(){
    alert('updating')
    this.$nextTick(()=>{
      alert('updated')
    })
  },
    onItemTap: function(args) {},

    onAdd: function() {
      this.countries.push({ text: this.textFieldValue });
      
    },

    // onButtonTap: function(args) {
    //   const text = args.object.text;
    //   // console.log('Event', args);
    //   // console.log('confirm', );

    //   if (text === "x") {
    //     // asking for delete or not


    //   }
    //   if (text === "E") {
    //     //to edit page


    //   }
    // },
    //ondelete
    onDelete: function (item) {
      // confirm("Có chắc là xóa hay không?")
           const index = this.countries.indexOf(item)
           this.countries.splice(index,1)
    },
    //onedit
    onEdit: function (item) {
      //  this.$navigateTo(Edit,{props:{
      //    item: item.text
      //  }})
      const index = this.countries.indexOf(item)
      const dialogs = require('tns-core-modules/ui/dialogs')

      prompt({
        title: "Edit Todo",
        message: "Nhập chỉnh sửa:",
        okButtonText: "Edit",
        cancelButtonText: "Cancel",
        defaultText: item.text,
        inputType: dialogs.inputType.text
      }).then(result => {
        // console.log(`Dialog result: ${result.result}, text: ${result.text}`)
        this.countries.splice(index,1,{text:result.text})
      });
    },


    // on text blur
    onTextBlur: function(args) {
      this.textFieldValue = args.value;
    },

    // on text change
    onTextChange: function(args) {
      this.textFieldValue = args.value;
    },

    // load the edit text
    loadedField(args) {
      var textfield = args.object;
      setTimeout(function() {
        textfield.dismissSoftInput();
      }, 200);
    },
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
.item_container {
  display: flex;
  flex-direction: row;
}

.item_title {
  width: 65%;
  color: #ffffff;
}
.route_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
}
.route_btn {
  background-color: #53ba82;
  color: #ffffff;
}
</style>
