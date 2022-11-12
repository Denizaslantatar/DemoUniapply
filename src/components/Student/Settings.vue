<script>
export default {};
</script>
<template>
  <main>
    <section id="settings">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card w-500 mx-auto">
              <div class="card-content">
                <div class="card-form">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="user-avatar mb-4 d-flex align-items-center gap-2"
                      >
                        <img
                          src="/assets/images/avatars/vector/male/male-6.png"
                          alt="Yasin"
                          class="img-fluid rounded-circle avatar"
                          width="100"
                        />
                        <div
                          data-bs-toggle="modal"
                          data-bs-target="#ag-image"
                          id="ag-up-image"
                        ></div>
                        <div class="user-avatar-actions">
                          <h5>Yasin Middle Name Test Student</h5>
                          <a
                            role="button"
                            class="btn btn-primary fs-8 text-white rounded-pill px-4 mb-2"
                            >Upload Photo</a
                          >
                          <p class="text-muted fs-7 mb-0">
                            At least 1000px x 1000px PNG or JPG file.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div class="row g-2">
                        <div class="col-md-12">
                          <div class="form-floating form-floating-fit mb-3">
                            <input
                              type="text"
                              class="form-control fs-9"
                              id="crEmail"
                              disabled=""
                              autocomplete="off"
                              placeholder="yasin@ams4you.comss"
                            />
                            <label for="crEmail" class="fs-9"
                              >Current Email</label
                            >
                          </div>
                          <div class="form-floating form-floating-fit">
                            <input
                              type="text"
                              class="form-control fs-9"
                              id="nwCrEmail"
                              autocomplete="off"
                            />
                            <label for="nwCrEmail" class="fs-9"
                              >New Email <span class="text-danger">*</span>
                            </label>
                          </div>
                          <button
                            class="btn float-end btn-primary fs-8 text-white px-3 mt-2"
                          >
                            <!---->
                            Save New Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row g-2">
                        <div class="col-md-12">
                          <div class="form-floating form-floating-fit">
                            <input
                              type="password"
                              class="form-control"
                              id="CurrentPassword"
                              placeholder="Old Password"
                            />
                            <label for="CurrentPassword"
                              >Current Password</label
                            >
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-floating form-floating-fit">
                            <input
                              type="password"
                              name="Password"
                              id="Password"
                              placeholder="Password"
                              class="form-control"
                            />
                            <label for="Password">
                              New Password <span class="text-danger">*</span>
                            </label>
                            <button
                              type="button"
                              class="btn border-0 form-show"
                            >
                              <i
                                class="vf-ic_fluent_eye_24_filled fs-5 lh-0"
                              ></i>
                            </button>
                          </div>
                          <!---->
                        </div>
                        <div class="col-md-12">
                          <div class="form-floating form-floating-fit">
                            <input
                              type="password"
                              name="PasswordConfirm"
                              id="PasswordConfirm"
                              placeholder="PasswordConfirm"
                              class="form-control"
                            />
                            <label for="PasswordConfirm"
                              >Confirm New Password
                              <span class="text-danger">*</span>
                            </label>
                            <button
                              type="button"
                              class="btn border-0 form-show"
                            >
                              <i
                                class="vf-ic_fluent_eye_24_filled fs-5 lh-0"
                              ></i>
                            </button>
                          </div>
                          <button
                            class="btn float-end btn-primary fs-8 text-white px-3 mt-2"
                          >
                            <!---->
                            Save New Password
                          </button>
                        </div>
                      </div>
                    </div>
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
