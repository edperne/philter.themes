<template>
  <div class=container>
    <div class="row">
      <h3>Register</h3>
    </div> <!--row -->
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
    <form @submit.prevent="registerUser">
        <div class="form-group">
            <label>Full Name</label>
            <input id="name" type="text" name="name" placeholder="Enter your full name"
            maxlength="50" required v-model="apiRequest.name" 
            class="form-control" />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input id="email" type="email" name="email" placeholder="Enter your email"
            v-model="apiRequest.email"
            class="form-control" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input id="password" type="password" name="password"
            placeholder="Choose a password" v-model="apiRequest.password"
            class="form-control" />
        </div>
        <div class="form-group">
            <label>Re-enter password</label>
            <input id="password_confirmation" type="password" name="password_confirmation"
            placeholder="Confirm your password" v-model="apiRequest.password_confirmation"
            class="form-control" />
        </div>
        <input class="btn btn-primary" name="submit"  type ="submit" value="Register" />
        <input type="hidden" name="_handler" value="register">
    </form>
  </div>
</template>
<script>
export default {
  name: 'Register',

  data() {
    return {
      apiRequest: new this.$request({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }),
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    registerUser() {
      const endpoint = 'registerUser';
      this.apiRequest.addStore(this.$store);
      this.apiRequest.post(endpoint)
        .then((response) => {
          this.successMessage = response;
          this.errorMessage = '';
          console.log(response);
        })
      
        .catch((errors) => {
          this.errorMessage = errors;
          this.successMessage = '';
          console.log("error message is",this.successMessage);
          
       //	.catch(onrejected:error => {
	       //     console.log(error.response);
        //** atempt to get the response payload error message - TODO
        //.catch((error) => {
        // if request is bad, show an error to the user provided by the server
        // api issue with axios, quick fix add extra response object
          // if (error.response) {
            //dispatch(authError(response.response.data.error));
            //console.log(response.response.data.error); // => the response payload 
          //}
        }); //catch error closing brackets
     },
  },
};
</script>
