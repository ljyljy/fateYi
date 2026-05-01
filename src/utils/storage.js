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

export function exportHistory(username) {
  try {
    const history = getHistory(username)
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      username,
      recordCount: history.length,
      records: history
    }
    return JSON.stringify(exportData, null, 2)
  } catch (e) {
    console.warn('导出历史记录失败:', e)
    return null
  }
}

export function importHistory(username, jsonData, mode = 'merge') {
  try {
    const importData = JSON.parse(jsonData)
    
    if (!importData.records || !Array.isArray(importData.records)) {
      return { success: false, error: '无效的数据格式' }
    }
    
    const data = localStorage.getItem(HISTORY_KEY)
    let allHistory = data ? JSON.parse(data) : {}
    
    if (!allHistory[username]) {
      allHistory[username] = []
    }
    
    let importedCount = 0
    let skippedCount = 0
    
    if (mode === 'replace') {
      allHistory[username] = importData.records
      importedCount = importData.records.length
    } else {
      const existingIds = new Set(allHistory[username].map(item => item.id))
      
      for (const record of importData.records) {
        if (!existingIds.has(record.id)) {
          allHistory[username].push(record)
          importedCount++
        } else {
          skippedCount++
        }
      }
      
      allHistory[username].sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      )
      
      if (allHistory[username].length > 100) {
        allHistory[username] = allHistory[username].slice(0, 100)
      }
    }
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(allHistory))
    
    return {
      success: true,
      importedCount,
      skippedCount,
      totalCount: allHistory[username].length
    }
  } catch (e) {
    console.warn('导入历史记录失败:', e)
    return { success: false, error: '解析数据失败，请检查文件格式' }
  }
}

export function downloadHistoryFile(username) {
  const jsonData = exportHistory(username)
  if (!jsonData) return false
  
  const blob = new Blob([jsonData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `fateYi_history_${username}_${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
  
  return true
}

export async function loadFromLocalFile() {
  try {
    const response = await fetch('/data/history.json')
    if (!response.ok) {
      console.log('未找到本地历史数据文件')
      return { success: false, reason: 'file_not_found' }
    }
    
    const localData = await response.json()
    
    if (!localData.users || Object.keys(localData.users).length === 0) {
      console.log('本地历史数据文件为空')
      return { success: false, reason: 'empty_data' }
    }
    
    const storageData = localStorage.getItem(HISTORY_KEY)
    let allHistory = storageData ? JSON.parse(storageData) : {}
    
    let mergedCount = 0
    let totalCount = 0
    
    for (const [username, records] of Object.entries(localData.users)) {
      if (!allHistory[username]) {
        allHistory[username] = []
      }
      
      const existingIds = new Set(allHistory[username].map(item => item.id))
      
      for (const record of records) {
        if (!existingIds.has(record.id)) {
          allHistory[username].push(record)
          mergedCount++
        }
      }
      
      allHistory[username].sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      )
      
      if (allHistory[username].length > 100) {
        allHistory[username] = allHistory[username].slice(0, 100)
      }
      
      totalCount += allHistory[username].length
    }
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(allHistory))
    
    console.log(`从本地文件加载了 ${mergedCount} 条新记录`)
    
    return {
      success: true,
      mergedCount,
      userCount: Object.keys(localData.users).length,
      totalCount
    }
  } catch (e) {
    console.warn('加载本地历史数据失败:', e)
    return { success: false, reason: 'load_error', error: e.message }
  }
}

export function exportAllHistory() {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    if (!data) return null
    
    const allHistory = JSON.parse(data)
    
    const exportData = {
      version: '1.0',
      lastUpdated: new Date().toISOString(),
      users: allHistory
    }
    
    return JSON.stringify(exportData, null, 2)
  } catch (e) {
    console.warn('导出所有历史记录失败:', e)
    return null
  }
}

export function downloadProjectDataFile() {
  const jsonData = exportAllHistory()
  if (!jsonData) return false
  
  const blob = new Blob([jsonData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'history.json'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
  
  return true
}

export function getStorageStats() {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    if (!data) return { userCount: 0, recordCount: 0 }
    
    const allHistory = JSON.parse(data)
    const userCount = Object.keys(allHistory).length
    let recordCount = 0
    
    for (const records of Object.values(allHistory)) {
      recordCount += records.length
    }
    
    return { userCount, recordCount }
  } catch {
    return { userCount: 0, recordCount: 0 }
  }
}
