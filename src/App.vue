<script>
export default {
  data() {
    return {
      isTokenLoaded: false,
    };
  },
  computed: {
    controlUserToken() {
      let token = localStorage.getItem("token");
      let check = token ? true : false;
      return check;
    },
    UserType() {
      return this.$store.state.Visitor.UserType;
    },
  },
  // Sayfanın Yüklenmesi için Token almamız gerekiyor o yüzden Token almayı mounted() da yapıyoruz.
  mounted() {
    // let token = localStorage.getItem("token"); Computed da tanımladık.
    //Token yoksa bana token al, dispatch ile module de çağırdığımız tokeni alıyoruz.
    if (!this.controlUserToken) {
      this.$store.dispatch("Visitor/GetVisitorToken").then(() => {
        this.isTokenLoaded = true;
      });
    } else {
      // token varsa zaten getir
      this.isTokenLoaded = true;
    }
    this.$store.dispatch("Visitor/GetUserType");
  },
};
</script>

<template>
  <ul>
    <li>
      <router-link to="/recruiter/signin">Agency Login</router-link>
    </li>
    <li>
      <router-link to="/recruiter/signup">Agency Register</router-link>
    </li>
    <li>
      <router-link to="/student/signin">Student Login</router-link>
    </li>
  </ul>

  <RouterView v-if="isTokenLoaded" />
  <Spinner v-else />
</template>
