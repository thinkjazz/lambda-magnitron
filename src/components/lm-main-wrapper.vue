<template>
    <div class="lm-main-wrapper">
        <lm-cart
                v-if="CART.length"


        />
        <lm-catalog/>

    </div>
</template>

<script>
    import lmCatalog from "./lm-catalog";
    import LmCart from "./lm-cart";
    import {mapGetters} from "vuex";
    export default {
        name: "lm-main-wrapper",
        components: {lmCatalog, LmCart},
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
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
