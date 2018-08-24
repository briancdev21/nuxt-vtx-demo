<template>
  <div>
    <div class="container is-fluid is-flex wallet-background is-centered has-text-centered">
      <div class="main-section has-text-white">
        <div class="welcome-section is-size-1">WELCOME TO</div>
        <div class="logo p-b-sm">
          <img src="~/assets/img/verto-logo-white.png" >
          <div class="is-size-5 has-text-weight-bold is-uppercase has-text-right">BY VOLENTIX</div>
        </div>
        <div class="p-t-md p-b-lg">{{ subtitle_message }}</div>
        <div>{{ join_message }}</div>
      </div>
      <div class="create-wallet-btn-wrapper" >
        <a class="button is-primary is-fullwidth create-wallet-btn">Create Your Wallet</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subtitle_message:
        "Verto is your gateway to Volentix, with Verto, you can purchase VTX, the native token of the Volentix ecosystem.",
      join_message: "We're glad you've joined us."
    };
  }
};
</script>

<style scoped>
.wallet-background {
  height: 100vh;
  background-image: url(~/assets/img/wallet-bg.jpeg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-items: center;
}

/* Welcome Box Style */
.main-section {
  padding: 15px 10px 35px;
  background: rgba(41, 41, 41, 0.3);
  margin: 0 25px;
  border-radius: 3px;
  align-items: center;
}
.main-section .welcome-section {
  text-transform: uppercase;
}
.main-section .logo {
  padding-right: 40px;
  padding-left: 40px;
  max-width: 320px;
  margin: auto;
}
.main-section .logo img {
  width: 100%;
}
.main-section .logo div {
  color: #97a4b2;
  margin-top: -8px;
  padding: 0 8px;
}

/* Create Wallet Button Style  */
.create-wallet-btn-wrapper {
  position: fixed;
  bottom: 50px;
  padding: 0 25px;
  width: 100%;
}
.create-wallet-btn {
  padding-top: 25px;
  padding-bottom: 28px;
  border-radius: 10px;
  font-size: 14px;
  background-color: #00a5a5;
}
</style>
