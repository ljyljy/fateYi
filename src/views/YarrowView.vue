<template>
  <div class="min-h-screen bg-paper">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div class="text-center mb-8">
        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">🌿 蓍草起卦</h1>
        <p class="text-sm text-inkLight">大衍之数五十，其用四十有九</p>
      </div>

      <div class="space-y-6">
        <div class="ancient-card p-5 sm:p-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-6 h-6 rounded-full bg-cinnabar text-white text-xs flex items-center justify-center font-bold">1</span>
            <h2 class="font-serif text-lg font-semibold text-ink">诚心问卜</h2>
          </div>
          <textarea
            v-model="question"
            rows="3"
            placeholder="请输入您想问的问题..."
            class="w-full px-4 py-3 border border-border rounded-ancient bg-paper text-ink placeholder:text-inkLight/40 focus:outline-none focus:border-cinnabar/50 resize-none transition-all font-serif"
          />
        </div>

        <div class="ancient-card p-5 sm:p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-6 h-6 rounded-full bg-cinnabar text-white text-xs flex items-center justify-center font-bold">2</span>
            <h2 class="font-serif text-lg font-semibold text-ink">起卦取数</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <TrigramSelector
              v-model="upperNumber"
              label="上卦（外卦）"
              :min="1"
              :max="8"
            />
            <TrigramSelector
              v-model="lowerNumber"
              label="下卦（内卦）"
              :min="1"
              :max="8"
            />
            <TrigramSelector
              v-model="movingLine"
              label="动爻位置"
              :min="1"
              :max="6"
            />
          </div>

          <div class="p-3 bg-paper rounded-ancient border border-border/50">
            <div class="text-xs font-semibold text-cinnabar mb-2">先天八卦参考</div>
            <div class="flex flex-wrap justify-center gap-2 text-sm">
              <span v-for="(trigram, num) in XIAN_TIAN_BA_GUA" :key="num" class="flex items-center gap-1">
                <span class="font-bold text-ink">{{ num }}</span>
                <span class="text-lg">{{ trigram.symbol }}</span>
                <span class="text-inkLight">{{ trigram.name }}</span>
              </span>
            </div>
          </div>
        </div>

        <button
          @click="performDivination"
          :disabled="!question.trim() || isDivining"
          class="ancient-btn w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg v-if="isDivining" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <span v-if="!isDivining">确认起卦 ☯</span>
          <span v-else>正在解析...</span>
        </button>

        <transition name="fade-slide" mode="out-in">
          <div v-if="result" key="result" class="space-y-6">
            <div class="ancient-card p-5 sm:p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="w-6 h-6 rounded-full bg-cinnabar text-white text-xs flex items-center justify-center font-bold">3</span>
                <h2 class="font-serif text-lg font-semibold text-ink">卦象呈现</h2>
              </div>

              <div class="flex items-center justify-center gap-8 sm:gap-16">
                <div class="text-center">
                  <div class="text-xs text-inkLight mb-2">本卦</div>
                  <div class="text-5xl sm:text-6xl mb-2">{{ result.hexagram?.symbol }}</div>
                  <div class="font-serif text-xl font-bold text-ink">{{ result.hexagram?.name }}</div>
                  <div v-if="result.movingLine" class="text-xs text-cinnabar mt-1">
                    动爻: {{ result.movingLine.name }}
                  </div>
                </div>

                <div v-if="result.changedHexagram" class="text-3xl text-inkLight">→</div>

                <div v-if="result.changedHexagram" class="text-center">
                  <div class="text-xs text-inkLight mb-2">之卦（变卦）</div>
                  <div class="text-5xl sm:text-6xl mb-2">{{ result.changedHexagram.symbol }}</div>
                  <div class="font-serif text-xl font-bold text-ink">{{ result.changedHexagram.name }}</div>
                </div>
              </div>

              <div class="mt-6 flex justify-center gap-8 text-sm">
                <div class="text-center">
                  <div class="text-xs text-inkLight">上卦</div>
                  <div class="text-2xl">{{ result.hexagram?.upperTrigram?.symbol }}</div>
                  <div class="font-serif">{{ result.hexagram?.upperTrigram?.name }}</div>
                </div>
                <div class="text-center">
                  <div class="text-xs text-inkLight">下卦</div>
                  <div class="text-2xl">{{ result.hexagram?.lowerTrigram?.symbol }}</div>
                  <div class="font-serif">{{ result.hexagram?.lowerTrigram?.name }}</div>
                </div>
              </div>
            </div>

            <div class="ancient-card p-5 sm:p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="w-6 h-6 rounded-full bg-cinnabar text-white text-xs flex items-center justify-center font-bold">4</span>
                <h2 class="font-serif text-lg font-semibold text-ink">详细解读</h2>
              </div>

              <div class="space-y-4">
                <div class="p-4 bg-paper rounded-ancient border-l-4 border-l-gold">
                  <div class="text-xs font-semibold text-gold mb-2">📖 本卦卦辞</div>
                  <p class="font-serif text-ink leading-relaxed">{{ result.hexagram?.judgment }}</p>
                </div>

                <InterpretationCard
                  v-if="result.hexagram?.interpretation"
                  icon="✨"
                  title="本卦解释"
                  :interpretation="result.hexagram.interpretation"
                />

                <div v-if="result.movingLine" class="space-y-3">
                  <div class="p-4 bg-cinnabar/5 rounded-ancient border border-cinnabar/10">
                    <div class="text-xs font-semibold text-cinnabar mb-2">⚡ 动爻 · {{ result.movingLine.name }}</div>
                    <p class="font-serif text-sm text-ink mb-2">{{ result.movingLine.text }}</p>
                    <p class="text-sm text-inkLight">{{ result.movingLine.interpretation }}</p>
                  </div>
                  
                  <div class="p-4 bg-cinnabar/5 rounded-ancient border border-cinnabar/10">
                    <div class="text-xs font-semibold text-cinnabar mb-2">📍 动爻位置解读</div>
                    <p class="text-sm text-ink leading-relaxed">{{ result.movingLine?.positionMeaning }}</p>
                  </div>

                  <div class="p-4 bg-cinnabar/5 rounded-ancient border border-cinnabar/10">
                    <div class="text-xs font-semibold text-cinnabar mb-2">🔄 动爻变化</div>
                    <p class="text-sm text-ink leading-relaxed">{{ result.movingLine?.changeMeaning }}</p>
                  </div>
                </div>

                <div v-if="result.changedHexagram" class="space-y-3">
                  <div class="p-4 bg-paper rounded-ancient border-l-4 border-l-cinnabar">
                    <div class="text-xs font-semibold text-cinnabar mb-2">🔄 之卦卦辞 · {{ result.changedHexagram.name }}</div>
                    <p class="font-serif text-sm text-ink">{{ result.changedHexagram.judgment }}</p>
                  </div>

                  <div v-if="result.changedHexagram.image" class="p-4 bg-paper rounded-ancient border-l-4 border-l-cinnabar">
                    <div class="text-xs font-semibold text-cinnabar mb-2">📜 之卦象辞</div>
                    <p class="font-serif text-sm text-ink leading-relaxed">{{ result.changedHexagram.image }}</p>
                  </div>

                  <InterpretationCard
                    v-if="result.changedHexagram.interpretation"
                    icon="📜"
                    title="之卦解释"
                    :interpretation="result.changedHexagram.interpretation"
                  />
                </div>

                <div class="p-4 bg-gradient-to-r from-cinnabar/5 to-gold/5 rounded-ancient border border-border/50">
                  <div class="text-xs font-semibold text-cinnabar mb-2">📜 终卦解读</div>
                  <p class="text-sm text-ink leading-relaxed mb-2">{{ result.finalReading?.summary }}</p>
                  <p class="text-sm text-inkLight">{{ result.finalReading?.advice }}</p>
                  <p class="text-sm text-inkLight mt-1">{{ result.finalReading?.outlook }}</p>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <button
                @click="reset"
                class="flex-1 px-4 py-2.5 rounded-ancient border border-border text-sm font-medium text-inkLight hover:bg-border/20 transition-colors"
              >
                重新起卦
              </button>
              <button
                @click="handleShare"
                class="flex-1 px-4 py-2.5 rounded-ancient bg-gold/10 border border-gold/30 text-sm font-medium text-gold hover:bg-gold/20 transition-colors"
              >
                分享结果
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TrigramSelector from '../components/TrigramSelector.vue'
import InterpretationCard from '../components/InterpretationCard.vue'
import { XIAN_TIAN_BA_GUA, performYarrowDivination } from '../utils/yarrowUtils.js'
import { getCurrentUser, saveDivinationResult, saveSharedResult } from '../utils/storage.js'

const router = useRouter()

const question = ref('')
const upperNumber = ref(1)
const lowerNumber = ref(1)
const movingLine = ref(1)
const result = ref(null)
const isDivining = ref(false)

function performDivination() {
  if (!question.value.trim()) return

  isDivining.value = true

  setTimeout(() => {
    const divinationResult = performYarrowDivination(
      question.value.trim(),
      upperNumber.value,
      lowerNumber.value,
      movingLine.value
    )

    result.value = divinationResult

    const user = getCurrentUser()
    if (user && divinationResult) {
      saveDivinationResult(user, divinationResult)
    }

    isDivining.value = false
  }, 600)
}

function reset() {
  question.value = ''
  upperNumber.value = 1
  lowerNumber.value = 1
  movingLine.value = 1
  result.value = null
}

function handleShare() {
  if (!result.value) return
  const shareId = saveSharedResult(result.value)
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
  transform: translateY(16px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}
</style>
