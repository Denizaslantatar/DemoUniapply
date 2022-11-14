<script>
import useVuelidate from "@vuelidate/core";
import { required, email, sameAs } from "@vuelidate/validators";
import jwt_decode from "jwt-decode";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      payload: {
        Name: "",
        YearOfFoundation: null,
        WebSiteUrl: "",
        StateName: "",
        CityName: "",
        NameSurname: "",
        PhoneNumber: "",
        Email: "",
        CountryId: "",
        CurrencyId: "",
        Ref1Contact: null,
        Ref1Email: null,
        Ref1Phone: null,
        Ref1School: null,
        Ref2Contact: null,
        Ref2Email: null,
        Ref2Phone: null,
        Ref2School: null,
        Notes: "",
        IsAgree: true,
        IsAgree2: true,
        APMasterId: 12496,
        Password: "",
        UserName: "",
      },
      isDataLoaded: false,
      isProcess: false,
      isPwText: "password",
      isPwConfirm: "password",
      isPasswordConfirm: "",
    };
  },
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
        NameSurname: {
          required,
        },
        PhoneNumber: {
          required,
        },
        CityName: {
          required,
        },
        CurrencyId: {
          required,
        },
        CountryId: {
          required,
        },
        IsAgree: {
          required,
        },
        IsAgree2: {
          required,
        },
      },
      isPasswordConfirm: {
        sameAs: sameAs(this.payload.Password),
      },
    };
  },
  methods: {
    Register() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.payload.UserName = this.payload.Email;
        this.isProcess = true;
        this.$store
          .dispatch("ARegisterMod/Register", this.payload)
          .then(() => {
            this.isProcess = false; // Bu akışı sor
          })
          // kayıt işlemi bitti formu sıfırla
          .then(() => {
            this.payload = {
              Name: "",
              YearOfFoundation: "",
              WebSiteUrl: "",
              StateName: "",
              CityName: "",
              NameSurname: "",
              PhoneNumber: "",
              Email: "",
              CountryId: "",
              CurrencyId: "",
              Ref1Contact: null,
              Ref1Email: null,
              Ref1Phone: null,
              Ref1School: null,
              Ref2Contact: null,
              Ref2Email: null,
              Ref2Phone: null,
              Ref2School: null,
              Notes: "",
              IsAgree: "",
              IsAgree2: "",
              APMasterId: 12496,
              Password: "",
              UserName: "",
            };
            this.v$.$reset();
          });
      }
    },
  },
  computed: {
    isCountry() {
      return this.$store.state.AregisterMod.isCountry;
    },
    isCurrency() {
      return this.$store.state.AregisterMod.isCurrency;
    },
  },
  mounted() {
    let token = localStorage.getItem("token");
    let userInfo = localStorage.getItem("userInfo");
    let agentInfo = localStorage.getItem("agentInfo");
    let isAuth = localStorage.getItem("isAuth");
    if (token && (userInfo || (agentInfo && isAuth))) {
      let decoded = jwt_decode(token);
      if (
        decoded.Type == "std" &&
        userInfo &&
        (decoded.StudentId || decoded.StudentPreId)
      ) {
        this.$router.push("/student/dashboard");
      } else if (decoded.Type == "partner" && isAuth && agentInfo) {
        this.$router.push("/partner/dashboard");
      }
    } else {
      this.$store.dispatch("AregisterMod/GetCurrencyCountry").then(() => {
        this.isDataLoaded = true;
      });
    }
  },
};
</script>
<template>
  <main>
    <div class="login-content">
      <!-- Form yüklenmeden önce spinnerı çalıştır -->
      <Spinner v-if="!isDataLoaded" />
      <!-- Form yüklenene kadar spinner çalıştı - form yüklendi -->
      <div class="row" v-if="isDataLoaded">
        <div class="col-md-9">
          <div class="form-floating mb-3">
            <input
              type="text"
              :class="{
                'form-control': true,
                'is-invalid': v$.payload.Name && v$.payload.Name.$errors.length,
              }"
              id="agencyName"
              placeholder="Agency Name"
              v-model="payload.Name"
            />
            <label for="agencyName"
              >Agency Name <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.NameSurname &&
                  v$.payload.NameSurname.$errors.length,
              }"
              id="contactPerson"
              placeholder="Contact Person"
              v-model="payload.NameSurname"
            />
            <label for="contactPerson"
              >Contact Person <span class="text-danger">*</span></label
            >
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.PhoneNumber &&
                  v$.payload.PhoneNumber.$errors.length,
              }"
              id="phone"
              placeholder="Phone"
              v-model="payload.PhoneNumber"
            />
            <label for="phone">Phone</label>
          </div>
          <div class="form-floating mb-3">
            <!-- V-SELECT Yapısı Begin -->
            <v-select
              label="Name"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.CountryId && v$.payload.CountryId.$errors.length,
              }"
              :options="isCountry"
              :reduce="(option) => option.Id"
              v-model="payload.CountryId"
            >
              <template #selected-option="option">
                <img style="max-width: 15px" v-if="option.Name" />
                {{
                  option.CountryCode
                    ? option.CountryCode + " - " + option.Name
                    : ""
                }}
              </template>
              <template v-slot:option="option">
                <img style="max-width: 15px" />
                {{ option.CountryCode + " - " + option.Name }}
              </template>
            </v-select>
            <label for="selectCountry"
              >Country
              <span class="text-danger">*</span>
            </label>
          </div>
          <!-- V-SELECT Yapısı End -->
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="state"
              placeholder="State"
              v-model="payload.StateName"
            />
            <label for="state">State</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.CityName && v$.payload.CityName.$errors.length,
              }"
              id="city"
              placeholder="City"
              v-model="payload.CityName"
            />
            <label for="city"
              >City
              <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              maclength="4"
              class="form-control"
              id="foundation"
              placeholder="Year of Foundation"
              v-model="payload.YearOfFoundation"
              oninput="this.value= this.value.replace(/([^+0-9]+)/gi, '')"
            />
            <label for="foundation">Year of Foundation</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="url"
              class="form-control"
              id="website"
              placeholder="Website URL"
              v-model="payload.WebSiteUrl"
            />
            <label for="website">Website URL</label>
          </div>
          <!--V-SELECT BEGINING-->
          <div class="form-floating mb-3">
            <v-select
              label="Name"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.CurrencyId && v$.payload.CurrencyId.$errors.length,
              }"
              :options="isCurrency"
              :reduce="(option) => option.Id"
              v-model="payload.CurrencyId"
            >
            </v-select>
            <label for="selectCurrency"
              >Currency
              <span class="text-danger">*</span>
            </label>
          </div>
          <!-- V-SELECT END -->
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment/notes here"
              id="notes"
              style="height: 75px"
              v-model="payload.Notes"
            ></textarea>
            <label for="notes">Notes and Comments</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.Email && v$.payload.Email.$errors.length,
              }"
              id="eMail"
              placeholder="Email"
              v-model="payload.Email"
            />
            <label for="eMail"
              >Email
              <span class="text-danger">*</span>
            </label>
            <!-- <small class="text-valid">Lorem ipsum dolor sit amet consectetur.</small> -->
          </div>
          <div class="form-floating mb-3">
            <input
              :type="isPwText"
              v-model="payload.Password"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.Password && v$.payload.Password.$errors.length,
              }"
              id="password"
              placeholder="Password"
            />
            <label for="password"
              >Password
              <span class="text-danger">*</span>
            </label>
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
          <div class="form-floating mb-3">
            <input
              :type="isPwConfirm"
              :class="{
                'form-control': true,
                'is-invalid':
                  v$.payload.Password && v$.payload.Password.$errors.length,
              }"
              id="confirmPass"
              placeholder="Confirm Password"
              v-model="isPasswordConfirm"
            />
            <label for="confirmPass"
              >Confirm Password
              <span class="text-danger">*</span>
            </label>
            <button
              type="button"
              class="btn border-0 form-show"
              @click="
                isPwConfirm == 'text'
                  ? (isPwConfirm = 'password')
                  : (isPwConfirm = 'text')
              "
            >
              <i
                class="vf-ic_fluent_eye_off_24_filled fs-5 lh-0"
                v-if="isPwConfirm == 'text'"
              ></i>
              <i
                class="vf-ic_fluent_eye_24_filled fs-5 lh-0"
                v-if="isPwConfirm == 'password'"
              ></i>
            </button>
          </div>
          <div class="form-check mb-2">
            <input
              :class="{
                'form-check-input': true,
                'is-invalid':
                  v$.payload.IsAgree && v$.payload.IsAgree.$errors.length,
              }"
              type="checkbox"
              id="policyCheck"
              v-model="payload.IsAgree"
            />
            <label class="form-check-label fs-7 lh-sm" for="policyCheck">
              I have read and agree to the
              <a class="text-purple">Terms and Conditions</a>
              and the
              <a class="text-purple">Privacy and Cookies Policy</a>
              .
              <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-check mb-3">
            <input
              :class="{
                'form-check-input': true,
                'is-invalid':
                  v$.payload.IsAgree2 && v$.payload.IsAgree2.$errors.length,
              }"
              type="checkbox"
              value=""
              id="updateCheck"
              v-model="payload.IsAgree2"
            />
            <label class="form-check-label fs-7 lh-sm" for="updateCheck">
              Yes, I would like to receive updates of UniApplyNow.
              <span class="text-danger">*</span>
            </label>
          </div>
          <button
            type="button"
            class="btn btn-primary text-white fw-500 w-100"
            @click="Register()"
          >
            Sign Up
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
  </main>
</template>
