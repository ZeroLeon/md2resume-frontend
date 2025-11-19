// 模板CSS获取函数
function getTemplateCSS(templateName) {
    const templates = {
        'hacker-black': `
            body {
                background: #0d1117;
                color: #c9d1d9;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 20px;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: #0d1117;
                color: #c9d1d9;
                min-height: 100vh;
                padding: 40px 20px;
            }

            .resume-content h1 {
                color: #58a6ff;
                font-size: 2.5em;
                font-weight: 700;
                text-shadow: 0 0 20px rgba(88, 166, 255, 0.5);
                margin-bottom: 10px;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #3fb950;
                border-bottom: 2px solid #3fb950;
                font-size: 1.5em;
                position: relative;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
            }

            .resume-content h2::before {
                content: ">> ";
                color: #3fb950;
            }

            .resume-content h3 {
                color: #58a6ff;
                font-size: 1.3em;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .contact-info {
                color: #8b949e;
                border-left: 3px solid #3fb950;
                padding-left: 15px;
                margin: 20px 0;
                font-size: 1.1em;
            }

            .job-title {
                color: #58a6ff;
                font-weight: 600;
            }

            .company-info {
                color: #8b949e;
                opacity: 0.8;
                margin-bottom: 12px;
            }

            a {
                color: #58a6ff;
                border-bottom: 1px dotted #58a6ff;
                text-decoration: none;
            }

            a:hover {
                color: #79c0ff;
                border-bottom-color: #79c0ff;
                text-shadow: 0 0 8px rgba(88, 166, 255, 0.8);
            }

            code {
                background: #161b22;
                color: #3fb950;
                border: 1px solid #30363d;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
            }

            pre {
                background: #161b22;
                border: 1px solid #30363d;
                border-radius: 8px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
            }

            pre code {
                background: none;
                border: none;
                color: #c9d1d9;
            }

            blockquote {
                border-left: 4px solid #3fb950;
                padding-left: 15px;
                margin: 15px 0;
                color: #8b949e;
                font-style: italic;
            }

            hr {
                border: none;
                border-top: 1px solid #30363d;
                margin: 25px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid #30363d;
                padding: 10px;
                text-align: left;
            }

            th {
                background: #161b22;
                color: #58a6ff;
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
                background: rgba(63, 185, 80, 0.2);
                color: #3fb950;
                border: 1px solid #3fb950;
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

        'terminal-white': `
            body {
                background: #ffffff;
                color: #24292e;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
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
                font-size: 2.2em;
                font-weight: 700;
                border-bottom: 3px solid #0366d6;
                padding-bottom: 10px;
                margin-bottom: 15px;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #0366d6;
                border-bottom: 2px solid #0366d6;
                font-size: 1.4em;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
            }

            .resume-content h2::before {
                content: "$ ";
                color: #0366d6;
                font-weight: bold;
            }

            .resume-content h3 {
                color: #24292e;
                font-size: 1.2em;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .contact-info {
                background: #f6f8fa;
                border: 1px solid #d1d5da;
                border-radius: 6px;
                padding: 15px;
                margin: 20px 0;
                color: #586069;
                font-size: 1.1em;
            }

            .job-title {
                color: #0366d6;
                font-weight: 600;
            }

            .company-info {
                color: #586069;
                opacity: 0.8;
                margin-bottom: 12px;
            }

            a {
                color: #0366d6;
                border-bottom: 1px solid #0366d6;
                text-decoration: none;
                transition: all 0.3s ease;
            }

            a:hover {
                background: #0366d6;
                color: white;
            }

            code {
                background: #f6f8fa;
                color: #d73a49;
                border: 1px solid #d1d5da;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
            }

            pre {
                background: #f6f8fa;
                border: 1px solid #d1d5da;
                border-radius: 6px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
            }

            pre code {
                background: none;
                border: none;
                color: #24292e;
            }

            blockquote {
                border-left: 4px solid #0366d6;
                padding-left: 15px;
                margin: 15px 0;
                color: #586069;
                font-style: italic;
                background: #f6f8fa;
                padding: 15px 20px;
            }

            hr {
                border: none;
                border-top: 1px solid #d1d5da;
                margin: 25px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid #d1d5da;
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
                border: 1px solid #d1d5da;
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

        'code-gray': `
            body {
                background: #f6f8fa;
                color: #24292e;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                margin: 0;
                padding: 20px;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: #f6f8fa;
                color: #24292e;
                min-height: 100vh;
                padding: 40px 20px;
            }

            .resume-content h1 {
                color: #24292e;
                font-size: 2.3em;
                font-weight: 700;
                margin-bottom: 5px;
                line-height: 1.2;
            }

            .resume-content h1::after {
                content: "{}";
                color: #586069;
                font-size: 0.8em;
                margin-left: 10px;
            }

            .resume-content h2 {
                color: #0366d6;
                border-bottom: 2px solid #d1d5da;
                font-size: 1.4em;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
            }

            .resume-content h3 {
                color: #24292e;
                font-size: 1.2em;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .contact-info {
                background: white;
                border: 1px solid #d1d5da;
                border-left: 4px solid #0366d6;
                padding: 15px;
                margin: 20px 0;
                color: #24292e;
                font-size: 1.1em;
            }

            .job-title {
                color: #0366d6;
                font-weight: 600;
            }

            .company-info {
                color: #586069;
                opacity: 0.8;
                margin-bottom: 12px;
            }

            a {
                color: #0366d6;
                text-decoration: underline;
            }

            a:hover {
                color: #0256cc;
            }

            code {
                background: white;
                color: #e36209;
                border: 1px solid #d1d5da;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
            }

            pre {
                background: white;
                border: 1px solid #d1d5da;
                border-radius: 6px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
                color: #24292e;
            }

            pre code {
                background: none;
                border: none;
                color: #24292e;
            }

            blockquote {
                border-left: 4px solid #0366d6;
                padding-left: 15px;
                margin: 15px 0;
                color: #586069;
                font-style: italic;
            }

            hr {
                border: none;
                border-top: 1px solid #d1d5da;
                margin: 25px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid #d1d5da;
                padding: 10px;
                text-align: left;
            }

            th {
                background: white;
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
                background: white;
                color: #0366d6;
                border: 1px solid #d1d5da;
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

        'minimal-green': `
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
                color: #28a745;
                font-size: 2.5em;
                font-weight: 300;
                margin-bottom: 20px;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #28a745;
                border-bottom: 2px solid #28a745;
                font-size: 1.4em;
                font-weight: 500;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
            }

            .resume-content h3 {
                color: #24292e;
                font-size: 1.2em;
                font-weight: 500;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .contact-info {
                color: #6c757d;
                font-size: 1.1em;
                margin: 15px 0 25px 0;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
            }

            .job-title {
                color: #28a745;
                font-weight: 600;
            }

            .company-info {
                color: #6c757d;
                margin-bottom: 12px;
            }

            a {
                color: #28a745;
                text-decoration: none;
                border-bottom: 1px solid transparent;
            }

            a:hover {
                border-bottom-color: #28a745;
            }

            code {
                background: #e8f5e8;
                color: #155724;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
            }

            pre {
                background: #f8f9fa;
                border-left: 4px solid #28a745;
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
                border-left: 4px solid #28a745;
                padding: 15px 20px;
                margin: 15px 0;
                color: #6c757d;
                font-style: italic;
                background: #f8f9fa;
            }

            hr {
                border: none;
                border-top: 1px solid #e9ecef;
                margin: 25px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid #dee2e6;
                padding: 10px;
                text-align: left;
            }

            th {
                background: #f8f9fa;
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
                background: #e8f5e8;
                color: #28a745;
                border: 1px solid #c3e6cb;
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

        'business-orange': `
            body {
                background: #ffffff;
                color: #343a40;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 20px;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: #ffffff;
                color: #343a40;
                min-height: 100vh;
                padding: 40px 20px;
            }

            .resume-content h1 {
                color: #fd7e14;
                font-size: 2.2em;
                font-weight: 700;
                border-bottom: 4px solid #fd7e14;
                padding-bottom: 10px;
                margin-bottom: 20px;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #fd7e14;
                border-bottom: 2px solid #fd7e14;
                font-size: 1.5em;
                font-weight: 600;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
            }

            .resume-content h3 {
                color: #343a40;
                font-size: 1.3em;
                font-weight: 600;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .contact-info {
                background: linear-gradient(135deg, #fff5f0 0%, #ffe8d6 100%);
                border-left: 4px solid #fd7e14;
                padding: 20px;
                margin: 20px 0;
                color: #495057;
                font-size: 1.1em;
                border-radius: 8px;
            }

            .job-title {
                color: #fd7e14;
                font-weight: 600;
            }

            .company-info {
                color: #6c757d;
                font-style: italic;
                margin-bottom: 12px;
            }

            a {
                color: #fd7e14;
                text-decoration: none;
                font-weight: 500;
            }

            a:hover {
                text-decoration: underline;
                color: #e8590c;
            }

            code {
                background: #fff3cd;
                color: #856404;
                border: 1px solid #ffeaa7;
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
            }

            pre {
                background: #fff3cd;
                border-left: 4px solid #fd7e14;
                border-radius: 6px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
            }

            pre code {
                background: none;
                color: #343a40;
            }

            blockquote {
                border-left: 4px solid #fd7e14;
                padding: 15px 20px;
                margin: 15px 0;
                color: #856404;
                background: #fff3cd;
                font-style: italic;
            }

            hr {
                border: none;
                border-top: 1px solid #dee2e6;
                margin: 25px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid #dee2e6;
                padding: 10px;
                text-align: left;
            }

            th {
                background: #f8f9fa;
                color: #343a40;
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
                background: #fff3cd;
                color: #fd7e14;
                border: 1px solid #ffeaa7;
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

        'gradient-purple': `
            body {
                background: #ffffff;
                color: #4a5568;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 20px;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: linear-gradient(135deg, #f8f9ff 0%, #f5f3ff 100%);
                color: #4a5568;
                min-height: 100vh;
                padding: 40px 20px;
            }

            .resume-content h1 {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-size: 2.6em;
                font-weight: 700;
                margin-bottom: 20px;
                line-height: 1.2;
            }

            .resume-content h2 {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                border-bottom: 2px solid #667eea;
                font-size: 1.5em;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
            }

            .resume-content h3 {
                color: #4a5568;
                font-size: 1.3em;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .contact-info {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                border: 1px solid rgba(102, 126, 234, 0.2);
                border-radius: 12px;
                padding: 20px;
                margin: 20px 0;
                color: #4a5568;
                font-size: 1.1em;
            }

            .job-title {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 600;
            }

            .company-info {
                color: #718096;
                margin-bottom: 12px;
            }

            a {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-decoration: none;
                font-weight: 500;
            }

            a:hover {
                text-decoration: underline;
            }

            code {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                color: #553c9a;
                border: 1px solid rgba(102, 126, 234, 0.2);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
            }

            pre {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
                border: 1px solid rgba(102, 126, 234, 0.2);
                border-left: 4px solid #667eea;
                border-radius: 8px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
                color: #4a5568;
            }

            pre code {
                background: none;
                border: none;
                color: #4a5568;
            }

            blockquote {
                border-left: 4px solid #667eea;
                padding: 15px 20px;
                margin: 15px 0;
                color: #4a5568;
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
                font-style: italic;
            }

            hr {
                border: none;
                border-top: 1px solid rgba(102, 126, 234, 0.2);
                margin: 25px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid rgba(102, 126, 234, 0.2);
                padding: 10px;
                text-align: left;
            }

            th {
                background: rgba(102, 126, 234, 0.1);
                color: #4a5568;
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
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                color: #667eea;
                border: 1px solid rgba(102, 126, 234, 0.3);
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

        'neon-red': `
            body {
                background: #0a0e27;
                color: #e2e8f0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 20px;
            }

            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: #0a0e27;
                color: #e2e8f0;
                min-height: 100vh;
                padding: 40px 20px;
            }

            .resume-content h1 {
                color: #ef4444;
                font-size: 2.8em;
                font-weight: 700;
                text-shadow:
                    0 0 10px rgba(239, 68, 68, 0.8),
                    0 0 20px rgba(239, 68, 68, 0.6),
                    0 0 30px rgba(239, 68, 68, 0.4);
                margin-bottom: 20px;
                line-height: 1.2;
            }

            .resume-content h2 {
                color: #ef4444;
                border-bottom: 2px solid #ef4444;
                font-size: 1.6em;
                margin-top: 30px;
                margin-bottom: 15px;
                padding-bottom: 8px;
                text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
                position: relative;
            }

            .resume-content h2::before {
                content: "💡";
                margin-right: 10px;
                filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.8));
            }

            .resume-content h3 {
                color: #fbbf24;
                font-size: 1.3em;
                margin-top: 20px;
                margin-bottom: 10px;
                text-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
            }

            .contact-info {
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
                border: 2px solid rgba(239, 68, 68, 0.3);
                border-radius: 10px;
                padding: 20px;
                margin: 20px 0;
                color: #e2e8f0;
                font-size: 1.1em;
                box-shadow:
                    0 0 20px rgba(239, 68, 68, 0.2),
                    inset 0 0 20px rgba(239, 68, 68, 0.1);
            }

            .job-title {
                color: #fbbf24;
                text-shadow: 0 0 8px rgba(251, 191, 36, 0.6);
                font-weight: 600;
            }

            .company-info {
                color: #94a3b8;
                font-style: italic;
                margin-bottom: 12px;
            }

            a {
                color: #ef4444;
                text-decoration: none;
                text-shadow: 0 0 8px rgba(239, 68, 68, 0.6);
                border-bottom: 1px solid rgba(239, 68, 68, 0.5);
            }

            a:hover {
                text-shadow:
                    0 0 12px rgba(239, 68, 68, 0.8),
                    0 0 20px rgba(239, 68, 68, 0.6);
                border-bottom-color: #f87171;
            }

            code {
                background: rgba(239, 68, 68, 0.2);
                color: #fca5a5;
                border: 1px solid rgba(239, 68, 68, 0.3);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
                font-size: 0.9em;
                box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
            }

            pre {
                background: rgba(239, 68, 68, 0.1);
                border: 2px solid rgba(239, 68, 68, 0.3);
                border-left: 4px solid #ef4444;
                border-radius: 8px;
                padding: 15px;
                overflow-x: auto;
                margin: 15px 0;
                color: #fca5a5;
                box-shadow:
                    0 0 20px rgba(239, 68, 68, 0.2),
                    inset 0 0 20px rgba(239, 68, 68, 0.1);
            }

            pre code {
                background: none;
                border: none;
                color: #fca5a5;
                box-shadow: none;
            }

            blockquote {
                border-left: 4px solid #ef4444;
                padding: 15px 20px;
                margin: 15px 0;
                color: #e2e8f0;
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
                font-style: italic;
                box-shadow: 0 0 15px rgba(239, 68, 68, 0.2);
            }

            hr {
                border: none;
                border-top: 1px solid rgba(239, 68, 68, 0.5);
                margin: 25px 0;
                box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }

            th, td {
                border: 1px solid rgba(239, 68, 68, 0.3);
                padding: 10px;
                text-align: left;
            }

            th {
                background: rgba(239, 68, 68, 0.2);
                color: #fca5a5;
                font-weight: 600;
                text-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
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
                background: rgba(239, 68, 68, 0.2);
                color: #fca5a5;
                border: 1px solid rgba(239, 68, 68, 0.3);
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.9em;
                font-weight: 500;
                display: inline-block;
                margin: 2px;
                box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
            }

            .skills-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 15px 0;
            }
        `
    };

    return templates[templateName] || templates['github-blue'];
}