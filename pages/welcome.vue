<template>
  <section class="hero is-fullheight wallet-background">
    <div class="hero-head">
      <div class="container is-invisible">
        <div class="level is-mobile p-lg">
          <div class="level-item has-text-centered is-marginless">
            <a class="p-t-lg p-b-lg button is-fullwidth is-primary">&nbsp;</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body is-paddingless">
      <div class="container p-l-lg p-r-lg has-text-centered">
        <div class="box has-text-white is-radiusless is-shadowless">
          <div class="is-size-1">WELCOME TO</div>
          <div class="logo p-b-sm p-l-lg p-r-lg">
            <img src="~/assets/img/white-logo-with-text.png" >
          </div>
          <div class="p-t-md p-b-lg is-size-5">{{ subtitle_message }}</div>
          <div class="is-size-5 p-b-sm">{{ join_message }}</div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container p-b-md">
        <div class="level is-mobile p-lg">
          <div class="level-item has-text-centered is-marginless">
            <a class="p-t-lg p-b-lg button is-fullwidth is-primary" @click="goToTerms" >Create Your Wallet</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      subtitle_message:
        "Verto is your gateway to Volentix, with Verto, you can purchase VTX, the native token of the Volentix ecosystem.",
      join_message: "We're glad you've joined us."
    };
  },
  methods: {
    goToTerms: function() {
      console.log("terms:", this);
      this.$router.push({ path: "terms_conditions" });
    }
  }
};
</script>

<style scoped>
.wallet-background {
  height: 100vh;
  background-image: url(~/assets/img/wallet-bg.jpeg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.box {
  background-color: rgba(0, 0, 0, 0.42);
}
.button {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.5rem;
}
.logo img {
  width: 100%;
  max-width: 320px;
}
</style>
