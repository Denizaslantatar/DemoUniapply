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
      }
    },
    /* changePwType() {
            Bu fonksiyonun inline olarak yazılışı => isPwText == 'password' ? isPwText = 'text' : isPwText = 'password'
            if (this.isPwText == "password") {
                this.isPwText = "text";
            } else {
                this.isPwText = "password";
            }
        }, */
  },
};
</script>

<template>
  <main>
    <div class="col-md-6">
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail"
            value="email@example.com"
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
    </div>
  </main>
</template>
