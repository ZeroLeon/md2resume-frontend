// 导入模板函数
import { getTemplateCSS } from './templates.js';

class MD2Resume {
    constructor() {
        this.currentTemplate = 'github-blue';
        this.mdContent = '';
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSampleContent();
        this.updatePreview();
    }

    bindEvents() {
        // 输入事件
        const mdInput = document.getElementById('mdInput');
        mdInput.addEventListener('input', () => {
            this.mdContent = mdInput.value;
            this.updatePreview();
        });

        // 模板选择
        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.currentTemplate = card.dataset.template;
                this.updatePreview();
            });
        });

        // 文件上传
        document.getElementById('uploadBtn').addEventListener('click', () => {
            document.getElementById('fileInput').click();
        });

        document.getElementById('fileInput').addEventListener('change', (e) => {
            this.handleFileUpload(e);
        });

        // 清空内容
        document.getElementById('clearBtn').addEventListener('click', () => {
            if (confirm('确定要清空所有内容吗？')) {
                document.getElementById('mdInput').value = '';
                this.mdContent = '';
                this.updatePreview();
            }
        });

        // 下载HTML
        document.getElementById('downloadBtn').addEventListener('click', () => {
            this.downloadHTML();
        });

        // 全屏预览
        document.getElementById('fullscreenBtn').addEventListener('click', () => {
            this.showFullscreen();
        });

        // 模态框关闭
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                modal.style.display = 'none';
            });
        });

        // 点击模态框背景关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 's':
                        e.preventDefault();
                        this.downloadHTML();
                        break;
                    case 'd':
                        e.preventDefault();
                        document.getElementById('deployBtn').click();
                        break;
                    case 'p':
                        e.preventDefault();
                        this.showFullscreen();
                        break;
                }
            }
        });
    }

    loadSampleContent() {
        const sampleContent = `# 李明
**全栈开发工程师** | 📧 liming.dev@email.com | 📱 186-xxxx-xxxx | 📍 上海市 | 🌐 github.com/liming

## 💼 工作经历

### 高级前端开发工程师 | 创新科技有限公司 (2022.03 - 至今)
**负责项目**: 企业级SaaS平台开发
- 使用React + TypeScript + Redux开发核心业务模块，支撑10万+日活用户
- 主导前端性能优化，页面加载速度提升60%，Lighthouse评分从75提升至95
- 建立前端工程化体系，包括ESLint、Prettier、Husky等规范，团队开发效率提升40%
- 指导3名初级开发人员，定期组织技术分享，推动团队技术成长

### 前端开发工程师 | 互联网金融公司 (2020.07 - 2022.02)
**负责项目**: 在线支付平台和移动端App
- 开发移动端H5应用，兼容iOS/Android平台，用户量达到50万+
- 使用Vue.js + Vuex实现复杂状态管理，确保数据一致性
- 优化首屏加载性能，通过懒加载、代码分割等技术将加载时间从3.2秒优化至1.1秒
- 与UI/UX团队紧密合作，确保产品体验符合设计规范

## 🎯 技能专长

### 前端技术
- **语言**: JavaScript (ES6+), TypeScript, HTML5, CSS3/Sass
- **框架**: React, Vue.js, Next.js, Nuxt.js, Angular
- **状态管理**: Redux, Vuex, MobX, Zustand
- **构建工具**: Webpack, Vite, Rollup, Parcel
- **样式**: Tailwind CSS, Material-UI, Ant Design, Styled Components

### 后端技术
- **语言**: Node.js, Python, Java
- **框架**: Express.js, Koa.js, Fastify, Django, Spring Boot
- **数据库**: MySQL, PostgreSQL, MongoDB, Redis
- **API**: RESTful API, GraphQL, gRPC

### 开发运维
- **版本控制**: Git, GitHub, GitLab, SVN
- **容器化**: Docker, Kubernetes
- **CI/CD**: Jenkins, GitHub Actions, GitLab CI
- **云服务**: AWS, 阿里云, 腾讯云

## 🏆 项目成就

### 📱 移动端电商平台重构 (2023.01 - 2023.06)
**项目描述**: 主导公司核心移动端电商平台的技术重构
**技术栈**: React Native + TypeScript + Redux Toolkit
**主要成果**:
- 重构后的应用性能提升80%，崩溃率降低至0.1%以下
- 实现组件化开发，代码复用率从30%提升至75%
- 建立自动化测试体系，测试覆盖率达到85%
- 项目提前2周上线，获得公司年度技术创新奖

### 🚀 微服务架构升级 (2022.06 - 2022.12)
**项目描述**: 参与公司微服务架构改造，负责前端部分
**技术栈**: React + TypeScript + Micro Frontends
**主要成果**:
- 实现前端微服务化，各业务线可独立开发部署
- 统一设计系统和组件库，确保产品体验一致性
- 建立统一的监控和错误追踪体系，问题定位效率提升60%

## 🎓 教育背景

### 计算机科学与技术 | 本科 | 某某大学 (2016.09 - 2020.06)
- **GPA**: 3.8/4.0 (专业排名前10%)
- **主修课程**: 数据结构、算法设计、计算机网络、操作系统、数据库系统
- **荣誉奖项**: 国家奖学金(2次)、ACM程序设计竞赛省级二等奖、优秀毕业生

## 🏅 荣誉认证
- **AWS认证解决方案架构师** (2022)
- **PMP项目管理专业人士** (2023)
- **信息系统项目管理师** (2021)
- **公司年度优秀员工** (2021, 2022)

## 💬 语言能力
- **中文**: 母语
- **英语**: CET-6，熟练阅读技术文档和日常交流
- **日语**: N3水平，基础交流能力

## 🌟 个人特长
- **技术博客**: 维护技术博客，累计发表文章50+篇，总阅读量10万+
- **开源贡献**: 参与多个开源项目，GitHub followers 1000+
- **技术分享**: 多次在公司内外部进行技术分享，包括React Conf、前端大会等
- **持续学习**: 每周投入10+小时学习新技术，保持技术敏感度

---
**最后更新**: 2024年1月 | **期望职位**: 高级前端工程师/技术负责人`;

        document.getElementById('mdInput').value = sampleContent;
        this.mdContent = sampleContent;

        // 默认选中GitHub蓝模板
        document.querySelector('[data-template="github-blue"]').classList.add('active');
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.name.match(/\.(md|markdown)$/i)) {
            alert('请上传Markdown文件 (.md 或 .markdown)');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            document.getElementById('mdInput').value = content;
            this.mdContent = content;
            this.updatePreview();
        };
        reader.readAsText(file);
    }

    updatePreview() {
        const previewContent = document.getElementById('previewContent');

        if (!this.mdContent.trim()) {
            previewContent.innerHTML = `
                <div class="preview-placeholder">
                    <p>📄 简历预览将在这里显示</p>
                    <p>请在左侧输入Markdown内容或上传文件</p>
                </div>
            `;
            return;
        }

        try {
            // 解析Markdown内容
            const htmlContent = marked.parse(this.mdContent);

            // 应用模板样式
            const styledHTML = this.applyTemplate(htmlContent);

            previewContent.innerHTML = styledHTML;
            previewContent.className = `preview-content template-${this.currentTemplate}`;
        } catch (error) {
            console.error('Markdown解析错误:', error);
            previewContent.innerHTML = `
                <div class="preview-error">
                    <p>❌ Markdown解析失败</p>
                    <p>请检查您的Markdown格式是否正确</p>
                </div>
            `;
        }
    }

    applyTemplate(htmlContent) {
        return `<div class="resume-content">${htmlContent}</div>`;
    }

    showFullscreen() {
        const modal = document.getElementById('fullscreenModal');
        const fullscreenPreview = document.getElementById('fullscreenPreview');

        if (!this.mdContent.trim()) {
            alert('请先输入或上传Markdown内容');
            return;
        }

        try {
            const htmlContent = marked.parse(this.mdContent);
            const styledHTML = this.applyTemplate(htmlContent);
            fullscreenPreview.innerHTML = styledHTML;
            fullscreenPreview.className = `fullscreen-preview template-${this.currentTemplate}`;
            modal.style.display = 'flex';
        } catch (error) {
            console.error('全屏预览错误:', error);
            alert('预览失败，请检查Markdown格式');
        }
    }

    downloadHTML() {
        if (!this.mdContent.trim()) {
            alert('请先输入或上传Markdown内容');
            return;
        }

        try {
            const htmlContent = marked.parse(this.mdContent);
            const styledHTML = this.generateFullHTML(htmlContent);

            const blob = new Blob([styledHTML], { type: 'text/html;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);

            // 生成文件名
            const title = this.extractTitle() || 'resume';
            link.download = `${title}-${this.currentTemplate}.html`;

            link.click();
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('下载失败:', error);
            alert('下载失败，请重试');
        }
    }

    generateFullHTML(content) {
        const template = getTemplateCSS(this.currentTemplate);
        return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.extractTitle() || '简历'}</title>
    <style>
        ${template}
    </style>
</head>
<body>
    <div class="resume-container">
        <div class="resume-content template-${this.currentTemplate}">
            ${content}
        </div>
    </div>
</body>
</html>`;
    }

    extractTitle() {
        const titleMatch = this.mdContent.match(/^#\s+(.+)$/m);
        return titleMatch ? titleMatch[1].trim() : null;
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const app = new MD2Resume();
    // 将应用实例暴露到全局，方便部署管理器使用
    window.md2resumeApp = app;
    console.log('MD2Resume应用初始化完成');
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('应用错误:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('未处理的Promise拒绝:', e.reason);
});

export default MD2Resume;