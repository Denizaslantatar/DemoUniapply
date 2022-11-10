<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  // Login Validate işlemi
  setup() {
    return { v$: useVuelidate() };
  },
  // data nın içersine payload verilerini yerleştirdim
  data() {
    return {
      payload: {
        UserName: "14@mart.com",
        Password: "Test1923*",
      },
      isProcess: false,
      isPwText: "password",
    };
  },
  // Login validate işlemi required alanları yazdım
  validations() {
    return {
      payload: {
        UserName: {
          required,
          email,
        },
        Password: {
          required,
        },
      },
    };
  },
  // Login Fonksiyonu
  methods: {
    Login() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.isProcess = true;
        this.$store.dispatch("SLoginMod/Login", this.payload).then(() => {
          this.isProcess = false;
        });
        // .then(() => {
        //   this.$store.dispatch("Visitor/GetUserType");
        // });
      }
    },
    // changePwType() {
    //   // Bu fonksiyonun inline olarak yazılışı => isPwText == 'password' ? isPwText = 'text' : isPwText = 'password'
    //   if (this.isPwText == "password") {
    //     this.isPwText = "text";
    //   } else {
    //     this.isPwText = "password";
    //   }
    // },
  },
};
</script>

<template>
  <main>
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="login">
              <div class="row">
                <div class="col-md-7">
                  <div class="login-head mb-5">
                    <h1 class="fw-700">
                      Welcome back
                      <span class="text-success">Student!</span>
                      <br />
                      Please login to your account
                    </h1>
                  </div>
                  <div class="login-content">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-floating mb-3">
                          <!-- Required Input lara Dinamik Class ataması -->
                          <input
                            type="text"
                            :class="{
                              'form-control': true,
                              'is-invalid':
                                v$.payload.UserName &&
                                v$.payload.UserName.$errors.length,
                            }"
                            id="eMail"
                            placeholder="Email"
                            v-model="payload.UserName"
                          />
                          <label for="eMail">Email</label>
                          <small
                            class="text-valid"
                            v-if="
                              v$.payload.UserName &&
                              v$.payload.UserName.$errors.length
                            "
                            >Please insert a valid email address.</small
                          >
                        </div>

                        <div class="form-floating mb-1">
                          <!-- isPwText Dinamik olarak input un type ını değiştirmek için -->
                          <input
                            :type="isPwText"
                            :class="{
                              'form-control': true,
                              'is-invalid':
                                v$.payload.Password &&
                                v$.payload.Password.$errors.length,
                            }"
                            id="password"
                            placeholder="Password"
                            v-model="payload.Password"
                          />
                          <label for="password">Password</label>
                          <button
                            type="button"
                            class="btn border-0 form-show"
                            @click="
                              isPwText == 'text'
                                ? (isPwText = 'password')
                                : (isPwText = 'text')
                            "
                          >
                            <i
                              class="vf-ic_fluent_eye_off_24_filled fs-5 lh-0"
                              v-if="isPwText == 'text'"
                            ></i>
                            <i
                              class="vf-ic_fluent_eye_24_filled fs-5 lh-0"
                              v-if="isPwText == 'password'"
                            ></i>
                          </button>
                        </div>
                        <router-link
                          to="/student/forgot-password"
                          class="text-primary d-block text-end text-decoration-none mb-3 fs-8"
                          >Forgot Password?</router-link
                        >
                        <button
                          type="button"
                          class="btn btn-success text-white fw-500 w-100"
                          @click="Login()"
                        >
                          Sign In
                          <div
                            class="spinner-border text-light spinner-border-sm"
                            role="status"
                            v-if="isProcess"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="login-footer fw-500">
                    Don't have an account?
                    <router-link to="/student/signup" class="text-success"
                      >Create Account</router-link
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
