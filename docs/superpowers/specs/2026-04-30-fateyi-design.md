# 高岛易断占卜网页 - 设计文档

**日期**: 2026-04-30
**项目**: fateYi
**技术栈**: Vue 3 + Vite + TailwindCSS + Vue Router

---

## 1. 项目概述

### 1.1 目标
构建一个基于高岛易断方法的易经占卜网页应用，提供完整的占卜体验，包括：
- 输入问题进行占卜
- 展示卦象组成（上卦、下卦、动爻）
- 提供本卦、动爻、之卦的详细解读
- 按用户名归档历史记录
- 支持分享占卜结果

### 1.2 核心功能清单

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 占卜输入 | 用户输入问题，随机生成卦象 | P0 |
| 卦象展示 | 展示上卦、下卦、六爻、动爻位置 | P0 |
| 卦辞解读 | 显示本卦卦辞、高岛易断解释 | P0 |
| 动爻分析 | 显示动爻爻辞和详细解释 | P0 |
| 变卦展示 | 展示之卦（变卦）及最终解读 | P0 |
| 历史归档 | 按用户名保存和查看历史记录 | P0 |
| 卦象详解页 | 六十四卦完整列表和详细解释 | P1 |
| 分享功能 | 生成分享链接或复制结果 | P1 |

---

## 2. 技术架构

### 2.1 技术选型

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | Vue 3 (Composition API) | ^3.4 |
| 构建工具 | Vite | ^5.0 |
| 路由 | Vue Router | ^4.3 |
| 样式 | TailwindCSS | ^3.4 |
| 图标 | Lucide Vue Next | latest |
| 数据存储 | localStorage | - |

### 2.2 项目结构

```
fateYi/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.js                    # 应用入口
│   ├── App.vue                    # 根组件
│   ├── router/
│   │   └── index.js               # 路由配置
│   ├── views/                     # 页面组件
│   │   ├── DivinationView.vue     # 首页/占卜页
│   │   ├── HexagramsView.vue      # 卦象详解页
│   │   ├── HistoryView.vue        # 历史记录页
│   │   └── ShareView.vue          # 分享页
│   ├── components/                # 可复用组件
│   │   ├── NavBar.vue             # 导航栏
│   │   ├── TrigramDisplay.vue     # 单卦展示组件
│   │   ├── HexagramDisplay.vue    # 完整卦象展示
│   │   ├── MovingLineDisplay.vue  # 动爻展示组件
│   │   ├── InterpretationCard.vue # 解读卡片组件
│   │   └── HistoryCard.vue        # 历史记录卡片
│   ├── data/                      # 数据文件
│   │   ├── trigrams.js            # 八卦数据（名称、符号、属性）
│   │   ├── hexagrams.js           # 六十四卦完整数据
│   │   └── lines.js               # 爻辞数据
│   ├── composables/               # 组合式函数
│   │   ├── useDivination.js       # 占卜逻辑
│   │   └── useHistory.js          # 历史记录管理
│   └── utils/
│       ├── hexagramUtils.js       # 卦象计算工具
│       └── storage.js             # localStorage 封装
└── docs/
    └── superpowers/specs/
        └── 2026-04-30-fateyi-design.md
```

---

## 3. 页面设计

### 3.1 路由配置

```javascript
const routes = [
  { path: '/', name: 'divination', component: DivinationView },
  { path: '/hexagrams', name: 'hexagrams', component: HexagramsView },
  { path: '/history', name: 'history', component: HistoryView },
  { path: '/share/:id', name: 'share', component: ShareView }
]
```

### 3.2 首页/占卜页 (`DivinationView.vue`)

**布局结构：**
- 顶部：用户名输入框
- 中部左侧：问题输入区 + 占卜按钮
- 中部右侧：卦象结果展示区
- 底部：操作按钮（保存、分享、重新占卜）

**卦象结果展示包含：**
1. **上卦区域** - 显示外卦名称、符号、属性
2. **下卦区域** - 显示内卦名称、符号、属性
3. **六爻图示** - 六条爻线，标注动爻位置（用○标记）
4. **本卦信息** - 卦名、卦辞、高岛易断解释
5. **动爻信息** - 动爻位置、爻名、爻辞、解释
6. **之卦信息** - 变卦名称、卦辞、最终综合解读

### 3.3 卦象详解页 (`HexagramsView.vue`)

**功能：**
- 搜索框：快速查找卦象
- 分类标签：上经(1-30卦)、下经(31-64卦)
- 卦象网格：卡片形式展示64卦
- 点击卡片展开详情面板：
  - 卦象符号和名称
  - 上卦/下卦组成
  - 完整卦辞
  - 各爻爻辞
  - 高岛易断详解

### 3.4 历史记录页 (`HistoryView.vue`)

**功能：**
- 用户名筛选器
- 时间范围筛选（全部/本月/本周/今天）
- 历史列表展示：
  - 问题摘要
  - 本卦卦名和符号
  - 占卜时间
  - 操作按钮（查看详情、删除、分享）

### 3.5 分享页 (`ShareView.vue`)

**功能：**
- 只读展示占卜结果
- 包含完整卦象信息
- 返回首页入口

---

## 4. 数据模型

### 4.1 八卦数据 (Trigram)

```javascript
{
  id: 'qian',
  name: '乾',
  symbol: '☰',
  nature: '天',
  attribute: '刚健',
  lines: [1, 1, 1],           // 1=阳爻, 0=阴爻
  description: '乾者健也...'
}
```

### 4.2 六十四卦数据 (Hexagram)

```javascript
{
  id: 1,
  name: '乾为天',
  symbol: '䷀',
  upperTrigram: 'qian',       // 上卦ID
  lowerTrigram: 'qian',       // 下卦ID
  number: 1,                   // 序号
  judgment: '元亨利贞',        // 卦辞
  image: '元亨，利贞。',       // 彖辞
  interpretation: {            // 高岛易断解释
    summary: '此卦大吉...',
    career: '事业方面...',
    relationship: '感情方面...',
    health: '健康方面...',
    wealth: '财运方面...'
  },
  lines: [                     // 六爻
    { position: 1, name: '初九', text: '潜龙勿用', interpretation: '...' },
    { position: 2, name: '九二', text: '见龙在田，利见大人', interpretation: '...' },
    // ... 共6爻
  ]
}
```

### 4.3 占卜结果数据 (DivinationResult)

```javascript
{
  id: 'uuid-string',
  username: '用户名',
  question: '问题内容',
  timestamp: '2026-04-30T14:30:00Z',

  hexagram: {
    id: 1,
    name: '乾为天',
    symbol: '䷀',
    upperTrigram: { name: '乾', symbol: '☰', nature: '天' },
    lowerTrigram: { name: '乾', symbol: '☰', nature: '天' },
    judgment: '元亨利贞',
    interpretation: { summary: '...', career: '...', ... }
  },

  movingLine: {
    position: 2,
    name: '九二',
    text: '见龙在田，利见大人',
    interpretation: '...'
  },

  changedHexagram: {
    id: 44,
    name: '天风姤',
    symbol: '䷫',
    upperTrigram: { name: '乾', symbol: '☰' },
    lowerTrigram: { name: '巽', symbol: '☴' },
    judgment: '女壮，勿用取女',
    finalInterpretation: '...'
  }
}
```

---

## 5. 核心算法

### 5.1 占卜流程

```
1. 用户输入问题 → 点击"开始占卜"
2. 随机生成6个数字 (6-9) → 对应六爻
   - 6 = 老阴 (阴爻 + 动爻)
   - 7 = 少阳 (阳爻)
   - 8 = 少阴 (阴爻)
   - 9 = 老阳 (阳爻 + 动爻)
3. 根据六爻确定本卦（上三爻+下三爻）
4. 识别动爻位置
5. 计算之卦（动爻阴阳互换后的结果）
6. 从数据库获取对应的卦辞、爻辞、解释
7. 展示完整结果
```

### 5.2 卦象计算逻辑

```javascript
function calculateHexagram(lines) {
  const upperLines = lines.slice(0, 3).reverse()
  const lowerLines = lines.slice(3, 6).reverse()

  const upperTrigram = findTrigramByLines(upperLines)
  const lowerTrigram = findTrigramByLines(lowerLines)
  const hexagram = findHexagram(upperTrigram.id, lowerTrigram.id)

  const movingLine = lines.find(l => l === 6 || l === 9)

  let changedHexagram = null
  if (movingLine) {
    const changedLines = lines.map(l => {
      if (l === 6) return 7
      if (l === 9) return 8
      return l
    })
    changedHexagram = calculateHexagramFromLines(changedLines)
  }

  return { hexagram, movingLine, changedHexagram }
}
```

---

## 6. 视觉设计规范

### 6.1 配色方案（古典中式风格）

| 用途 | 颜色 | 色值 |
|------|------|------|
| 主背景 | 宣纸色 | #F5F1E8 |
| 卡片背景 | 米白色 | #FFFEF9 |
| 主文字 | 墨黑 | #2C2416 |
| 次文字 | 灰褐 | #6B5D4F |
| 强调色 | 朱砂红 | #B94A48 |
| 点缀色 | 金色 | #D4AF37 |
| 边框 | 淡墨 | #D4C4A8 |
| 阴爻 | 阴爻色 | #8B7355 |
| 阳爻 | 阳爻色 | #2C2416 |

### 6.2 字体方案

- 标题：思源宋体 / Noto Serif SC
- 正文：思源黑体 / Noto Sans SC
- 卦象：等宽字体

### 6.3 组件样式特征

- 圆角：4px（轻微圆角，保持古朴感）
- 阴影：柔和投影 `shadow-md`
- 边框：1px solid 带传统纹样感
- 按钮：带hover过渡效果
- 卡片：微妙的渐变背景

---

## 7. 响应式设计

### 断点设置

| 设备 | 宽度范围 | 布局方式 |
|------|----------|----------|
| 手机 | < 640px | 单列垂直布局 |
| 平板 | 640px - 1024px | 双列紧凑布局 |
| 桌面 | > 1024px | 左右分栏布局 |

### 移动端适配要点

- 导航栏折叠为汉堡菜单
- 卦象展示区垂直排列
- 历史记录单列显示
- 触控友好的按钮尺寸（最小44px）

---

## 8. 数据持久化

### 8.1 localStorage 结构

```javascript
// 键名: fateYi_history
{
  "username": [
    {
      "id": "uuid",
      "question": "...",
      "timestamp": "...",
      "hexagram": {...},
      "movingLine": {...},
      "changedHexagram": {...}
    }
  ]
}

// 键名: fateYi_currentUser
"fateYi_currentUser": "用户名"
```

### 8.2 分享机制

- 使用URL参数传递占卜结果ID
- 将完整结果编码到URL中（base64压缩）
- 或使用localStorage临时存储，通过ID引用

---

## 9. 实施计划概要

### Phase 1: 项目初始化
- 创建Vue 3 + Vite项目
- 安装依赖（TailwindCSS、Vue Router、Lucide）
- 配置Tailwind主题（自定义颜色、字体）
- 创建基础目录结构

### Phase 2: 数据层开发
- 编写八卦基础数据（8卦）
- 编写六十四卦完整数据（含卦辞、爻辞、高岛易断解释）
- 实现卦象计算工具函数
- 实现localStorage封装

### Phase 3: 核心组件开发
- 导航栏组件
- 卦象展示组件（上卦、下卦、六爻、动爻）
- 解读卡片组件
- 占卜逻辑composable

### Phase 4: 页面开发
- 首页/占卜页
- 卦象详解页
- 历史记录页
- 分享页

### Phase 5: 功能完善与优化
- 响应式适配测试
- 动画效果添加
- 性能优化
- 最终测试

---

## 10. 验收标准

- [ ] 用户可输入问题并生成随机卦象
- [ ] 正确展示上卦、下卦、动爻信息
- [ ] 显示本卦、动爻、之卦的完整解读
- [ ] 历史记录按用户名正确归档
- [ ] 可查看历史占卜详情
- [ ] 可分享占卜结果
- [ ] 页面响应式适配良好（手机/平板/桌面）
- [ ] 古典中式视觉风格一致
