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
          <div class="prose dark:prose-invert">
            <div class="grid grid-cols-2 gap-6 mb-8">
  
              

            </div>
            
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
              <i class="fas fa-star text-yellow-500 text-xl mb-2"></i>
              <h3 class="text-xl font-semibold mb-2">📢 免责声明 </h3>
              <ul class="list-disc pl-4 text-gray-600 dark:text-gray-300">
                
   <p>⚠️本站所有资源均来源于网络公开资源，仅用于个人学习、分享交流。🌍 </p>

 <p>📌 如涉及版权问题，请原作者或版权方联系本站（邮箱：📧 zengwei8008@163.com），我们将尽快核实并删除相关内容。🙏 </p>

 <p>🔍 本站不对资源的准确性、完整性、合法性提供任何明示或暗示的保证，访问者需自行判断并承担风险。⚠️ </p>

 <p>💖 感谢您的理解与支持！ 如有任何问题，欢迎联系~ ✨</p>

              </ul>
            </div>
            
            <!-- 新增关于作者区块 -->
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
              <i class="fas fa-user-circle text-red-500 text-xl mb-2"></i>
              <h3 class="text-xl font-semibold mb-2">关于作者</h3>
              <div class="text-gray-600 dark:text-gray-300 space-y-2">
                <p>🕴️ 站长：曾小记</p>
                <p>🏠 个人主页： 
                  <a 
                    href="https://zengxj.cn" 
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
                  >
曾氏小记资源网                  </a>
                </p>
                <p>🌐 微信： sugarhe1003或zengshixj

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
