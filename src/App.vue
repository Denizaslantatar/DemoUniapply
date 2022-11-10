<script>
export default {
  data() {
    return {
      isTokenLoaded: false,
    };
  },
  mounted() {
    let token = localStorage.getItem("token");
    //Token yoksa bana token al,
    if (!token) {
      this.$store.dispatch("Visitor/GetVisitorToken").then(() => {
        this.isTokenLoaded = true;
      });
    } else {
      // token varsa zaten birsey yapmaya gerek yok
      this.isTokenLoaded = true;
    }
  },
};
</script>

<template>
  <RouterView v-if="isTokenLoaded" />
</template>
