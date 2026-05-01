<template>
  <div class="ancient-card p-4 sm:p-6 text-center">
    <div v-if="label" class="text-sm font-medium text-inkLight mb-2">{{ label }}</div>
    <div class="text-5xl sm:text-6xl mb-3">{{ trigram?.symbol }}</div>
    <div class="font-serif text-lg font-semibold text-ink">{{ trigram?.name }}卦</div>
    <div class="text-sm text-inkLight mt-1">（{{ trigram?.nature }} · {{ trigram?.attribute }}）</div>
    <div v-if="showLines" class="mt-4 flex flex-col items-center gap-2">
      <div
        v-for="(line, idx) in (trigram?.lines || [])"
        :key="idx"
        class="w-16 h-1.5 rounded"
        :class="line ? 'bg-yang' : 'yin-line'"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  trigram: {
    type: Object,
    default: null
  },
  label: {
    type: String,
    default: ''
  },
  showLines: {
    type: Boolean,
    default: false
  }
})
</script>
