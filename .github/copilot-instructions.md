# 旅游网站产品需求文档 (PRD)

## 1. 项目概述

### 1.1 网站介绍

这是一个现代化的旅游预订网站,旨在为用户提供便捷的旅游目的地浏览和预订服务。网站采用响应式设计,支持桌面端、平板和移动设备访问,为用户提供流畅的跨设备体验。

### 1.2 设计理念

- **配色方案**: 以蓝色和绿色为主色调,蓝色象征天空和海洋,绿色代表自然和生机,营造轻松愉悦的旅游氛围
- **设计风格**: 现代简约、清新自然
- **用户体验**: 注重交互流畅性和信息层级清晰度

### 1.3 图片资源

- 所有图片均从 [Unsplash](https://unsplash.com) 和 [Pexels](https://pexels.com) 获取
- 确保图片高质量且免版权使用

---

## 2. 功能需求

### 2.1 主页 (Home Page)

#### 2.1.1 页面功能

1. **导航栏**

   - 网站 Logo
   - 主要导航菜单(首页、目的地、预订、关于我们、联系方式)
   - 响应式汉堡菜单(移动端)

2. **英雄区域 (Hero Section)**

   - 全屏或大幅背景图片展示
   - 网站标语和欢迎文字
   - 搜索框(目的地搜索功能)
   - CTA 按钮(立即探索)

3. **热门目的地展示**

   - 卡片式布局展示热门旅游目的地
   - 每个卡片包含:
     - 目的地封面图片
     - 目的地名称
     - 简短描述
     - 价格信息
     - "查看详情"按钮
   - 响应式网格布局(桌面 4 列,平板 2 列,移动 1 列)

4. **特色服务介绍**

   - 图标 + 文字说明的服务亮点
   - 如:专业导游、灵活行程、优惠价格、24 小时客服等

5. **用户评价区域**

   - 轮播展示用户评价
   - 包含用户头像、姓名、评分和评价内容

6. **页脚 (Footer)**
   - 公司信息
   - 快速链接
   - 社交媒体图标
   - 版权信息

#### 2.1.2 交互功能

- 目的地搜索功能
- 卡片悬停效果
- 平滑滚动
- 懒加载图片
- 响应式导航菜单

---

### 2.2 预订页面 (Booking Page)

#### 2.2.1 页面功能

1. **导航栏**

   - 与主页保持一致的导航栏

2. **预订表单区域**

   - **目的地选择**

     - 下拉选择框或自动完成输入框
     - 显示目的地图片预览

   - **旅行日期选择**

     - 出发日期选择器
     - 返回日期选择器
     - 日期范围验证

   - **旅客信息**

     - 成人数量选择(+/- 按钮或下拉框)
     - 儿童数量选择
     - 婴儿数量选择

   - **个人信息**

     - 姓名(必填)
     - 邮箱(必填)
     - 电话号码(必填)
     - 特殊要求(可选文本框)

   - **住宿选择**

     - 酒店星级选择
     - 房间类型选择

   - **价格概览**
     - 实时显示总价
     - 价格明细展示
     - 优惠码输入框

3. **预订摘要侧边栏**

   - 选中的目的地信息
   - 旅行日期
   - 旅客数量
   - 总价格
   - 预订进度指示器

4. **提交按钮**

   - 醒目的"确认预订"按钮
   - 加载状态反馈

5. **成功/错误提示**
   - 表单验证提示
   - 预订成功的确认页面或模态框
   - 错误信息提示

#### 2.2.2 交互功能

- 表单验证(实时验证和提交验证)
- 日期选择器交互
- 价格实时计算
- 响应式表单布局
- 加载状态和提交反馈
- 数据持久化(可选:保存草稿)

---

## 3. 文件目录结构

```
travel-site/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── destinations/        # 目的地图片
│       ├── hero/                # 首页英雄区图片
│       └── icons/               # 各类图标
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── main.css        # 主样式文件
│   │   │   └── tailwind.css    # Tailwind CSS 配置
│   │   └── images/              # 本地图片资源
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.vue      # 导航栏组件
│   │   │   ├── Footer.vue      # 页脚组件
│   │   │   ├── Button.vue      # 通用按钮组件
│   │   │   └── Card.vue        # 通用卡片组件
│   │   ├── home/
│   │   │   ├── HeroSection.vue          # 英雄区域
│   │   │   ├── DestinationCard.vue      # 目的地卡片
│   │   │   ├── DestinationGrid.vue      # 目的地网格
│   │   │   ├── FeaturesSection.vue      # 特色服务
│   │   │   └── TestimonialsSection.vue  # 用户评价
│   │   └── booking/
│   │       ├── BookingForm.vue          # 预订表单主组件
│   │       ├── DatePicker.vue           # 日期选择器
│   │       ├── GuestSelector.vue        # 旅客选择器
│   │       ├── PriceSummary.vue         # 价格摘要
│   │       └── DestinationSelector.vue  # 目的地选择器
│   ├── views/
│   │   ├── Home.vue            # 主页视图
│   │   └── Booking.vue         # 预订页面视图
│   ├── router/
│   │   └── index.ts            # 路由配置
│   ├── stores/
│   │   ├── destinations.ts     # 目的地数据状态管理
│   │   └── booking.ts          # 预订信息状态管理
│   ├── types/
│   │   ├── destination.ts      # 目的地类型定义
│   │   ├── booking.ts          # 预订类型定义
│   │   └── index.ts            # 类型导出
│   ├── utils/
│   │   ├── validators.ts       # 表单验证工具
│   │   ├── formatters.ts       # 格式化工具
│   │   └── api.ts              # API 请求工具
│   ├── composables/
│   │   ├── useBooking.ts       # 预订逻辑组合函数
│   │   └── useDestinations.ts  # 目的地逻辑组合函数
│   ├── App.vue                 # 根组件
│   └── main.ts                 # 应用入口
├── .env                        # 环境变量
├── .env.example                # 环境变量示例
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json               # TypeScript 配置
├── tailwind.config.js          # Tailwind CSS 配置
├── vite.config.ts              # Vite 配置
├── postcss.config.js           # PostCSS 配置
├── PRD.md                      # 本文档
└── README.md                   # 项目说明文档
```

---

## 4. 技术栈

### 4.1 核心技术

- **Vue 3**: 使用 Composition API 和 `<script setup>` 语法
- **TypeScript**: 提供类型安全和更好的开发体验
- **Tailwind CSS**: 实用优先的 CSS 框架,快速构建响应式界面

### 4.2 构建工具

- **Vite**: 快速的现代化前端构建工具

### 4.3 路由管理

- **Vue Router 4**: Vue 3 的官方路由管理器

### 4.4 状态管理

- **Pinia**: Vue 3 的官方状态管理库

### 4.5 UI 增强

- **VueUse**: Vue 组合式 API 工具集
- **HeadlessUI**: 无样式的可访问 UI 组件(可选)
- **Vue3-DatePicker**: 日期选择组件(或其他日期选择库)

### 4.6 图片处理

- **Unsplash API**: 获取高质量旅游图片
- **Pexels API**: 获取免费高质量图片

### 4.7 表单验证

- **Vuelidate** 或 **Yup**: 表单验证库

### 4.8 HTTP 客户端

- **Axios**: 处理 API 请求

### 4.9 开发工具

- **ESLint**: 代码质量检查
- **Prettier**: 代码格式化
- **TypeScript ESLint**: TypeScript 代码检查

---

## 5. 响应式设计断点

基于 Tailwind CSS 默认断点:

- **移动端 (Mobile)**: < 640px
- **平板 (Tablet)**: 640px ~ 1024px
- **桌面端 (Desktop)**: ≥ 1024px
- **大屏幕 (Large Desktop)**: ≥ 1280px

---

## 6. 颜色配置方案

### 6.1 主色调

```css
/* 蓝色系 */
primary-blue: #0EA5E9      /* Sky Blue - 主要操作按钮 */
primary-blue-dark: #0284C7 /* 深蓝 - 按钮悬停状态 */
primary-blue-light: #7DD3FC /* 浅蓝 - 背景渐变 */

/* 绿色系 */
primary-green: #10B981     /* Emerald Green - 成功状态、强调元素 */
primary-green-dark: #059669 /* 深绿 - 绿色悬停状态 */
primary-green-light: #6EE7B7 /* 浅绿 - 背景装饰 */
```

### 6.2 辅助色

```css
/* 中性色 */
neutral-50: #F9FAFB
neutral-100: #F3F4F6
neutral-200: #E5E7EB
neutral-800: #1F2937
neutral-900: #111827

/* 功能色 */
warning: #F59E0B    /* 警告提示 */
error: #EF4444      /* 错误提示 */
success: #10B981    /* 成功提示 */
```

---

## 7. 开发阶段

### Phase 1: 项目初始化

- [x] 创建 PRD 文档
- [ ] 初始化 Vue 3 + Vite + TypeScript 项目
- [ ] 配置 Tailwind CSS
- [ ] 设置 ESLint 和 Prettier
- [ ] 配置路由和状态管理

### Phase 2: 主页开发

- [ ] 开发通用组件(Header、Footer、Button、Card)
- [ ] 实现 Hero Section
- [ ] 实现目的地网格展示
- [ ] 实现特色服务区域
- [ ] 实现用户评价区域
- [ ] 响应式适配

### Phase 3: 预订页面开发

- [ ] 设计表单结构
- [ ] 实现目的地选择器
- [ ] 实现日期选择器
- [ ] 实现旅客信息表单
- [ ] 实现价格计算逻辑
- [ ] 实现表单验证
- [ ] 响应式适配

### Phase 4: 集成与优化

- [ ] 集成 Unsplash/Pexels API
- [ ] 性能优化(懒加载、代码分割)
- [ ] SEO 优化
- [ ] 跨浏览器测试
- [ ] 移动端测试

### Phase 5: 部署

- [ ] 构建生产版本
- [ ] 部署到服务器
- [ ] 配置域名和 HTTPS

---

## 8. 未来扩展功能

- 用户账号系统(注册、登录)
- 订单管理系统
- 支付集成
- 目的地详情页
- 博客/旅游攻略板块
- 多语言支持
- 暗黑模式
- 社交分享功能
- 实时客服聊天
- 个性化推荐算法

---

## 9. 性能指标

- **首屏加载时间**: < 2s
- **Lighthouse 评分**:
  - Performance: ≥ 90
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - SEO: ≥ 90

---

## 10. 浏览器支持

- Chrome (最新版本及前两个主要版本)
- Firefox (最新版本及前两个主要版本)
- Safari (最新版本及前两个主要版本)
- Edge (最新版本及前两个主要版本)
- 移动端浏览器 (iOS Safari, Chrome Mobile)

---

**文档版本**: 1.0  
**创建日期**: 2025 年 10 月 16 日  
**最后更新**: 2025 年 10 月 16 日
