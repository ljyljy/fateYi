export const TRIGRAMS = {
  qian: {
    id: 'qian',
    name: '乾',
    symbol: '☰',
    nature: '天',
    attribute: '刚健',
    lines: [1, 1, 1],
    direction: '西北',
    number: 1,
    description: '乾者，健也。天行健，君子以自强不息。代表刚强、进取、创造之力。',
    family: '父'
  },
  kun: {
    id: 'kun',
    name: '坤',
    symbol: '☷',
    nature: '地',
    attribute: '柔顺',
    lines: [0, 0, 0],
    direction: '西南',
    number: 8,
    description: '坤者，顺也。地势坤，君子以厚德载物。代表包容、承载、柔顺之德。',
    family: '母'
  },
  zhen: {
    id: 'zhen',
    name: '震',
    symbol: '☳',
    nature: '雷',
    attribute: '运动',
    lines: [1, 0, 0],
    direction: '东',
    number: 4,
    description: '震者，动也。帝出乎震。代表震动、启动、新生之机。',
    family: '长男'
  },
  xun: {
    id: 'xun',
    name: '巽',
    symbol: '☴',
    nature: '风',
    attribute: '渗透',
    lines: [0, 1, 1],
    direction: '东南',
    number: 5,
    description: '巽者，入也。随风巽。代表渗透、顺应、谦逊之风。',
    family: '长女'
  },
  kan: {
    id: 'kan',
    name: '坎',
    symbol: '☵',
    nature: '水',
    attribute: '险陷',
    lines: [0, 1, 0],
    direction: '北',
    number: 6,
    description: '坎者，陷也。水洊至。代表险陷、深渊、智慧之藏。',
    family: '中男'
  },
  li: {
    id: 'li',
    name: '离',
    symbol: '☲',
    nature: '火',
    attribute: '附丽',
    lines: [1, 0, 1],
    direction: '南',
    number: 3,
    description: '离者，丽也。明两作离。代表光明、文明、依附之象。',
    family: '中女'
  },
  gen: {
    id: 'gen',
    name: '艮',
    symbol: '☶',
    nature: '山',
    attribute: '静止',
    lines: [0, 0, 1],
    direction: '东北',
    number: 7,
    description: '艮者，止也。兼山艮。代表静止、稳定、止息之态。',
    family: '少男'
  },
  dui: {
    id: 'dui',
    name: '兑',
    symbol: '☱',
    nature: '泽',
    attribute: '喜悦',
    lines: [1, 1, 0],
    direction: '西',
    number: 2,
    description: '兑者，说也。丽泽兑。代表喜悦、沟通、和悦之情。',
    family: '少女'
  }
}

export const TRIGRAM_LIST = Object.values(TRIGRAMS)

export function getTrigramById(id) {
  return TRIGRAMS[id] || null
}

export function findTrigramByLines(lines) {
  const lineStr = lines.join('')
  return TRIGRAM_LIST.find(t => t.lines.join('') === lineStr) || null
}
