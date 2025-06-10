<template>
  <div class="h-screen flex flex-col">
    <div class="flex flex-1 overflow-hidden relative">
      <main class="flex-1 flex flex-col p-4 overflow-y-auto">
        <div class="flex-grow max-w-5xl mx-auto w-full">
          <h1 
            class="text-3xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors cursor-pointer"
            @click="$router.push('/')"
          >
            关于 Simple NAV
          </h1>
          <div class="prose dark:prose-invert">
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <i class="fas fa-rocket text-blue-500 text-xl mb-2"></i>
                <h3 class="text-xl font-semibold mb-2">项目简介</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  一个简洁高效的导航站点，全AI开发，导航数据从维基云表格获取。以自己的使用习惯来开发。
                </p>
                <p> 
                  <a 
                    href="https://vika.cn/share/shrxaWuBbbn6cKWBwvXgV" 
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                  >
                    维基云表格地址
                  </a> |                   
                  <a 
                    href="https://vika.cn/workbench/fomWQp8Fd6lHE5CBKl/viwullRf3ubdS?fldM5GkwwsOFh=%2Fdefault.ico&fldXKVGVmpAnY=%E6%9D%82%E9%A1%B9%E5%B7%A5%E5%85%B7" 
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                  >
                    网站收录申请
                  </a>
                </p>
              </div>
              
              <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <i class="fas fa-code text-purple-500 text-xl mb-2"></i>
                <h3 class="text-xl font-semibold mb-2">技术栈</h3>
                <ul class="list-disc pl-4 text-gray-600 dark:text-gray-300">
                  <li>Vue 3 + Composition API</li>
                  <li>Tailwind CSS</li>
                  <li>Vue Router</li>
                  <li>Font Awesome</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
              <i class="fas fa-star text-yellow-500 text-xl mb-2"></i>
              <h3 class="text-xl font-semibold mb-2">功能特点</h3>
              <ul class="list-disc pl-4 text-gray-600 dark:text-gray-300">
                <li>智能本地搜索功能</li>
                <li>响应式侧边栏布局</li>
                <li>黑暗模式自动适配（有bug还没实现）</li>                  
                <li>多分类资源管理</li>
                <li>从维基云表格获取数据，无需数据库</li>
              </ul>
            </div>

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
            <!-- 新增关于作者区块 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
              <i class="fas fa-user-circle text-red-500 text-xl mb-2"></i>
              <h3 class="text-xl font-semibold mb-2">关于作者</h3>
              <div class="text-gray-600 dark:text-gray-300 space-y-2">
                <p>🕴️ 开发者：水常（Shui Chang）</p>
                <p>🚀 带娃建筑师 | AI技术学习者 | 个人博主</p>
                <p>🏠 个人主页： 
                  <a 
                    href="https://jianzhugo.cn" 
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                  >
                    水常@Shui Chang
                  </a>
                </p>
                <p>🌐 个人博客： 
                  <a 
                    href="https://blog.jianzhugo.cn" 
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                  >
                    建筑G博客
                  </a>
                </p>
                <p>💰 另一AI网页成品： 
                  <a 
                    href="https://donate.jianzhugo.cn" 
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                  >
                    打赏页面
                  </a>
                </p>
              </div>
            </div>
            
            <!-- 数据统计区块 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <i class="fas fa-chart-line text-green-500 text-xl mb-2"></i>
              <h3 class="text-xl font-semibold mb-2">数据统计</h3>
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-blue-500">105个</div>
                  <div class="text-sm text-gray-500">收录网站</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-purple-500">100%</div>
                  <div class="text-sm text-gray-500">可用性监测</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-green-500">2025-05-14</div>
                  <div class="text-sm text-gray-500">手动更新</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer class="mt-8" />
      </main>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  components: { Footer },
  data() {
    return {
      darkMode: localStorage.getItem('darkMode') === 'true'
    }
  }
  // 完全移除created钩子和categories数据
}
</script>
