<template>
  111
  <div>
    <button @click="handlesUser">点击</button>
  </div>
</template>
<script setup lang="ts">
import { getUsers } from "@/api"
const handlesUser = async () => {
  const res = await getUsers()
  console.log(res.data)
}
</script>
<style scoped></style>
