<template>
  <!--tester only
    <div class="row">
      <h2>Test Only if OthersImages Vue is working</h2>
    </div>

  -->
  <div class="container">
    <div class="row">
      <h2>Your Images</h2>
      <router-link tag="p" to="/image/add">
        <a class="btn btn-primary text-center float-right">Upload an Image Now</a>
      </router-link>
    </div>
    <!--error message handling container-->
    <div v-if="userImages" class="row" >
      <div v-if="errors" class="col" >
        <p> <div class="alert alert-danger" > {{ errors }} </div> </p>
    </div>
    <div id="others-images" class="card-columns" >
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
      <!--image display container-->
      <div
        v-for="image in userImages"
        :key="image.id"
        class="card other"
      >
        <picture v-bind:id="'image' + image.id">
          <img v-bind:src = "image.image.path" v-bind:alt="image.description">
        </picture>
        <h5>{{ image.name }}</h5>
        <p>{{ image.description }}</p>
        <button class="btn btn-primary btn-sm" v-on:click="deleteImage(image)">
          Delete this image</button>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
 </div>
</template>
<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'userImages',
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
  },
  data() {
    return {
      apiRequest: new this.$request(),
      userImages: [],
      errors: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  created() {
    const token = token;
    axios
      .get('http://bit703.module6/api/v1/images/user', { headers: { Authorization: `Bearer ${this.token}` } })
      .then((response) => {
        this.userImages = response.data;
        this.errors = '';
        // console.log('UserImages response data here:', response.data);
      })
      .catch((errors) => {
        this.errors = errors;
      });
  },
  methods: {
    deleteImage: function (image) { /* eslint func-names: ["error", "never"] */
      this.$emit('delete-image', image);
      axios.delete('http://bit703.module6/api/v1/users/delete/' + image.id, { headers: { Authorization: `Bearer ${this.token}` } })
      // axios.delete(`http://bit703.module6/api/v1/users/delete/, ${image.id}`, { headers: { Authorization: `Bearer ${this.token}` } })
        .then((response) => {
          const idx = this.userImages.indexOf(image);
          // console.log('index of this image >', idx);
          this.userImages.splice(idx, 1);
          // this.userImages = response.data;
          this.successMessage = response.data;
          this.errorMessage = '';
          // console.log('UserImages response data here:', response.data);
        })
        .catch((errors) => {
          this.errorMessage = errors;
          this.successMessage = '';
        });
    }, // closing deleteImage function
  },
}; // export closing bracket
</script>
