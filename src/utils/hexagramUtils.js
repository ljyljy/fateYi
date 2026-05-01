import { TRIGRAMS, findTrigramByLines } from '../data/trigrams.js'
import { getHexagramByTrigrams } from '../data/hexagrams.js'

export function generateRandomLines() {
  const lines = []
  for (let i = 0; i < 6; i++) {
    lines.push(Math.floor(Math.random() * 4) + 6)
  }
  return lines
}

export function lineToBinary(line) {
  if (line === 6 || line === 8) return 0
  if (line === 7 || line === 9) return 1
  return 0
}

export function isMovingLine(line) {
  return line === 6 || line === 9
}

export function getLineName(line, position) {
  const isYin = line === 6 || line === 8
  const posNames = ['初', '二', '三', '四', '五', '上']
  const numNames = { 6: '六', 7: '七', 8: '八', 9: '九' }
  
  if (isYin) {
    return `${posNames[position - 1]}${numNames[line]}`
  }
  return `${posNames[position - 1]}${numNames[line]}`
}

function linesToTrigram(lines3) {
  const binaryLines = lines3.map(l => lineToBinary(l))
  return findTrigramByLines(binaryLines)
}

export function calculateHexagramResult(lines) {
  const upperLinesRaw = lines.slice(0, 3)
  const lowerLinesRaw = lines.slice(3, 6)
  
  const upperBinary = upperLinesRaw.map(l => lineToBinary(l)).reverse()
  const lowerBinary = lowerLinesRaw.map(l => lineToBinary(l)).reverse()
  
  const upperTrigramData = findTrigramByLines(upperBinary)
  const lowerTrigramData = findTrigramByLines(lowerBinary)
  
  const hexagram = getHexagramByTrigrams(upperTrigramData?.id, lowerTrigramData?.id)
  
  let movingLineInfo = null
  const movingPositions = []
  
  lines.forEach((line, idx) => {
    if (isMovingLine(line)) {
      movingPositions.push({
        position: idx + 1,
        value: line,
        name: getLineName(line, idx + 1)
      })
    }
  })
  
  if (movingPositions.length > 0) {
    const primaryMoving = movingPositions[0]
    const pos = primaryMoving.position
    
    if (hexagram && hexagram.lines && hexagram.lines[pos - 1]) {
      movingLineInfo = {
        position: pos,
        name: primaryMoving.name,
        text: hexagram.lines[pos - 1].text,
        interpretation: hexagram.lines[pos - 1].interpretation,
        isOldYin: primaryMoving.value === 6,
        isOldYang: primaryMoving.value === 9
      }
    } else {
      movingLineInfo = {
        position: pos,
        name: primaryMoving.name,
        text: '',
        interpretation: '动爻变化之象，宜审时度势。',
        isOldYin: primaryMoving.value === 6,
        isOldYang: primaryMoving.value === 9
      }
    }
  }
  
  let changedHexagram = null
  
  if (movingPositions.length > 0) {
    const changedLines = lines.map(line => {
      if (line === 6) return 7
      if (line === 9) return 8
      return line
    })
    
    const changedUpperBinary = changedLines.slice(0, 3).map(l => lineToBinary(l)).reverse()
    const changedLowerBinary = changedLines.slice(3, 6).map(l => lineToBinary(l)).reverse()
    
    const changedUpperTri = findTrigramByLines(changedUpperBinary)
    const changedLowerTri = findTrigramByLines(changedLowerBinary)
    
    changedHexagram = getHexagramByTrigrams(changedUpperTri?.id, changedLowerTri?.id)
    
    if (changedHexagram) {
      changedHexagram = {
        ...changedHexagram,
        upperTrigram: TRIGRAMS[changedUpperTri?.id] ? {
          name: TRIGRAMS[changedUpperTri.id].name,
          symbol: TRIGRAMS[changedUpperTri.id].symbol,
          nature: TRIGRAMS[changedUpperTri.id].nature
        } : null,
        lowerTrigram: TRIGRAMS[changedLowerTri?.id] ? {
          name: TRIGRAMS[changedLowerTri.id].name,
          symbol: TRIGRAMS[changedLowerTri.id].symbol,
          nature: TRIGRAMS[changedLowerTri.id].nature
        } : null,
        finalInterpretation: `由${hexagram?.name || '本卦'}变为${changedHexagram.name}，象征事物发展之趋向。`
      }
    }
  }
  
  return {
    hexagram: hexagram ? {
      ...hexagram,
      upperTrigram: upperTrigramData ? {
        name: upperTrigramData.name,
        symbol: upperTrigramData.symbol,
        nature: upperTrigramData.nature,
        attribute: upperTrigramData.attribute
      } : null,
      lowerTrigram: lowerTrigramData ? {
        name: lowerTrigramData.name,
        symbol: lowerTrigramData.symbol,
        nature: lowerTrigramData.nature,
        attribute: lowerTrigramData.attribute
      } : null,
      rawLines: lines
    } : null,
    movingLine: movingLineInfo,
    changedHexagram,
    allMovingPositions: movingPositions
  }
}

export function performDivination(question) {
  const lines = generateRandomLines()
  const result = calculateHexagramResult(lines)
  
  return {
    id: crypto.randomUUID(),
    question,
    timestamp: new Date().toISOString(),
    ...result
  }
}

export function performManualDivination(question, lines) {
  const validLines = lines.map(l => {
    const n = parseInt(l)
    return (n >= 6 && n <= 9) ? n : 7
  })
  const result = calculateHexagramResult(validLines)
  
  return {
    id: crypto.randomUUID(),
    question,
    timestamp: new Date().toISOString(),
    ...result
  }
}

export const LINE_OPTIONS = [
  { value: 6, label: '6', desc: '老阴（动爻）', type: 'yin', moving: true },
  { value: 7, label: '7', desc: '少阳（静爻）', type: 'yang', moving: false },
  { value: 8, label: '8', desc: '少阴（静爻）', type: 'yin', moving: false },
  { value: 9, label: '9', desc: '老阳（动爻）', type: 'yang', moving: true }
]
