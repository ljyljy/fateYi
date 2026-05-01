<template>
  <div class="min-h-screen bg-paper">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="text-center mb-8">
        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">六十四卦详解</h1>
        <p class="text-sm text-inkLight">探索易经六十四卦的奥秘</p>
      </div>

      <div class="mb-6">
        <div class="relative max-w-md mx-auto">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索卦名、序号..."
            class="w-full pl-10 pr-4 py-2.5 border border-border rounded-ancient bg-card focus:outline-none focus:border-cinnabar/50 transition-colors"
          />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-inkLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <div class="flex justify-center gap-2 mb-8 flex-wrap">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
          :class="activeTab === tab.key
            ? 'bg-cinnabar text-white shadow-md'
            : 'bg-card border border-border text-inkLight hover:border-cinnabar/30'"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
        <button
          v-for="hex in filteredHexagrams"
          :key="hex.id"
          @click="selectHexagram(hex)"
          class="ancient-card p-3 sm:p-4 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
          :class="selectedHex?.id === hex.id ? 'ring-2 ring-cinnabar' : ''"
        >
          <div class="text-3xl sm:text-4xl mb-1 group-hover:scale-110 transition-transform">{{ hex.symbol }}</div>
          <div class="font-serif text-xs sm:text-sm font-semibold text-ink truncate">{{ hex.name }}</div>
          <div class="text-[10px] text-inkLight mt-0.5">第{{ hex.id }}卦</div>
        </button>
      </div>

      <transition name="fade-slide" mode="out-in">
        <div v-if="selectedHex" key="detail" class="space-y-5">
          <div class="ancient-card p-6 sm:p-8">
            <div class="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
              <span class="text-5xl">{{ selectedHex.symbol }}</span>
              <div>
                <h2 class="font-serif text-2xl font-bold text-ink">{{ selectedHex.name }}</h2>
                <p class="text-sm text-inkLight mt-1">第{{ selectedHex.id }}卦 · {{ selectedHex.judgment.slice(0, 20) }}...</p>
              </div>
              <button
                @click="selectedHex = null"
                class="ml-auto p-1.5 rounded hover:bg-border/20 transition-colors"
              >
                <svg class="w-5 h-5 text-inkLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div class="p-4 bg-paper rounded-ancient">
                <div class="text-xs font-semibold text-cinnabar mb-2">上卦（外卦）</div>
                <div class="text-3xl mb-1">{{ getTrigramSymbol(selectedHex.upperTrigram) }}</div>
                <div class="font-serif text-ink">{{ getTrigramName(selectedHex.upperTrigram) }}</div>
              </div>
              <div class="p-4 bg-paper rounded-ancient">
                <div class="text-xs font-semibold text-gold mb-2">下卦（内卦）</div>
                <div class="text-3xl mb-1">{{ getTrigramSymbol(selectedHex.lowerTrigram) }}</div>
                <div class="font-serif text-ink">{{ getTrigramName(selectedHex.lowerTrigram) }}</div>
              </div>
            </div>

            <div class="mb-6 p-4 bg-gradient-to-r from-cinnabar/5 to-gold/5 rounded-ancient border-l-4 border-l-cinnabar">
              <div class="text-xs font-semibold text-cinnabar mb-2">📖 卦辞</div>
              <p class="font-serif text-ink leading-relaxed">{{ selectedHex.judgment }}</p>
            </div>

            <InterpretationCard
              icon="✨"
              title="高岛易断解释"
              :interpretation="selectedHex.interpretation"
            />

            <div v-if="selectedHex.lines && selectedHex.lines.length > 0" class="mt-6">
              <h3 class="font-serif text-lg font-bold text-ink mb-4 flex items-center gap-2">
                <span>📜</span> 爻辞详解
              </h3>
              <div class="space-y-4">
                <div
                  v-for="line in selectedHex.lines"
                  :key="line.position"
                  class="p-4 bg-paper rounded-ancient border border-border/50"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-0.5 bg-cinnabar/10 text-cinnabar text-xs font-semibold rounded">
                      {{ line.name }}
                    </span>
                    <span class="text-xs text-inkLight">第{{ line.position }}爻</span>
                  </div>
                  <p class="font-serif text-sm text-ink mb-2">{{ line.text }}</p>
                  <p class="text-xs text-inkLight leading-relaxed mb-3">{{ line.interpretation }}</p>
                  
                  <div class="pt-3 border-t border-border/30">
                    <div class="text-xs font-semibold text-cinnabar mb-2">🔄 动爻变化</div>
                    <div class="text-xs text-inkLight space-y-1">
                      <p v-if="getMovingLineChange(line.position)">
                        {{ getMovingLineChange(line.position).description }}
                      </p>
                      <p v-if="getMovingLineChange(line.position)?.changedHexagram" class="text-ink font-medium">
                        之卦：{{ getMovingLineChange(line.position).changedHexagram.name }}
                        <span class="text-lg ml-1">{{ getMovingLineChange(line.position).changedHexagram.symbol }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { HEXAGRAMS, getHexagramByTrigrams } from '../data/hexagrams.js'
import { TRIGRAMS, findTrigramByLines } from '../data/trigrams.js'
import InterpretationCard from '../components/InterpretationCard.vue'

const searchQuery = ref('')
const activeTab = ref('all')
const selectedHex = ref(null)

const tabs = [
  { key: 'all', label: '全部' },
  { key: 'upper', label: '上经(1-30)' },
  { key: 'lower', label: '下经(31+)' }
]

const filteredHexagrams = computed(() => {
  let list = HEXAGRAMS

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(h =>
      h.name.includes(q) ||
      h.number === parseInt(q)
    )
  }

  if (activeTab.value === 'upper') {
    list = list.filter(h => h.number <= 30)
  } else if (activeTab.value === 'lower') {
    list = list.filter(h => h.number > 30)
  }

  return list
})

function selectHexagram(hex) {
  selectedHex.value = hex
  window.scrollTo({ top: 400, behavior: 'smooth' })
}

function getTrigramName(id) {
  return TRIGRAMS[id]?.name || ''
}

function getTrigramSymbol(id) {
  return TRIGRAMS[id]?.symbol || ''
}

function getMovingLineChange(position) {
  if (!selectedHex.value) return null
  
  const upperTrigram = TRIGRAMS[selectedHex.value.upperTrigram]
  const lowerTrigram = TRIGRAMS[selectedHex.value.lowerTrigram]
  
  if (!upperTrigram || !lowerTrigram) return null
  
  const isUpperLine = position > 3
  const lineIndexInTrigram = (position - 1) % 3
  
  let changedUpperId = selectedHex.value.upperTrigram
  let changedLowerId = selectedHex.value.lowerTrigram
  let changedTrigramInfo = ''
  
  if (isUpperLine) {
    const upperLines = [...upperTrigram.lines]
    const originalYinYang = upperLines[lineIndexInTrigram] === 1 ? '阳' : '阴'
    upperLines[lineIndexInTrigram] = upperLines[lineIndexInTrigram] === 1 ? 0 : 1
    const newYinYang = upperLines[lineIndexInTrigram] === 1 ? '阳' : '阴'
    
    const changedTrigram = findTrigramByLines(upperLines)
    if (changedTrigram) {
      changedUpperId = changedTrigram.id
      changedTrigramInfo = `上卦${upperTrigram.name}之${lineIndexInTrigram === 0 ? '初' : lineIndexInTrigram === 1 ? '二' : '上'}爻由${originalYinYang}变${newYinYang}，化为${changedTrigram.name}卦。`
    }
  } else {
    const lowerLines = [...lowerTrigram.lines]
    const originalYinYang = lowerLines[lineIndexInTrigram] === 1 ? '阳' : '阴'
    lowerLines[lineIndexInTrigram] = lowerLines[lineIndexInTrigram] === 1 ? 0 : 1
    const newYinYang = lowerLines[lineIndexInTrigram] === 1 ? '阳' : '阴'
    
    const changedTrigram = findTrigramByLines(lowerLines)
    if (changedTrigram) {
      changedLowerId = changedTrigram.id
      changedTrigramInfo = `下卦${lowerTrigram.name}之${lineIndexInTrigram === 0 ? '初' : lineIndexInTrigram === 1 ? '二' : '上'}爻由${originalYinYang}变${newYinYang}，化为${changedTrigram.name}卦。`
    }
  }
  
  const changedHexagram = getHexagramByTrigrams(changedUpperId, changedLowerId)
  
  return {
    description: changedTrigramInfo,
    changedHexagram: changedHexagram ? {
      name: changedHexagram.name,
      symbol: changedHexagram.symbol
    } : null
  }
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
