<template>
  <div :class="{ 'dark': darkMode }" class="h-screen flex flex-col">
    <!-- 新增路由出口 -->
    <router-view></router-view>
    <div class="flex flex-1 overflow-hidden relative">
      <Sidebar 
        :categories="categories" 
        :isCollapsed="isSidebarCollapsed"
        @select-category="filterByCategory"
        @toggle-sidebar="toggleSidebar"
      />
      <main class="flex-1 flex flex-col p-4 overflow-y-auto">
        <!-- 移除宽度限制容器，直接使用Navbar -->
        <Navbar :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" class="mb-6"/>
        
        <div class="flex-grow">
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <template v-for="(item, index) in filteredItems" :key="item.id">
              <!-- 卡片必须放在广告条件判断之前 -->
              <Card :item="item" />
              <!-- 修正广告显示逻辑 -->
              <AdBanner 
                v-if="index === 9" 
                class="col-span-full h-[120px] bg-blue-50 dark:bg-blue-900 mt-4"
              />
            </template>
          </div>
        </div>

        <Footer class="mt-8" />
      </main>
    </div>
  </div>
</template>

<style>
/* 新增全局样式 */
html, body {
  height: 100%;
  margin: 0;
}
</style>

<script>
import { fetchData } from './api/fetchData';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';  // 确保导入Footer组件
import AdBanner from './components/AdBanner.vue'  // 确保导入广告组件

export default {
  components: { 
    Navbar, 
    Sidebar, 
    Card, 
    Footer,
    AdBanner // 必须在此注册广告组件
  },
  data() {
    return {
      items: [],
      categories: [],
      selectedCategory: null,
      darkMode: localStorage.getItem('darkMode') === 'true',
      isSidebarCollapsed: window.innerWidth < 768 // 根据屏幕宽度初始化侧边栏状态
    };
  },
  computed: {
    filteredItems() {
      if (!this.selectedCategory) return this.items;
      return this.items.filter(item => item.category === this.selectedCategory);
    },
  },
  methods: {
    async loadData() {
      try {
        const data = await fetchData();
        console.log('Loaded data:', data);
        this.items = data;
        this.categories = [...new Set(data.map(item => item.category))];
      } catch (error) {
        console.error('数据加载失败:', error);
      }
    },
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      // 强制完全替换class而不是toggle
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('darkMode', this.darkMode)
      console.log('强制设置后的class:', document.documentElement.classList)
    },
    mounted() {
      // 修复初始化逻辑
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      console.log('修正后的html元素class:', document.documentElement.classList)
      // 添加事件监听
      document.addEventListener('click', this.handleGlobalClick);
      // 添加窗口大小变化监听
      window.addEventListener('resize', this.handleResize);
      // 其他事件监听保持不变
    },
    handleGlobalClick(event) {
      const sidebar = this.$el.querySelector('.sidebar-container');
      const cards = this.$el.querySelectorAll('.card-container');
      
      // 只重置分类，不影响样式
      if (!sidebar.contains(event.target) && 
          !Array.from(cards).some(card => card.contains(event.target))) {
        this.selectedCategory = null;
      }
    },
    handleResize() {
      this.isSidebarCollapsed = window.innerWidth < 768;
    }
  },
  created() {
    console.log('初始化暗黑模式状态:', 
      `从localStorage获取: ${localStorage.getItem('darkMode')}`, 
      `计算后状态: ${this.darkMode}`
    )
    this.loadData()
  },

  mounted() {
    console.log('挂载时html元素class:', document.documentElement.classList)
    console.log('当前生效的暗黑模式:', document.documentElement.classList.contains('dark'))
    // 添加事件监听
    document.addEventListener('click', this.handleGlobalClick);
    // 添加窗口大小变化监听
    window.addEventListener('resize', this.handleResize);
    // 其他事件监听保持不变
  },
  beforeUnmount() {
    // 移除事件监听
    document.removeEventListener('click', this.handleGlobalClick);
    // 移除窗口大小变化监听
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>