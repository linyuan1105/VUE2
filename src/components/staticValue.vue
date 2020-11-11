<template>
    <div>
        <h1>{{staticValue}}+++{{query}}</h1>
    </div>
</template>
<script>
export default {
    props:['staticValue', 'query']
}
</script>