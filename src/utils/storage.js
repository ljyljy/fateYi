const HISTORY_KEY = 'fateYi_history'
const USER_KEY = 'fateYi_currentUser'

export function getCurrentUser() {
  try {
    return localStorage.getItem(USER_KEY) || ''
  } catch {
    return ''
  }
}

export function setCurrentUser(username) {
  try {
    if (username) {
      localStorage.setItem(USER_KEY, username)
    } else {
      localStorage.removeItem(USER_KEY)
    }
  } catch (e) {
    console.warn('无法保存用户名:', e)
  }
}

export function getHistory(username) {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    if (!data) return []
    const allHistory = JSON.parse(data)
    if (username) {
      return allHistory[username] || []
    }
    return allHistory
  } catch {
    return []
  }
}

export function saveDivinationResult(username, result) {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    let allHistory = data ? JSON.parse(data) : {}
    
    if (!allHistory[username]) {
      allHistory[username] = []
    }
    
    allHistory[username].unshift(result)
    
    if (allHistory[username].length > 100) {
      allHistory[username] = allHistory[username].slice(0, 100)
    }
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(allHistory))
    return true
  } catch (e) {
    console.warn('无法保存占卜结果:', e)
    return false
  }
}

export function deleteHistoryItem(username, id) {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    if (!data) return false
    
    let allHistory = JSON.parse(data)
    if (allHistory[username]) {
      allHistory[username] = allHistory[username].filter(item => item.id !== id)
      localStorage.setItem(HISTORY_KEY, JSON.stringify(allHistory))
      return true
    }
    return false
  } catch {
    return false
  }
}

export function updateHistoryComment(username, id, comment) {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    if (!data) return false
    
    let allHistory = JSON.parse(data)
    if (allHistory[username]) {
      const itemIndex = allHistory[username].findIndex(item => item.id === id)
      if (itemIndex !== -1) {
        allHistory[username][itemIndex].comment = comment
        allHistory[username][itemIndex].commentUpdatedAt = new Date().toISOString()
        localStorage.setItem(HISTORY_KEY, JSON.stringify(allHistory))
        return true
      }
    }
    return false
  } catch {
    return false
  }
}

export function getSharedResult(id) {
  try {
    const SHARE_KEY = 'fateYi_shared'
    const data = localStorage.getItem(SHARE_KEY)
    if (!data) return null
    const sharedData = JSON.parse(data)
    return sharedData[id] || null
  } catch {
    return null
  }
}

export function saveSharedResult(result) {
  try {
    const SHARE_KEY = 'fateYi_shared'
    const data = localStorage.getItem(SHARE_KEY)
    let sharedData = data ? JSON.parse(data) : {}
    sharedData[result.id] = result
    localStorage.setItem(SHARE_KEY, JSON.stringify(sharedData))
    return result.id
  } catch {
    return null
  }
}
