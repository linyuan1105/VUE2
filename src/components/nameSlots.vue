<template>
    <div>
        <slot name="header"></slot>
        <slot name="body" nameSlotBody="nameSlotBody" art="art"></slot>
        <slot name="footer"></slot>
        <button @click="click">$slote</button>
    </div>
</template>
<script>
export default {
    methods:{
        click(){
            console.log(this)
            console.log(this.$slots)
        }
    }
}
</script>