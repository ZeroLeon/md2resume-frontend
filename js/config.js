// API配置文件
const CONFIG = {
  // 开发环境
  development: {
    apiBase: 'http://localhost:3001/api'
  },
  // 生产环境 - 部署时需要更新为实际的后端URL
  production: {
    apiBase: 'https://YOUR_BACKEND_URL.railway.app/api'
  }
};

// 根据环境获取API基础URL
function getApiBase() {
  // 检测是否在本地开发环境
  if (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1') {
    return CONFIG.development.apiBase;
  }

  // 生产环境
  return CONFIG.production.apiBase;
}

// 导出API配置
window.API_CONFIG = {
  baseURL: getApiBase(),
  // API端点
  endpoints: {
    pinmeStatus: '/pinme-status',
    upload: '/upload',
    deploy: '/deploy',
    history: '/history',
    templates: '/templates'
  }
};

// 导出工具函数
window.API = {
  // 获取完整API URL
  getUrl(endpoint) {
    return window.API_CONFIG.baseURL + endpoint;
  },

  // 通用fetch方法
  async fetch(endpoint, options = {}) {
    const url = this.getUrl(endpoint);
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(url, { ...defaultOptions, ...options });
  }
};