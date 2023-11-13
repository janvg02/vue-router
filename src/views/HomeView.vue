<script >

import {defineComponent} from "vue";
import AboutComponent from "@/components/AboutComponent.vue";
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  components: {CardComponent, AboutComponent}
})

</script>

<template>
  <AboutComponent/>

  <section class="gallery">
    <div class="cards-wrapper">
      <CardComponent v-for="product in products"
                     v-bind:key="product.id"
                     v-bind:product="product"
      />
    </div>
  </section>
</template>

<style >

</style>