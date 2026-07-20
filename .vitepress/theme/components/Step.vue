<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="step">
    <div class="step__rail" aria-hidden="true">
      <div class="step__marker" />
    </div>

    <div class="step__main">
      <h2 class="step__title">
        {{ title }}
      </h2>

      <div class="step__content">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.step {
  --step-marker-size: 2.75rem;
  --step-column-gap: 1rem;
  --step-spacing: 2.5rem;
  --step-line-width: 2px;

  position: relative;
  display: grid;
  grid-template-columns: var(--step-marker-size) minmax(0, 1fr);
  column-gap: var(--step-column-gap);
  padding-bottom: var(--step-spacing);

  counter-increment: instruction-step;
}

/*
 * Draw the connector from the centre of this marker to the centre
 * of the next marker.
 *
 * The negative bottom value extends the line beyond this component,
 * preventing a break between adjacent steps.
 */
.step:not(:last-child)::before {
  position: absolute;
  z-index: 0;
  top: calc(var(--step-marker-size) / 2);
  bottom: calc(var(--step-marker-size) * -0.5);
  left: calc(var(--step-marker-size) / 2);

  width: var(--step-line-width);

  background: var(--vp-c-divider);

  content: "";
  transform: translateX(-50%);
}

.step:last-child {
  padding-bottom: 0;
}

.step__rail {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

/* Circular numbered marker */
.step__marker {
  position: relative;
  z-index: 1;

  display: grid;
  width: var(--step-marker-size);
  height: var(--step-marker-size);
  flex-shrink: 0;
  place-items: center;

  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;

  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);

  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
}

.step__marker::before {
  content: counter(instruction-step);
}

.step__main {
  min-width: 0;
}

/* Vertically align the title with the circular marker */
.step__title {
  display: flex;
  min-height: var(--step-marker-size);
  align-items: center;

  margin: 0;
  padding: 0;
  border: 0;

  font-size: 1.25rem;
  line-height: 1.4;
}

.step__content {
  margin-top: 0.75rem;
}

.step__content :deep(> :first-child) {
  margin-top: 0;
}

.step__content :deep(> :last-child) {
  margin-bottom: 0;
}

.step__content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

@media (max-width: 640px) {
  .step {
    --step-marker-size: 2.4rem;
    --step-column-gap: 0.8rem;
    --step-spacing: 2rem;
  }

  .step__marker {
    font-size: 0.9rem;
  }

  .step__title {
    font-size: 1.1rem;
  }
}
</style>
