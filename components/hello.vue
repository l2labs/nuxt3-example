<template>
  <div class="w-screen h-screen flex justify-center items-center bg-dark-500">
    <span
      class="text-7xl font-bold bg-clip-text bg-gradient-to-br from-rose-300 via-orange-300 to-cyan-300 text-transparent"
    >
      {{ t('hello') }}
    </span>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
