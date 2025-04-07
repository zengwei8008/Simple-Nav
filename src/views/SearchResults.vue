<template>
  <div :class="{ 'dark': darkMode }" class="h-screen flex flex-col">
    <div class="flex flex-1 overflow-hidden relative">
      <Sidebar 
        :categories="categories" 
        :isCollapsed="isSidebarCollapsed"
        @toggle-sidebar="toggleSidebar"
      />
      <main class="flex-1 flex flex-col p-4 overflow-y-auto">
        <Navbar :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" class="mb-6"/>
        
        <div class="flex-grow">
          <h2 class="text-2xl mb-4 dark:text-gray-200">搜索：{{ searchQuery }}</h2>
          <div v-if="loading" class="text-gray-500 dark:text-gray-400">
            正在加载数据...
          </div>
          <div v-else>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Card 
                v-for="item in searchResults" 
                :key="item.id" 
                :item="item"
              />
              <div v-if="searchResults.length === 0" class="col-span-full text-center text-gray-500">
                没有找到相关结果
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
import { fetchData } from '../api/fetchData';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { Navbar, Sidebar, Card, Footer },
  data() {
    return {
      loading: true,
      searchQuery: '',
      allItems: [],
      darkMode: localStorage.getItem('darkMode') === 'true',
      isSidebarCollapsed: window.innerWidth < 768
    }
  },
  computed: {
    searchResults() {
      const query = this.searchQuery.toLowerCase();
      return this.allItems.filter(item => 
        item.name?.toLowerCase().includes(query) || 
        item.description?.toLowerCase().includes(query)
      );
    }
  },
  watch: {
    '$route.query.q': {
      immediate: true,
      handler(newVal) {
        this.handleSearch(newVal);
      }
    }
  },
  methods: {
    async handleSearch(query) {
      this.loading = true;
      this.searchQuery = query || '';
      
      try {
        this.allItems = await fetchData();
        console.log('搜索数据:', {
          query: this.searchQuery,
          items: this.allItems,
          results: this.searchResults
        });
      } catch (error) {
        console.error('搜索失败:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  async created() {
    await this.handleSearch(this.$route.query.q);
  }
};
</script>