<template>
  <div class="ad-container
    h-2
    rounded-lg 
    p-4 
    flex 
    items-center 
    justify-center 
    border-2 
    border-dashed 
    border-transparent
    dark:border-gray-800/30 
    overflow-hidden">
    <!-- 移除opacity-0类 -->
    <img 
      v-if="imageUrl"
      :src="imageUrl"
      alt="曾小记"
      class="h-max w-full object-cover object-center"
    >
    <span class="text-gray-500 dark:text-gray-400 text-center break-words">
      {{ content }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''  // 替换为实际图片URL（如https://example.com/banner.jpg）
    },
    content: {
      type: String,
      default: '---------- ✨✨✨✨ ----------'  // 留空则不显示文字
    }
  }
}
</script>

<style scoped>
/* 强制透明背景 */

.ad-container {
  background-color: transparent !important;
}


/* 需要悬停效果时，移除下方注释 */
/*
.ad-container:hover {
  border-color: #6366f1;
  background-color: rgba(99, 102, 241, 0.1);
}

img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.03);
}
*/
</style>
