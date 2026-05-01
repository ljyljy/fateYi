# 高岛易断网页优化设计文档

**日期**: 2026-04-30
**项目**: fateYi
**版本**: v2.0

---

## 1. 优化目标

### 1.1 核心目标
将高岛易断网页升级为专业级易经占卜平台，以**50根蓍草法（先天八卦数）**为核心起卦方式，提供沉浸式、仪式感的占卜体验。

### 1.2 优化范围

| 模块 | 优化内容 | 优先级 |
|------|----------|--------|
| 专业起卦 | 新增蓍草起卦页面（先天八卦数输入） | P0 |
| 数据完善 | 补全六十四卦数据、爻辞、终卦解读 | P0 |
| UI/UX | 仪式感设计、动画效果、移动端优化 | P1 |
| 功能扩展 | 收藏卦象、导出报告 | P2 |

---

## 2. 蓍草起卦法设计

### 2.1 先天八卦数对照表

| 数值 | 卦名 | 符号 | 自然 |
|------|------|------|------|
| 1 | 乾 | ☰ | 天 |
| 2 | 兑 | ☱ | 泽 |
| 3 | 离 | ☲ | 火 |
| 4 | 震 | ☳ | 雷 |
| 5 | 巽 | ☴ | 风 |
| 6 | 坎 | ☵ | 水 |
| 7 | 艮 | ☶ | 山 |
| 8 | 坤 | ☷ | 地 |

### 2.2 起卦流程

```
用户输入问题
     ↓
输入上卦数（1-8）→ 显示对应卦象
     ↓
输入下卦数（1-8）→ 显示对应卦象
     ↓
输入动爻数（1-6）→ 标注动爻位置
     ↓
系统计算本卦、之卦
     ↓
展示完整解读
```

### 2.3 页面布局

```
┌─────────────────────────────────────────────────────────────┐
│                        导航栏                                │
│  Logo | 占卜 | 蓍草起卦 | 卦象 | 历史                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                  🌿 蓍草起卦                            │ │
│  │           大衍之数五十，其用四十有九                     │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Step 1: 诚心问卜                                       │ │
│  │  ┌──────────────────────────────────────────────────┐  │ │
│  │  │ 请输入您想问的问题...                              │  │ │
│  │  └──────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Step 2: 起卦取数                                       │ │
│  │                                                          │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │ │
│  │  │   上卦      │  │   下卦      │  │   动爻      │     │ │
│  │  │   [1-8]     │  │   [1-8]     │  │   [1-6]     │     │ │
│  │  │     ☰       │  │     ☷       │  │     五      │     │ │
│  │  │    乾       │  │    坤       │  │    九五      │     │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘     │ │
│  │                                                          │ │
│  │  先天八卦参考：乾1 兑2 离3 震4 巽5 坎6 艮7 坤8          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Step 3: 卦象呈现                                       │ │
│  │                                                          │ │
│  │      本卦                    之卦                       │ │
│  │   ┌─────────┐            ┌─────────┐                   │ │
│  │   │  天地否  │    ───→    │  天风姤  │                   │ │
│  │   │   ䷋    │            │   ䷫    │                   │ │
│  │   │ 动爻:九五│            │          │                   │ │
│  │   └─────────┘            └─────────┘                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Step 4: 详细解读                                       │ │
│  │                                                          │ │
│  │  【本卦解释】                                            │ │
│  │  卦辞: ...                                              │ │
│  │  高岛易断: ...                                          │ │
│  │                                                          │ │
│  │  【动爻解释】                                            │ │
│  │  九五: ...                                              │ │
│  │                                                          │ │
│  │  【之卦解释】                                            │ │
│  │  卦辞: ...                                              │ │
│  │                                                          │ │
│  │  【终卦解读】                                            │ │
│  │  综合本卦、动爻、之卦，最终推断...                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│              [保存历史]  [分享结果]  [重新起卦]              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. 数据结构设计

### 3.1 先天八卦数映射

```javascript
const XIAN_TIAN_BA_GUA = {
  1: { name: '乾', symbol: '☰', nature: '天', id: 'qian' },
  2: { name: '兑', symbol: '☱', nature: '泽', id: 'dui' },
  3: { name: '离', symbol: '☲', nature: '火', id: 'li' },
  4: { name: '震', symbol: '☳', nature: '雷', id: 'zhen' },
  5: { name: '巽', symbol: '☴', nature: '风', id: 'xun' },
  6: { name: '坎', symbol: '☵', nature: '水', id: 'kan' },
  7: { name: '艮', symbol: '☶', nature: '山', id: 'gen' },
  8: { name: '坤', symbol: '☷', nature: '地', id: 'kun' }
}
```

### 3.2 蓍草起卦结果数据结构

```javascript
{
  id: 'uuid',
  question: '问题内容',
  timestamp: '2026-04-30T...',

  method: 'yarrow',  // 起卦方式

  input: {
    upperNumber: 1,    // 上卦数 (1-8)
    lowerNumber: 8,    // 下卦数 (1-8)
    movingLine: 5      // 动爻位置 (1-6)
  },

  hexagram: {
    id: 12,
    name: '天地否',
    symbol: '䷋',
    upperTrigram: { number: 1, name: '乾', symbol: '☰' },
    lowerTrigram: { number: 8, name: '坤', symbol: '☷' },
    judgment: '否之匪人...',
    interpretation: { summary: '...', career: '...', ... }
  },

  movingLine: {
    position: 5,
    name: '九五',
    text: '休否，大人吉...',
    interpretation: '...'
  },

  changedHexagram: {
    id: 44,
    name: '天风姤',
    symbol: '䷫',
    upperTrigram: { number: 1, name: '乾', symbol: '☰' },
    lowerTrigram: { number: 5, name: '巽', symbol: '☴' },
    judgment: '女壮，勿用取女...',
    interpretation: { summary: '...', ... }
  },

  finalReading: {
    summary: '综合解读...',
    advice: '建议...',
    outlook: '前景展望...'
  }
}
```

### 3.3 六十四卦数据补全

需要补全第31-64卦的完整数据，包括：
- 卦名、符号、上下卦
- 卦辞
- 六爻爻辞
- 高岛易断解释（事业、感情、健康、财运）
- **新增：终卦解读**（综合本卦+动爻+之卦）

---

## 4. 组件设计

### 4.1 新增组件

| 组件名 | 路径 | 功能 |
|--------|------|------|
| `YarrowView.vue` | `src/views/` | 蓍草起卦主页面 |
| `TrigramSelector.vue` | `src/components/` | 八卦选择器（显示数字→卦象） |
| `YarrowResult.vue` | `src/components/` | 蓍草起卦结果展示 |
| `FinalReadingCard.vue` | `src/components/` | 终卦解读卡片 |

### 4.2 TrigramSelector 组件

```vue
<template>
  <div class="trigram-selector">
    <div class="number-input">
      <input type="number" min="1" max="8" v-model="number" />
    </div>
    <div class="trigram-display">
      <span class="symbol">{{ trigram?.symbol }}</span>
      <span class="name">{{ trigram?.name }}</span>
    </div>
  </div>
</template>
```

### 4.3 新增工具函数

```javascript
// src/utils/yarrowUtils.js

export function getTrigramByXianTianNumber(num) {
  return XIAN_TIAN_BA_GUA[num] || null
}

export function performYarrowDivination(question, upperNum, lowerNum, movingLine) {
  const upperTrigram = getTrigramByXianTianNumber(upperNum)
  const lowerTrigram = getTrigramByXianTianNumber(lowerNum)

  const hexagram = getHexagramByTrigrams(upperTrigram.id, lowerTrigram.id)

  // 计算之卦（动爻变化后的卦）
  const changedHexagram = calculateChangedHexagram(hexagram, movingLine)

  // 生成终卦解读
  const finalReading = generateFinalReading(hexagram, movingLine, changedHexagram)

  return {
    id: crypto.randomUUID(),
    question,
    timestamp: new Date().toISOString(),
    method: 'yarrow',
    input: { upperNumber: upperNum, lowerNumber: lowerNum, movingLine },
    hexagram,
    movingLine: hexagram.lines[movingLine - 1],
    changedHexagram,
    finalReading
  }
}
```

---

## 5. UI/UX 优化

### 5.1 仪式感设计元素

- **背景**: 宣纸纹理 + 淡雅水墨晕染
- **分隔线**: 竹简样式边框
- **步骤指示**: 古典卷轴式步骤条
- **动画**:
  - 卦象出现时的淡入效果
  - 数字输入后的卦象变换动画
  - 结果展示的逐层展开效果

### 5.2 交互优化

- 输入数字时实时显示对应卦象
- 八卦参考表可展开/收起
- 动爻位置用特殊样式标注
- 移动端适配：垂直布局，大按钮

### 5.3 视觉层次

```
主标题: 思源宋体 700, 2rem, 墨黑
副标题: 思源宋体 600, 1.25rem, 灰褐
正文: 思源黑体 400, 1rem, 墨黑
辅助文字: 思源黑体 400, 0.875rem, 灰褐
```

---

## 6. 路由更新

```javascript
const routes = [
  { path: '/', name: 'divination', component: DivinationView },
  { path: '/yarrow', name: 'yarrow', component: YarrowView },  // 新增
  { path: '/hexagrams', name: 'hexagrams', component: HexagramsView },
  { path: '/history', name: 'history', component: HistoryView },
  { path: '/share/:id', name: 'share', component: ShareView }
]
```

---

## 7. 实施计划

### Phase 1: 核心功能（蓍草起卦）
- 创建 `yarrowUtils.js` 工具函数
- 创建 `YarrowView.vue` 页面
- 创建 `TrigramSelector.vue` 组件
- 更新路由和导航栏

### Phase 2: 数据完善
- 补全六十四卦数据（第31-64卦）
- 添加终卦解读数据
- 完善爻辞数据

### Phase 3: UI优化
- 添加仪式感背景和动画
- 优化移动端体验
- 完善交互细节

### Phase 4: 功能扩展
- 收藏卦象功能
- 导出报告功能

---

## 8. 验收标准

- [ ] 用户可通过先天八卦数（1-8）选择上卦、下卦
- [ ] 用户可指定动爻位置（1-6）
- [ ] 系统正确计算并展示本卦、之卦
- [ ] 显示完整的卦辞、爻辞、高岛易断解释
- [ ] 显示终卦综合解读
- [ ] 结果可保存到历史记录
- [ ] 结果可分享
- [ ] 页面具有仪式感，交互流畅
- [ ] 移动端适配良好

---

## 9. 技术说明

### 9.1 先天八卦与后天八卦

本系统采用**先天八卦数**（伏羲八卦）：
- 先天八卦数：乾1、兑2、离3、震4、巽5、坎6、艮7、坤8
- 对应二进制：乾(111)、兑(011)、离(101)、震(001)、巽(110)、坎(010)、艮(100)、坤(000)

### 9.2 动爻变化规则

- 阳爻（—）变阴爻（- -）
- 阴爻（- -）变阳爻（—）
- 动爻位置从下往上数（初爻=1，上爻=6）

### 9.3 终卦解读生成

终卦解读综合以下因素：
1. 本卦卦辞和象义
2. 动爻爻辞和解释
3. 之卦卦辞和象义
4. 卦象之间的变化关系
