<template>
  <h4
    class="dest-title text-uppercase mt-3 fw-lighter text-center text-md-start"
  >
    <span
      style="font-weight: bold !important"
      class="text-secondary fs-5 me-3"
      >{{ number }}</span
    >
    {{ title }}
  </h4>
</template>
<script>
export default {
  name : "specialTitle",

  props: ["title", "number"],
};
</script>
<style scoped>
.dest-title {
  color: var(--light);
  font-family: second-f;
  letter-spacing: 3px;
  font-weight: 100;
  font-size: calc(12px + 1.3vw);
}
</style>
