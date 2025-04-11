<template>
  <!-- 使用与App.vue相同的布局结构 -->
  <div class="h-screen flex flex-col">
    <div class="flex flex-1 overflow-hidden relative">
      <Sidebar 
        :categories="categories" 
        :isCollapsed="isSidebarCollapsed"
        @toggle-sidebar="toggleSidebar"
      />
      <main class="flex-1 flex flex-col p-4 overflow-y-auto">
        <!-- 使用与App.vue相同的Navbar -->
        <Navbar :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" class="mb-6"/>
        
        <!-- 设置页面专属内容 -->
        <div class="flex-grow">
          <div class="max-w-4xl mx-auto space-y-8">
            <h2 class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8">系统设置</h2>
            
            <!-- 背景颜色设置 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-4 flex items-center">
                <i class="fas fa-palette text-blue-500 mr-2"></i>
                界面外观
              </h3>
              
              <!-- 默认颜色 -->
              <div class="mb-8">
                <h4 class="text-lg font-medium mb-4">默认配色方案</h4>
                <div class="grid grid-cols-3 gap-4">
                  <div 
                    v-for="color in backgroundColors" 
                    :key="color"
                    class="h-20 rounded-lg cursor-pointer border-2 transition-all"
                    :class="{ 'border-blue-500 scale-105': selectedBg === color }"
                    :style="{ backgroundColor: color }"
                    @click="changeBackground(color)"
                  ></div>
                </div>
              </div>
              
              <!-- 自定义颜色 -->
              <div class="mb-8">
                <h4 class="text-lg font-medium mb-4">自定义颜色</h4>
                <div class="flex items-center gap-4">
                  <input 
                    type="color"
                    v-model="customColorHex"
                    class="w-16 h-10 rounded cursor-pointer"
                  >
                  <input 
                    type="text" 
                    v-model="customColorHex"
                    placeholder="或输入十六进制颜色码"
                    class="flex-1 bg-gray-100 dark:bg-gray-700 rounded px-3 py-2"
                    @keyup.enter="applyCustomColor"
                  >
                  <button 
                    @click="applyCustomColor"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    应用
                  </button>
                </div>
              </div>
              
              <!-- 自定义背景图 -->
              <div>
                <h4 class="text-lg font-medium mb-4">自定义背景图</h4>
                <div class="flex items-center gap-4">
                  <input
                    type="url"
                    v-model="backgroundImage"
                    placeholder="输入在线图片URL (支持jpg/png/svg)"
                    class="flex-1 bg-gray-100 dark:bg-gray-700 rounded px-3 py-2"
                    @keyup.enter="applyBackgroundImage"
                  >
                  <button
                    @click="applyBackgroundImage"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    应用
                  </button>
                </div>
                <p class="text-sm text-gray-500 mt-2">
                  提示：建议使用高分辨率图片（1920x1080以上）
                </p>
              </div>
            </div>
            
            <!-- 布局设置 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-4 flex items-center">
                <i class="fas fa-th-large text-green-500 mr-2"></i>
                布局设置
              </h3>
              <div class="flex items-center gap-4">
                <label class="text-gray-700 dark:text-gray-300">每行显示：</label>
                <select 
                  v-model.number="columns" 
                  class="bg-gray-100 dark:bg-gray-700 rounded px-3 py-2"
                  @change="saveSettings"
                >
                  <option v-for="n in [3,4,5,6,7,8]" :key="n" :value="n">{{ n }} 列</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 统一添加Footer -->
        <Footer class="mt-8" />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { fetchData } from '../api/fetchData';  // 添加导入

export default {
  components: { Navbar, Sidebar },
  props: ['categories'],  // 添加props接收分类数据
  data() {
    return {
      customColorHex: localStorage.getItem('customColor') || '',
      backgroundImage: localStorage.getItem('backgroundImage') || '',
      darkMode: localStorage.getItem('darkMode') === 'true',
      isSidebarCollapsed: window.innerWidth < 768,
      backgroundColors: ['#ffffff', '#f3f4f6', '#fef3c7', '#f0fdf4', '#f1f5f9', '#bfc9df'],
      selectedBg: localStorage.getItem('background') || '#ffffff',
      columns: localStorage.getItem('columns') || 5
    }
  },
  methods: {
    mounted() {  // 确保这是直接的方法，不是嵌套在methods中的
      // 初始化背景设置
      const savedBg = localStorage.getItem('background')
      const savedImage = localStorage.getItem('backgroundImage')
      
      if (savedBg) {
        this.changeBackground(savedBg)
      } else if (savedImage) {
        this.applyBackgroundImage()
      }
    },
    applyCustomColor() {
      const colorRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
      let color = this.customColorHex.trim()
      
      if (!color.startsWith('#')) {
        color = '#' + color
      }
      
      if (colorRegex.test(color)) {
        this.customColorHex = color  // 标准化格式
        this.changeBackground(color)
        localStorage.setItem('customColor', color)
      } else {
        alert('请输入有效的十六进制颜色码')
      }
    },
    
    applyBackgroundImage() {
      const imageRegex = /\.(jpeg|jpg|png|svg)(\?.*)?$/i
      if (imageRegex.test(this.backgroundImage)) {
        document.body.style.backgroundImage = `url('${this.backgroundImage}')`
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundColor = '' // 清除背景色
        
        // 持久化存储
        localStorage.setItem('backgroundImage', this.backgroundImage)
        localStorage.removeItem('background')
        localStorage.removeItem('customColor')
      } else {
        alert('请输入有效的图片URL，支持jpg/png/svg格式')
      }
    },
    
    changeBackground(color) {
      this.selectedBg = color
      this.customColorHex = color // 同步到颜色选择器
      document.body.style.backgroundColor = color
      document.body.style.backgroundImage = 'none'
      
      // 持久化存储
      localStorage.setItem('background', color)
      localStorage.setItem('customColor', color)
      localStorage.removeItem('backgroundImage')
    },
    saveSettings() {
      localStorage.setItem('columns', this.columns)
    },
    toggleSidebar() {
      // 只在桌面端允许手动切换
      if (window.innerWidth >= 768) {
        this.isSidebarCollapsed = !this.isSidebarCollapsed
      }
    }
  }
}
</script>