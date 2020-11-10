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