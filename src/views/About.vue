<template>
    <div :class="{ 'dark': darkMode }" class="h-screen flex flex-col">
      <div class="flex flex-1 overflow-hidden relative">
        <Sidebar 
          :categories="categories" 
          :isCollapsed="isSidebarCollapsed"
          @toggle-sidebar="toggleSidebar"
        />
        <main class="flex-1 flex flex-col p-4 overflow-y-auto">
          <div class="flex-grow">
            <h1 class="text-3xl font-bold mb-6 dark:text-white">关于 Simple NAV</h1>
            <div class="prose dark:prose-invert max-w-3xl">
              <div class="grid grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <i class="fas fa-rocket text-blue-500 text-xl mb-2"></i>
                  <h3 class="text-xl font-semibold mb-2">项目简介</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    一个简洁高效的导航站点，聚合优质网络资源，日均服务用户 5000+
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
                  <li>黑暗模式自动适配</li>
                  <li>实时数据统计展示</li>
                  <li>多分类资源管理</li>
                </ul>
              </div>
              
              <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <i class="fas fa-chart-line text-green-500 text-xl mb-2"></i>
                <h3 class="text-xl font-semibold mb-2">数据统计</h3>
                <div class="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-blue-500">1.2k+</div>
                    <div class="text-sm text-gray-500">收录网站</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-purple-500">98%</div>
                    <div class="text-sm text-gray-500">可用性监测</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-green-500">24/7</div>
                    <div class="text-sm text-gray-500">实时更新</div>
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
  import Sidebar from '../components/Sidebar.vue'
  import Footer from '../components/Footer.vue'
  import { fetchData } from '../api/fetchData';
  
  export default {
    components: { Sidebar, Footer },
    data() {
      return {
        darkMode: localStorage.getItem('darkMode') === 'true',
        isSidebarCollapsed: window.innerWidth < 768,
        categories: [] // 如果侧边栏需要可以添加实际分类数据
      }
    },
    methods: {
      toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed
      }
    },
    async created() {
      try {
        // 获取与主应用相同的数据
        const data = await fetchData();
        this.categories = [...new Set(data.map(item => item.category))];
      } catch (error) {
        console.error('分类数据加载失败:', error);
      }
    },
  }
  </script>