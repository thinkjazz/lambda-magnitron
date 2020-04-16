<template>
    <div class="lm-cart">
        <h1>Cart</h1>
        <lm-cart-item>

        </lm-cart-item>

    </div>
</template>

<script>
    import lmCartItem from "./lm-cart-item"
    export default {
        name: "lm-cart",
        components: {
            lmCartItem
        },
        props: {},
        data() {
            return {}
        },
        computed: {},
    }
</script>

<style scoped>

</style>
