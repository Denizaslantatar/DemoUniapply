<template>
  <main>
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="login"
              style="
                background-image: url(/assets/images/mascots/student-register.svg);
              "
            >
              <div class="row">
                <div class="col-md-7">
                  <div class="login-head mb-5">
                    <h1 class="fw-700 h2">
                      Create your <span class="text-success">FREE</span> account
                      and search from 11,000+ degree programs with UniApplyNow.
                    </h1>
                  </div>
                  <div class="login-content">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="First Name"
                          />
                          <label for="firstName"
                            >First Name <span class="text-danger">*</span>
                          </label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="surName"
                            placeholder="Surname"
                          />
                          <label for="surName"
                            >Surname <span class="text-danger">*</span></label
                          >
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="eMail"
                            placeholder="Email"
                          />
                          <label for="eMail">Email</label>
                          <!-- <small class="text-valid">Lorem ipsum dolor sit amet consectetur.</small> -->
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                          />
                          <label for="password">Password</label>
                          <button type="button" class="btn border-0 form-show">
                            <i class="vf-ic_fluent_eye_24_filled fs-5 lh-0"></i>
                          </button>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="confirmPass"
                            placeholder="Confirm Password"
                          />
                          <label for="confirmPass">Confirm Password</label>
                          <button type="button" class="btn border-0 form-show">
                            <i class="vf-ic_fluent_eye_24_filled fs-5 lh-0"></i>
                          </button>
                        </div>
                        <div class="form-check mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="policyCheck"
                            checked
                          />
                          <label
                            class="form-check-label fs-7 lh-sm"
                            for="policyCheck"
                          >
                            I have read and agree to the
                            <a class="text-success">Terms and Conditions</a> and
                            the
                            <a class="text-success"
                              >Privacy and Cookies Policy</a
                            >.
                          </label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="updateCheck"
                          />
                          <label
                            class="form-check-label fs-7 lh-sm"
                            for="updateCheck"
                          >
                            Yes, I would like to receive updates of UniApplyNow.
                          </label>
                        </div>
                        <button
                          type="button"
                          class="btn btn-primary text-white fw-500 w-100"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="login-footer fw-500">
                    Don't have an account?
                    <a href="#" class="text-success">Sign In</a>
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
