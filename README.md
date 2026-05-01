# ☯ 高岛易断 - 易经占卜网页

一个基于易经六十四卦的专业占卜网页应用，融合传统易学智慧与现代Web技术，提供蓍草起卦、卦象查询、历史记录等功能。

## 📖 关于高岛易断

高岛易断源自日本明治时期易学大师高岛吞象的易学体系。高岛吞象（1832-1914）以其精准的占卜预测闻名于世，其易学思想强调：

- **诚心问卜**：占卜需心诚，心诚则灵
- **蓍草起卦**：遵循传统大衍之数五十的起卦方法
- **动爻变化**：重视动爻在卦象变化中的作用
- **综合解读**：结合本卦、之卦、动爻进行综合分析

## ✨ 功能特性

### 🌿 蓍草起卦
- 基于先天八卦数的专业起卦方式
- 支持自定义上卦、下卦、动爻位置
- 完整展示本卦、之卦、动爻解读
- 提供动爻位置含义与变化分析

### 🎲 快速占卜
- 随机起卦功能
- 一键获取卦象解读

### 📚 卦象查询
- 完整六十四卦数据库
- 卦辞、象辞、爻辞详解
- 每爻动变后的之卦推演
- 事业、感情、健康、财运四维解读

### 📜 历史记录
- 自动保存占卜结果
- 支持用户分类管理
- 完整结果回顾与分享
- **心得笔记**：为每条占卜记录添加个人心得
- **导入导出**：支持历史数据的导入与导出（JSON格式）
- **数据持久化**：保存数据到项目，重新部署后自动加载

### 🎨 古典美学设计
- 中国传统配色（朱砂红、墨色、金色）
- 太极图风格网站图标
- 古风卡片与按钮样式
- 响应式布局，支持移动端

## 🛠️ 技术栈

- **前端框架**：Vue 3 + Vite
- **路由管理**：Vue Router 4
- **样式方案**：TailwindCSS
- **数据存储**：LocalStorage + JSON文件持久化

## 📦 安装与运行

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 本地开发

```bash
# 克隆项目
git clone https://github.com/ljyljy/fateYi.git
cd fateYi

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🚀 部署指南

### 静态部署

项目构建后为纯静态文件，可部署至任意静态服务器：

```bash
# 构建
npm run build

# 构建产物位于 dist/ 目录
```

#### Vercel 部署

1. 连接 GitHub 仓库
2. Framework Preset 选择 Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`

#### Netlify 部署

1. 连接 GitHub 仓库
2. Build Command: `npm run build`
3. Publish Directory: `dist`

#### Nginx 部署

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📁 项目结构

```
fateYi/
├── public/
│   ├── favicon.svg           # 网站图标（太极图）
│   └── data/
│       └── history.json      # 持久化历史数据
├── src/
│   ├── components/          # 组件
│   │   ├── HexagramDisplay.vue    # 卦象展示
│   │   ├── HistoryCard.vue        # 历史卡片
│   │   ├── InterpretationCard.vue # 解读卡片
│   │   ├── MovingLineDisplay.vue  # 动爻展示
│   │   ├── NavBar.vue             # 导航栏
│   │   ├── TrigramDisplay.vue     # 八卦展示
│   │   └── TrigramSelector.vue    # 八卦选择器
│   ├── composables/         # 组合式函数
│   │   ├── useDivination.js       # 占卜逻辑
│   │   └── useHistory.js          # 历史管理
│   ├── data/                # 数据
│   │   ├── hexagrams.js           # 六十四卦数据
│   │   └── trigrams.js            # 八卦数据
│   ├── router/              # 路由
│   │   └── index.js
│   ├── utils/               # 工具函数
│   │   ├── hexagramUtils.js       # 卦象计算
│   │   ├── storage.js             # 本地存储与持久化
│   │   └── yarrowUtils.js         # 蓍草起卦
│   ├── views/               # 页面
│   │   ├── DivinationView.vue     # 占卜主页
│   │   ├── HexagramsView.vue      # 卦象查询
│   │   ├── HistoryView.vue        # 历史记录
│   │   ├── ShareView.vue          # 分享页面
│   │   └── YarrowView.vue         # 蓍草起卦
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 使用指南

### 蓍草起卦

1. 进入「蓍草起卦」页面
2. 输入您想问的问题
3. 选择上卦数字（1-8，对应先天八卦）
4. 选择下卦数字（1-8）
5. 选择动爻位置（1-6）
6. 点击「确认起卦」获取结果

### 先天八卦对照表

| 数字 | 卦象 | 名称 | 自然 |
|------|------|------|------|
| 1 | ☰ | 乾 | 天 |
| 2 | ☱ | 兑 | 泽 |
| 3 | ☲ | 离 | 火 |
| 4 | ☳ | 震 | 雷 |
| 5 | ☴ | 巽 | 风 |
| 6 | ☵ | 坎 | 水 |
| 7 | ☶ | 艮 | 山 |
| 8 | ☷ | 坤 | 地 |

### 卦象解读说明

- **本卦**：初始卦象，代表事物当前状态
- **之卦**：动爻变化后的新卦象，代表事物发展趋势
- **动爻**：变化的爻，是解读的关键

### 历史记录管理

#### 添加心得笔记
1. 在历史记录页面点击任意记录查看详情
2. 在详情弹窗底部找到「📝 心得笔记」
3. 点击添加或编辑您的心得体会

#### 导入导出数据
- **导出**：点击「导出」按钮下载当前用户的历史记录（JSON格式）
- **导入**：点击「导入」按钮选择之前导出的JSON文件

#### 数据持久化
1. 点击「保存到项目」按钮下载 `history.json` 文件
2. 将文件复制到项目的 `public/data/` 目录
3. 重新部署后，应用会自动加载这些数据

## 📄 License

MIT License

## 🙏 致谢

- 易经原文及传统注疏
- 高岛吞象《高岛易断》
- Vue.js 社区
