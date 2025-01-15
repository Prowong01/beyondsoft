<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const list = ref([{ background: 'rgb(233,32,38)' }]);
const loading = ref(false);
const maxItems = 50;

const getList = (num: number): Promise<{ background: string }[]> => {
  return new Promise((resolve) => {
    const delay = Math.random() * 5000;
    setTimeout(() => {
      const newList = Array.from({ length: num }, () => ({
        background: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`,
      }));
      resolve(newList);
    }, delay);
  });
};

const loadMore = async () => {
  if (loading.value || list.value.length >= maxItems)
    return;

  loading.value = true;

  const newList = await getList(10);
  list.value = [...list.value, ...newList];
  loading.value = false;
};

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight / 2) {
    loadMore();
  }
};

onMounted(() => {
  loadMore();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <div
        v-for="(item, index) in list"
        :key="index"
        :style="{ background: item.background, width: '100%', height: '500px' }"
    >
      {{ index }}
    </div>

    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<style scoped>
.loading {
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #666;
}
</style>
