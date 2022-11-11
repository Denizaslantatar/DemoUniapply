<script>
export default {
  
}
</script>
<template>
  <section id="login">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="login"
            style="
              background-image: url(/assets/images/mascots/401.svg);
              background-position-y: 2rem;
            "
          >
            <div class="row">
              <div class="col-md-7">
                <div class="login-head">
                  <h1 class="fw-700 display-5 mb-2">
                    No
                    <span class="text-success">authorization</span>
                    found.
                  </h1>
                  <p class="text-secondary fw-500 mb-4">
                    This page is not publically avaliable. To access it please
                    login first.
                  </p>
                  <router-link
                    :to="CheckUserType"
                    role="button"
                    class="btn btn-success text-white btn-lg rounded-3 fw-400 fs-6 px-4"
                    >Return Home</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
