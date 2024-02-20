<template>
  <div class="app-crew page">
    <the-header></the-header>
    <div class="container">
      <special-title title="meet your crew" number="02"></special-title>
      <div class="d-flex d-md-none justify-content-center mt-5">
        <b-button
          class="point rounded-pill p-0 d-block mb-2"
          :class="slide == index ? 'active-point' : ''"
          v-for="(i, index) in getData"
          :key="index"
          @click="slide = index"
        />
      </div>
      <b-carousel
        class="mt-5"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="(i, index) in getData" :key="index"
          ><template #img>
            <crewCompo
              :name="i.name"
              :img="i.images.png"
              :role="i.role"
              :bio="i.bio"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <div class="d-md-flex d-none mb-1">
        <b-button
          class="point rounded-pill p-0 d-block"
          :class="slide == index ? 'active-point' : ''"
          v-for="(i, index) in getData"
          :key="index"
          @click="slide = index"
        />
      </div>
    </div>
  </div>
</template>
<script>
import crewCompo from "@/components/crewCompo.vue";
export default {
  name:"CrewView",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    crewCompo,
  },
  computed: {
    getData() {
      return this.$store.getters.getCrew;
    },
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.point {
  --size: calc(12px + 0.5vw);
  width: var(--size);
  height: var(--size);
  background: #777;
  margin-right: calc(12px + 1.5vw);
}
.point.active-point {
  background: var(--light);
}
</style>
