<template>
  <!--tester only
    <div class="row">
      <h2>Test Only if OthersImages Vue is working</h2>
    </div>

  -->
  <div
    v-if="othersImages"
    class="row"
  >
    <div
      v-if="errors"
      class="col"
    >
      <p />
      <div
        class="alert alert-danger"
      >
        {{ errors }}
      </div>
      </p>
  </div>
    <div
      id="others-images"
      class="card-columns"
    >
      <div
        v-for="image in othersImages"
        :key="image.id"
        class="card other"
      >
        <picture v-bind:id="'image' + image.id">
          <img v-bind:src = "image.image.path" v-bind:alt="image.description">
        </picture>
        <h5>{{ image.name }}</h5>
        <p>{{ image.description }}</p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OthersImages',
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
  },
  created() {
    this.fetchImages();
  },
  data() {
    return {
      apiRequest: new this.$request(),
      othersImages: [],
      errors: '',
    };
  },
  methods: {
    fetchImages() {
      const endpoint = 'images/others';
      this.apiRequest.addStore(this.$store);
      this.apiRequest.getOthers(endpoint)
        .then((response) => {
          // console.log('Others images >>>', response.data);
          this.othersImages = response;
          this.errors = '';
        })
        .catch((errors) => {
          this.errors = errors;
        });
    },
  },
};
</script>
