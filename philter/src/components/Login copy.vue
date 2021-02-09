<template>
  <div>
    <h3>Sign in</h3>
    <div
      v-if="errorMessage"
      class="row"
    >
      <p />
      <div
        class="alert alert-danger"
      >
        {{ errorMessage }}
      </div>
      </p>
    </div>
    <div
      v-if="successMessage"
      class="row"
    >
      <p />
      <div
        class="alert alert-success"
      >
        {{ successMessage }}
      </div>
      </p>
    </div>
    <form @submit.prevent="OnLogin">
      <div class="form-group">
        <label for="userSigninLogin">Email</label>
        <input
          id="userSigninLogin"
          v-model="apiRequest.login"
          name="login"
          type="text"
          placeholder="Enter your email"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <label for="userSigninPassword">Password</label>
        <input
          id="userSigninPassword"
          v-model="apiRequest.password"
          name="password"
          type="password"
          placeholder="Enter your password"
          class="form-control"
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiRequest: new this.$request({
        login: '',
        password: '',
      }),
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    OnLogin() {
      this.apiRequest.addStore(this.$store);
      this.apiRequest.post('login')
        .then((response) => {
          this.successMessage = response;
          this.errorMessage = '';
        })
        .catch((errors) => {
          this.errorMessage = errors;
          this.successMessage = '';
        });
    },
  },
};
</script>
