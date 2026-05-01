<template>
  <div class="min-h-screen bg-paper">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div class="text-center mb-8">
        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">占卜历史</h1>
        <p class="text-sm text-inkLight">回顾您的占卜记录</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 mb-6">
        <div class="flex-1 relative">
          <input
            v-model="usernameInput"
            type="text"
            placeholder="输入用户名查看历史..."
            class="w-full pl-10 pr-4 py-2.5 border border-border rounded-ancient bg-card focus:outline-none focus:border-cinnabar/50 transition-colors"
            @keyup.enter="loadUserHistory"
          />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-inkLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <button
          @click="loadUserHistory"
          class="px-5 py-2.5 rounded-ancient ancient-btn text-sm"
        >
          查询
        </button>
      </div>

      <div v-if="historyList.length > 0" class="flex gap-2 mb-6 flex-wrap">
        <button
          v-for="f in filters"
          :key="f.key"
          @click="setFilter(f.key)"
          class="px-3 py-1 rounded-full text-xs font-medium transition-all"
          :class="filter === f.key
            ? 'bg-cinnabar text-white'
            : 'bg-card border border-border text-inkLight hover:border-cinnabar/30'"
        >
          {{ f.label }}
        </button>
        <span class="ml-auto text-xs text-inkLight self-center">
          共 {{ filteredHistory.length }} 条记录
        </span>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="filteredHistory.length > 0" key="has-data" class="space-y-3">
          <HistoryCard
            v-for="item in filteredHistory"
            :key="item.id"
            :item="item"
            @view="viewDetail"
            @share="handleShare"
            @delete="handleDelete"
          />
        </div>
        <div v-else-if="currentUser" key="empty-user" class="ancient-card p-12 text-center">
          <div class="text-4xl mb-3 opacity-30">📜</div>
          <p class="font-serif text-inkLight">「{{ currentUser }}」暂无历史记录</p>
          <router-link
            to="/"
            class="inline-block mt-4 px-5 py-2 rounded-ancient ancient-btn text-sm"
          >
            去占卜
          </router-link>
        </div>
        <div v-else key="empty" class="ancient-card p-12 text-center">
          <div class="text-4xl mb-3 opacity-30">🔍</div>
          <p class="font-serif text-inkLight">请输入用户名查询历史记录</p>
        </div>
      </transition>

      <transition name="fade-slide">
        <div
          v-if="detailItem"
          class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
          @click.self="detailItem = null"
        >
          <div class="ancient-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              @click="detailItem = null"
              class="absolute top-3 right-3 p-1.5 rounded hover:bg-border/20 transition-colors"
            >
              <svg class="w-5 h-5 text-inkLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div class="mb-4 pb-3 border-b border-border/50">
              <p class="text-sm text-cinnabar font-medium">问题</p>
              <p class="font-serif text-lg text-ink mt-1">{{ detailItem.question }}</p>
            </div>

            <HexagramDisplay
              :hexagram="detailItem.hexagram"
              :moving-position="detailItem.movingLine?.position"
            />

            <div v-if="detailItem.movingLine" class="space-y-3 mb-4">
              <MovingLineDisplay :moving-line="detailItem.movingLine" />
              
              <div v-if="detailItem.movingLine.positionMeaning" class="p-3 bg-cinnabar/5 rounded-ancient border border-cinnabar/10">
                <div class="text-xs font-semibold text-cinnabar mb-1">📍 动爻位置解读</div>
                <p class="text-sm text-ink leading-relaxed">{{ detailItem.movingLine.positionMeaning }}</p>
              </div>

              <div v-if="detailItem.movingLine.changeMeaning" class="p-3 bg-cinnabar/5 rounded-ancient border border-cinnabar/10">
                <div class="text-xs font-semibold text-cinnabar mb-1">🔄 动爻变化</div>
                <p class="text-sm text-ink leading-relaxed">{{ detailItem.movingLine.changeMeaning }}</p>
              </div>
            </div>

            <InterpretationCard
              icon="📖"
              title="本卦解释"
              :judgment="detailItem.hexagram?.judgment"
              :interpretation="detailItem.hexagram?.interpretation"
            />

            <div v-if="detailItem.changedHexagram" class="space-y-3 mt-4">
              <div class="p-4 bg-paper rounded-ancient border-l-4 border-l-cinnabar">
                <div class="text-xs font-semibold text-cinnabar mb-2">🔄 之卦 · {{ detailItem.changedHexagram.name }}</div>
                <p class="font-serif text-sm text-ink">{{ detailItem.changedHexagram.judgment }}</p>
              </div>

              <div v-if="detailItem.changedHexagram.image" class="p-4 bg-paper rounded-ancient border-l-4 border-l-cinnabar">
                <div class="text-xs font-semibold text-cinnabar mb-2">📜 之卦象辞</div>
                <p class="font-serif text-sm text-ink leading-relaxed">{{ detailItem.changedHexagram.image }}</p>
              </div>

              <InterpretationCard
                v-if="detailItem.changedHexagram.interpretation"
                icon="🔮"
                title="之卦解释"
                :interpretation="detailItem.changedHexagram.interpretation"
              />
            </div>

            <div v-if="detailItem.finalReading" class="mt-4 p-4 bg-gradient-to-r from-cinnabar/5 to-gold/5 rounded-ancient border border-border/50">
              <div class="text-xs font-semibold text-cinnabar mb-2">🔮 终卦解读</div>
              <p class="text-sm text-ink leading-relaxed mb-2">{{ detailItem.finalReading?.summary }}</p>
              <p class="text-sm text-inkLight">{{ detailItem.finalReading?.advice }}</p>
              <p class="text-sm text-inkLight mt-1">{{ detailItem.finalReading?.outlook }}</p>
            </div>

            <div class="mt-6 pt-4 border-t border-border/50">
              <div class="flex items-center justify-between mb-3">
                <div class="text-xs font-semibold text-ink">📝 心得笔记</div>
                <button
                  v-if="!isEditingComment && detailItem.comment"
                  @click="startEditComment"
                  class="text-xs text-cinnabar hover:underline"
                >
                  编辑
                </button>
              </div>
              
              <div v-if="!isEditingComment">
                <div v-if="detailItem.comment" class="p-3 bg-paper rounded-ancient border border-border/30">
                  <p class="text-sm text-ink leading-relaxed whitespace-pre-wrap">{{ detailItem.comment }}</p>
                  <p v-if="detailItem.commentUpdatedAt" class="text-xs text-inkLight mt-2">
                    更新于 {{ formatTime(detailItem.commentUpdatedAt) }}
                  </p>
                </div>
                <button
                  v-else
                  @click="startEditComment"
                  class="w-full p-3 text-left text-sm text-inkLight bg-paper rounded-ancient border border-dashed border-border hover:border-cinnabar/30 transition-colors"
                >
                  + 添加心得笔记...
                </button>
              </div>
              
              <div v-else class="space-y-3">
                <textarea
                  v-model="commentInput"
                  rows="4"
                  placeholder="记录您对这次占卜的心得体会..."
                  class="w-full px-3 py-2 text-sm border border-border rounded-ancient bg-paper text-ink placeholder:text-inkLight/40 focus:outline-none focus:border-cinnabar/50 resize-none transition-all"
                />
                <div class="flex gap-2 justify-end">
                  <button
                    @click="cancelEditComment"
                    class="px-3 py-1.5 text-xs rounded-ancient border border-border text-inkLight hover:bg-border/20 transition-colors"
                  >
                    取消
                  </button>
                  <button
                    @click="saveComment"
                    class="px-3 py-1.5 text-xs rounded-ancient bg-cinnabar text-white hover:bg-cinnabar/90 transition-colors"
                  >
                    保存
                  </button>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHistory } from '../composables/useHistory.js'
import { saveSharedResult, getCurrentUser } from '../utils/storage.js'
import HistoryCard from '../components/HistoryCard.vue'
import HexagramDisplay from '../components/HexagramDisplay.vue'
import MovingLineDisplay from '../components/MovingLineDisplay.vue'
import InterpretationCard from '../components/InterpretationCard.vue'

const router = useRouter()
const {
  currentUser,
  historyList,
  filteredHistory,
  filter,
  loadHistory,
  removeItem,
  updateComment,
  setFilter
} = useHistory()

const usernameInput = ref('')
const detailItem = ref(null)
const isEditingComment = ref(false)
const commentInput = ref('')

const filters = [
  { key: 'all', label: '全部' },
  { key: 'today', label: '今天' },
  { key: 'week', label: '本周' },
  { key: 'month', label: '本月' }
]

onMounted(() => {
  const user = getCurrentUser()
  if (user) {
    usernameInput.value = user
    loadHistory(user)
  }
})

function loadUserHistory() {
  if (usernameInput.value.trim()) {
    loadHistory(usernameInput.value.trim())
  }
}

function viewDetail(item) {
  detailItem.value = item
  isEditingComment.value = false
  commentInput.value = item.comment || ''
}

function handleShare(item) {
  const id = saveSharedResult(item)
  if (id) {
    router.push({ name: 'share', params: { id } })
  }
}

function handleDelete(id) {
  removeItem(id)
  if (detailItem.value?.id === id) {
    detailItem.value = null
  }
}

function startEditComment() {
  isEditingComment.value = true
  commentInput.value = detailItem.value?.comment || ''
}

function cancelEditComment() {
  isEditingComment.value = false
  commentInput.value = ''
}

function saveComment() {
  if (!detailItem.value) return
  
  const comment = commentInput.value.trim()
  if (updateComment(detailItem.value.id, comment)) {
    detailItem.value.comment = comment
    detailItem.value.commentUpdatedAt = new Date().toISOString()
  }
  isEditingComment.value = false
}

function formatTime(timestamp) {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
