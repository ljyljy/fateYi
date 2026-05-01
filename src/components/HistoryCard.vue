<template>
  <div class="ancient-card p-4 sm:p-5 hover:shadow-lg transition-shadow duration-300">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0" @click="$emit('view', item)">
        <div class="cursor-pointer group">
          <p class="text-sm text-inkLight truncate mb-1 group-hover:text-cinnabar transition-colors">
            Q: {{ item.question }}
          </p>
          <div class="flex items-center gap-3">
            <span class="font-serif font-semibold text-ink">{{ item.hexagram?.name }}</span>
            <span class="text-2xl">{{ item.hexagram?.symbol }}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-2 text-xs text-inkLight">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ formatTime(item.timestamp) }}
        </div>
        <div v-if="item.comment" class="mt-2 p-2 bg-paper/50 rounded text-xs text-inkLight border-l-2 border-gold/50">
          <span class="text-gold">📝</span> {{ truncateComment(item.comment) }}
        </div>
      </div>

      <div class="flex flex-col gap-1.5 shrink-0">
        <button
          @click="$emit('view', item)"
          class="p-1.5 rounded hover:bg-cinnabar/10 text-inkLight hover:text-cinnabar transition-colors"
          title="查看详情"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
        </button>
        <button
          v-if="showShare"
          @click="$emit('share', item)"
          class="p-1.5 rounded hover:bg-gold/10 text-inkLight hover:text-gold transition-colors"
          title="分享"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
          </svg>
        </button>
        <button
          v-if="showDelete"
          @click="$emit('delete', item.id)"
          class="p-1.5 rounded hover:bg-red-50 text-inkLight hover:text-red-500 transition-colors"
          title="删除"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  showShare: {
    type: Boolean,
    default: true
  },
  showDelete: {
    type: Boolean,
    default: true
  }
})

defineEmits(['view', 'share', 'delete'])

function formatTime(timestamp) {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  return date.toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function truncateComment(comment) {
  if (!comment) return ''
  return comment.length > 30 ? comment.slice(0, 30) + '...' : comment
}
</script>
