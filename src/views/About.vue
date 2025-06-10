<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人空间 | 小红书风格</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%);
            min-height: 100vh;
            padding: 40px 20px;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            margin-bottom: 50px;
            padding: 20px;
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 15px;
        }
        
        .logo-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #ff5a5f, #ff8e8e);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            box-shadow: 0 4px 15px rgba(255, 90, 95, 0.3);
        }
        
        h1 {
            font-size: 2.8rem;
            background: linear-gradient(45deg, #ff5a5f, #ff2d55);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 800;
            letter-spacing: -0.5px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        
        .card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        
        .card-header {
            padding: 25px 25px 15px;
            position: relative;
        }
        
        .card-icon {
            width: 60px;
            height: 60px;
            border-radius: 18px;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            margin-bottom: 20px;
            box-shadow: 0 5px 15px rgba(37, 117, 252, 0.3);
        }
        
        .card:nth-child(2) .card-icon {
            background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
        }
        
        .card:nth-child(3) .card-icon {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        
        .card:nth-child(4) .card-icon {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }
        
        .card h2 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: #222;
        }
        
        .card-content {
            padding: 0 25px 25px;
            flex-grow: 1;
        }
        
        .card p {
            color: #555;
            line-height: 1.7;
            margin-bottom: 25px;
            font-size: 1.05rem;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 28px;
            background: linear-gradient(45deg, #ff5a5f, #ff8e8e);
            color: white;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.05rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 90, 95, 0.4);
        }
        
        .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(255, 90, 95, 0.6);
        }
        
        .wechat-container {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 15px;
        }
        
        .qr-code {
            width: 120px;
            height: 120px;
            background: #f0f0f0;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dashed #ddd;
            position: relative;
            overflow: hidden;
        }
        
        .qr-code::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.05) 50%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.05) 50%, transparent 52%);
            background-size: 20px 20px;
        }
        
        .qr-code::after {
            content: "微信";
            position: absolute;
            bottom: 10px;
            color: #666;
            font-size: 14px;
        }
        
        .stats {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .stat-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 15px;
            flex: 1;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: #ff5a5f;
            margin-bottom: 5px;
        }
        
        .stat-label {
            font-size: 0.9rem;
            color: #777;
        }
        
        .runtime {
            font-size: 1.3rem;
            font-weight: 700;
            color: #ff5a5f;
            margin: 15px 0;
            text-align: center;
            background: rgba(255, 90, 95, 0.1);
            padding: 15px;
            border-radius: 12px;
        }
        
        .counter {
            font-size: 1.3rem;
            font-weight: 700;
            color: #ff5a5f;
            margin: 15px 0;
            text-align: center;
            background: rgba(255, 90, 95, 0.1);
            padding: 15px;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        
        footer {
            text-align: center;
            margin-top: 60px;
            padding: 30px;
            color: #666;
            font-size: 0.95rem;
            border-top: 1px solid rgba(0,0,0,0.05);
        }
        
        @media (max-width: 768px) {
            .grid-container {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 2.2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <div class="logo-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <h1>我的个人空间</h1>
            </div>
            <p class="subtitle">分享生活点滴 · 记录美好时光 · 连接志同道合的朋友</p>
        </header>
        
        <div class="grid-container">
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <h2>个人主页</h2>
                </div>
                <div class="card-content">
                    <p>访问我的个人主页，了解更多关于我的故事、兴趣和专业领域。我会定期分享生活感悟、旅行见闻和创作内容。</p>
                    <a href="#" class="btn">访问主页</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fab fa-weixin"></i>
                    </div>
                    <h2>联系微信</h2>
                </div>
                <div class="card-content">
                    <p>扫描二维码添加我的微信，与我建立联系。期待与您交流想法、分享经验或探讨合作机会。</p>
                    <div class="wechat-container">
                        <div class="qr-code">
                            <i class="fas fa-qrcode" style="font-size: 40px; color: #bbb;"></i>
                        </div>
                        <div>
                            <p><strong>微信号:</strong> my_personal_space</p>
                            <p><strong>添加备注:</strong> 小红书朋友</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h2>运行时间</h2>
                </div>
                <div class="card-content">
                    <p>本站已持续运行了：</p>
                    <div class="runtime" id="runtime">
                        0 天 0 小时 0 分 0 秒
                    </div>
                    <p>从2023年1月1日开始，这个空间一直记录着我的成长轨迹和创作历程。</p>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h2>访客数据</h2>
                </div>
                <div class="card-content">
                    <p>感谢各位朋友的关注与支持，以下是本站的访问数据：</p>
                    
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-value" id="totalVisitors">1.2K</div>
                            <div class="stat-label">总访问量</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" id="todayVisitors">28</div>
                            <div class="stat-label">今日访问</div>
                        </div>
                    </div>
                    
                    <div class="counter">
                        <i class="fas fa-users"></i>
                        <span id="currentVisitors">5</span> 人正在浏览
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <p>© 2023 我的个人空间 | 记录生活 · 分享美好</p>
            <p>设计灵感来自小红书，仅作个人展示使用</p>
        </footer>
    </div>

    <script>
        // 运行时间计算
        const startDate = new Date('2023-01-01T00:00:00');
        
        function updateRuntime() {
            const now = new Date();
            const diff = now - startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('runtime').textContent = 
                `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
        }
        
        // 初始化运行时间
        updateRuntime();
        setInterval(updateRuntime, 1000);
        
        // 访客计数模拟
        function updateVisitorStats() {
            // 模拟实时访问数据变化
            const today = Math.floor(Math.random() * 15) + 20;
            document.getElementById('todayVisitors').textContent = today;
            
            // 模拟当前在线用户（5-15之间随机变化）
            const current = Math.floor(Math.random() * 11) + 5;
            document.getElementById('currentVisitors').textContent = current;
        }
        
        // 初始化访客数据
        updateVisitorStats();
        setInterval(updateVisitorStats, 5000);
        
        // 卡片悬停效果增强
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    </script>
</body>
</html>
