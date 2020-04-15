<template>
    <div class="lm-catalog">
        <h1>Каталог</h1>
        <div class="lm-catalog__list">
        <lm-catalog-item
                v-for="product in this.$store.state.products"
                :key="product.id"
                v-bind:product-data="product"
                @sendArticle="reciveArticle"
        />
        </div>
    </div>
</template>

<script>
import lmCatalogItem from "./lm-catalog-item";
import {mapActions} from "vuex";
    export default {
        name: "lm-catalog",
        components: {
            lmCatalogItem
        },
        props: {},
        data() {
            return {

            }
        },

        computed: {},
        methods:{
            ...mapActions([
                'GET_PRODUCT_FROM_API'
            ]),
            reciveArticle(data) {
                return {data}
            },

        },
        mounted() {
            this.GET_PRODUCT_FROM_API()
        }
    }
</script>

<style lang="scss">
    .lm-catalog {


        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &__link_to_cart {
            position: fixed;
            top: 80px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
            background: #ffffff;
        }
    }
    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
    }
    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }
</style>
