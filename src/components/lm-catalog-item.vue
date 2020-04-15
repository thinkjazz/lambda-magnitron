<template>
    <div class="lm-catalog-item">
        <img class="lm-catalog-item__image"
             v-bind:src=" require(`../assets/images/${productData.image}`)" alt="">

        <p class="lm-catalog-item__name">{{productData.name}}</p>
        <p class="lm-catalog-item__price">{{productData.price.toFixed()}} ₽</p>
        <button class="lm-catalog-item__add-to-cart-btn btn"
                @click="sendDataToParent">Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: "lm-catalog-item",
        props: {
            productData: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            sendDataToParent() {
                this.$emit('sendArticle', this.productData.article)
            }
        }
    }
</script>

<style lang="scss">
 .lm-catalog-item {
     flex-basis: 25%;
     box-shadow: 0 0 8px 0 #e0e0e0;
     padding: $padding*2;
     margin-bottom: $margin*2;
     &__image {
         width: 150px;
         height: auto;
     }
 }
</style>
