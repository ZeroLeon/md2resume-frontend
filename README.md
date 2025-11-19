# MD2Resume Frontend

## 📋 概述

MD2Resume前端界面，提供Markdown简历编辑和实时预览功能。

## 🚀 部署到Vercel

### 前置要求
- GitHub账号
- Vercel账号
- 后端API URL

### 部署步骤

1. **推送到GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/md2resume-frontend.git
   git push -u origin main
   ```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择此仓库

3. **配置后端URL**
   部署后，在Vercel设置中更新 `vercel.json` 文件：
   ```json
   {
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "https://YOUR_BACKEND_URL.railway.app/api/$1"
       }
     ]
   }
   ```

4. **更新API配置**
   修改 `js/config.js` 中的生产环境URL：
   ```javascript
   production: {
     apiBase: 'https://YOUR_BACKEND_URL.railway.app/api'
   }
   ```

## 🔧 本地开发

```bash
# 使用任何静态服务器
python3 -m http.server 3000
# 或使用Node.js
npx serve .
# 或使用PHP
php -S localhost:3000
```

## ⚙️ 配置说明

### 环境检测
应用会自动检测运行环境：
- 本地开发（localhost/127.0.0.1）→ 使用开发API
- 生产环境 → 使用生产API

### API配置
API配置在 `js/config.js` 中定义：
- `API_CONFIG.baseURL`: API基础URL
- `API_CONFIG.endpoints`: 各个API端点

## 🎨 功能特性

- 📝 Markdown实时编辑
- 👁️ 实时预览
- 🎨 8种专业模板
- 📱 响应式设计
- ⌨️ 键盘快捷键
- 🚀 一键IPFS部署
- 📋 部署历史管理

## 📄 文件结构

```
├── index.html              # 主页面
├── vercel.json             # Vercel配置
├── js/
│   ├── config.js           # API配置
│   ├── app.js              # 主应用逻辑
│   ├── templates.js        # 模板系统
│   └── deployment.js       # 部署管理
├── styles/
│   ├── main.css            # 主要样式
│   └── templates.css       # 模板样式
└── test-resumes/           # 测试简历样本
```

## 🔗 相关链接

- [后端API](https://github.com/YOUR_USERNAME/md2resume-backend)
- [演示地址](https://your-app.vercel.app)
- [IPFS托管](https://pinme.eth.limo)

## 📄 许可证

MIT