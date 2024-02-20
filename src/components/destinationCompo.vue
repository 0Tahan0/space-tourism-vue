<template>
  <b-row id="desCompo">
    <b-col md="6" sm="12" class="mt-1">
      <img
        :src="require(`@/assets/destination/${img}`)"
        :alt="name"
        width="80%"
        class="d-block mx-auto"
      />
    </b-col>
    <b-col
      md="6"
      sm="12"
      class="mt-1 d-flex flex-column"
      style="border-color: var(--light-gray)"
    >
      <the-art class="border-bottom">
        <template #title>
          {{ name }}
        </template>
        <template>
          {{ description }}
        </template>
      </the-art>
      <div class="d-flex justify-content-between mt-3">
        <div>
          <h6 class="text-uppercase">Avg, distance</h6>
          <h2 style="color: var(--light)">{{ distance }}</h2>
        </div>
        <div>
          <h6 class="text-uppercase">Est, travel time</h6>
          <h2 style="color: var(--light)">{{ travel }}</h2>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name : "destinationCompo",
  props: ["name", "img", "description", "distance", "travel"],
};
</script>
<style scoped>
#desCompo {
  color: var(--gray);
}
</style>
