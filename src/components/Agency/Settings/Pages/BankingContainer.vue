<script>
import BankingForm from "./BankingForm.vue";
export default {
  components: { BankingForm },
};
</script>
<template>
  <div class="row g-2 my-3">
    <div class="col-xxl-4 col-xl-4 col-md-6">
      <div class="card-address">
        <div class="card-address-header">Bank Name</div>
        <div class="card-address-body">
          <ul class="list-unstyled fs-9">
            <li>
              <span class="fw-600">Bank Name:</span>
              Bank Name
            </li>
            <li>
              <span class="fw-600">Bank Address:</span>
              Bank Address
            </li>
            <li>
              <span class="fw-600">Insutituion Number:</span>
              2546666658
            </li>
            <li>
              <span class="fw-600">Transit Number:</span>
              22645464686468
            </li>
            <li>
              <span class="fw-600">Account Number:</span>
              22265445555
            </li>
            <li>
              <span class="fw-600">Swift Code:</span>
              TR22565454554445
            </li>
            <li>
              <span class="fw-600">Account Name:</span>
              Main Account
            </li>
            <li>
              <span class="fw-600">Iban:</span>
              TR4545454484613485445454215
            </li>
            <li>
              <span class="fw-600">Comments:</span>
              This is a comments
            </li>
          </ul>
        </div>
        <div class="card-address-footer">
          <a
            role="button"
            class="text-info fs-6"
            data-bs-toggle="modal"
            data-bs-target="#bankingInformation"
          >
            <i class="bi bi-pencil-square"></i>
          </a>
          <a
            role="button"
            class="text-danger fs-6"
            data-bs-toggle="modal"
            data-bs-target="#deleteBank"
          >
            <i class="bi bi-trash"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-12">
      <a
        role="button"
        class="card-address new"
        data-bs-toggle="modal"
        data-bs-target="#bankingInformation"
      >
        <i class="vf-ic_fluent_form_new_24_filled fs-1"></i>
        Add Work
      </a>
    </div>
    <div
      class="modal modal-action modal-animation fade"
      id="bankingInformation"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="bankingInformation"
      aria-hidden="true"
    ></div>
    <BankingForm />
  </div>
</template>
