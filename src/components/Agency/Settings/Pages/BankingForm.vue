<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import ASettingServ from "@/services/Agency/Setting.service";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      payload: {
        BankName: "AMS TEST",
        BankAddress: "karşıyaka",
        InsutituionNumber: 123,
        TransitNumber: 123,
        AccountNumber: 123,
        SwiftCode: "13",
        AccountName: "den",
        Iban: "123",
        Comments: "asd",
      },
      isProcess: false,
    };
  },
  validations() {
    return {
      payload: {
        BankName: {
          required,
        },
      },
    };
  },
  methods: {
    save() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.isProcess = true;
        ASettingServ.PostPartnerBankInfo(this.payload).then((res) => {
          if (res.data.success) {
            this.toast.success(
              "Agency ban information is successfully updated."
            );
            this.$store.dispatch("ASettingMod/GetPartnerBankInfoList");
          } else this.toast.error("Something went wrong.");
          this.isProcess = false;
        });
      }
    },
  },
};
</script>
<template>
  <main>
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header modal-header-col">
          <h5 class="modal-title" id="bankingInformation">
            Add Bank Information
          </h5>
          <p class="fs-7 text-secondary mb-0">
            If your bank account credentials is not suitable for any of the
            fields below, you may write it as a comment.
          </p>
          <div class="btn-close" data-bs-dismiss="modal" id="bank-close"></div>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  maxlength="50"
                  class="form-control"
                  id="bankName"
                  placeholder="Bank Name"
                  v-model="payload.BankName"
                />
                <label for="bankName">
                  Bank Name
                  <span class="text-danger">*</span>
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  class="form-control"
                  id="nameAgency"
                  placeholder="Bank Address"
                  maxlength="100"
                  v-model="payload.BankAddress"
                />
                <label for="nameAgency">Bank Address</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  class="form-control"
                  id="instNumber"
                  placeholder="Institution Number"
                  maxlength="65"
                  v-model="payload.InsutituionNumber"
                />
                <label for="instNumber">Institution Number</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  class="form-control"
                  id="transitNumber"
                  placeholder="Transit Number"
                  maxlength="65"
                  v-model="payload.TransitNumber"
                />
                <label for="transitNumber">Transit Number</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  class="form-control"
                  id="accNumber"
                  placeholder="Account Number"
                  maxlength="65"
                  v-model="payload.AccountNumber"
                />
                <label for="accNumber">Account Number</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  class="form-control"
                  id="swiftCode"
                  placeholder="Swift Code"
                  maxlength="100"
                  v-model="payload.SwiftCode"
                />
                <label for="swiftCode">Swift Code</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  class="form-control"
                  id="accName"
                  placeholder="Account Name"
                  maxlength="65"
                  v-model="payload.AccountName"
                />
                <label for="accName">Account Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating form-floating-fit">
                <input
                  type="text"
                  class="form-control"
                  id="iban"
                  placeholder="IBAN"
                  maxlength="75"
                  v-model="payload.Iban"
                />
                <label for="iban">IBAN</label>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-floating form-floating-fit">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="comments"
                  maxlength="250"
                  style="height: 100px"
                  v-model="payload.Comments"
                ></textarea>
                <label for="comments">Comments</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer" v-if="isProcess">
          <button
            class="btn btn-primary fs-9 text-white px-3 shadow-line"
            @click="save()"
          >
            <!---->
            Save
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
