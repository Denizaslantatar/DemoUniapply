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
        Email: "tacettinsertkaya2@gmail.com",
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
        password: {
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
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          :class="{
            'form-control': true,
            'is-invalid': v$.payload.Email && v$.payload.Email.$errors.length,
          }"
          id="staticEmail"
          placeholder="Email"
          v-model="payload.Email"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" />
      </div>
    </div>
  </main>
</template>
