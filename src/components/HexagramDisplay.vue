<template>
  <div class="ancient-card p-5 sm:p-8">
    <div class="text-center mb-6">
      <div class="text-6xl sm:text-7xl mb-2">{{ hexagram?.symbol }}</div>
      <h2 class="font-serif text-2xl font-bold text-ink">{{ hexagram?.name }}</h2>
    </div>

    <div class="flex justify-center gap-8 sm:gap-16 my-6">
      <TrigramDisplay
        :trigram="hexagram?.upperTrigram"
        label="上卦（外卦）"
        :show-lines="true"
      />
      <TrigramDisplay
        :trigram="hexagram?.lowerTrigram"
        label="下卦（内卦）"
        :show-lines="true"
      />
    </div>

    <div class="mt-6 pt-4 border-t border-border/50">
      <div class="text-sm font-medium text-cinnabar mb-3 text-center">六 爻 图 示</div>
      <div class="flex flex-col items-center gap-3">
        <div
          v-for="(line, idx) in displayLines"
          :key="idx"
          class="flex items-center gap-4 w-full max-w-xs"
        >
          <span class="text-xs font-medium text-inkLight w-8 text-right shrink-0">
            {{ lineNames[5 - idx] }}
          </span>
          <div class="flex items-center gap-2 flex-1 justify-center">
            <div
              class="h-1.5 rounded transition-all duration-300"
              :class="line.isYang ? 'bg-yang w-28 sm:w-36' : 'yin-line w-28 sm:w-36'"
            />
            <span
              v-if="line.isMoving"
              class="moving-indicator text-[10px]"
            >
              动
            </span>
          </div>
          <span class="text-xs text-inkLight w-10 shrink-0">
            {{ line.isYang ? '阳' : '阴' }}
          </span>
        </div>
      </div>
    </div>

    <div v-if="showJudgment" class="mt-6 p-4 bg-paper rounded-ancient border border-border/50">
      <div class="text-sm font-semibold text-cinnabar mb-2">📖 卦辞</div>
      <p class="font-serif text-ink leading-relaxed">{{ hexagram?.judgment }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TrigramDisplay from './TrigramDisplay.vue'

const props = defineProps({
  hexagram: {
    type: Object,
    default: null
  },
  showJudgment: {
    type: Boolean,
    default: true
  },
  movingPosition: {
    type: Number,
    default: null
  }
})

const lineNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻']

const displayLines = computed(() => {
  if (!props.hexagram?.rawLines) return []
  
  return [...props.hexagram.rawLines].reverse().map((line, idx) => {
    const isYang = line === 7 || line === 9
    const isMoving = (6 - idx) === props.movingPosition
    
    return { isYang, isMoving, value: line }
  })
})
</script>
