<template>
    <div>
        <h1>trances2</h1>
    </div>
</template>
<script>
export default {
    mounted(){
        this.afterLeave()
    },
    methods:{
        afterLeave () {
      this.$root.$emit('triggerScroll')
    }
    }
}
</script>