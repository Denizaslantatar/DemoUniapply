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
        Email: "yasin@ams4you.com",
        Password: "Test1923*",
        APMasterId: 12496,
      },
      isProcess: false,
      isPwText: "password",
    };
  },
  // Login validate işlemi required alanları yazdım
  validations() {
    return {
      payload: {
        Email: {
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

        this.$store.dispatch("ALoginMod/Login", this.payload).then(() => {
          this.isProcess = false;
        });
      }
    },
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
                      Welcome back <span class="text-success">Recruiter!</span>
                      <br />
                      Please login to your account
                    </h1>
                  </div>
                  <div class="login-content">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            :class="{
                              'form-control': true,
                              'is-invalid':
                                v$.payload.Email &&
                                v$.payload.Email.$errors.length,
                            }"
                            id="eMail"
                            placeholder="Email"
                            v-model="payload.Email"
                          />
                          <label for="eMail">Email</label>
                          <small
                            class="text-valid"
                            v-if="
                              v$.payload.Email &&
                              v$.payload.Email.$errors.length
                            "
                            >Please insert a valid email address</small
                          >
                        </div>
                        <div class="form-floating mb-3">
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
                              isPwTest == 'text'
                                ? (isPwTest = 'password')
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
                          to="/recruiter/forgot-password"
                          class="text-primary d-block text-end text-decoration-none mb-3 fs-8"
                        >
                          Forgot Password?
                        </router-link>
                        <button
                          type="button"
                          class="btn btn-success text-white fw-500 w-100"
                          @click="Login()"
                        >
                          Login
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
                    <router-link to="/recruiter/signup" class="text-purple">
                      Create Account</router-link
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
