// 模板CSS获取函数
function getTemplateCSS(templateName) {
    const templates = {
        'elegant-blue': `
            /* 优雅商务蓝色主题 */
            body {
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                color: #1e293b;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                margin: 0;
                padding: 20px;
                line-height: 1.6;
            }

            .resume-container {
                max-width: 820px;
                margin: 0 auto;
                background: #ffffff;
                color: #1e293b;
                min-height: auto;
                padding: 50px 40px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(30, 58, 59, 0.1);
                border: 1px solid #e2e8f0;
            }

            /* 装饰性顶部边框 */
            .resume-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
                border-radius: 12px 12px 0 0;
            }

            .resume-container {
                position: relative;
            }

            .resume-content h1 {
                color: #1e40af;
                font-size: 2.5em;
                font-weight: 700;
                margin-bottom: 20px;
                line-height: 1.2;
                text-align: center;
                position: relative;
            }

            .resume-content h1::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 3px;
                background: linear-gradient(90deg, #1e40af, #3b82f6);
                border-radius: 2px;
            }

            .resume-content h2 {
                color: #1e40af;
                border-bottom: 2px solid #e2e8f0;
                font-size: 1.6em;
                font-weight: 600;
                margin-top: 35px;
                margin-bottom: 20px;
                padding-bottom: 10px;
                position: relative;
            }

            .resume-content h2::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 60px;
                height: 2px;
                background: #3b82f6;
            }

            .resume-content h3 {
                color: #334155;
                font-size: 1.3em;
                font-weight: 600;
                margin-top: 25px;
                margin-bottom: 12px;
            }

            /* 联系信息区域 */
            .contact-info {
                background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                border: 1px solid #bfdbfe;
                border-left: 4px solid #3b82f6;
                border-radius: 8px;
                padding: 20px;
                margin: 25px 0;
                color: #1e40af;
            }

            .job-title {
                color: #1e40af;
                font-weight: 600;
                font-size: 1.1em;
            }

            .company-info {
                color: #64748b;
                margin-bottom: 8px;
                font-size: 0.95em;
            }

            /* 链接样式 */
            a {
                color: #1e40af;
                text-decoration: none;
                border-bottom: 1px solid transparent;
                transition: all 0.3s ease;
            }

            a:hover {
                color: #3b82f6;
                border-bottom-color: #3b82f6;
                text-decoration: none;
            }

            /* 代码样式 */
            code {
                background: #f1f5f9;
                color: #1e40af;
                border: 1px solid #e2e8f0;
                padding: 3px 8px;
                border-radius: 6px;
                font-family: 'SF Mono', 'JetBrains Mono', monospace;
                font-size: 0.9em;
            }

            pre {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 20px;
                overflow-x: auto;
                margin: 20px 0;
            }

            pre code {
                background: none;
                border: none;
                color: #334155;
            }

            /* 引用样式 */
            blockquote {
                border-left: 4px solid #3b82f6;
                padding-left: 20px;
                margin: 20px 0;
                color: #64748b;
                font-style: italic;
                background: #f8fafc;
                border-radius: 0 8px 8px 0;
            }

            /* 分隔线 */
            hr {
                border: none;
                height: 1px;
                background: linear-gradient(90deg, transparent, #cbd5e1, transparent);
                margin: 30px 0;
            }

            /* 表格样式 */
            table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                margin: 20px 0;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                overflow: hidden;
            }

            th, td {
                border: 1px solid #e2e8f0;
                padding: 12px 15px;
                text-align: left;
            }

            th {
                background: #f1f5f9;
                color: #1e40af;
                font-weight: 600;
                font-size: 0.95em;
            }

            /* 列表样式 */
            ul, ol {
                margin-bottom: 20px;
                padding-left: 25px;
            }

            li {
                margin-bottom: 8px;
                line-height: 1.6;
                color: #475569;
            }

            /* 段落样式 */
            p {
                margin-bottom: 15px;
                line-height: 1.7;
                color: #475569;
            }

            /* 技能标签 */
            .skill-tag {
                background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                color: #1e40af;
                border: 1px solid #bfdbfe;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 0.9em;
                font-weight: 500;
                display: inline-block;
                margin: 4px 6px 4px 0;
                transition: all 0.3s ease;
            }

            .skill-tag:hover {
                background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 15px 0;
            }

            /* 打印样式 */
            @media print {
                body {
                    background: white !important;
                    color: black !important;
                    padding: 0 !important;
                }
                .resume-container {
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0 !important;
                    padding: 20px !important;
                    margin: 0 !important;
                }
            }
        `,
        'terminal-white': `
            body {
                background: #1a1a1a;
                color: #00ff00;
                font-family: 'Courier New', 'SF Mono', monospace;
                margin: 0;
                padding: 20px;
                line-height: 1.4;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: #000000;
                color: #00ff00;
                border: 2px solid #00ff00;
                border-radius: 8px;
                padding: 30px;
                font-family: 'Courier New', 'SF Mono', monospace;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
            }

            .resume-container::before {
                content: '> _';
                position: absolute;
                top: 10px;
                left: 15px;
                color: #00ff00;
                font-size: 14px;
                opacity: 0.7;
            }

            .resume-content {
                margin-top: 20px;
            }

            .resume-content h1 {
                color: #00ff00;
                font-size: 2em;
                font-weight: normal;
                margin-bottom: 20px;
                text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
            }

            .resume-content h2 {
                color: #00ff00;
                border-bottom: 1px solid #00ff00;
                font-size: 1.4em;
                font-weight: normal;
                margin-top: 25px;
                margin-bottom: 15px;
                padding-bottom: 5px;
            }

            .resume-content h2::before {
                content: '$ ';
                color: #00ff00;
            }

            .resume-content h3 {
                color: #00ff00;
                font-size: 1.2em;
                font-weight: normal;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .resume-content h3::before {
                content: '>> ';
                color: #00ff00;
            }

            .contact-info {
                background: rgba(0, 255, 0, 0.1);
                border: 1px solid #00ff00;
                border-radius: 4px;
                padding: 15px;
                margin: 20px 0;
                color: #00ff00;
            }

            .job-title {
                color: #00ff00;
                font-weight: normal;
            }

            .company-info {
                color: #00ff00;
                opacity: 0.8;
                margin-bottom: 8px;
                font-style: italic;
            }

            a {
                color: #00ff00;
                text-decoration: underline;
            }

            a:hover {
                color: #ffffff;
                text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
            }

            code {
                background: rgba(0, 255, 0, 0.1);
                color: #00ff00;
                border: 1px solid #00ff00;
                padding: 2px 6px;
                border-radius: 3px;
                font-family: 'Courier New', 'SF Mono', monospace;
                font-size: 0.9em;
            }

            pre {
                background: rgba(0, 255, 0, 0.05);
                border: 1px solid #00ff00;
                border-radius: 4px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
                font-family: 'Courier New', 'SF Mono', monospace;
            }

            pre code {
                background: none;
                border: none;
                color: #00ff00;
            }

            blockquote {
                border-left: 3px solid #00ff00;
                padding-left: 15px;
                margin: 15px 0;
                color: #00ff00;
                opacity: 0.8;
                font-style: italic;
            }

            hr {
                border: none;
                border-top: 1px solid #00ff00;
                margin: 20px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
                border: 1px solid #00ff00;
            }

            th, td {
                border: 1px solid #00ff00;
                padding: 10px;
                text-align: left;
            }

            th {
                background: rgba(0, 255, 0, 0.1);
                color: #00ff00;
                font-weight: normal;
            }

            ul, ol {
                margin-bottom: 15px;
                padding-left: 25px;
            }

            li {
                margin-bottom: 5px;
                line-height: 1.5;
                color: #00ff00;
            }

            li::marker {
                color: #00ff00;
            }

            p {
                margin-bottom: 12px;
                line-height: 1.5;
                color: #00ff00;
            }

            .skill-tag {
                background: rgba(0, 255, 0, 0.1);
                color: #00ff00;
                border: 1px solid #00ff00;
                padding: 4px 10px;
                border-radius: 15px;
                font-size: 0.9em;
                font-weight: normal;
                display: inline-block;
                margin: 3px;
                font-family: 'Courier New', 'SF Mono', monospace;
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin: 15px 0;
            }

            @media print {
                body {
                    background: white !important;
                    color: black !important;
                }
                .resume-container {
                    background: white !important;
                    color: black !important;
                    border: 1px solid black !important;
                    box-shadow: none !important;
                }
            }
        `,
        'code-gray': `
            body {
                background: #f5f5f5;
                color: #333;
                font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
                margin: 0;
                padding: 20px;
                line-height: 1.6;
            }

            .resume-container {
                max-width: 820px;
                margin: 0 auto;
                background: #ffffff;
                color: #333;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 40px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }

            .resume-content h1 {
                color: #2c3e50;
                font-size: 2.2em;
                font-weight: 600;
                margin-bottom: 20px;
                border-bottom: 3px solid #3498db;
                padding-bottom: 10px;
            }

            .resume-content h2 {
                color: #34495e;
                font-size: 1.6em;
                font-weight: 500;
                margin-top: 30px;
                margin-bottom: 15px;
                border-left: 4px solid #3498db;
                padding-left: 15px;
            }

            .resume-content h3 {
                color: #2c3e50;
                font-size: 1.3em;
                font-weight: 500;
                margin-top: 20px;
                margin-bottom: 10px;
                color: #7f8c8d;
            }

            .contact-info {
                background: #ecf0f1;
                border: 1px solid #bdc3c7;
                border-radius: 6px;
                padding: 20px;
                margin: 25px 0;
                color: #2c3e50;
            }

            .job-title {
                color: #3498db;
                font-weight: 500;
            }

            .company-info {
                color: #7f8c8d;
                margin-bottom: 8px;
                font-size: 0.95em;
            }

            a {
                color: #3498db;
                text-decoration: none;
                border-bottom: 1px dotted #3498db;
            }

            a:hover {
                color: #2980b9;
                border-bottom-style: solid;
            }

            code {
                background: #f8f9fa;
                color: #e74c3c;
                border: 1px solid #e9ecef;
                padding: 3px 8px;
                border-radius: 4px;
                font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
                font-size: 0.9em;
            }

            pre {
                background: #f8f9fa;
                border: 1px solid #dee2e6;
                border-radius: 6px;
                padding: 20px;
                overflow-x: auto;
                margin: 20px 0;
                position: relative;
            }

            pre::before {
                content: 'CODE';
                position: absolute;
                top: 8px;
                right: 12px;
                color: #6c757d;
                font-size: 0.7em;
                font-weight: bold;
            }

            pre code {
                background: none;
                border: none;
                color: #495057;
                padding: 0;
            }

            blockquote {
                border-left: 4px solid #3498db;
                padding-left: 20px;
                margin: 20px 0;
                color: #6c757d;
                font-style: italic;
                background: #f8f9fa;
                border-radius: 0 6px 6px 0;
            }

            hr {
                border: none;
                height: 1px;
                background: linear-gradient(90deg, transparent, #bdc3c7, transparent);
                margin: 30px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                border: 1px solid #dee2e6;
            }

            th, td {
                border: 1px solid #dee2e6;
                padding: 12px;
                text-align: left;
            }

            th {
                background: #e9ecef;
                color: #495057;
                font-weight: 600;
                font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
            }

            ul, ol {
                margin-bottom: 20px;
                padding-left: 25px;
            }

            li {
                margin-bottom: 8px;
                line-height: 1.6;
                color: #495057;
            }

            li::marker {
                color: #3498db;
            }

            p {
                margin-bottom: 15px;
                line-height: 1.7;
                color: #495057;
            }

            .skill-tag {
                background: #e9ecef;
                color: #495057;
                border: 1px solid #ced4da;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.9em;
                font-weight: 500;
                display: inline-block;
                margin: 4px 6px 4px 0;
                transition: all 0.3s ease;
            }

            .skill-tag:hover {
                background: #dee2e6;
                transform: translateY(-1px);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 15px 0;
            }

            @media print {
                body {
                    background: white !important;
                    color: black !important;
                }
                .resume-container {
                    box-shadow: none !important;
                    border: 1px solid #ccc !important;
                    border-radius: 0 !important;
                    padding: 20px !important;
                }
            }
        `,
        'minimal-green': `
            body {
                background: #fafafa;
                color: #2c3e50;
                font-family: 'Helvetica Neue', 'Arial', sans-serif;
                margin: 0;
                padding: 30px;
                line-height: 1.7;
            }

            .resume-container {
                max-width: 750px;
                margin: 0 auto;
                background: #ffffff;
                color: #2c3e50;
                border: none;
                padding: 50px 60px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }

            .resume-content h1 {
                color: #27ae60;
                font-size: 2.8em;
                font-weight: 300;
                margin-bottom: 15px;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #27ae60;
                font-size: 1.4em;
                font-weight: 600;
                margin-top: 35px;
                margin-bottom: 20px;
                border-bottom: 2px solid #ecf0f1;
                padding-bottom: 8px;
            }

            .resume-content h3 {
                color: #34495e;
                font-size: 1.2em;
                font-weight: 500;
                margin-top: 25px;
                margin-bottom: 12px;
            }

            .contact-info {
                background: #f8f9fa;
                border-left: 3px solid #27ae60;
                border-radius: 2px;
                padding: 20px 25px;
                margin: 30px 0;
                color: #2c3e50;
            }

            .job-title {
                color: #27ae60;
                font-weight: 600;
                font-size: 1.1em;
            }

            .company-info {
                color: #7f8c8d;
                margin-bottom: 10px;
                font-size: 0.95em;
            }

            a {
                color: #27ae60;
                text-decoration: none;
                font-weight: 500;
            }

            a:hover {
                text-decoration: underline;
                color: #229954;
            }

            code {
                background: #f1f3f4;
                color: #27ae60;
                padding: 3px 6px;
                border-radius: 3px;
                font-family: 'SF Mono', 'Monaco', monospace;
                font-size: 0.85em;
                font-weight: 500;
            }

            pre {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 4px;
                padding: 20px;
                overflow-x: auto;
                margin: 25px 0;
                font-family: 'SF Mono', 'Monaco', monospace;
                font-size: 0.9em;
                line-height: 1.5;
            }

            pre code {
                background: none;
                padding: 0;
                color: #2c3e50;
            }

            blockquote {
                border-left: 3px solid #27ae60;
                padding-left: 20px;
                margin: 25px 0;
                color: #7f8c8d;
                font-style: italic;
                background: #fafafa;
            }

            hr {
                border: none;
                height: 1px;
                background: #ecf0f1;
                margin: 40px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 25px 0;
                border: 1px solid #ecf0f1;
            }

            th, td {
                border: 1px solid #ecf0f1;
                padding: 12px 15px;
                text-align: left;
            }

            th {
                background: #f8f9fa;
                color: #2c3e50;
                font-weight: 600;
                font-size: 0.9em;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            ul, ol {
                margin-bottom: 20px;
                padding-left: 25px;
            }

            li {
                margin-bottom: 8px;
                line-height: 1.7;
                color: #34495e;
            }

            li::marker {
                color: #27ae60;
            }

            p {
                margin-bottom: 16px;
                line-height: 1.8;
                color: #34495e;
            }

            .skill-tag {
                background: #e8f5e8;
                color: #27ae60;
                border: 1px solid #c3e6cb;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 0.85em;
                font-weight: 500;
                display: inline-block;
                margin: 5px 8px 5px 0;
                transition: all 0.2s ease;
            }

            .skill-tag:hover {
                background: #c3e6cb;
                transform: translateY(-1px);
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 20px 0;
            }

            strong {
                color: #27ae60;
                font-weight: 600;
            }

            @media print {
                body {
                    background: white !important;
                    color: black !important;
                    padding: 0 !important;
                }
                .resume-container {
                    box-shadow: none !important;
                    border: none !important;
                    padding: 30px !important;
                }
            }
        `,
        'business-orange': `
            body {
                background: #fff8f0;
                color: #2c3e50;
                font-family: 'Georgia', 'Times New Roman', serif;
                margin: 0;
                padding: 25px;
                line-height: 1.8;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: #ffffff;
                color: #2c3e50;
                border: 2px solid #e67e22;
                border-radius: 12px;
                padding: 50px;
                box-shadow: 0 8px 30px rgba(230, 126, 34, 0.15);
                position: relative;
            }

            .resume-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 5px;
                background: linear-gradient(90deg, #e67e22, #f39c12, #e67e22);
                border-radius: 12px 12px 0 0;
            }

            .resume-content h1 {
                color: #e67e22;
                font-size: 3em;
                font-weight: 700;
                margin-bottom: 25px;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 2px;
                position: relative;
            }

            .resume-content h1::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 120px;
                height: 3px;
                background: #e67e22;
                border-radius: 2px;
            }

            .resume-content h2 {
                color: #d35400;
                font-size: 1.6em;
                font-weight: 600;
                margin-top: 45px;
                margin-bottom: 20px;
                border-bottom: 2px solid #f39c12;
                padding-bottom: 10px;
                position: relative;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .resume-content h2::before {
                content: '◆';
                color: #e67e22;
                margin-right: 10px;
                font-size: 0.8em;
            }

            .resume-content h3 {
                color: #e67e22;
                font-size: 1.3em;
                font-weight: 600;
                margin-top: 25px;
                margin-bottom: 15px;
            }

            .contact-info {
                background: linear-gradient(135deg, #fdf2e9 0%, #fae5d3 100%);
                border: 2px solid #e67e22;
                border-radius: 10px;
                padding: 25px 30px;
                margin: 35px 0;
                color: #d35400;
                position: relative;
                overflow: hidden;
            }

            .contact-info::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #e67e22, #f39c12);
            }

            .job-title {
                color: #e67e22;
                font-weight: 700;
                font-size: 1.1em;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .company-info {
                color: #7f8c8d;
                margin-bottom: 12px;
                font-size: 0.95em;
                font-style: italic;
            }

            a {
                color: #e67e22;
                text-decoration: none;
                font-weight: 600;
                border-bottom: 1px solid transparent;
                transition: all 0.3s ease;
            }

            a:hover {
                color: #d35400;
                border-bottom-color: #e67e22;
            }

            code {
                background: linear-gradient(135deg, #fdf2e9 0%, #fae5d3 100%);
                color: #e67e22;
                border: 1px solid #f39c12;
                padding: 4px 10px;
                border-radius: 6px;
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 0.9em;
                font-weight: 600;
            }

            pre {
                background: #fdf2e9;
                border: 2px solid #f39c12;
                border-radius: 10px;
                padding: 25px;
                overflow-x: auto;
                margin: 30px 0;
                font-family: 'Georgia', 'Times New Roman', serif;
                position: relative;
            }

            pre::before {
                content: 'PROFESSIONAL';
                position: absolute;
                top: 12px;
                right: 15px;
                color: #e67e22;
                font-size: 0.7em;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            pre code {
                background: none;
                border: none;
                padding: 0;
                color: #2c3e50;
            }

            blockquote {
                border-left: 5px solid #e67e22;
                padding-left: 25px;
                margin: 30px 0;
                color: #7f8c8d;
                font-style: italic;
                background: linear-gradient(135deg, #fdf2e9 0%, #fae5d3 100%);
                border-radius: 0 10px 10px 0;
                border: 1px solid #f39c12;
                border-left: 5px solid #e67e22;
            }

            hr {
                border: none;
                height: 2px;
                background: linear-gradient(90deg, transparent, #e67e22, transparent);
                margin: 45px 0;
                position: relative;
            }

            hr::before {
                content: '★';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #fff8f0;
                color: #e67e22;
                padding: 8px 15px;
                border-radius: 25px;
                font-size: 1.1em;
                border: 1px solid #e67e22;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 30px 0;
                border: 2px solid #e67e22;
                border-radius: 10px;
                overflow: hidden;
            }

            th, td {
                border: 1px solid #f39c12;
                padding: 15px;
                text-align: left;
            }

            th {
                background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%);
                color: white;
                font-weight: 700;
                font-size: 0.95em;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            td {
                background: #fdf2e9;
            }

            ul, ol {
                margin-bottom: 25px;
                padding-left: 30px;
            }

            li {
                margin-bottom: 10px;
                line-height: 1.8;
                color: #34495e;
            }

            li::marker {
                color: #e67e22;
                font-weight: bold;
            }

            p {
                margin-bottom: 18px;
                line-height: 1.9;
                color: #34495e;
            }

            .skill-tag {
                background: linear-gradient(135deg, #fdf2e9 0%, #fae5d3 100%);
                color: #e67e22;
                border: 2px solid #f39c12;
                padding: 8px 18px;
                border-radius: 25px;
                font-size: 0.85em;
                font-weight: 600;
                display: inline-block;
                margin: 8px 10px 8px 0;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .skill-tag:hover {
                background: linear-gradient(135deg, #fae5d3 0%, #fdeaa8 100%);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3);
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 25px 0;
            }

            strong {
                color: #e67e22;
                font-weight: 700;
            }

            @media print {
                body {
                    background: white !important;
                    color: black !important;
                    padding: 0 !important;
                }
                .resume-container {
                    box-shadow: none !important;
                    border: 2px solid #333 !important;
                    border-radius: 0 !important;
                    padding: 30px !important;
                }
            }
        `,
        'gradient-purple': `
            body {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: #2d3748;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                margin: 0;
                padding: 20px;
                line-height: 1.6;
                min-height: 100vh;
            }

            .resume-container {
                max-width: 840px;
                margin: 0 auto;
                background: rgba(255, 255, 255, 0.95);
                color: #2d3748;
                border-radius: 20px;
                padding: 50px 40px;
                box-shadow: 0 25px 50px rgba(102, 126, 234, 0.25);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                position: relative;
                overflow: hidden;
            }

            .resume-container::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 300px;
                height: 300px;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                z-index: 0;
            }

            .resume-container::after {
                content: '';
                position: absolute;
                bottom: -30%;
                left: -30%;
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, rgba(118, 75, 162, 0.2) 0%, transparent 70%);
                border-radius: 50%;
                z-index: 0;
            }

            .resume-content {
                position: relative;
                z-index: 1;
            }

            .resume-content h1 {
                color: #5a67d8;
                font-size: 2.8em;
                font-weight: 800;
                margin-bottom: 25px;
                text-align: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #5a67d8;
                font-size: 1.7em;
                font-weight: 700;
                margin-top: 40px;
                margin-bottom: 20px;
                border-bottom: 3px solid transparent;
                border-image: linear-gradient(90deg, #667eea, #764ba2) 1;
                padding-bottom: 12px;
                position: relative;
            }

            .resume-content h2::before {
                content: '';
                position: absolute;
                bottom: -3px;
                left: 0;
                width: 80px;
                height: 3px;
                background: linear-gradient(90deg, #667eea, #764ba2);
                border-radius: 2px;
            }

            .resume-content h3 {
                color: #4a5568;
                font-size: 1.4em;
                font-weight: 600;
                margin-top: 25px;
                margin-bottom: 15px;
            }

            .contact-info {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                border: 2px solid rgba(102, 126, 234, 0.3);
                border-left: 5px solid #667eea;
                border-radius: 15px;
                padding: 25px 30px;
                margin: 35px 0;
                color: #5a67d8;
                backdrop-filter: blur(5px);
            }

            .job-title {
                color: #5a67d8;
                font-weight: 700;
                font-size: 1.1em;
            }

            .company-info {
                color: #718096;
                margin-bottom: 10px;
                font-size: 0.95em;
            }

            a {
                color: #667eea;
                text-decoration: none;
                font-weight: 600;
                border-bottom: 2px solid transparent;
                transition: all 0.3s ease;
            }

            a:hover {
                color: #764ba2;
                border-bottom-color: #764ba2;
                text-shadow: 0 2px 8px rgba(118, 75, 162, 0.3);
            }

            code {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                color: #5a67d8;
                border: 1px solid rgba(102, 126, 234, 0.3);
                padding: 4px 10px;
                border-radius: 8px;
                font-family: 'SF Mono', 'JetBrains Mono', monospace;
                font-size: 0.9em;
                font-weight: 600;
            }

            pre {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
                border: 2px solid rgba(102, 126, 234, 0.2);
                border-radius: 15px;
                padding: 25px;
                overflow-x: auto;
                margin: 30px 0;
                position: relative;
                backdrop-filter: blur(5px);
            }

            pre::before {
                content: '</>';
                position: absolute;
                top: 12px;
                right: 15px;
                color: #667eea;
                font-family: monospace;
                font-size: 0.8em;
                opacity: 0.7;
                font-weight: bold;
            }

            pre code {
                background: none;
                border: none;
                padding: 0;
                color: #2d3748;
            }

            blockquote {
                border-left: 5px solid #667eea;
                padding-left: 25px;
                margin: 30px 0;
                color: #4a5568;
                font-style: italic;
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
                border-radius: 0 15px 15px 0;
                border: 1px solid rgba(102, 126, 234, 0.2);
                border-left: 5px solid #667eea;
            }

            hr {
                border: none;
                height: 2px;
                background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
                margin: 40px 0;
                position: relative;
            }

            hr::before {
                content: '✨';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.9);
                color: #667eea;
                padding: 8px 15px;
                border-radius: 25px;
                font-size: 1em;
                border: 1px solid rgba(102, 126, 234, 0.3);
                backdrop-filter: blur(5px);
            }

            table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                margin: 30px 0;
                border: 2px solid rgba(102, 126, 234, 0.3);
                border-radius: 15px;
                overflow: hidden;
                backdrop-filter: blur(5px);
            }

            th, td {
                border: 1px solid rgba(102, 126, 234, 0.2);
                padding: 15px;
                text-align: left;
            }

            th {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                font-weight: 700;
                font-size: 0.95em;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            td {
                background: rgba(255, 255, 255, 0.5);
            }

            ul, ol {
                margin-bottom: 25px;
                padding-left: 30px;
            }

            li {
                margin-bottom: 10px;
                line-height: 1.7;
                color: #4a5568;
            }

            li::marker {
                color: #667eea;
                font-weight: bold;
            }

            p {
                margin-bottom: 18px;
                line-height: 1.8;
                color: #4a5568;
            }

            .skill-tag {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
                color: #5a67d8;
                border: 2px solid rgba(102, 126, 234, 0.4);
                padding: 8px 18px;
                border-radius: 25px;
                font-size: 0.85em;
                font-weight: 600;
                display: inline-block;
                margin: 8px 10px 8px 0;
                transition: all 0.3s ease;
                backdrop-filter: blur(5px);
                position: relative;
                overflow: hidden;
            }

            .skill-tag::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
                transition: left 0.6s ease;
            }

            .skill-tag:hover {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                border-color: #764ba2;
            }

            .skill-tag:hover::before {
                left: 100%;
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                margin: 25px 0;
            }

            strong {
                color: #5a67d8;
                font-weight: 700;
            }

            @media print {
                body {
                    background: white !important;
                    color: black !important;
                    padding: 0 !important;
                }
                .resume-container {
                    box-shadow: none !important;
                    background: white !important;
                    border: 1px solid #ccc !important;
                    border-radius: 0 !important;
                    padding: 30px !important;
                    backdrop-filter: none !important;
                }
                .resume-container::before,
                .resume-container::after {
                    display: none !important;
                }
            }
        `,
        'github-blue': `
            body {
                background: #ffffff;
                color: #24292e;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 20px;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: #ffffff;
                color: #24292e;
                min-height: 100vh;
                padding: 40px 20px;
            }

            .resume-content h1 {
                color: #0366d6;
                font-size: 2.4em;
                font-weight: 700;
                margin-bottom: 15px;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #0366d6;
                border-bottom: 2px solid #e1e4e8;
                font-size: 1.5em;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
            }

            .resume-content h3 {
                color: #24292e;
                font-size: 1.3em;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .contact-info {
                background: #f6f8fa;
                border: 1px solid #e1e4e8;
                border-radius: 6px;
                padding: 20px;
                margin: 25px 0;
                color: #586069;
                font-size: 1.1em;
            }

            .job-title {
                color: #0366d6;
                font-weight: 600;
            }

            .company-info {
                color: #586069;
                font-style: italic;
                margin-bottom: 12px;
            }

            a {
                color: #0366d6;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }

            code {
                background: #f6f8fa;
                color: #d73a49;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
            }

            pre {
                background: #f6f8fa;
                border: 1px solid #e1e4e8;
                border-radius: 6px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
            }

            pre code {
                background: none;
                color: #24292e;
            }

            blockquote {
                border-left: 4px solid #d1d5da;
                padding-left: 15px;
                margin: 15px 0;
                color: #6a737d;
                font-style: italic;
            }

            hr {
                border: none;
                border-top: 1px solid #e1e4e8;
                margin: 25px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid #e1e4e8;
                padding: 10px;
                text-align: left;
            }

            th {
                background: #f6f8fa;
                color: #24292e;
                font-weight: 600;
            }

            ul, ol {
                margin-bottom: 15px;
                padding-left: 25px;
            }

            li {
                margin-bottom: 6px;
                line-height: 1.6;
            }

            p {
                margin-bottom: 12px;
                line-height: 1.6;
            }

            .skill-tag {
                background: #f6f8fa;
                color: #0366d6;
                border: 1px solid #e1e4e8;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.9em;
                font-weight: 500;
                display: inline-block;
                margin: 2px;
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 15px 0;
            }
        `,
        'warm-orange': `
            /* 温暖活力橙色主题 */
            body {
                background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
                color: #7c2d12;
                font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                margin: 0;
                padding: 20px;
                line-height: 1.6;
            }

            .resume-container {
                max-width: 840px;
                margin: 0 auto;
                background: #ffffff;
                color: #7c2d12;
                min-height: auto;
                padding: 45px 40px;
                border-radius: 16px;
                box-shadow: 0 8px 25px rgba(251, 146, 60, 0.15);
                border: 2px solid #fed7aa;
                position: relative;
                overflow: hidden;
            }

            /* 装饰性背景图案 */
            .resume-container::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                z-index: 0;
            }

            .resume-container::after {
                content: '';
                position: absolute;
                bottom: -30%;
                left: -30%;
                width: 150px;
                height: 150px;
                background: radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%);
                border-radius: 50%;
                z-index: 0;
            }

            .resume-content {
                position: relative;
                z-index: 1;
            }

            .resume-content h1 {
                color: #ea580c;
                font-size: 2.6em;
                font-weight: 700;
                margin-bottom: 25px;
                line-height: 1.3;
                text-align: center;
                position: relative;
            }

            .resume-content h1::before {
                content: '🎨';
                position: absolute;
                top: -15px;
                right: calc(50% + 100px);
                font-size: 1.2em;
                opacity: 0.7;
            }

            .resume-content h1::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                width: 100px;
                height: 3px;
                background: linear-gradient(90deg, #ea580c, #fb923c);
                border-radius: 2px;
            }

            .resume-content h2 {
                color: #ea580c;
                border-bottom: 2px solid #fed7aa;
                font-size: 1.7em;
                font-weight: 600;
                margin-top: 40px;
                margin-bottom: 20px;
                padding-bottom: 12px;
                position: relative;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .resume-content h2::before {
                content: "▶";
                color: #fb923c;
                font-size: 0.8em;
            }

            .resume-content h2::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 70px;
                height: 2px;
                background: linear-gradient(90deg, #ea580c, #fb923c);
            }

            .resume-content h3 {
                color: #c2410c;
                font-size: 1.4em;
                font-weight: 600;
                margin-top: 25px;
                margin-bottom: 15px;
                position: relative;
                padding-left: 20px;
            }

            .resume-content h3::before {
                content: "•";
                position: absolute;
                left: 0;
                color: #fb923c;
                font-size: 1.2em;
            }

            /* 联系信息区域 */
            .contact-info {
                background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
                border: 2px solid #fed7aa;
                border-left: 5px solid #fb923c;
                border-radius: 12px;
                padding: 20px 25px;
                margin: 30px 0;
                color: #ea580c;
                position: relative;
                overflow: hidden;
            }

            .contact-info::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #ea580c, #fb923c, #fed7aa);
            }

            .job-title {
                color: #ea580c;
                font-weight: 600;
                font-size: 1.1em;
            }

            .company-info {
                color: #9a3412;
                margin-bottom: 10px;
                font-size: 0.95em;
            }

            /* 链接样式 */
            a {
                color: #ea580c;
                text-decoration: none;
                border-bottom: 1px solid transparent;
                transition: all 0.3s ease;
                position: relative;
            }

            a:hover {
                color: #c2410c;
                border-bottom-color: #fb923c;
                text-shadow: 0 1px 3px rgba(251, 146, 60, 0.3);
            }

            /* 代码样式 */
            code {
                background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
                color: #ea580c;
                border: 1px solid #fed7aa;
                padding: 4px 10px;
                border-radius: 8px;
                font-family: 'SF Mono', 'JetBrains Mono', monospace;
                font-size: 0.9em;
                font-weight: 500;
            }

            pre {
                background: #fff7ed;
                border: 2px solid #fed7aa;
                border-radius: 12px;
                padding: 20px;
                overflow-x: auto;
                margin: 25px 0;
                position: relative;
            }

            pre::before {
                content: '</>';
                position: absolute;
                top: 8px;
                right: 12px;
                color: #fb923c;
                font-family: monospace;
                font-size: 0.8em;
                opacity: 0.6;
            }

            pre code {
                background: none;
                border: none;
                color: #7c2d12;
                padding: 0;
            }

            /* 引用样式 */
            blockquote {
                border-left: 5px solid #fb923c;
                padding-left: 20px;
                margin: 25px 0;
                color: #9a3412;
                font-style: italic;
                background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
                border-radius: 0 12px 12px 0;
                border: 1px solid #fed7aa;
                border-left: 5px solid #fb923c;
            }

            /* 分隔线 */
            hr {
                border: none;
                height: 2px;
                background: linear-gradient(90deg, transparent, #fb923c, transparent);
                margin: 35px 0;
                position: relative;
            }

            hr::before {
                content: '🔥';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #fff7ed;
                color: #fb923c;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.9em;
                border: 1px solid #fed7aa;
            }

            /* 表格样式 */
            table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                margin: 25px 0;
                border: 2px solid #fed7aa;
                border-radius: 12px;
                overflow: hidden;
            }

            th, td {
                border: 1px solid #fed7aa;
                padding: 15px;
                text-align: left;
            }

            th {
                background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%);
                color: white;
                font-weight: 600;
                font-size: 0.95em;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            td {
                background: #fff7ed;
            }

            /* 列表样式 */
            ul, ol {
                margin-bottom: 20px;
                padding-left: 30px;
            }

            li {
                margin-bottom: 10px;
                line-height: 1.7;
                color: #7c2d12;
                position: relative;
            }

            li::marker {
                color: #fb923c;
                font-weight: bold;
            }

            /* 段落样式 */
            p {
                margin-bottom: 18px;
                line-height: 1.8;
                color: #7c2d12;
            }

            /* 技能标签 */
            .skill-tag {
                background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
                color: #ea580c;
                border: 2px solid #fb923c;
                padding: 8px 16px;
                border-radius: 25px;
                font-size: 0.9em;
                font-weight: 500;
                display: inline-block;
                margin: 6px 8px 6px 0;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .skill-tag::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.2), transparent);
                transition: left 0.5s ease;
            }

            .skill-tag:hover {
                background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(251, 146, 60, 0.3);
                border-color: #ea580c;
            }

            .skill-tag:hover::before {
                left: 100%;
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 20px 0;
            }

            /* 强调文本 */
            strong {
                color: #ea580c;
                font-weight: 600;
            }

            /* 打印样式 */
            @media print {
                body {
                    background: white !important;
                    color: black !important;
                    padding: 0 !important;
                }
                .resume-container {
                    box-shadow: none !important;
                    border: 1px solid #ccc !important;
                    border-radius: 0 !important;
                    padding: 20px !important;
                    margin: 0 !important;
                    background: white !important;
                }
                .resume-container::before,
                .resume-container::after {
                    display: none !important;
                }
            }
        `
    };

    return templates[templateName] || templates['github-blue'];
}

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
    console.log('开始初始化MD2Resume应用...');

    // 检查依赖
    if (typeof marked === 'undefined') {
        console.error('marked库未加载！');
        return;
    }

    if (typeof getTemplateCSS === 'undefined') {
        console.log('getTemplateCSS函数将在MD2Resume类中定义');
    }

    try {
        const app = new MD2Resume();
        // 将应用实例暴露到全局，方便部署管理器使用
        window.md2resumeApp = app;
        console.log('MD2Resume应用初始化完成');
        console.log('mdContent:', app.mdContent ? '有内容' : '空');
        console.log('currentTemplate:', app.currentTemplate);
    } catch (error) {
        console.error('应用初始化失败:', error);
    }
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('应用错误:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('未处理的Promise拒绝:', e.reason);
});

// export default MD2Resume; // 注释掉，避免在浏览器中直接加载时的语法错误