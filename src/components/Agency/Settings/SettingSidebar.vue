<script>
// This is Setting Component
export default {};
</script>
<template>
  <div class="col-xl-3 col-lg-12">
    <div class="card p-0 gap-1">
      <div
        class="btn btn-upload position-relative border-0 d-block mx-auto mt-4 mb-2"
      >
        <img
          src="https://ams4youfiles.s3.amazonaws.com/aglogo/ag13040_20221021092945.png"
          alt="AMS Test"
          class="img-fluid rounded-circle avatar"
        />
        <a role="button" class="btn-upload-avatar text-white">
          <i class="vr-ic_fluent_image_edit_24_regular"></i>
        </a>
      </div>
      <h5 class="text-dark fw-600 text-center">AMS Test</h5>
      <div
        class="nav nav-pills nav-tabs-vertical nav-tabs-grid"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <li class="nav-item">
          <router-link
            aria-current="page"
            to="/partner/settings/agency"
            class="router-link-active router-link-exact-active nav-link"
            :class="{ active: $route.path.includes('/settings/agency') }"
          >
            <i
              class="vr-ic_fluent_book_contacts_24_regular fs-4 align-middle"
            ></i>
            <span class="nav-text">Agency Information</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/partner/settings/banking"
            class="nav-link"
            :class="{ active: $route.path.includes('/settings/banking') }"
          >
            <i
              class="vr-ic_fluent_building_bank_24_regular fs-4 align-middle"
            ></i>
            <span class="nav-text">Banking Information</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/partner/settings/commission"
            class="nav-link"
            :class="{ active: $route.path.includes('/settings/commission') }"
          >
            <i
              class="vr-ic_fluent_money_calculator_24_regular fs-4 align-middle"
            ></i>
            <span class="nav-text">School Commissions</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/partner/settings/staff"
            class="nav-link"
            :class="{ active: $route.path.includes('/settings/staff') }"
          >
            <i
              class="vr-ic_fluent_content_settings_24_regular fs-4 align-middle"
            ></i>
            <span class="nav-text">Manage Staff</span>
          </router-link>
        </li>
        <li class="nav-item">
          <a href="/agency/setting/certificate" class="nav-link">
            <i
              class="vr-ic_fluent_certificate_24_regular fs-4 align-middle"
            ></i>
            <span class="nav-text">Representation Certificate</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/agency/setting/agreement" class="nav-link">
            <i
              class="vr-ic_fluent_document_bullet_list_multiple_24_regular fs-4 align-middle"
            ></i>
            <span class="nav-text">Agreement</span>
          </a>
        </li>
      </div>
    </div>
  </div>
</template>
