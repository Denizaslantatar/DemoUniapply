<script>
export default {};
</script>
<template>
  <main>
    <section id="settings">
      <div class="container">
        <div class="row">
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
                  <a
                    aria-current="page"
                    href="/agency/setting/profile"
                    class="router-link-active router-link-exact-active nav-link active"
                  >
                    <i
                      class="vr-ic_fluent_book_contacts_24_regular fs-4 align-middle"
                    ></i>
                    <span class="nav-text">Agency Information</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/agency/setting/bank" class="nav-link">
                    <i
                      class="vr-ic_fluent_building_bank_24_regular fs-4 align-middle"
                    ></i>
                    <span class="nav-text">Banking Information</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/agency/setting/commission" class="nav-link">
                    <i
                      class="vr-ic_fluent_money_calculator_24_regular fs-4 align-middle"
                    ></i>
                    <span class="nav-text">School Commissions</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/agency/setting/staff" class="nav-link">
                    <i
                      class="vr-ic_fluent_content_settings_24_regular fs-4 align-middle"
                    ></i>
                    <span class="nav-text">Manage Staff</span>
                  </a>
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
          <!---->
          <div class="col-xl-9 col-lg-12">
            <div class="card">
              <div class="card-content">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade active show"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                    tabindex="0"
                  >
                    <h3 class="card-title">Agency Information</h3>
                    <p class="card-desc">
                      Please enter the student information accurately and
                      correctly. The information you provide will be sent to the
                      selected schools upon submission of the student
                      application.
                    </p>
                    <div class="table-responsive">
                      <table class="table table-striped table-hover table-data">
                        <thead class="table-light">
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://ams4youfiles.s3.amazonaws.com/usimgs/aus6807_20221021093340.png"
                                alt="Deniz "
                                class="img-fluid rounded-circle"
                                width="40"
                              />
                            </td>
                            <td>Deniz</td>
                            <td>Developer</td>
                            <td>
                              <span class="badge bg-info fw-normal text-white"
                                >Active</span
                              >
                              <!---->
                            </td>
                            <td>
                              <ul class="nav justify-content-end fs-8">
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#pt-image"
                                    id="pt-up-image"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Change Picture
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#staffedit"
                                    id="st-edit"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Edit Profile
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#pass-change"
                                    id="st-pass"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Change Password
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://ams4youfiles.s3.amazonaws.com/usimgs/aus7062_20221024210325.png"
                                alt="Emir Sarıgüllü"
                                class="img-fluid rounded-circle"
                                width="40"
                              />
                            </td>
                            <td>Emir Sarıgüllü</td>
                            <td>Developer</td>
                            <td>
                              <span class="badge bg-info fw-normal text-white"
                                >Active</span
                              >
                              <!---->
                            </td>
                            <td>
                              <ul class="nav justify-content-end fs-8">
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#pt-image"
                                    id="pt-up-image"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Change Picture
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#staffedit"
                                    id="st-edit"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Edit Profile
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#pass-change"
                                    id="st-pass"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Change Password
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://ams4youfiles.s3.amazonaws.com/usimgs/aus7093_20221028200608.png"
                                alt="Loli"
                                class="img-fluid rounded-circle"
                                width="40"
                              />
                            </td>
                            <td>Loli</td>
                            <td>President</td>
                            <td>
                              <span class="badge bg-info fw-normal text-white"
                                >Active</span
                              >
                              <!---->
                            </td>
                            <td>
                              <ul class="nav justify-content-end fs-8">
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#pt-image"
                                    id="pt-up-image"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Change Picture
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#staffedit"
                                    id="st-edit"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Edit Profile
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <div
                                    data-bs-toggle="modal"
                                    data-bs-target="#pass-change"
                                    id="st-pass"
                                  ></div>
                                  <a class="nav-link" role="button">
                                    Change Password
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="row g-2 my-3">
                      <div class="col-xxl-4 col-xl-4 col-md-6">
                        <div class="card-address">
                          <div class="card-address-header">Bank Name</div>
                          <div class="card-address-body">
                            <ul class="list-unstyled fs-9">
                              <li>
                                <span class="fw-600">Bank Name:</span> Bank Name
                              </li>
                              <li>
                                <span class="fw-600">Bank Address:</span> Bank
                                Address
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
                                <span class="fw-600">Account Name:</span> Main
                                Account
                              </li>
                              <li>
                                <span class="fw-600">Iban:</span>
                                TR4545454484613485445454215
                              </li>
                              <li>
                                <span class="fw-600">Comments:</span> This is a
                                comments
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
                      >
                        <div class="modal-dialog modal-xl">
                          <div class="modal-content">
                            <div class="modal-header modal-header-col">
                              <h5 class="modal-title" id="bankingInformation">
                                Add Bank Information
                              </h5>
                              <p class="fs-7 text-secondary mb-0">
                                If your bank account credentials is not suitable
                                for any of the fields below, you may write it as
                                a comment.
                              </p>
                              <div
                                class="btn-close"
                                data-bs-dismiss="modal"
                                id="bank-close"
                              ></div>
                            </div>
                            <div class="modal-body">
                              <div class="row g-2">
                                <div class="col-md-6">
                                  <div class="form-floating form-floating-fit">
                                    <input
                                      type="text"
                                      maxlength="50"
                                      class="form-control"
                                      id="bankName"
                                      placeholder="Bank Name"
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
                                    />
                                    <label for="instNumber"
                                      >Institution Number</label
                                    >
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
                                    />
                                    <label for="transitNumber"
                                      >Transit Number</label
                                    >
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
                                    />
                                    <label for="accNumber"
                                      >Account Number</label
                                    >
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
                                    ></textarea>
                                    <label for="comments">Comments</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                class="btn btn-primary fs-9 text-white px-3 shadow-line"
                              >
                                <!---->
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="modal modal-action modal-action-confirm modal-animation fade"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        id="deleteBank"
                        tabindex="-1"
                        aria-labelledby="deleteBank"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div class="modal-action-data gap-2">
                                <div class="modal-icon bg-danger bg-opacity-10">
                                  <i
                                    class="vr-ic_fluent_text_bullet_list_square_warning_24_regular text-danger fs-1"
                                  ></i>
                                </div>
                                <div class="modal-text">
                                  <h5 class="modal-text-title fw-600 fs-3">
                                    Warning
                                  </h5>
                                  <p class="mb-0 fs-9">
                                    Are you sure you want to delete this
                                    education?
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-light bg-white fs-9 px-3 shadow-line"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                data-bs-dismiss="modal"
                                class="btn btn-danger fs-9 text-white px-3 shadow-line"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row g-2">
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="text"
                            maxlength="150"
                            class="form-control"
                            id="nameAgency"
                            placeholder="Name of Your Agency"
                            disabled=""
                          />
                          <label for="nameAgency">Name of Your Agency</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="url"
                            maxlength="75"
                            class="form-control"
                            id="websiteAddress"
                            placeholder="Website Address"
                          />
                          <label for="websiteAddress">
                            Website Address <span class="text-danger">*</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="text"
                            oninput="this.value = this.value.replace(/([^+0-9]+)/gi, '')"
                            class="form-control"
                            id="yearFoundation"
                            placeholder="Year of Foundation"
                            maxlength="4"
                          />
                          <label for="yearFoundation">Year of Foundation</label>
                        </div>
                      </div>
                      <!---->
                    </div>
                    <h5 class="fw-600 my-3">Main Contact Person</h5>
                    <div class="row g-2">
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="text"
                            maxlength="150"
                            class="form-control"
                            id="fullName"
                            placeholder="Name Surname"
                          />
                          <label for="fullName">
                            Name Surname <span class="text-danger">*</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="email"
                            class="form-control"
                            id="eMail"
                            placeholder="E-mail"
                            maxlength="150"
                          />
                          <label for="eMail">
                            E-mail <span class="text-danger">*</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="text"
                            oninput="this.value = this.value.replace(/([^+0-9]+)/gi, '')"
                            maxlength="15"
                            class="form-control"
                            id="mobileNumber"
                            placeholder="Mobile Number"
                          />
                          <label for="mobileNumber">
                            Mobile Number <span class="text-danger">*</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <div
                            dir="auto"
                            class="v-select vs--single vs--searchable vs--disabled form-select"
                          >
                            <div
                              id="vs1__combobox"
                              class="vs__dropdown-toggle"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs1__listbox"
                              aria-label="Search for option"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"
                                  >Aruba
                                  <!---->
                                </span>
                                <input
                                  class="vs__search"
                                  disabled=""
                                  aria-autocomplete="list"
                                  aria-labelledby="vs1__combobox"
                                  aria-controls="vs1__listbox"
                                  type="search"
                                  autocomplete="off"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  disabled=""
                                  type="button"
                                  class="vs__clear"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  style=""
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs1__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <label for="country">Country</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="text"
                            class="form-control"
                            id="state"
                            placeholder="State"
                            maxlength="65"
                            disabled=""
                          />
                          <label for="state">State</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-fit">
                          <input
                            type="text"
                            class="form-control"
                            id="city"
                            placeholder="City"
                            maxlength="65"
                            disabled=""
                          />
                          <label for="city">
                            City <span class="text-danger">*</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-12 text-end">
                        <a role="button" class="btn btn-primary px-4">
                          <!---->
                          Save
                        </a>
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
