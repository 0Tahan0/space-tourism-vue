<template>
  <div class="app-technology page">
    <the-header></the-header>
    <div class="container">
      <special-title title="space launch 101" number="03"></special-title>

      <technology-compo
        class="mt-5"
        :leng="getData.length"
        :current_step="current_step"
        :name="getData[current_step - 1].name"
        :description="getData[current_step - 1].description"
        :img="getData[current_step - 1].images.portrait"
        @next="nextStep"
      ></technology-compo>
    </div>
  </div>
</template>
<script>
import technologyCompo from "@/components/technologyCompo.vue";
export default {
  name: "TechnologyView",

  data() {
    return {
      current_step: 1,
    };
  },
  components: { technologyCompo },
  computed: {
    getData() {
      return this.$store.getters.getTechnology;
    },
  },
  methods: {
    nextStep(num) {
      this.current_step = num;
    },
  },
};
</script>
