<template>
  <div class="xiaohongshu-container">
    <!-- 顶部背景和头像 -->
    <div class="profile-header">
      <div class="header-bg"></div>
      <div class="avatar-wrapper">
        <div class="avatar" @mouseenter="showAvatarTip = true" @mouseleave="showAvatarTip = false">
          <img src="https://via.placeholder.com/120" alt="头像">
          <div class="avatar-tip" v-if="showAvatarTip">点击查看大图</div>
        </div>
      </div>
      <h1 class="username">小红书用户</h1>
      <p class="bio">分享生活，发现美好</p>
    </div>

    <!-- 数据统计 -->
    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-number">1.2k</div>
        <div class="stat-label">关注</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">5.6k</div>
        <div class="stat-label">粉丝</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">328</div>
        <div class="stat-label">获赞与收藏</div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-section">
      <!-- 个人主页链接 -->
      <div class="card" @mouseenter="hover.homepage = true" @mouseleave="hover.homepage = false">
        <div class="card-icon" :class="{'active': hover.homepage}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="card-content">
          <h3>个人主页</h3>
          <a href="https://example.com" target="_blank" class="link">example.com</a>
        </div>
      </div>

      <!-- 微信联系方式 -->
      <div class="card" @mouseenter="hover.wechat = true" @mouseleave="hover.wechat = false">
        <div class="card-icon" :class="{'active': hover.wechat}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 14C7.4 14 6.5 13.1 6.5 12C6.5 10.9 7.4 10 8.5 10C9.6 10 10.5 10.9 10.5 12C10.5 13.1 9.6 14 8.5 14ZM15.5 14C14.4 14 13.5 13.1 13.5 12C13.5 10.9 14.4 10 15.5 10C16.6 10 17.5 10.9 17.5 12C17.5 13.1 16.6 14 15.5 14Z" fill="currentColor"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="currentColor"/>
          </svg>
        </div>
        <div class="card-content">
          <h3>微信联系</h3>
          <p>我的微信: xiaohongshu123</p>
          <div class="qr-code" v-if="hover.wechat">
            <img src="https://via.placeholder.com/120" alt="微信二维码">
            <p>扫码添加好友</p>
          </div>
        </div>
      </div>

      <!-- 站点运行时间 -->
      <div class="card" @mouseenter="hover.runtime = true" @mouseleave="hover.runtime = false">
        <div class="card-icon" :class="{'active': hover.runtime}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="card-content">
          <h3>站点运行</h3>
          <p>{{ runtime }}</p>
        </div>
      </div>
    </div>

    <!-- 底部装饰 -->
    <div class="footer">
      <p>感谢访问 ❤️ 欢迎常来</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiaohongshuProfile',
  data() {
    return {
      showAvatarTip: false,
      hover: {
        homepage: false,
        wechat: false,
        runtime: false
      },
      startDate: '2023-01-01' // 站点开始日期
    }
  },
  computed: {
    runtime() {
      const start = new Date(this.startDate)
      const now = new Date()
      
      const diffTime = now - start
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      
      const years = Math.floor(diffDays / 365)
      const months = Math.floor((diffDays % 365) / 30)
      const days = diffDays % 30
      
      let result = ''
      if (years > 0) result += `${years}年`
      if (months > 0) result += `${months}个月`
      if (days > 0 || result === '') result += `${days}天`
      
      return result
    }
  }
}
</script>

<style scoped>
.xiaohongshu-container {
  max-width: 414px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

.profile-header {
  position: relative;
  height: 180px;
  background: linear-gradient(135deg, #ff2442 0%, #ff6b81 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  color: white;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1));
}

.avatar-wrapper {
  position: relative;
  z-index: 1;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  overflow: hidden;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  position: relative;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar:hover {
  transform: scale(1.1);
}

.avatar-tip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 12px;
  padding: 4px;
  text-align: center;
}

.username {
  font-size: 20px;
  font-weight: 600;
  margin: 8px 0 4px;
  position: relative;
  z-index: 1;
}

.bio {
  font-size: 14px;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-number {
  font-size: 18px;
  font-weight: 600;
  color: #ff2442;
}

.stat-label {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

.content-section {
  padding: 16px;
}

.card {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: #fafafa;
  transition: all 0.3s ease;
  position: relative;
}

.card:hover {
  background-color: #fff5f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 36, 66, 0.1);
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #ffebee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: #ff2442;
  transition: all 0.3s ease;
}

.card-icon.active {
  background-color: #ff2442;
  color: white;
}

.card-icon svg {
  width: 20px;
  height: 20px;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
}

.card-content p {
  font-size: 14px;
  margin: 0;
  color: #666;
}

.link {
  color: #ff2442;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.link:hover {
  text-decoration: underline;
}

.qr-code {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  text-align: center;
}

.qr-code img {
  width: 100px;
  height: 100px;
  margin-bottom: 4px;
}

.qr-code p {
  font-size: 12px;
  color: #999;
}

.footer {
  text-align: center;
  padding: 16px;
  border-top: 1px solid #f0f0f0;
  color: #999;
  font-size: 14px;
}
</style>
