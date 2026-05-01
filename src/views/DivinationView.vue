<template>
  <div class="min-h-screen bg-paper">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="text-center mb-8">
        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">☯ 高岛易断占卜</h1>
        <p class="text-sm text-inkLight">诚心问卜，得见天机</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div class="space-y-5">
          <div class="ancient-card p-5 sm:p-6">
            <label class="block text-sm font-medium text-cinnabar mb-2">请输入您想问的问题</label>
            <textarea
              v-model="question"
              rows="3"
              placeholder="例如：我的工作前景如何？近期运势怎样？"
              class="w-full px-4 py-3 border border-border rounded-ancient bg-paper text-ink placeholder:text-inkLight/40 focus:outline-none focus:border-cinnabar/50 focus:ring-1 focus:ring-cinnabar/20 resize-none transition-all font-serif"
            />

            <div class="mt-4 flex gap-2">
              <button
                @click="mode = 'random'"
                class="flex-1 px-4 py-2 rounded-ancient text-sm font-medium transition-all duration-200"
                :class="mode === 'random'
                  ? 'bg-cinnabar text-white shadow-md'
                  : 'bg-paper border border-border text-inkLight hover:border-cinnabar/30'"
              >
                🎲 随机起卦
              </button>
              <button
                @click="mode = 'manual'"
                class="flex-1 px-4 py-2 rounded-ancient text-sm font-medium transition-all duration-200"
                :class="mode === 'manual'
                  ? 'bg-cinnabar text-white shadow-md'
                  : 'bg-paper border border-border text-inkLight hover:border-cinnabar/30'"
              >
                ✋ 手动指定
              </button>
            </div>

            <div v-if="mode === 'manual'" class="mt-4 p-4 bg-paper rounded-ancient border border-border/50 space-y-3">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-semibold text-cinnabar">六爻数值（从上到下）</span>
                <button
                  @click="fillRandomLines"
                  class="text-xs text-gold hover:text-gold/80 transition-colors"
                >
                  🎲 随机填入
                </button>
              </div>

              <div
                v-for="(line, idx) in manualLines"
                :key="idx"
                class="flex items-center gap-2 sm:gap-3"
              >
                <span class="text-xs font-medium text-inkLight w-8 shrink-0 text-right">
                  {{ lineLabels[5 - idx] }}
                </span>

                <div class="flex gap-1.5 flex-1">
                  <button
                    v-for="opt in LINE_OPTIONS"
                    :key="opt.value"
                    @click="manualLines[idx] = opt.value"
                    class="flex-1 min-w-0 px-1.5 py-1.5 rounded text-[11px] sm:text-xs font-semibold transition-all duration-150 border"
                    :class="getLineBtnClass(line, opt)"
                  >
                    <span class="block">{{ opt.label }}</span>
                    <span class="block text-[9px] opacity-70 scale-90 origin-left">{{ opt.desc.slice(0, 3) }}</span>
                  </button>
                </div>

                <div
                  class="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[9px] font-bold transition-colors duration-200"
                  :class="isLineMoving(line) ? 'bg-cinnabar text-white animate-pulse' : 'bg-border/50 text-transparent'"
                >
                  动
                </div>
              </div>

              <div class="pt-2 mt-1 border-t border-border/30 flex items-center justify-between text-[10px] text-inkLight">
                <span>上卦：{{ upperTrigramName }} · 下卦：{{ lowerTrigramName }}</span>
                <span>动爻数：{{ movingCount }}</span>
              </div>
            </div>

            <button
              @click="handleDivine"
              :disabled="isDivining || !question.trim()"
              class="ancient-btn w-full mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="isDivining" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              <span v-if="!isDivining">{{ mode === 'random' ? '开始占卜 ☯' : '确认卦象 ☯' }}</span>
              <span v-else>{{ mode === 'random' ? '正在起卦...' : '正在解析...' }}</span>
            </button>
          </div>

          <div v-if="hasResult" class="flex gap-3">
            <button
              @click="reset"
              class="flex-1 px-4 py-2.5 rounded-ancient border border-border text-sm font-medium text-inkLight hover:bg-border/20 transition-colors"
            >
              重新占卜
            </button>
            <button
              @click="handleShare"
              class="flex-1 px-4 py-2.5 rounded-ancient bg-gold/10 border border-gold/30 text-sm font-medium text-gold hover:bg-gold/20 transition-colors"
            >
              分享结果
            </button>
          </div>

          <MovingLineDisplay :moving-line="result?.movingLine" />

          <InterpretationCard
            v-if="result?.changedHexagram"
            icon="🔄"
            title="之卦（变卦）"
            :subtitle="result.changedHexagram.name"
            :judgment="result.changedHexagram.judgment"
            :interpretation="result.changedHexagram.interpretation"
            :final-text="result.changedHexagram.finalInterpretation"
          />
        </div>

        <div class="space-y-5">
          <transition name="fade-slide" mode="out-in">
            <div v-if="hasResult" key="result" class="space-y-5">
              <HexagramDisplay
                :hexagram="result.hexagram"
                :moving-position="result.movingLine?.position"
              />

              <InterpretationCard
                icon="📖"
                title="本卦详解"
                :subtitle="result.hexagram?.name"
                :judgment="result.hexagram?.judgment"
                :interpretation="result.hexagram?.interpretation"
              />
            </div>
            <div v-else key="empty" class="ancient-card p-10 sm:p-16 text-center">
              <div class="text-6xl mb-4 opacity-30">䷀</div>
              <p class="font-serif text-lg text-inkLight/60">输入问题后点击「开始占卜」</p>
              <p class="text-xs text-inkLight/40 mt-2">卦象将在此处显示</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDivination } from '../composables/useDivination.js'
import { getCurrentUser } from '../utils/storage.js'
import { useRouter } from 'vue-router'
import { LINE_OPTIONS, generateRandomLines, isMovingLine as checkMovingLine, lineToBinary } from '../utils/hexagramUtils.js'
import { findTrigramByLines } from '../data/trigrams.js'

const router = useRouter()
const { question, result, isDivining, hasResult, divine, divineManual, reset, shareResult } = useDivination()

const mode = ref('random')
const manualLines = ref([7, 7, 7, 7, 7, 7])

const lineLabels = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻']

function fillRandomLines() {
  manualLines.value = generateRandomLines()
}

function getLineBtnClass(currentVal, opt) {
  if (currentVal === opt.value) {
    return opt.moving
      ? 'bg-cinnabar text-white border-cinnabar shadow-sm'
      : 'bg-yang text-white border-yang shadow-sm'
  }
  return opt.type === 'yang'
    ? 'bg-paper border-border text-inkLight hover:border-yang/40'
    : 'bg-paper border-border text-inkLight hover:border-yin/40'
}

function isLineMoving(line) {
  return checkMovingLine(line)
}

const upperTrigramName = computed(() => {
  const upperBin = manualLines.value.slice(0, 3).map(l => lineToBinary(l)).reverse()
  const tri = findTrigramByLines(upperBin)
  return tri ? tri.name : '--'
})

const lowerTrigramName = computed(() => {
  const lowerBin = manualLines.value.slice(3, 6).map(l => lineToBinary(l)).reverse()
  const tri = findTrigramByLines(lowerBin)
  return tri ? tri.name : '--'
})

const movingCount = computed(() => {
  return manualLines.value.filter(l => checkMovingLine(l)).length
})

function handleDivine() {
  const user = getCurrentUser()
  if (mode.value === 'manual') {
    divineManual(user, [...manualLines.value])
  } else {
    divine(user)
  }
}

function handleShare() {
  const shareId = shareResult()
  if (shareId) {
    router.push({ name: 'share', params: { id: shareId } })
  }
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
