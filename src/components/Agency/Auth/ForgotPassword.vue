<script>
import ALoginService from "@/services/Agency/Login.service";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      Email: "",
      isProcess: false,
    };
  },
  validations() {
    return {
      Email: {
        required,
        email,
        $autoDirty: true,
      },
    };
  },
  methods: {
    SendRequest() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.isProcess = true;
        let payload = {
          Email: this.Email,
          APMasterAgencyId: 12496,
        };

        ALoginService.PostResetPasswordAgency(payload)
          .then((response) => {
            if (response.data.detail?.isDone) {
              this.toast.success(
                "Your password reset request sent to your email successfully."
              );
              setTimeout(() => {
                this.$router.push("/recruiter/signin");
              }, 1500);
            } else {
              this.toast.error("User register not found for this email!");
            }
          })
          .then(() => {
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
            <div
              class="login"
              style="
                background-image: url(/assets/images/mascots/forgot-password.svg);
              "
            >
              <div class="row">
                <div class="col-md-7">
                  <div class="login-head mb-3">
                    <h1 class="fw-700">Forgot Password</h1>
                  </div>
                  <div class="login-content">
                    <div class="row">
                      <div class="col-lg-9 col-md-12">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            :class="{
                              'form-control': true,
                              'is-invalid': v$.Email && v$.Email.$errors.length,
                            }"
                            id="eMail"
                            v-model="Email"
                            placeholder="Email"
                          />
                          <label for="eMail">Email</label>
                        </div>
                        <button
                          type="button"
                          class="btn btn-primary text-white fw-500 w-100"
                          @click="SendRequest()"
                        >
                          Send E-mail
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
                    <router-link to="/recruiter/signup" class="text-primary"
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
