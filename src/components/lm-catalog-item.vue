<template>
    <div class="lm-catalog-item">
        <p>Item1</p>
        <p>Price</p>
        <button>Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: "lm-catalog-item",
        props: {},
        data() {
            return {}
        },
        computed: {},
    }
</script>

<style lang="scss">
 .lm-catalog-item {
     flex-basis: 25%;
     box-shadow: 0 0 8px 0 #e0e0e0;
     padding: $padding*2;
     margin-bottom: $margin*2;
 }
</style>
