// 构建时间戳 - 用于强制Vercel重新部署
console.log('Build timestamp:', new Date().toISOString());
window.LAST_BUILD_TIME = new Date().toISOString();