<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 设置网站上线时间（年-月-日）
const launchDate = new Date('2023-01-01T00:00:00')
const runtime = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

// 计算运行时间
const calculateRuntime = () => {
  const now = new Date()
  const diff = now - launchDate
  
  // 计算时间分量
  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / (1000 * 60)) % 60
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  runtime.value = { days, hours, minutes, seconds }
}

// 生命周期钩子
let timer
onMounted(() => {
  calculateRuntime()
  timer = setInterval(calculateRuntime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="runtime-container">
    <div class="runtime-card">
      <div class="runtime-title">本站已稳定运行</div>
      <div class="runtime-display">
        <div class="time-unit">
          <span class="time-value">{{ runtime.days }}</span>
          <span class="time-label">天</span>
        </div>
        <div class="time-separator">:</div>
        <div class="time-unit">
          <span class="time-value">{{ runtime.hours.toString().padStart(2, '0') }}</span>
          <span class="time-label">时</span>
        </div>
        <div class="time-separator">:</div>
        <div class="time-unit">
          <span class="time-value">{{ runtime.minutes.toString().padStart(2, '0') }}</span>
          <span class="time-label">分</span>
        </div>
        <div class="time-separator">:</div>
        <div class="time-unit">
          <span class="time-value">{{ runtime.seconds.toString().padStart(2, '0') }}</span>
          <span class="time-label">秒</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.runtime-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.runtime-card {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 12px;
  padding: 24px 32px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
  min-width: 380px;
}

.runtime-title {
  font-size: 1.4rem;
  margin-bottom: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.runtime-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
}

.time-value {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 6px;
  min-width: 55px;
  text-align: center;
}

.time-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.time-separator {
  font-size: 2rem;
  font-weight: bold;
  margin: 0 2px;
  transform: translateY(-5px);
  color: rgba(255, 255, 255, 0.7);
}
</style>
