<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'Troubleshooting',
  },
)
</script>

<template>
  <details class="troubleshooting">
    <summary class="troubleshooting__summary">
      <span class="troubleshooting__icon" aria-hidden="true">?</span>

      <span class="troubleshooting__title">
        {{ title }}
      </span>

      <span class="troubleshooting__chevron" aria-hidden="true" />
    </summary>

    <div class="troubleshooting__content">
      <slot />
    </div>
  </details>
</template>

<style scoped>
.troubleshooting {
  --summary-height: 2.25rem;

  box-sizing: border-box;
  margin: 1rem 0 0;
  padding: 0;
  overflow: hidden;

  border: 1px solid var(--vp-c-divider);
  border-radius: 0.6rem;

  background: transparent;

  transition:
    border-color 160ms ease,
    background-color 160ms ease;
}

/* Keep the closed details element exactly as tall as the summary */
.troubleshooting:not([open]) {
  height: var(--summary-height);
}

/* Compact, neutral collapsed state */
.troubleshooting__summary {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: var(--summary-height);
  align-items: center;
  gap: 0.55rem;

  margin: 0;
  padding: 0 0.75rem;

  color: var(--vp-c-text-2);
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  list-style: none;
  user-select: none;

  transition:
    color 160ms ease,
    background-color 160ms ease;
}

.troubleshooting__summary::-webkit-details-marker {
  display: none;
}

.troubleshooting__summary::marker {
  content: "";
}

.troubleshooting__summary:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

/* Neutral icon while collapsed */
.troubleshooting__icon {
  display: grid;
  width: 1.1rem;
  height: 1.1rem;
  flex: 0 0 1.1rem;
  place-items: center;

  border: 1px solid var(--vp-c-text-3);
  border-radius: 50%;

  color: var(--vp-c-text-3);

  font-size: 0.65rem;
  font-weight: 700;
  line-height: 1;

  transition:
    border-color 160ms ease,
    color 160ms ease;
}

.troubleshooting__title {
  min-width: 0;
  flex: 1;
}

/* Disclosure arrow */
.troubleshooting__chevron {
  width: 0.45rem;
  height: 0.45rem;
  flex: 0 0 auto;

  border-right: 1.5px solid var(--vp-c-text-3);
  border-bottom: 1.5px solid var(--vp-c-text-3);

  transform: rotate(45deg) translate(-1px, -1px);

  transition:
    border-color 160ms ease,
    transform 160ms ease;
}

/* Warning treatment only while expanded */
.troubleshooting[open] {
  height: auto;
  border-color: var(--vp-c-warning-2);
  background: var(--vp-c-warning-soft);
}

.troubleshooting[open] .troubleshooting__summary {
  color: var(--vp-c-text-1);
}

.troubleshooting[open] .troubleshooting__icon {
  border-color: var(--vp-c-warning-1);
  color: var(--vp-c-warning-1);
}

.troubleshooting[open] .troubleshooting__chevron {
  border-color: var(--vp-c-warning-1);
  transform: rotate(225deg) translate(-1px, -1px);
}

/* Expanded diagnostic content */
.troubleshooting__content {
  box-sizing: border-box;
  padding: 1rem;

  border-top: 1px solid var(--vp-c-warning-2);
  background: var(--vp-c-bg-soft);
}

.troubleshooting__content :deep(> :first-child) {
  margin-top: 0;
}

.troubleshooting__content :deep(> :last-child) {
  margin-bottom: 0;
}

.troubleshooting__content :deep(h3) {
  margin: 1.25rem 0 0.5rem;
  padding: 0;
  border: 0;

  font-size: 1rem;
  line-height: 1.4;
}

.troubleshooting__content :deep(h3:first-child) {
  margin-top: 0;
}

.troubleshooting__content :deep(p) {
  margin: 0.5rem 0;
}

.troubleshooting__content :deep(ul),
.troubleshooting__content :deep(ol) {
  margin: 0.5rem 0;
  padding-left: 1.4rem;
}

.troubleshooting__content :deep(li + li) {
  margin-top: 0.25rem;
}

.troubleshooting__content :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem 0 0;

  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
}

@media (max-width: 640px) {
  .troubleshooting {
    --summary-height: 2.15rem;
  }

  .troubleshooting__summary {
    padding: 0 0.65rem;
  }

  .troubleshooting__content {
    padding: 0.85rem;
  }
}
</style>
