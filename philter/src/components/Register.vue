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
            v-model="apiRequest.email" maxlength="50" required
            class="form-control" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input id="password" type="password" name="password"
            placeholder="Choose a password" v-model="apiRequest.password"
            minlength="8" maxlength="50" required
            class="form-control" />
        </div>
        <div class="form-group">
            <label>Re-enter password</label>
            <input id="password_confirmation" type="password" name="password_confirmation"
            placeholder="Confirm your password" v-model="apiRequest.password_confirmation"
            minlength="8" maxlength="50" required
            class="form-control" />
        </div>
        <input class="btn btn-primary" name="submit"  type ="submit" value="Register" />
        <input type="hidden" name="_handler" value="register">
    </form>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

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
      Swal.fire({
        title: 'Welcom to Philter',
        text: 'Please confirm new registration',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I would like to register!',
      }).then((result) => {
        if (result.value) {
          const endpoint = 'registerUser';
          this.apiRequest.addStore(this.$store);
          this.apiRequest.post(endpoint)
            .then((response) => {
              this.successMessage = response;
              this.errorMessage = '';
              this.$router.push('/images');
              // console.log(response);
            })
            .catch((errors) => {
              this.errorMessage = errors;
              this.successMessage = '';
              // console.log("error message is",this.successMessage);
            }); // catch error closing brackets
          Swal.fire(
            'You are now registered',
            'Please upload new images to your account.',
            'success',
          );
        }
      });
    }, // closing bracket for register user
  }, // closing bracket for methods()
}; // closing bracket for export()
</script>
