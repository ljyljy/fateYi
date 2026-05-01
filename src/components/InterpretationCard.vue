<template>
  <div class="ancient-card p-5 sm:p-6">
    <div class="flex items-center gap-2 mb-4">
      <span class="text-lg">{{ icon }}</span>
      <h3 class="font-serif text-lg font-bold text-ink">{{ title }}</h3>
    </div>

    <div v-if="subtitle" class="text-sm font-medium text-cinnabar mb-3">{{ subtitle }}</div>

    <div v-if="judgment" class="mb-4 p-3 bg-paper rounded-ancient border-l-2 border-l-gold">
      <div class="text-xs font-medium text-gold mb-1">卦辞</div>
      <p class="font-serif text-sm text-ink">{{ judgment }}</p>
    </div>

    <div v-if="interpretation" class="space-y-3">
      <div
        v-for="(value, key) in displayInterpretation"
        :key="key"
        class="p-3 bg-paper/80 rounded-ancient"
      >
        <div class="text-xs font-semibold text-cinnabar mb-1">{{ key }}</div>
        <p class="text-sm text-ink leading-relaxed">{{ value }}</p>
      </div>
    </div>

    <div v-if="finalText" class="mt-4 p-4 bg-gradient-to-r from-cinnabar/5 to-gold/5 rounded-ancient border border-border/50">
      <div class="text-xs font-semibold text-cinnabar mb-1">📜 综合解读</div>
      <p class="text-sm text-ink leading-relaxed">{{ finalText }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: { type: String, default: '📜' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  judgment: { type: String, default: '' },
  interpretation: { type: Object, default: null },
  finalText: { type: String, default: '' }
})

const labels = {
  summary: '总述',
  career: '事业',
  relationship: '感情',
  health: '健康',
  wealth: '财运'
}

const displayInterpretation = computed(() => {
  if (!props.interpretation) return {}
  const result = {}
  for (const [key, value] of Object.entries(props.interpretation)) {
    if (labels[key] && value) {
      result[labels[key]] = value
    }
  }
  return result
})
</script>
