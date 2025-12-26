# GLM.TECH Landing Page

智谱AI GLM-4.7大模型的官方引导页落地页，采用现代化的设计和完整的SEO优化。

## 🌟 项目特点

### 技术栈
- **HTML5** - 语义化标签，SEO友好
- **Tailwind CSS** - 实用优先的CSS框架
- **Vanilla JavaScript** - 原生JS，轻量高效
- **响应式设计** - 完美适配各种设备

### 功能特性
- ✅ 完整的SEO优化
- ✅ 结构化数据支持
- ✅ 移动端友好
- ✅ 可访问性优化
- ✅ 性能优化
- ✅ 交互式演示
- ✅ 多种定价方案
- ✅ 动态粒子背景
- ✅ 平滑滚动效果

## 📁 项目结构

```
glm/
├── index.html          # 主HTML文件
├── styles.css          # 自定义样式
├── script.js           # 交互功能
├── seo-optimization-guide.md  # SEO优化指南
├── glm.tech-website-plan.md    # 网站规划文档
└── README.md           # 项目说明
```

## 🚀 快速开始

### 本地预览

1. 克隆项目到本地
```bash
git clone <repository-url>
cd glm
```

2. 使用Python内置服务器（推荐）
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

3. 使用Node.js http-server
```bash
npm install -g http-server
http-server
```

4. 在浏览器中访问
```
http://localhost:8000
```

### 部署建议

#### Vercel部署（推荐）
1. 将代码推送到GitHub
2. 在[Vercel](https://vercel.com)导入项目
3. 自动部署完成

#### Netlify部署
1. 将代码推送到GitHub
2. 在[Netlify](https://netlify.com)导入项目
3. 构建设置保持默认
4. 自动部署完成

#### 阿里云OSS部署
1. 安装ossutil工具
2. 配置访问密钥
3. 上传文件到OSS

## 📊 SEO优化详情

### 已实现的SEO功能

1. **Meta标签优化**
   - 完整的Open Graph标签
   - Twitter Card支持
   - 正确的描述和关键词

2. **结构化数据**
   - Website Schema
   - SoftwareApplication Schema
   - Organization Schema
   - Breadcrumb Schema

3. **性能优化**
   - 图片懒加载
   - DNS预加载
   - 资源预连接
   - Google Analytics集成

4. **技术SEO**
   - 语义化HTML
   - 响应式设计
   - 移动端优化
   - 可访问性支持

详细SEO优化指南请参考：[seo-optimization-guide.md](./seo-optimization-guide.md)

## 🎨 设计说明

### 色彩方案
- **主色调**：科技蓝 (#0066FF) + 智谱紫 (#6B46C1)
- **辅助色**：活力橙 (#FF6B35)、成功绿 (#00C851)
- **中性色**：深灰背景 (#1A1A1A)、浅灰文字 (#E0E0E0)

### 视觉风格
- 现代简约设计
- 科技感渐变效果
- 流畅的动画过渡
- 清晰的信息层级

## 📱 功能模块

### 1. 首页英雄区
- 动态粒子背景
- 核心数据展示
- CTA按钮组
- 平滑滚动引导

### 2. 能力展示
- 四大核心能力模块
- 交互式卡片设计
- 悬停效果动画
- 图标配合说明

### 3. 实时演示
- 嵌入式对话界面
- 模拟AI回复
- 打字动画效果
- 消息历史记录

### 4. 开发者中心
- 代码示例展示
- API特性说明
- 开发资源链接
- 快速上手指南

### 5. 价格方案
- 三层定价结构
- 特色标签突出
- 对比功能清晰
- 行动按钮醒目

## 🔧 自定义配置

### 修改网站信息
在 `index.html` 中修改以下部分：
- 网站标题和描述
- Logo和品牌名称
- 联系方式和社交媒体
- Google Analytics ID

### 修改配色方案
在 `styles.css` 中找到颜色变量：
```css
:root {
    --color-primary: #0066FF;
    --color-secondary: #6B46C1;
    /* 更多颜色变量 */
}
```

### 修改API演示
在 `script.js` 中修改AI回复逻辑：
```javascript
function getAIResponse(userMessage) {
    // 自定义回复逻辑
}
```

## 📈 性能监控

### 已实现的优化
- [x] 懒加载图片
- [x] CSS/JS压缩
- [x] DNS预解析
- [x] 资源预连接
- [x] 缓存策略

### 监控工具建议
- Google Search Console
- Google Analytics
- Lighthouse CI
- Sentry (错误监控)

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 开发规范
1. 代码风格保持一致
2. 添加必要的注释
3. 更新相关文档
4. 测试兼容性

### 提交规范
- feat: 新功能
- fix: Bug修复
- docs: 文档更新
- style: 代码格式化
- refactor: 代码重构
- test: 测试相关

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 项目地址：[GitHub Repository]
- 问题反馈：[Issues]
- 邮箱：contact@glm.tech

## 🙏 致谢

感谢以下开源项目：
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

**最后更新**：2025-12-24
**版本**：v1.0.0