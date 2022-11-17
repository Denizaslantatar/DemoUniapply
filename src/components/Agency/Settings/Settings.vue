<script>
// This is Setting Home Page
import SettingSidebar from "./SettingSidebar.vue";
export default {
  components: { SettingSidebar },
  mounted() {
    this.$store.dispatch("ASettingMod/GetBankList");
  },
};
</script>
<template>
  <main>
    <section id="settings">
      <div class="container">
        <div class="row">
          <SettingSidebar />
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
                    <router-view />
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
