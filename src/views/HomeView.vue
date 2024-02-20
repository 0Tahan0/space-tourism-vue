<template>
  <div class="app-home page">
    <the-header></the-header>
    <div class="container">
      <b-row class="align-items-center mt-3 p-4">
        <b-col md="6" class="mt-5">
          <the-art>
            <template #small-title>So, you want to travel to</template>

            <template #title
              ><span style="font-size: larger">Space</span></template
            >
            <template
              >Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!</template
            >
          </the-art>
        </b-col>
        <b-col md="6" class="mt-5 d-flex">
          <b-button
            pill
            variant="light"
            class="ex-btn p-2 text-uppercase fs-5 mx-auto mx-md-0 ms-md-auto"
            >explore</b-button
          >
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {},
};
</script>
<style scoped>
.ex-btn {
  --size: calc(150px + 4.5vw);
  width: var(--size);
  height: var(--size);
  letter-spacing: 2px;
}
</style>
