<template>
    <div class="lm-main-wrapper">

        <lm-catalog/>
        <lm-cart/>
    </div>
</template>

<script>
    import lmCatalog from "./lm-catalog";
    import LmCart from "./lm-cart";
    export default {
        name: "lm-main-wrapper",
        components: {LmCart, lmCatalog},
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        watch:{},
        mounted() {
            console.log("vue")
        }

    }
</script>

<style>
    .lm-main-wrapper {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
        /*align-content: center;*/

        margin: 0 auto;
    }
</style>
