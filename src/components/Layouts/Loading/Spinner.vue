<script>
// def = default
export default {
  props: {
    type: {
      type: String,
      default: "def",
    },
  },
};
</script>
<template>
  <template v-if="type == 'def'">
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </template>
  <template v-if="type == 'favorite'">
    <div class="row">
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card-program">
          <div
            class="placeholder placeholder-150 placeholder-glow rounded-3 mb-3 col-12"
          ></div>
          <div class="card-program-content placeholder-glow">
            <h5 class="row gap-2 g-0 flex-column">
              <span class="placeholder placeholder-1 col-5 rounded-1"></span>
              <span class="placeholder col-6 rounded-1"></span>
              <span class="placeholder col-9 rounded-1"></span>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card-program">
          <div
            class="placeholder placeholder-150 placeholder-glow rounded-3 mb-3 col-12"
          ></div>
          <div class="card-program-content placeholder-glow">
            <h5 class="row gap-2 g-0 flex-column">
              <span class="placeholder placeholder-1 col-5 rounded-1"></span>
              <span class="placeholder col-6 rounded-1"></span>
              <span class="placeholder col-9 rounded-1"></span>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card-program">
          <div
            class="placeholder placeholder-150 placeholder-glow rounded-3 mb-3 col-12"
          ></div>
          <div class="card-program-content placeholder-glow">
            <h5 class="row gap-2 g-0 flex-column">
              <span class="placeholder placeholder-1 col-5 rounded-1"></span>
              <span class="placeholder col-6 rounded-1"></span>
              <span class="placeholder col-9 rounded-1"></span>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card-program">
          <div
            class="placeholder placeholder-150 placeholder-glow rounded-3 mb-3 col-12"
          ></div>
          <div class="card-program-content placeholder-glow">
            <h5 class="row gap-2 g-0 flex-column">
              <span class="placeholder placeholder-1 col-5 rounded-1"></span>
              <span class="placeholder col-6 rounded-1"></span>
              <span class="placeholder col-9 rounded-1"></span>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card-program">
          <div
            class="placeholder placeholder-150 placeholder-glow rounded-3 mb-3 col-12"
          ></div>
          <div class="card-program-content placeholder-glow">
            <h5 class="row gap-2 g-0 flex-column">
              <span class="placeholder placeholder-1 col-5 rounded-1"></span>
              <span class="placeholder col-6 rounded-1"></span>
              <span class="placeholder col-9 rounded-1"></span>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="card-program">
          <div
            class="placeholder placeholder-150 placeholder-glow rounded-3 mb-3 col-12"
          ></div>
          <div class="card-program-content placeholder-glow">
            <h5 class="row gap-2 g-0 flex-column">
              <span class="placeholder placeholder-1 col-5 rounded-1"></span>
              <span class="placeholder col-6 rounded-1"></span>
              <span class="placeholder col-9 rounded-1"></span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="type == 'accordion'">
    <div class="col-md-12">
      <div class="accordion accordion-match" id="accordionPrograms">
        <div class="card">
          <div class="row g-0 gap-2 placeholder-glow">
            <div class="placeholder col-1 rounded-1"></div>
            <div class="placeholder col-3 rounded-1"></div>
            <div class="placeholder col-3 ms-auto rounded-1"></div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex placeholder-glow gap-4 align-items-center">
                <svg
                  class="placeholder placeholder-wave rounded-4 flex-none"
                  width="120"
                  height="120"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Example extra large rounded image: 75x75"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#0000006b"></rect>
                </svg>
                <div
                  class="row g-0 gap-2 flex-column w-100"
                  style="flex: 1 1 auto"
                >
                  <span class="placeholder col-md-2 col-6 rounded-1"></span>
                  <span class="placeholder col-md-3 col-9 rounded-1"></span>
                  <span class="placeholder col-md-4 col-12 rounded-1"></span>
                  <span class="col-md-4 col-12">
                    <div class="row gap-2 g-0">
                      <span class="placeholder col-md-3 col-3 rounded-1"></span>
                      <span class="placeholder col-md-3 col-3 rounded-1"></span>
                      <span class="placeholder col-md-4 col-6 rounded-1"></span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="type == 'preloader'">
    <div class="spinner">
      <!-- <img src="/assets/images/logo-icon.svg" alt="*" class="img-fluid spinner-logo" /> -->
      <div class="spinner-circle"></div>
    </div>
  </template>
  <template v-if="type == 'dashboard'">
    <div class="row">
      <div class="col-xl-9 col-lg-8 col-md-12 col-12">
        <div
          class="row g-0 gap-2 placeholder-glow justify-content-between mb-2"
        >
          <h3
            class="placeholder placeholder-lg col-4 bg-dark bg-opacity-10 rounded-1"
          ></h3>
          <h3
            class="placeholder placeholder-lg col-1 ms-auto me-2 bg-dark bg-opacity-10 rounded-1"
          ></h3>
          <h3
            class="placeholder placeholder-lg col-1 bg-dark bg-opacity-10 rounded-1"
          ></h3>
        </div>
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="card-program">
              <div
                class="card-favorite-video bg-none placeholder-wave col-12 mb-3"
              >
                <i
                  class="vf-ic_fluent_play_circle_24_filled align-middle placeholder lh-1 rounded-circle bg-secondary bg-opacity-10"
                ></i>
              </div>
              <div class="card-program-content">
                <h5 class="row gap-2 placeholder-wave g-0 flex-column">
                  <span class="placeholder col-5 bg-light"></span>
                  <span class="placeholder col-7 bg-light"></span>
                </h5>
                <span class="col-12">
                  <div class="row gap-2 g-0">
                    <span class="placeholder col-3 bg-light rounded-1"></span>
                    <span class="placeholder col-3 bg-light rounded-1"></span>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="card-program">
              <div
                class="card-favorite-video bg-none placeholder-wave col-12 mb-3"
              >
                <i
                  class="vf-ic_fluent_play_circle_24_filled align-middle placeholder lh-1 rounded-circle bg-secondary bg-opacity-10"
                ></i>
              </div>
              <div class="card-program-content">
                <h5 class="row gap-2 placeholder-wave g-0 flex-column">
                  <span class="placeholder col-5 bg-light"></span>
                  <span class="placeholder col-7 bg-light"></span>
                </h5>
                <span class="col-12">
                  <div class="row gap-2 g-0">
                    <span class="placeholder col-3 bg-light rounded-1"></span>
                    <span class="placeholder col-3 bg-light rounded-1"></span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row g-0 gap-2 placeholder-glow justify-content-between mb-2"
        >
          <h3
            class="placeholder placeholder-lg col-4 bg-dark bg-opacity-10 rounded-1"
          ></h3>
          <h3
            class="placeholder placeholder-lg col-1 ms-auto me-2 bg-dark bg-opacity-10 rounded-1"
          ></h3>
          <h3
            class="placeholder placeholder-lg col-1 bg-dark bg-opacity-10 rounded-1"
          ></h3>
        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-6 col-md-12">
            <div class="card">
              <div class="row d-center">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-4 d-block mx-auto"
                    width="80"
                    height="80"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-lg col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-lg col-8 bg-light rounded-1"
                    ></span>
                    <div class="row gap-2">
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-12">
            <div class="card">
              <div class="row d-center">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-4 d-block mx-auto"
                    width="80"
                    height="80"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-lg col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-lg col-8 bg-light rounded-1"
                    ></span>
                    <div class="row gap-2">
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-12">
            <div class="card">
              <div class="row d-center">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-4 d-block mx-auto"
                    width="80"
                    height="80"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-lg col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-lg col-8 bg-light rounded-1"
                    ></span>
                    <div class="row gap-2">
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row g-0 gap-2 placeholder-glow justify-content-between mb-2"
        >
          <h3
            class="placeholder placeholder-lg col-4 bg-dark bg-opacity-10 rounded-1"
          ></h3>
          <h3
            class="placeholder placeholder-lg col-1 ms-auto me-2 bg-dark bg-opacity-10 rounded-1"
          ></h3>
          <h3
            class="placeholder placeholder-lg col-1 bg-dark bg-opacity-10 rounded-1"
          ></h3>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-6 col-md-12">
            <div class="card">
              <div class="row d-center">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-1 d-block mx-auto"
                    width="50"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-md col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-md col-8 bg-light rounded-1"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12">
            <div class="card">
              <div class="row d-center">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-1 d-block mx-auto"
                    width="50"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-md col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-md col-8 bg-light rounded-1"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12">
            <div class="card">
              <div class="row d-center">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-1 d-block mx-auto"
                    width="50"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-md col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-md col-8 bg-light rounded-1"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12">
            <div class="card">
              <div class="row d-center">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-1 d-block mx-auto"
                    width="50"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-md col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-md col-8 bg-light rounded-1"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-12 col-12">
        <div
          class="row g-0 gap-2 placeholder-glow justify-content-between mb-2"
        >
          <h3
            class="placeholder placeholder-lg col-8 bg-dark bg-opacity-10 rounded-1"
          ></h3>
        </div>
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card">
              <svg
                class="placeholder placeholder-wave bg-light rounded-5 d-block mx-auto"
                width="120"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Example extra large rounded image: 75x75"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#eeeeee"></rect>
              </svg>
              <div class="row gap-3 g-0 justify-content-center">
                <span
                  class="placeholder placeholder-xl col-3 bg-light rounded-1"
                ></span>
                <span
                  class="placeholder placeholder-xl col-3 bg-light rounded-1"
                ></span>
                <span
                  class="placeholder placeholder-xl col-3 bg-light rounded-1"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row g-0 gap-2 placeholder-glow justify-content-between mb-2"
        >
          <h3
            class="placeholder placeholder-lg col-8 bg-dark bg-opacity-10 rounded-1"
          ></h3>
        </div>
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card">
              <div class="row">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-circle d-block mx-auto"
                    width="70"
                    height="70"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-lg col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-lg col-8 bg-light rounded-1"
                    ></span>
                    <div class="row gap-2">
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-circle d-block mx-auto"
                    width="70"
                    height="70"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-lg col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-lg col-8 bg-light rounded-1"
                    ></span>
                    <div class="row gap-2">
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div class="col-3">
                  <svg
                    class="placeholder placeholder-wave bg-light rounded-circle d-block mx-auto"
                    width="70"
                    height="70"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Example extra large rounded image: 75x75"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#eeeeee"></rect>
                  </svg>
                </div>
                <div class="col-9">
                  <div class="row gap-1 g-0 flex-column">
                    <span
                      class="placeholder placeholder-lg col-5 bg-light rounded-1"
                    ></span>
                    <span
                      class="placeholder placeholder-lg col-8 bg-light rounded-1"
                    ></span>
                    <div class="row gap-2">
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                      <span
                        class="placeholder placeholder-lg col-3 bg-light rounded-1"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="type == 'announcement'">
    <div class="row">
      <div class="col-xl-3 col-lg-4">
        <div class="card card-skeleton d-flex flex-row placeholder-glow">
          <svg
            class="placeholder rounded-3 flex-none"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="currentColor"></rect>
          </svg>
          <div class="placeholder-content w-100">
            <div class="placeholder placeholder-3 rounded-1 d-block"></div>
          </div>
        </div>
        <div class="card card-skeleton d-flex flex-row placeholder-glow">
          <svg
            class="placeholder rounded-3 flex-none"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="currentColor"></rect>
          </svg>
          <div class="placeholder-content w-100">
            <div class="placeholder placeholder-3 rounded-1 d-block"></div>
          </div>
        </div>
        <div class="card card-skeleton d-flex flex-row placeholder-glow">
          <svg
            class="placeholder rounded-3 flex-none"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="currentColor"></rect>
          </svg>
          <div class="placeholder-content w-100">
            <div class="placeholder placeholder-3 rounded-1 d-block"></div>
          </div>
        </div>
      </div>
      <div class="col-xl-9 col-lg-8">
        <div class="card placeholder-glow">
          <div class="row gap-2 g-0">
            <div class="col-2 placeholder placeholder-xl rounded-1"></div>
            <div class="col-2 placeholder placeholder-xl rounded-1"></div>
          </div>
          <div class="row gap-2 g-0">
            <div class="col-8 placeholder placeholder-xxl rounded-1"></div>
          </div>
          <div class="placeholder placeholder-5 rounded-1"></div>
        </div>
        <div class="card placeholder-glow">
          <div class="row gap-2 g-0">
            <div class="col-2 placeholder placeholder-xl rounded-1"></div>
            <div class="col-2 placeholder placeholder-xl rounded-1"></div>
          </div>
          <div class="row gap-2 g-0">
            <div class="col-8 placeholder placeholder-xxl rounded-1"></div>
          </div>
          <div class="placeholder placeholder-5 rounded-1"></div>
        </div>
        <div class="card placeholder-glow">
          <div class="row gap-2 g-0">
            <div class="col-2 placeholder placeholder-xl rounded-1"></div>
            <div class="col-2 placeholder placeholder-xl rounded-1"></div>
          </div>
          <div class="row gap-2 g-0">
            <div class="col-8 placeholder placeholder-xxl rounded-1"></div>
          </div>
          <div class="placeholder placeholder-5 rounded-1"></div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="type == 'message-item'">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card placeholder-glow">
          <div class="row g-5">
            <div class="col-2">
              <svg
                class="placeholder rounded-circle d-block mx-auto"
                width="50"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Example extra large rounded image: 75x75"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#eeeeee"></rect>
              </svg>
            </div>
            <div class="col-10">
              <div
                class="row gap-2 h-100 d-flex align-items-strech justify-content-start"
              >
                <span
                  class="placeholder placeholder-sm col-6 bg-light rounded-1"
                ></span>
                <span
                  class="placeholder placeholder-sm col-7 bg-light rounded-1"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="card placeholder-glow">
          <div class="row g-5">
            <div class="col-2">
              <svg
                class="placeholder rounded-circle d-block mx-auto"
                width="50"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Example extra large rounded image: 75x75"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#eeeeee"></rect>
              </svg>
            </div>
            <div class="col-10">
              <div
                class="row gap-2 h-100 d-flex align-items-strech justify-content-start"
              >
                <span
                  class="placeholder placeholder-sm col-6 bg-light rounded-1"
                ></span>
                <span
                  class="placeholder placeholder-sm col-7 bg-light rounded-1"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="card placeholder-glow">
          <div class="row g-5">
            <div class="col-2">
              <svg
                class="placeholder rounded-circle d-block mx-auto"
                width="50"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Example extra large rounded image: 75x75"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#eeeeee"></rect>
              </svg>
            </div>
            <div class="col-10">
              <div
                class="row gap-2 h-100 d-flex align-items-strech justify-content-start"
              >
                <span
                  class="placeholder placeholder-sm col-6 bg-light rounded-1"
                ></span>
                <span
                  class="placeholder placeholder-sm col-7 bg-light rounded-1"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="type == 'chat'">
    <div class="card">
      <div class="row g-0 gap-2 placeholder-glow">
        <div class="placeholder placeholder-2 col-4 rounded-1"></div>
        <div class="placeholder placeholder-2 col-2 ms-auto rounded-1"></div>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex placeholder-glow gap-4 align-items-center">
            <svg
              class="placeholder placeholder-wave bg-light rounded-circle flex-none"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Example extra large rounded image: 75x75"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#eeeeee"></rect>
            </svg>
            <div class="row g-0 gap-2 flex-column w-100" style="flex: 1 1 auto">
              <span class="placeholder col-md-2 col-6 rounded-1"></span>
              <span class="placeholder col-md-3 col-9 rounded-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card direct-rtl">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex placeholder-glow gap-4 align-items-center">
            <svg
              class="placeholder placeholder-wave bg-light rounded-circle flex-none"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Example extra large rounded image: 75x75"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#eeeeee"></rect>
            </svg>
            <div class="row g-0 gap-2 flex-column w-100" style="flex: 1 1 auto">
              <span class="placeholder col-md-2 col-6 rounded-1"></span>
              <span class="placeholder col-md-3 col-9 rounded-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex placeholder-glow gap-4 align-items-center">
            <svg
              class="placeholder placeholder-wave bg-light rounded-circle flex-none"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Example extra large rounded image: 75x75"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#eeeeee"></rect>
            </svg>
            <div class="row g-0 gap-2 flex-column w-100" style="flex: 1 1 auto">
              <span class="placeholder col-md-2 col-6 rounded-1"></span>
              <span class="placeholder col-md-3 col-9 rounded-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card direct-rtl">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex placeholder-glow gap-4 align-items-center">
            <svg
              class="placeholder placeholder-wave bg-light rounded-circle flex-none"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Example extra large rounded image: 75x75"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#eeeeee"></rect>
            </svg>
            <div class="row g-0 gap-2 flex-column w-100" style="flex: 1 1 auto">
              <span class="placeholder col-md-2 col-6 rounded-1"></span>
              <span class="placeholder col-md-3 col-9 rounded-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
