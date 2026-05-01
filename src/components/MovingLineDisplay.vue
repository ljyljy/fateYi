<template>
  <div v-if="movingLine" class="ancient-card p-5 sm:p-6 border-l-4 border-l-cinnabar">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-cinnabar text-lg">⚡</span>
      <h3 class="font-serif text-lg font-bold text-ink">动爻 · {{ movingLine.name }}</h3>
      <span class="ml-auto px-2 py-0.5 text-xs rounded-full"
        :class="movingLine.isOldYang ? 'bg-gold/20 text-gold' : 'bg-yin/20 text-yin'"
      >
        {{ movingLine.isOldYang ? '老阳变阴' : '老阴变阳' }}
      </span>
    </div>

    <div class="space-y-3">
      <div class="p-3 bg-paper rounded-ancient">
        <div class="text-xs font-medium text-inkLight mb-1">第{{ movingLine.position }}爻 · 爻辞</div>
        <p class="font-serif text-ink font-semibold">{{ movingLine.text || '（动爻变化之象）' }}</p>
      </div>

      <div class="p-3 bg-cinnabar/5 rounded-ancient border border-cinnabar/10">
        <div class="text-xs font-medium text-cinnabar mb-1">✨ 动爻解释</div>
        <p class="text-sm text-ink leading-relaxed">{{ movingLine.interpretation }}</p>
      </div>

      <div v-if="movingLine.isOldYang" class="text-xs text-center text-inkLight py-1">
        阳爻变阴 → 之卦生变
      </div>
      <div v-else-if="movingLine.isOldYin" class="text-xs text-center text-inkLight py-1">
        阴爻变阳 → 之卦生变
      </div>
    </div>
  </div>
  <div v-else class="ancient-card p-5 sm:p-6 text-center text-inkLight">
    <p>本卦无动爻，为静卦</p>
  </div>
</template>

<script setup>
defineProps({
  movingLine: {
    type: Object,
    default: null
  }
})
</script>
