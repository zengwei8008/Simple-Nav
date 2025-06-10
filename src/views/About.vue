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
