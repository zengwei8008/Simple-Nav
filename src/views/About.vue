<template>
  <div class="h-screen flex flex-col">
    <div class="flex flex-1 overflow-hidden relative">
      <main class="flex-1 flex flex-col p-4 overflow-y-auto">
        <div class="flex-grow max-w-5xl mx-auto w-full">
          <h1 
            class="text-3xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors cursor-pointer"
            @click="$router.push('/')"
          >
            关于本站
          </h1>
       
            <!-- 新增关于作者区块 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
              <i class="fas fa-user-circle text-red-500 text-xl mb-2"></i>
              <h3 class="text-xl font-semibold mb-2">关于作者</h3>
              <div class="text-gray-600 dark:text-gray-300 space-y-2">
           
                <p>🏠 个人主页： 
                  <a 
                    href="https://zengxj.cn" 
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                  >
                    曾氏小记资源网
                  </a>
                </p>
                
              </div>
            </div>
            
            <!-- 数据统计区块 -->

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
