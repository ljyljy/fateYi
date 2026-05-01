import { ref, computed } from 'vue'
import { performDivination, performManualDivination } from '../utils/hexagramUtils.js'
import { saveDivinationResult, saveSharedResult } from '../utils/storage.js'

export function useDivination() {
  const question = ref('')
  const result = ref(null)
  const isDivining = ref(false)
  
  const hasResult = computed(() => result.value !== null)
  
  async function divine(username) {
    if (!question.value.trim()) {
      return
    }
    
    isDivining.value = true
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    try {
      const divinationResult = performDivination(question.value.trim())
      result.value = divinationResult
      
      if (username) {
        saveDivinationResult(username, divinationResult)
      }
    } catch (error) {
      console.error('占卜出错:', error)
    } finally {
      isDivining.value = false
    }
  }

  async function divineManual(username, lines) {
    if (!question.value.trim()) return
    if (!lines || lines.length !== 6) return
    
    isDivining.value = true
    
    await new Promise(resolve => setTimeout(resolve, 600))
    
    try {
      const divinationResult = performManualDivination(question.value.trim(), lines)
      result.value = divinationResult
      
      if (username) {
        saveDivinationResult(username, divinationResult)
      }
    } catch (error) {
      console.error('手动占卜出错:', error)
    } finally {
      isDivining.value = false
    }
  }
  
  function reset() {
    question.value = ''
    result.value = null
  }
  
  function shareResult() {
    if (!result.value) return null
    return saveSharedResult(result.value)
  }
  
  return {
    question,
    result,
    isDivining,
    hasResult,
    divine,
    divineManual,
    reset,
    shareResult
  }
}
