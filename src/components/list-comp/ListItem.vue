<template>
    <StackLayout
            orientation="horizontal"
            backgroundColor="#3c495e"
            class="item_container"
          >
        <Label :text="item.text" flex="1" class="item_title" />
        <Button text="x" @tap="$emit('on-button-tap', $event)" class="button_item" />
        <Button text="E" @tap="$emit('on-button-tap', $event)" class="button_item" />
    </StackLayout>
</template>

<script>
export default {
    name: 'ListItem',
    props: ['item']
}
</script>

<style scoped>
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
</style>