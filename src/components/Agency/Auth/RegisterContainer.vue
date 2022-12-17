<script>
import RegisterForm from "./RegisterForm.vue";
import jwt_decode from "jwt-decode";
export default {
  components: { RegisterForm },
  mounted() {
    //Sayfa yüklenmeden önce yapılacak olan işlemleri ekliyoruz.
    let token = localStorage.getItem("token");
    let userInfo = localStorage.getItem("userInfo");
    let agentInfo = localStorage.getItem("agentInfo");
    let isAuth = localStorage.getItem("isAuth");
    if (token && (userInfo || (agentInfo && isAuth))) {
      let decoded = jwt_decode(token);
      if (
        decoded.Type == "std" &&
        userInfo &&
        (decoded.StudentId || decoded.StudentPreID)
      ) {
        this.$router.push("/student/dashboard");
      } else if (decoded.Type == "partner" && isAuth && agentInfo) {
        this.$router.push("/partner/dashboard");
      }
    }
  },
  beforeCreate() {
    document.title = "Recruiter Register | " + this.SiteTitle;
  },
};
</script>
<template>
  <main>
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="login"
              style="
                background-image: url(/assets/images/mascots/agency-register.svg);
              "
            >
              <div class="row">
                <div class="col-lg-7 col-md-12">
                  <div class="login-head mb-5">
                    <h1 class="fw-700 h2 mb-3">
                      Register to discover your ideal program and university
                      <span class="text-purple">Over 11,000+</span> programs to
                      choose from!
                    </h1>
                    <p class="fw-400 fs-9 text-secondary w-500 lh-sm">
                      Please make sure to register your main branch information,
                      if you have more than one branch.
                    </p>
                  </div>
                  <RegisterForm />
                  <div class="login-footer fw-500">
                    Don't have an account?
                    <router-link to="/recruiter-signin" class="text-purple"
                      >Sign In</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
