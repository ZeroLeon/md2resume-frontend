// 主入口文件 - 导入所有模块
import './app.js';
import './templates.js';
import './deployment.js';

// 确保marked全局可用
window.marked = marked;

console.log('MD2Resume应用已加载');
console.log('API URL环境变量:', import.meta.env.VITE_API_URL);