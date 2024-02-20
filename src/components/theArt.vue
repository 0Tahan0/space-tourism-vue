<template>
  <div id="art" class="text-center text-md-start">
    <h6 class="mt-2 fw-light text-uppercase ms-md-4">
      <slot name="small-title"></slot>
    </h6>
    <h1 class="mt-2 text-uppercase fw-light">
      <slot name="title"></slot>
    </h1>
    <p class="mt-2 fw-light lh-lg mx-auto"><slot></slot></p>
  </div>
</template>
<script>
export default{
  name : "theArt",

}
</script>
<style scoped>
#art {
  color: var(--gray);
}
h6 {
  font-family: second-f;
  letter-spacing: 2px;
  word-spacing: 0.5rem;
  font-size: calc(12px / 1.5 + 1vw);
}
h1 {
  color: var(--light);
  font-size: calc(25px + 4.5vw);
}
p {
  /* font-size: 0.8rem; */
  letter-spacing: 1.2px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: calc(12px / 3 + 1vw);
}
</style>
