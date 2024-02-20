<template>
  <div class="app-destination page">
    <the-header></the-header>
    <div class="container">
      
      <special-title title="pick your destination" number="01"></special-title>
      <b-nav
        class="taps text-uppercase ms-md-auto justify-content-center d-flex mt-5"
      >
        <b-nav-item
          v-for="(i, index) in getData"
          :key="index"
          :class="current_step == index + 1 ? 'active' : ''"
          @click.prevent="current_step = index + 1"
          >{{ i.name }}</b-nav-item
        >
      </b-nav>

      <destin-compo
        class="mt-sm-5 mt-0 mb-1"
        :name="getData[current_step - 1].name"
        :img="getData[current_step - 1].images.png"
        :description="getData[current_step - 1].description"
        :distance="getData[current_step - 1].distance"
        :travel="getData[current_step - 1].travel"
      ></destin-compo>
    </div>
  </div>
</template>
<script>
import destinCompo from "@/components/destinationCompo.vue";
export default {
  name:"DestinationView",
  data() {
    return {
      current_step: 1,
    };
  },
  computed: {
    getData() {
      return this.$store.getters.getDestination;
    },
  },
  components: { destinCompo },
};
</script>
<style scoped>

.taps a:not(a [active]) {
  color: var(--gray);
}
.active a {
  color: #fff !important;
  border-bottom: 1px solid #fff !important;
}
@media (min-width: 767px) {
  .taps {
    width: 50%;
    justify-content: start;
  }
}
</style>
