<template>
  <div class="xiaohongshu-profile">
    <!-- 顶部头像和标题 -->
    <div class="profile-header">
      <div class="avatar" @mouseover="hoverAvatar = true" @mouseleave="hoverAvatar = false">
        <img :src="avatar" alt="头像" :class="{ 'avatar-hover': hoverAvatar }">
        <div class="avatar-hover-text" v-if="hoverAvatar">点击查看详情</div>
      </div>
      <h2 class="profile-title">{{ title }}</h2>
    </div>

    <!-- 主要内容区块 -->
    <div class="profile-content">
      <!-- 个人主页区块 -->
      <div class="content-block" @mouseover="hoverHomepage = true" @mouseleave="hoverHomepage = false">
        <div class="block-icon" :class="{ 'icon-hover': hoverHomepage }">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="block-content">
          <h3>个人主页</h3>
          <a :href="homepage" target="_blank" class="homepage-link">{{ homepageDisplay }}</a>
        </div>
      </div>

      <!-- 微信联系区块 -->
      <div class="content-block" @mouseover="hoverWechat = true" @mouseleave="hoverWechat = false">
        <div class="block-icon" :class="{ 'icon-hover': hoverWechat }">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 7.37C22 4.03 19.08 2 14.93 2H9.07C4.92 2 2 4.03 2 7.37V12.63C2 15.97 4.92 18 9.07 18H9.93C10.3 18 10.67 18.11 10.97 18.3L13.58 20.1C14.39 20.68 15.52 20.1 15.52 19.1V17.77C15.52 17.37 15.7 16.97 15.97 16.7C17.87 14.93 22 12.83 22 7.37Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 8.5C7.82843 8.5 8.5 7.82843 8.5 7C8.5 6.17157 7.82843 5.5 7 5.5C6.17157 5.5 5.5 6.17157 5.5 7C5.5 7.82843 6.17157 8.5 7 8.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 8.5C17.8284 8.5 18.5 7.82843 18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="block-content">
          <h3>微信联系</h3>
          <p>{{ wechat }}</p>
          <div class="wechat-qr" v-if="hoverWechat">
            <img :src="qrCode" alt="微信二维码">
            <p>扫码添加微信</p>
          </div>
        </div>
      </div>

      <!-- 站点运行时间区块 -->
      <div class="content-block" @mouseover="hoverRuntime = true" @mouseleave="hoverRuntime = false">
        <div class="block-icon" :class="{ 'icon-hover': hoverRuntime }">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="block-content">
          <h3>本站运行</h3>
          <p>{{ runtime }}</p>
        </div>
      </div>
    </div>

    <!-- 底部装饰 -->
    <div class="profile-footer">
      <p>感谢您的访问 ❤️</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiaohongshuProfile',
  data() {
    return {
      title: '我的个人空间',
      avatar: 'https://via.placeholder.com/100', // 替换为你的头像URL
      homepage: 'https://your-personal-site.com',
      homepageDisplay: 'your-personal-site.com',
      wechat: 'YourWeChatID',
      qrCode: 'https://via.placeholder.com/150', // 替换为你的微信二维码URL
      startDate: '2023-01-01', // 站点开始运行的日期
      hoverAvatar: false,
      hoverHomepage: false,
      hoverWechat: false,
      hoverRuntime: false
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
.xiaohongshu-profile {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

.profile-header {
  text-align: center;
  margin-bottom: 24px;
}

.avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 12px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 2px solid #ff2442;
  transition: all 0.3s ease;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.avatar-hover {
  transform: scale(1.05);
  opacity: 0.8;
}

.avatar-hover-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 36, 66, 0.8);
  color: white;
  font-size: 12px;
  padding: 4px;
  text-align: center;
}

.profile-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.profile-content {
  margin: 20px 0;
}

.content-block {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #fafafa;
  transition: all 0.3s ease;
  position: relative;
}

.content-block:hover {
  background-color: #fff5f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 36, 66, 0.1);
}

.block-icon {
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

.icon-hover {
  background-color: #ff2442;
  color: white;
}

.block-icon svg {
  width: 20px;
  height: 20px;
}

.block-content {
  flex: 1;
}

.block-content h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
}

.block-content p {
  font-size: 14px;
  margin: 0;
  color: #666;
}

.homepage-link {
  color: #ff2442;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.homepage-link:hover {
  text-decoration: underline;
}

.wechat-qr {
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

.wechat-qr img {
  width: 100px;
  height: 100px;
  margin-bottom: 4px;
}

.wechat-qr p {
  font-size: 12px;
  color: #999;
}

.profile-footer {
  text-align: center;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
  color: #999;
  font-size: 14px;
}
</style>
