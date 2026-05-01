import { TRIGRAMS } from '../data/trigrams.js'
import { getHexagramByTrigrams } from '../data/hexagrams.js'

export const XIAN_TIAN_BA_GUA = {
  1: { name: '乾', symbol: '☰', nature: '天', id: 'qian', lines: [1, 1, 1] },
  2: { name: '兑', symbol: '☱', nature: '泽', id: 'dui', lines: [1, 1, 0] },
  3: { name: '离', symbol: '☲', nature: '火', id: 'li', lines: [1, 0, 1] },
  4: { name: '震', symbol: '☳', nature: '雷', id: 'zhen', lines: [1, 0, 0] },
  5: { name: '巽', symbol: '☴', nature: '风', id: 'xun', lines: [0, 1, 1] },
  6: { name: '坎', symbol: '☵', nature: '水', id: 'kan', lines: [0, 1, 0] },
  7: { name: '艮', symbol: '☶', nature: '山', id: 'gen', lines: [0, 0, 1] },
  8: { name: '坤', symbol: '☷', nature: '地', id: 'kun', lines: [0, 0, 0] }
}

export function getTrigramByXianTianNumber(num) {
  return XIAN_TIAN_BA_GUA[num] || null
}

export function getLineNameByPosition(position, isYang) {
  const posNames = ['初', '二', '三', '四', '五', '上']
  return isYang ? `${posNames[position - 1]}九` : `${posNames[position - 1]}六`
}

export function getPositionMeaning(position, hexagramName) {
  const positionMeanings = {
    1: '初爻为卦之始，象征事物萌芽阶段。处于潜伏、积蓄力量之时，宜韬光养晦，不宜轻举妄动。',
    2: '二爻居下卦之中，得中正之位。象征事物发展中正平稳，宜守正待时，循序渐进。',
    3: '三爻居下卦之终，处内外卦交界。象征事物将变未变之际，宜谨慎行事，警惕危机。',
    4: '四爻居上卦之始，近君之位。象征进入新的阶段，宜审时度势，把握机遇。',
    5: '五爻居上卦之中，为君位。象征事物发展至鼎盛，宜大展宏图，但需防盛极而衰。',
    6: '上爻为卦之终，象征事物发展至极。物极必反，宜知进退，适时而止。'
  }
  
  const posName = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'][position - 1]
  return `${hexagramName}之${posName}动。${positionMeanings[position] || ''}`
}

export function getChangeMeaning(position, isYang, changedHexagramName) {
  const yinYang = isYang ? '阳' : '阴'
  const changeTo = isYang ? '阴' : '阳'
  const changeEffect = isYang 
    ? '阳变阴，刚化为柔，由进取转为守成。' 
    : '阴变阳，柔化为刚，由守成转为进取。'
  
  return `此爻本为${yinYang}爻，动而变${changeTo}。${changeEffect}卦象由本卦变为${changedHexagramName}，象征事物发展出现转机。`
}

function calculateChangedTrigram(trigramId, linePosition) {
  const trigram = TRIGRAMS[trigramId]
  if (!trigram) return null

  const newLines = [...trigram.lines]
  const lineIndexInTrigram = (linePosition - 1) % 3
  newLines[lineIndexInTrigram] = newLines[lineIndexInTrigram] === 1 ? 0 : 1

  for (const [key, t] of Object.entries(TRIGRAMS)) {
    if (t.lines.join('') === newLines.join('')) {
      return { id: key, ...t }
    }
  }
  return null
}

export function performYarrowDivination(question, upperNum, lowerNum, movingLinePos) {
  const upperTrigram = getTrigramByXianTianNumber(upperNum)
  const lowerTrigram = getTrigramByXianTianNumber(lowerNum)

  if (!upperTrigram || !lowerTrigram) {
    return null
  }

  const hexagram = getHexagramByTrigrams(upperTrigram.id, lowerTrigram.id)

  if (!hexagram) {
    return {
      id: crypto.randomUUID(),
      question,
      timestamp: new Date().toISOString(),
      method: 'yarrow',
      input: { upperNumber: upperNum, lowerNumber: lowerNum, movingLine: movingLinePos },
      hexagram: {
        name: `${upperTrigram.name}${lowerTrigram.name}`,
        symbol: '䷀',
        upperTrigram: { number: upperNum, ...upperTrigram },
        lowerTrigram: { number: lowerNum, ...lowerTrigram },
        judgment: '卦象数据待完善',
        interpretation: { summary: '此卦象数据尚在完善中...' }
      },
      movingLine: null,
      changedHexagram: null,
      finalReading: { summary: '综合解读待完善...' }
    }
  }

  let movingLineInfo = null
  let changedHexagram = null

  if (movingLinePos >= 1 && movingLinePos <= 6) {
    const lineData = hexagram.lines?.[movingLinePos - 1]
    const isYang = movingLinePos <= 3
      ? lowerTrigram.lines[(movingLinePos - 1) % 3] === 1
      : upperTrigram.lines[(movingLinePos - 1) % 3] === 1

    const isUpperLine = movingLinePos > 3
    let changedUpperId = upperTrigram.id
    let changedLowerId = lowerTrigram.id

    if (isUpperLine) {
      const changedUpper = calculateChangedTrigram(upperTrigram.id, movingLinePos)
      if (changedUpper) changedUpperId = changedUpper.id
    } else {
      const changedLower = calculateChangedTrigram(lowerTrigram.id, movingLinePos)
      if (changedLower) changedLowerId = changedLower.id
    }

    const changedHexagramData = getHexagramByTrigrams(changedUpperId, changedLowerId)
    
    if (changedHexagramData) {
      changedHexagram = {
        ...changedHexagramData,
        upperTrigram: {
          number: Object.entries(XIAN_TIAN_BA_GUA).find(([_, t]) => t.id === changedUpperId)?.[0] || upperNum,
          ...TRIGRAMS[changedUpperId]
        },
        lowerTrigram: {
          number: Object.entries(XIAN_TIAN_BA_GUA).find(([_, t]) => t.id === changedLowerId)?.[0] || lowerNum,
          ...TRIGRAMS[changedLowerId]
        }
      }
    }

    movingLineInfo = {
      position: movingLinePos,
      name: lineData?.name || getLineNameByPosition(movingLinePos, isYang),
      text: lineData?.text || '',
      interpretation: lineData?.interpretation || '动爻变化之象，宜审时度势。',
      positionMeaning: getPositionMeaning(movingLinePos, hexagram.name),
      changeMeaning: getChangeMeaning(movingLinePos, isYang, changedHexagram?.name || '未知卦象')
    }
  }

  const finalReading = generateFinalReading(hexagram, movingLineInfo, changedHexagram)

  return {
    id: crypto.randomUUID(),
    question,
    timestamp: new Date().toISOString(),
    method: 'yarrow',
    input: {
      upperNumber: upperNum,
      lowerNumber: lowerNum,
      movingLine: movingLinePos
    },
    hexagram: {
      ...hexagram,
      upperTrigram: { number: upperNum, ...upperTrigram },
      lowerTrigram: { number: lowerNum, ...lowerTrigram }
    },
    movingLine: movingLineInfo,
    changedHexagram,
    finalReading
  }
}

function generateFinalReading(hexagram, movingLine, changedHexagram) {
  const summary = hexagram?.interpretation?.summary || '此卦象蕴含深意，需细细体悟。'

  let advice = ''
  let outlook = ''

  if (movingLine && changedHexagram) {
    advice = `本卦${hexagram?.name || ''}因${movingLine.name}动而变为${changedHexagram.name}，象征事物发展变化。`
    outlook = changedHexagram?.interpretation?.summary || '变化之中蕴含新的机遇。'
  } else if (movingLine) {
    advice = `${movingLine.name}为动爻，${movingLine.interpretation || '宜审时度势'}`
    outlook = '动而不变，守正待时。'
  } else {
    advice = '此卦无动爻，为静卦，宜守正待时。'
    outlook = summary
  }

  return {
    summary,
    advice,
    outlook
  }
}

export const YARROW_STEPS = [
  {
    step: 1,
    title: '诚心问卜',
    description: '大衍之数五十，其用四十有九。请先静心，诚心提出您的问题。'
  },
  {
    step: 2,
    title: '起卦取数',
    description: '依先天八卦数，分别取上卦、下卦、动爻之数。'
  },
  {
    step: 3,
    title: '卦象呈现',
    description: '根据所取之数，呈现本卦与变卦。'
  },
  {
    step: 4,
    title: '详细解读',
    description: '综合本卦、动爻、之卦，给出完整解读。'
  }
]
