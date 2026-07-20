<template>
  <div class="steps">
    <slot />
  </div>
</template>

<style scoped>
.steps {
  margin: 2rem 0;
  counter-reset: instruction-step;
}
</style>
