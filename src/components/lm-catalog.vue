<template>
    <div class="lm-catalog">
        <h1>Каталог</h1>
        <lm-catalog-item />
        <lm-catalog-item />
        <lm-catalog-item />
        <lm-catalog-item />
        <lm-catalog-item />
    </div>
</template>

<script>
import lmCatalogItem from "./lm-catalog-item"
    export default {
        name: "lm-catalog",
        components: {
            lmCatalogItem
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
