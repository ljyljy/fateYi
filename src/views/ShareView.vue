<template>
  <div class="min-h-screen bg-paper">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div v-if="shareData" class="space-y-6">
        <div class="text-center mb-8">
          <p class="text-sm text-cinnabar font-medium mb-2">🎋 占卜结果分享</p>
          <h1 class="font-serif text-2xl font-bold text-ink">高岛易断占卜</h1>
        </div>

        <div class="ancient-card p-6 sm:p-8 border-t-4 border-t-gold">
          <div class="space-y-5">
            <div class="pb-4 border-b border-border/50">
              <div class="text-xs font-medium text-inkLight mb-1">问题</div>
              <p class="font-serif text-lg text-ink">{{ shareData.question }}</p>
              <div class="text-xs text-inkLight mt-2 flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ formatTime(shareData.timestamp) }}
              </div>
            </div>

            <div class="text-center py-4">
              <div class="text-7xl mb-3">{{ shareData.hexagram?.symbol }}</div>
              <h2 class="font-serif text-2xl font-bold text-ink">{{ shareData.hexagram?.name }}</h2>

              <div class="flex justify-center gap-8 mt-5">
                <div class="text-center">
                  <div class="text-xs text-inkLight mb-1">上卦</div>
                  <div class="text-3xl">{{ shareData.hexagram?.upperTrigram?.symbol }}</div>
                  <div class="text-sm font-serif mt-1">{{ shareData.hexagram?.upperTrigram?.name }}</div>
                </div>
                <div class="text-center">
                  <div class="text-xs text-inkLight mb-1">下卦</div>
                  <div class="text-3xl">{{ shareData.hexagram?.lowerTrigram?.symbol }}</div>
                  <div class="text-sm font-serif mt-1">{{ shareData.hexagram?.lowerTrigram?.name }}</div>
                </div>
              </div>
            </div>

            <div v-if="shareData.movingLine" class="p-4 bg-cinnabar/5 rounded-ancient border border-cinnabar/10">
              <div class="text-xs font-semibold text-cinnabar mb-1">⚡ 动爻 · {{ shareData.movingLine.name }}</div>
              <p class="font-serif text-sm text-ink mt-1">{{ shareData.movingLine.text }}</p>
            </div>

            <div class="p-4 bg-paper rounded-ancient">
              <div class="text-xs font-semibold text-gold mb-1">📖 卦辞</div>
              <p class="font-serif text-sm text-ink leading-relaxed">{{ shareData.hexagram?.judgment }}</p>
            </div>

            <div v-if="shareData.hexagram?.interpretation?.summary" class="p-4 bg-gradient-to-r from-cinnabar/5 to-gold/5 rounded-ancient">
              <div class="text-xs font-semibold text-cinnabar mb-1">✨ 高岛易断</div>
              <p class="text-sm text-ink leading-relaxed">{{ shareData.hexagram.interpretation.summary }}</p>
            </div>

            <div v-if="shareData.changedHexagram" class="p-4 bg-paper rounded-ancient border-l-4 border-l-gold">
              <div class="text-xs font-semibold text-gold mb-1">🔄 之卦 · {{ shareData.changedHexagram.name }}</div>
              <p class="font-serif text-sm text-ink mt-1">{{ shareData.changedHexagram.judgment }}</p>
            </div>

            <div class="pt-4 border-t border-border/50 text-center">
              <p class="text-xs text-inkLight">— 来自高岛易断占卜 —</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-4">
          <router-link
            to="/"
            class="px-6 py-2.5 rounded-ancient ancient-btn text-sm inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            开始占卜
          </router-link>
        </div>
      </div>

      <div v-else class="ancient-card p-16 text-center">
        <div class="text-5xl mb-4 opacity-30">🔗</div>
        <h2 class="font-serif text-xl text-ink mb-2">分享链接无效或已过期</h2>
        <p class="text-sm text-inkLight mb-6">该分享结果可能已被清除</p>
        <router-link
          to="/"
          class="inline-block px-6 py-2.5 rounded-ancient ancient-btn text-sm"
        >
          返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getSharedResult } from '../utils/storage.js'

const route = useRoute()
const shareData = ref(null)

onMounted(() => {
  const id = route.params.id
  if (id) {
    const data = getSharedResult(id)
    if (data) {
      shareData.value = data
    }
  }
})

function formatTime(timestamp) {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
