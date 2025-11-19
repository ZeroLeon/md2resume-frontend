# MD2Resume Frontend

这是MD2Resume项目的前端应用，提供现代化的简历编辑和预览界面。

## 🎨 功能特性

- 📝 Markdown编辑器，支持实时预览
- 🎨 8种专业简历模板选择
- 👁️ 全屏预览模式
- 📱 完全响应式设计
- 🚀 一键IPFS部署
- 📋 链接复制和分享

## 📦 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **图标**: Unicode表情符号
- **API**: RESTful (后端API)

## 🔧 安装和运行

### 开发环境
```bash
npm install
npm run dev
```

### 构建生产版本
```bash
npm run build
npm run preview
```

## 🌐 部署

### 使用Vercel部署
1. 连接GitHub仓库到Vercel
2. 配置环境变量 `VITE_API_URL`
3. 自动部署到生产环境

### 环境变量
- `VITE_API_URL`: 后端API服务地址

## 🔗 API集成

前端通过以下API与后端通信：
- `/api/pinme-status` - PinMe状态检查
- `/api/deploy` - IPFS部署
- `/api/templates` - 模板列表

## 📄 许可证

MIT License
