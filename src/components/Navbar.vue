<template>
  <nav class="h-12 sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-md px-4 py-2 flex justify-between items-center">
    <!-- 修改为 router-link 以实现跳转 -->
    <router-link to="/" class="text-xl font-bold text-blue-500">
      <i class="fas fa-globe"></i> 曾小记の导航站
    </router-link>
    
    <!-- 修改搜索区域显示逻辑 -->
    <div class="hidden md:flex items-center gap-2 flex-1 max-w-2xl mx-4">
      <div class="relative">
        <!-- 调整当前选择项的宽度和图标间距 -->
        <a href="javascript:;" 
          class="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1 flex items-center min-w-[120px]"
          @click="showEngines = !showEngines">
          <i :class="engineIcons[selectedEngine]" class="mr-2 text-sm w-4"></i>
          <span class="truncate">{{ engines[selectedEngine].name }}</span>
        </a>
        
        <!-- 调整下拉菜单宽度和选项对齐 -->
        <div v-show="showEngines" 
          class="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg min-w-[160px] z-50">
          <a 
            v-for="(engine, key) in engines" 
            href="javascript:;" 
            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            @click="selectedEngine = key; showEngines = false"
          >
            <i :class="engineIcons[key]" class="mr-3 w-4 text-center"></i>
            <span class="truncate">{{ engine.name }}</span>
          </a>
        </div>
      </div>

      <!-- 保持原有的 input 和 button 不变 -->
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="engines[selectedEngine].placeholder"
        class="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-1"
        @keyup.enter="search"
      />
      <button 
        @click="search"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg"
      >
        <i class="fas fa-search"></i>  <!-- 使用Font Awesome的搜索图标 -->
      </button>
    </div>
    
    <!-- 右侧按钮区域 -->
    <div class="flex items-center gap-3">
      <!-- 新增设置按钮 -->
      <router-link 
        to="/settings"
        class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <i class="fas fa-cog hover:rotate-90 transition-transform duration-300"></i>
      </router-link>
      <!-- 新增GitHub图标 -->

      

    </div>
  </nav>
</template>

<script>
export default {
  props: ['darkMode'],
  data() {
    return {
      showEngines: false,
      searchQuery: '',
      selectedEngine: 'baidu',
      engines: {
        bing: { 
          name: 'Bing', 
          url: 'https://www.bing.com/search?q=', 
          placeholder: '必应搜索...' 
        },
        baidu: { 
          name: '百度', 
          url: 'https://www.baidu.com/s?wd=', 
          placeholder: '百度一下...' 
        },
        google: { 
          name: '谷歌', 
          url: 'https://www.google.com/search?q=',
          placeholder: 'Google搜索...' 
        },
        local: { 
          name: '本地', 
          url: '/search?q=',
          placeholder: '站内搜索...' 
        }
      },
      engineIcons: {
        bing: 'fab fa-microsoft',
        baidu: 'fas fa-paw',
        google: 'fab fa-google', 
        local: 'fas fa-search'
      }
    };
  },
  methods: {
    search() {
      if (this.searchQuery.trim()) {
        if (this.selectedEngine === 'local') {
          // 使用 router 进行跳转
          this.$router.push({ 
            path: '/search',
            query: { q: this.searchQuery.trim() }
          });
        } else {
          const url = this.engines[this.selectedEngine].url + encodeURIComponent(this.searchQuery);
          window.open(url, '_blank');
        }
      }
    }
  }
};
</script>
