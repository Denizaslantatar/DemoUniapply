<template>
  <main>
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="login"
              style="
                background-image: url(/assets/images/mascots/agency-register.svg);
              "
            >
              <div class="row">
                <div class="col-md-7">
                  <div class="login-head mb-5">
                    <h1 class="fw-700 h2 mb-3">
                      Register to discover your ideal program and university
                      <span class="text-purple">Over 11,000+</span> programs to
                      choose from!
                    </h1>
                    <p class="fw-400 fs-9 text-secondary w-500 lh-sm">
                      Please make sure to register your main branch information,
                      if you have more than one branch.
                    </p>
                  </div>
                  <div class="login-content">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="agencyName"
                            placeholder="Agency Name"
                          />
                          <label for="agencyName"
                            >Agency Name <span class="text-danger">*</span>
                          </label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="contactPerson"
                            placeholder="Contact Person"
                          />
                          <label for="contactPerson"
                            >Contact Person
                            <span class="text-danger">*</span></label
                          >
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="tel"
                            class="form-control"
                            id="phone"
                            placeholder="Phone"
                          />
                          <label for="phone">Phone</label>
                        </div>
                        <div class="form-floating mb-3">
                          <select
                            class="form-select"
                            id="selectCountry"
                            aria-label="Select country"
                          >
                            <option selected>Select Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <label for="selectCountry">Country</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="state"
                            placeholder="State"
                          />
                          <label for="state">State</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="city"
                            placeholder="City"
                          />
                          <label for="city">City</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="foundation"
                            placeholder="Year of Foundation"
                          />
                          <label for="foundation">Year of Foundation</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="url"
                            class="form-control"
                            id="website"
                            placeholder="Website URL"
                          />
                          <label for="website">Website URL</label>
                        </div>
                        <div class="form-floating mb-3">
                          <select
                            class="form-select"
                            id="selectCurrency"
                            aria-label="Select currency"
                          >
                            <option selected>Select Currency</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <label for="selectCurrency">Currency</label>
                        </div>
                        <div class="form-floating mb-3">
                          <textarea
                            class="form-control"
                            placeholder="Leave a comment/notes here"
                            id="notes"
                            style="height: 75px"
                          ></textarea>
                          <label for="notes">Notes and Comments</label>
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
                            <a class="text-purple">Terms and Conditions</a> and
                            the
                            <a class="text-purple">Privacy and Cookies Policy</a
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
                    <a href="#" class="text-purple">Sign In</a>
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
