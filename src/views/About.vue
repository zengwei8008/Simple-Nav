<template>
  <div class="simple-contact-container">
    <!-- 微信联系方式区块 -->
    <div class="contact-card wechat-card" 
         @mouseenter="hover.wechat = true" 
         @mouseleave="hover.wechat = false"
         :class="{'hovered': hover.wechat}">
      <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 14C7.4 14 6.5 13.1 6.5 12C6.5 10.9 7.4 10 8.5 10C9.6 10 10.5 10.9 10.5 12C10.5 13.1 9.6 14 8.5 14ZM15.5 14C14.4 14 13.5 13.1 13.5 12C13.5 10.9 14.4 10 15.5 10C16.6 10 17.5 10.9 17.5 12C17.5 13.1 16.6 14 15.5 14Z" fill="currentColor"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="card-content">
        <h3>微信联系</h3>
        <p>{{ wechatId }}</p>
        <transition name="fade">
          <div class="qr-popup" v-if="hover.wechat">
            <img :src="qrCode" alt="微信二维码">
            <p>扫码添加好友</p>
          </div>
        </transition>
      </div>
      <div class="card-hover-indicator"></div>
    </div>

    <!-- 站点运行时间区块 -->
    <div class="contact-card runtime-card" 
         @mouseenter="hover.runtime = true" 
         @mouseleave="hover.runtime = false"
         :class="{'hovered': hover.runtime}">
      <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="card-content">
        <h3>本站运行</h3>
        <p>{{ runtime }}</p>
      </div>
      <div class="card-hover-indicator"></div>
      <transition name="fade">
        <div class="runtime-tooltip" v-if="hover.runtime">
          自 {{ startDate }} 起运行
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleContactInfo',
  data() {
    return {
      wechatId: 'your-wechat-id',
      qrCode: 'https://via.placeholder.com/150', // 替换为你的二维码图片
      startDate: '2023-01-01', // 站点开始日期
      hover: {
        wechat: false,
        runtime: false
      }
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
.simple-contact-container {
  max-width: 400px;
  margin: 0 auto;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

.contact-card {
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: #f8f8f8;
  transition: all 0.3s ease;
  overflow: hidden;
}

.contact-card.hovered {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  transition: all 0.3s ease;
}

.wechat-card .card-icon {
  background-color: #07C160;
  color: white;
}

.runtime-card .card-icon {
  background-color: #1989fa;
  color: white;
}

.contact-card.hovered .card-icon {
  transform: rotate(10deg) scale(1.1);
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #333;
}

.card-content p {
  font-size: 14px;
  margin: 0;
  color: #666;
}

.card-hover-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #ff2442;
  transition: width 0.3s ease;
}

.contact-card.hovered .card-hover-indicator {
  width: 100%;
}

.wechat-card.hovered .card-hover-indicator {
  background-color: #07C160;
}

.runtime-card.hovered .card-hover-indicator {
  background-color: #1989fa;
}

.qr-popup {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 10;
  text-align: center;
}

.qr-popup img {
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
  border: 1px solid #eee;
}

.qr-popup p {
  font-size: 12px;
  color: #999;
}

.runtime-tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
}

.runtime-tooltip::after {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #333;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
