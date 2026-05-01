import { ref, computed } from 'vue'
import { 
  getHistory, 
  deleteHistoryItem, 
  updateHistoryComment, 
  getCurrentUser, 
  setCurrentUser,
  exportHistory,
  importHistory,
  downloadHistoryFile
} from '../utils/storage.js'

export function useHistory() {
  const currentUser = ref(getCurrentUser())
  const historyList = ref([])
  const filter = ref('all')
  
  const filteredHistory = computed(() => {
    let list = historyList.value
    
    if (filter.value !== 'all') {
      const now = new Date()
      list = list.filter(item => {
        const itemDate = new Date(item.timestamp)
        const diffDays = Math.floor((now - itemDate) / (1000 * 60 * 60 * 24))
        
        switch (filter.value) {
          case 'today': return diffDays < 1
          case 'week': return diffDays < 7
          case 'month': return diffDays < 30
          default: return true
        }
      })
    }
    
    return list
  })
  
  function loadHistory(username) {
    if (username) {
      currentUser.value = username
      setCurrentUser(username)
    }
    historyList.value = getHistory(currentUser.value)
  }
  
  function removeItem(id) {
    if (deleteHistoryItem(currentUser.value, id)) {
      historyList.value = historyList.value.filter(item => item.id !== id)
    }
  }
  
  function updateComment(id, comment) {
    if (updateHistoryComment(currentUser.value, id, comment)) {
      const itemIndex = historyList.value.findIndex(item => item.id === id)
      if (itemIndex !== -1) {
        historyList.value[itemIndex].comment = comment
        historyList.value[itemIndex].commentUpdatedAt = new Date().toISOString()
      }
      return true
    }
    return false
  }
  
  function setFilter(value) {
    filter.value = value
  }
  
  function exportData() {
    return exportHistory(currentUser.value)
  }
  
  function downloadExport() {
    return downloadHistoryFile(currentUser.value)
  }
  
  function importData(jsonData, mode = 'merge') {
    const result = importHistory(currentUser.value, jsonData, mode)
    if (result.success) {
      historyList.value = getHistory(currentUser.value)
    }
    return result
  }
  
  return {
    currentUser,
    historyList,
    filteredHistory,
    filter,
    loadHistory,
    removeItem,
    updateComment,
    setFilter,
    exportData,
    downloadExport,
    importData
  }
}
