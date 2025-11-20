// PinMe部署管理类
class DeploymentManager {
    constructor() {
        this.deployHistory = this.loadDeployHistory();
        this.bindEvents();
    }

    bindEvents() {
        // 部署按钮事件
        document.getElementById('deployBtn').addEventListener('click', () => {
            this.handleDeploy();
        });

        // 历史记录按钮事件
        document.getElementById('historyBtn').addEventListener('click', () => {
            this.showHistory();
        });

        // 模态框关闭事件
        document.querySelector('#historyModal .modal-close').addEventListener('click', () => {
            document.getElementById('historyModal').style.display = 'none';
        });

        // 点击背景关闭模态框
        document.getElementById('historyModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                e.currentTarget.style.display = 'none';
            }
        });

        // 成功弹窗事件绑定
        document.getElementById('successModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                e.currentTarget.style.display = 'none';
            }
        });

        // 成功弹窗关闭按钮
        document.querySelector('#successModal .modal-close').addEventListener('click', () => {
            document.getElementById('successModal').style.display = 'none';
        });

        // 成功弹窗确定按钮
        document.getElementById('successModalOk').addEventListener('click', () => {
            document.getElementById('successModal').style.display = 'none';
        });

        // 成功弹窗预览按钮
        document.getElementById('successModalPreview').addEventListener('click', () => {
            const modal = document.getElementById('successModal');
            const deployUrl = modal.dataset.deployUrl;
            if (deployUrl) {
                window.open(deployUrl, '_blank');
            }
        });

        // 复制按钮事件委托
        document.getElementById('successModal').addEventListener('click', async (e) => {
            if (e.target.classList.contains('copy-btn')) {
                const targetId = e.target.dataset.target;
                const input = document.getElementById(targetId);
                if (input) {
                    try {
                        await this.copyToClipboard(input.value, e.target);
                    } catch (error) {
                        console.error('复制失败:', error);
                    }
                }
            }
        });
    }

    async handleDeploy() {
        const app = window.md2resumeApp;
        if (!app || !app.mdContent.trim()) {
            alert('请先输入或上传Markdown内容');
            return;
        }

        // 直接开始部署，不需要检查PinMe安装状态（后端会检查）
        this.showDeployStatus('正在生成HTML文件...', 20);

        try {
            // 生成HTML文件
            const htmlContent = await this.generateHTML(app.mdContent, app.currentTemplate);

            this.showDeployStatus('准备上传到IPFS...', 40);

            // 创建临时文件
            const tempFile = await this.createTempFile(htmlContent);

            this.showDeployStatus('正在部署到IPFS...', 60);

            // 调用PinMe部署
            const deployResult = await this.deployWithPinMe(tempFile);

            this.showDeployStatus('生成ENS域名...', 80);

            // 保存部署历史
            const deployInfo = {
                id: Date.now(),
                title: this.extractTitle(app.mdContent),
                template: app.currentTemplate,
                url: deployResult.url,
                timestamp: new Date().toISOString(),
                ipfsHash: deployResult.hash,
                ensDomain: deployResult.ensDomain
            };

            this.saveDeployRecord(deployInfo);

            this.showDeployStatus('部署成功！', 100);

            // 显示成功信息
            setTimeout(() => {
                this.showDeploySuccess(deployInfo);
            }, 1000);

        } catch (error) {
            console.error('部署失败:', error);
            this.showDeployError(error.message);
        }
    }

    getApiUrl() {
        // 在生产环境使用环境变量，开发环境使用localhost
        // 检查是否在生产环境（通过检测域名）
        const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
        const apiUrl = isProduction ? 'https://md2resume-backend-production.up.railway.app' : 'http://localhost:3001';
        console.log('当前环境:', isProduction ? '生产环境' : '开发环境');
        console.log('当前API URL:', apiUrl);
        return apiUrl;
    }

    async checkPinMeInstallation() {
        try {
            const response = await fetch(`${this.getApiUrl()}/api/pinme-status`);
            const data = await response.json();
            return data.installed;
        } catch (error) {
            console.error('检查PinMe安装失败:', error);
            return false;
        }
    }

    showPinMeInstallGuide() {
        const installGuide = `
📋 PinMe安装指南

请按照以下步骤安装PinMe CLI工具：

1. 打开终端/命令行工具
2. 运行以下命令：
   npm install -g pinme

3. 验证安装：
   pinme --version

4. 重新尝试部署

PinMe是一个免费的IPFS部署工具，可以将您的简历永久存储在去中心化网络上。
        `;

        alert(installGuide);
    }

    async generateHTML(mdContent, template) {
        try {
            const htmlContent = marked.parse(mdContent);
            const templateCSS = getTemplateCSS(template);

            const title = this.extractTitle(mdContent) || '简历';

            return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - MD2Resume</title>
    <meta name="description" content="${title} - 由MD2Resume生成的专业简历">
    <meta name="keywords" content="简历, ${title}, MD2Resume, Markdown, HTML">
    <meta name="author" content="${title}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:title" content="${title} - 专业简历">
    <meta property="og:description" content="${title} - 由MD2Resume生成的专业简历">
    <meta property="og:image" content="">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="">
    <meta property="twitter:title" content="${title} - 专业简历">
    <meta property="twitter:description" content="${title} - 由MD2Resume生成的专业简历">
    <meta property="twitter:image" content="">

    <style>
        ${templateCSS}

        /* 通用打印样式 */
        @media print {
            body {
                background: white !important;
                color: black !important;
            }

            .resume-container {
                box-shadow: none !important;
                background: white !important;
                color: black !important;
            }

            .template-neon-red .resume-container,
            .template-hacker-black .resume-container {
                background: white !important;
                color: black !important;
            }
        }

        /* 页面底部信息 */
        .footer-info {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(0,0,0,0.1);
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <div class="resume-content template-${template}">
            ${htmlContent}
        </div>
        <div class="footer-info">
            <p>📄 由 <strong>MD2Resume</strong> 生成 | 🚀 通过 <strong>PinMe</strong> 永久托管</p>
            <p>生成时间: ${new Date().toLocaleString('zh-CN')}</p>
        </div>
    </div>

    <script>
        // 简单的页面统计
        if (typeof window !== 'undefined') {
            console.log('📄 MD2Resume生成的简历');
            console.log('🚀 由PinMe托管在IPFS网络');
            console.log('⏰ 生成时间: ${new Date().toISOString()}');
        }
    </script>
</body>
</html>`;
        } catch (error) {
            throw new Error('HTML生成失败: ' + error.message);
        }
    }

    async createTempFile(content) {
        // 在实际应用中，这里应该创建一个临时文件
        // 由于这是Web环境，我们返回文件名
        const fileName = `resume-${Date.now()}.html`;

        // 模拟文件创建
        return {
            name: fileName,
            content: content,
            size: new Blob([content]).size
        };
    }

  async deployWithPinMe(file) {
        try {
            console.log('🚀 开始部署到IPFS...');
            console.log('📄 文件信息:', { name: file.name, size: `${(file.size / 1024).toFixed(2)}KB` });

            const app = window.md2resumeApp;
            const title = this.extractTitle(app.mdContent) || 'Untitled Resume';

            const response = await fetch(`${this.getApiUrl()}/api/deploy`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    htmlContent: file.content,
                    fileName: file.name,
                    title: title,
                    template: app.currentTemplate
                })
            });

            console.log('📡 部署API响应状态:', response.status);

            // 检查响应状态
            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ API返回错误状态:', response.status, errorText);

                // 尝试解析错误响应
                let errorResult;
                try {
                    errorResult = JSON.parse(errorText);
                    throw new Error(errorResult.error || `服务器错误: ${response.status}`);
                } catch {
                    throw new Error(`服务器错误: ${response.status} ${response.statusText}`);
                }
            }

            // 解析成功响应
            let result;
            try {
                const responseText = await response.text();
                console.log('📄 原始响应内容:', responseText);
                result = JSON.parse(responseText);
                console.log('✅ 解析后的JSON结果:', result);
            } catch (jsonError) {
                console.error('❌ JSON解析失败:', jsonError);
                throw new Error(`服务器返回了无效的JSON格式: ${jsonError.message}`);
            }

            if (result.success) {
                console.log('🎉 部署成功!');
                return {
                    hash: result.result.cid,
                    url: result.result.ensUrl,
                    ensDomain: result.result.ensUrl.replace('https://', ''),
                    ipfsUrl: result.result.ipfsUrl,
                    gatewayUrl: result.result.gatewayUrl,
                    pinataUrl: result.result.pinataUrl,
                    deployTime: result.result.deployTime,
                    title: result.result.title,
                    template: result.result.template,
                    debugInfo: result.result.debugInfo
                };
            } else {
                // 如果是PinMe未安装的错误，显示安装指南
                if (result.error && (result.error.includes('PinMe CLI未安装') || result.error.includes('PinMe'))) {
                    this.showPinMeInstallGuide();
                    throw new Error('需要先安装PinMe CLI工具');
                }
                throw new Error(result.error || '部署失败，请检查网络连接');
            }

        } catch (error) {
            console.error('❌ 部署API调用失败:', error);

            // 提供更详细的错误信息
            let errorMessage = error.message;
            if (error.message.includes('Failed to fetch')) {
                errorMessage = '无法连接到服务器，请检查服务器是否运行在 http://localhost:3001';
            }

            throw new Error(`部署失败: ${errorMessage}`);
        }
    }

    extractTitle(mdContent) {
        const titleMatch = mdContent.match(/^#\s+(.+)$/m);
        return titleMatch ? titleMatch[1].trim() : null;
    }

    showDeployStatus(message, progress) {
        const statusDiv = document.getElementById('deployStatus');
        const progressBar = statusDiv.querySelector('.progress-fill');
        const messageElement = statusDiv.querySelector('.deploy-message');

        statusDiv.style.display = 'block';
        progressBar.style.width = progress + '%';
        messageElement.textContent = message;

        if (progress >= 100) {
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 3000);
        }
    }

    showDeploySuccess(deployInfo) {
        const modal = document.getElementById('successModal');

        // 设置链接值 - 支持多个网关
        document.getElementById('mainLink').value = deployInfo.url; // ENS域名
        document.getElementById('ipfsLink').value = deployInfo.ipfsUrl; // IPFS官方网关
        document.getElementById('gatewayLink').value = deployInfo.gatewayUrl; // Cloudflare网关

        // 如果有Pinata网关，更新显示
        if (deployInfo.pinataUrl) {
            // 检查是否已存在Pinata链接元素，如果没有则创建
            let pinataLink = document.getElementById('pinataLink');
            if (!pinataLink) {
                // 在gatewayLink后面添加Pinata链接
                const gatewayLinkItem = document.getElementById('gatewayLink').closest('.link-item');
                const pinataLinkItem = document.createElement('div');
                pinataLinkItem.className = 'link-item';
                pinataLinkItem.innerHTML = `
                    <label>Pinata网关：</label>
                    <div class="link-wrapper">
                        <input type="text" id="pinataLink" readonly class="link-input" value="">
                        <button class="copy-btn" data-target="pinataLink">📋 复制</button>
                    </div>
                `;
                gatewayLinkItem.parentNode.insertBefore(pinataLinkItem, gatewayLinkItem.nextSibling);
                pinataLink = document.getElementById('pinataLink');
            }
            pinataLink.value = deployInfo.pinataUrl;
        }

        // 显示模态框
        modal.style.display = 'flex';

        // 存储当前部署信息供预览按钮使用
        modal.dataset.deployUrl = deployInfo.url;

        console.log('🎉 部署成功显示:', {
            title: deployInfo.title,
            ensUrl: deployInfo.url,
            cid: deployInfo.hash
        });
    }

    showDeployError(error) {
        const errorMessage = `
❌ 部署失败

错误信息: ${error}

可能的原因：
1. 网络连接问题
2. PinMe服务暂时不可用
3. 文件过大（PinMe限制单文件20MB）
4. 内容包含不支持的格式

解决方法：
1. 检查网络连接
2. 简化简历内容
3. 稍后重试
4. 联系技术支持

如需帮助，请访问：https://github.com/glitternetwork/pinme
        `;

        alert(errorMessage);
    }

    async copyToClipboard(text, buttonElement = null) {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                this.showCopySuccess(buttonElement);
            } else {
                // 降级方案
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showCopySuccess(buttonElement);
            }
        } catch (error) {
            console.error('复制失败:', error);
            this.showCopyError(buttonElement);
        }
    }

    showCopySuccess(buttonElement) {
        if (buttonElement) {
            const originalText = buttonElement.textContent;
            buttonElement.textContent = '✅ 已复制';
            buttonElement.classList.add('copied');

            setTimeout(() => {
                buttonElement.textContent = originalText;
                buttonElement.classList.remove('copied');
            }, 2000);
        } else {
            // 降级到alert
            alert('✅ 链接已复制到剪贴板');
        }
    }

    showCopyError(buttonElement) {
        if (buttonElement) {
            const originalText = buttonElement.textContent;
            buttonElement.textContent = '❌ 复制失败';

            setTimeout(() => {
                buttonElement.textContent = originalText;
            }, 2000);
        } else {
            // 降级到alert
            alert('❌ 复制失败，请手动复制链接');
        }
    }

    saveDeployRecord(deployInfo) {
        this.deployHistory.unshift(deployInfo);

        // 限制历史记录数量
        if (this.deployHistory.length > 50) {
            this.deployHistory = this.deployHistory.slice(0, 50);
        }

        // 保存到localStorage
        localStorage.setItem('md2resume_deploy_history', JSON.stringify(this.deployHistory));
    }

    loadDeployHistory() {
        try {
            const saved = localStorage.getItem('md2resume_deploy_history');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('加载部署历史失败:', error);
            return [];
        }
    }

    showHistory() {
        const modal = document.getElementById('historyModal');
        const historyList = document.getElementById('historyList');

        if (this.deployHistory.length === 0) {
            historyList.innerHTML = '<p class="no-history">暂无部署历史</p>';
        } else {
            historyList.innerHTML = this.deployHistory.map(record => `
                <div class="history-item">
                    <div class="history-item-header">
                        <div class="history-item-title">${record.title || '未命名简历'}</div>
                        <div class="history-item-time">${this.formatTime(record.timestamp)}</div>
                    </div>
                    <div class="history-item-details">
                        <p><strong>模板:</strong> ${this.getTemplateName(record.template)}</p>
                        <p><strong>ENS域名:</strong> ${record.ensDomain}</p>
                    </div>
                    <div class="history-item-links">
                        <a href="${record.url}" target="_blank" class="history-item-link">🔗 访问简历</a>
                        <a href="${record.ipfsUrl}" target="_blank" class="history-item-link">🌐 IPFS</a>
                        <a href="${record.gatewayUrl}" target="_blank" class="history-item-link">📡 网关</a>
                    </div>
                    <div class="history-item-actions">
                        <button class="btn btn-small btn-primary" onclick="deploymentManager.copyLink('${record.url}')">
                            📋 复制链接
                        </button>
                        <button class="btn btn-small btn-secondary" onclick="deploymentManager.deleteRecord(${record.id})">
                            🗑️ 删除记录
                        </button>
                    </div>
                </div>
            `).join('');
        }

        modal.style.display = 'flex';
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);

        if (hours < 1) {
            return '刚刚';
        } else if (hours < 24) {
            return `${hours}小时前`;
        } else if (days < 7) {
            return `${days}天前`;
        } else {
            return date.toLocaleDateString('zh-CN');
        }
    }

    getTemplateName(template) {
        const names = {
            'hacker-black': '极客黑',
            'terminal-white': '终端白',
            'code-gray': '代码灰',
            'github-blue': 'GitHub蓝',
            'minimal-green': '简约绿',
            'business-orange': '商务橙',
            'gradient-purple': '渐变紫',
            'neon-red': '霓虹红'
        };
        return names[template] || template;
    }

    async copyLink(url) {
        await this.copyToClipboard(url);
    }

    deleteRecord(id) {
        if (confirm('确定要删除这条部署记录吗？删除后只是从本地移除记录，不会影响已部署的简历。')) {
            this.deployHistory = this.deployHistory.filter(record => record.id !== id);
            localStorage.setItem('md2resume_deploy_history', JSON.stringify(this.deployHistory));
            this.showHistory(); // 刷新显示
        }
    }
}

// 全局部署管理器实例
let deploymentManager;

// 初始化部署管理器
document.addEventListener('DOMContentLoaded', () => {
    deploymentManager = new DeploymentManager();

    // 将实例暴露到全局，方便其他组件使用
    window.deploymentManager = deploymentManager;
});