<template>
  <b-row id="crewCompo ">
    <b-col
      md="6"
      sm="12"
      class="mt-1 d-flex align-items-start"
      style="border-color: var(--light-gray)"
    >
      <the-art>
        <template #small-title>
          {{ role }}
        </template>
        <template #title>
          {{ name }}
        </template>
        <template>
          {{ bio }}
        </template>
      </the-art>
    </b-col>
    <b-col md="6" sm="12" class="mt-1" style="max-height: 400px">
      <img
        :src="require(`@/assets/crew/${img}`)"
        :alt="name"
        width="80%"
        height="100%"
        style="object-fit: contain"
        class="d-block ms-auto me-md-0 me-auto"
      />
    </b-col>
  </b-row>
</template>
<script>
export default {
  name : "crewCompo",
  props: ["name", "img", "bio", "role"],
};
</script>
<style scoped>
#crewCompo {
  color: var(--gray);
}
</style>
