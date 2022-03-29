<template>
  <div class="h-screen flex-center text-6xl font-thin bg-gray-200 text-green-700">nuxt3-example</div>
</template>

<script setup lang="ts">
// import {} from ''

definePageMeta({ pageTransition: { name: 'fade', mode: 'out-in' } })

onMounted(() => {})

onUnmounted(() => {})
</script>

<i18n lang="yaml">
en:
  title: title

cn:
  title: 标题
</i18n>

<style scoped lang="less"></style>
