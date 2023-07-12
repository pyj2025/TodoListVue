<template>
  <div class="footerContainer">
    <div class="deleteAllBtn" @click="handleDeleteAll">Delete All</div>
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

<style scoped>
.footerContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.deleteAllBtn {
  background-color: red;
  color: rgb(230, 227, 227);
  padding: 10px 10px;
  border-radius: 10%;
  cursor: pointer;
}
</style>
