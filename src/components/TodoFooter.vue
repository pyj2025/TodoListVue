<template>
  <div class="w-full h-full flex justify-center content-center m-2">
    <div
      class="h-10 bg-red-700 text-white p-2 rounded cursor-pointer"
      @click="handleDeleteAll"
    >
      Delete All
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleDeleteAll() {
      this.$emit("deleteAll");
    },
  },
};
</script>

<style scoped></style>
