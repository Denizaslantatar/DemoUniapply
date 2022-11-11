<script>
import jwt_decode from "jwt-decode";
export default {};
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
                background-image: url(/assets/images/mascots/404.svg);
                background-position-y: 2rem;
              "
            >
              <div class="row">
                <div class="col-md-7">
                  <div class="login-head">
                    <h1 class="fw-700 display-5 mb-2">
                      <span class="text-info d-block">Opps!</span>
                      Something went wrong.
                    </h1>
                    <p class="text-secondary fw-500 mb-4">
                      The page you are looking for can not be found.
                    </p>
                    <a
                      :href="CheckUserType"
                      role="button"
                      class="btn btn-info text-white btn-lg rounded-3 fw-400 fs-6 px-4"
                      >Return Home</a
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
