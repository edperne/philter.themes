<template>
 <div class="container">
  <div class="row">
    <form @submit.prevent="addImage"  enctype="multipart/form-data">
        <div class="form-group">
            <label>Name</label>
            <input type="text" name="title" class="form-control"
            v-model="apiRequest.name" maxlength="50"> 
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" name="description" class="form-control"
            v-model="apiRequest.description" maxlength="100">
        </div>
        <div class="form-group">
            <label>Tag - add a comma after each tag.</label>
            <input type="text" name="tag" class="form-control"
            v-model="apiRequest.tag" maxlength="100">
        </div>
        <div class="form-group">
            <label>Filter</label>
            <select v-model = "apiRequest.filter"
            name="filter" class="custom-select">
                <option value="_1977">1977</option>
                <option value="aden">Aden</option>
                <option value="brannan">Brannan</option>
                <option value="brooklyn">Brooklyn</option>
                <option value="clarendon">Clarendon</option>
                <option value="earlybird">Earlybird</option>
                <option value="gingham">Gingham</option>
                <option value="hudson">Hudson</option>
                <option value="inkwell">Inkwell</option>
                <option value="kelvin">Kelvin</option>
                <option value="lark">Lark</option>
                <option value="lofi">Lo-Fi</option>
                <option value="maven">Maven</option>
                <option value="mayfair">Mayfair</option>
                <option value="moon">Moon</option>
                <option value="nashville">Nashville</option>
                <option value="perpetua">Perpetua</option>
                <option value="reyes">Reyes</option>
                <option value="rise">Rise</option>
                <option value="slumber">Slumber</option>
                <option value="stinson">Stinson</option>
                <option value="toaster">Toaster</option>
                <option value="valencia">Valencia</option>
                <option value="walden">Walden</option>
                <option value="willow">Willow</option>
                <option value="xpro2">X-pro II</option>
            </select>
        </div>
        <div id="image-upload" class="form-group">
            <label>Image</label>
            <input type="file" @change="onUpload" ref="fileHandle"
            class="input-file" name="file" accept="image/*" required>
        </div>
        <input class="btn btn-primary" name="submit"  type ="submit" value="Submit">
         <input type="hidden" name="_handler" value="addImage">
    </form>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  name: 'AddImage',
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
  },
  data() {
    return {
      apiRequest: new this.$request({
        name: '',
        description: '',
        tag: '',
        filter: '',
        file: '',
      }),
      errorMessage: '',
      successMessage: '',
      // fileHandle: '',
    };
  },
  methods: {
    addImage() {
      Swal.fire({
        title: 'Are you sure?',
        text: "A new image will be added to your account!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add a new image!'
      }).then((result) => {
        if (result.value) {
          const endpoint = 'addImage';
          this.apiRequest.addStore(this.$store);
          this.apiRequest.upload(endpoint)
            .then((response) => {
              this.successMessage = response.data;
              this.errorMessage = '';
              this.$router.push('/images');

            })
            .catch((errors) => {
              this.errorMessage = errors;
              // this.successMessage = '';
            });
            Swal.fire(
            'Uploaded!',
            'New image has been added.',
            'success'
            )
        }
      });
    },

         
    onUpload(event) {
      const fileHandle = event.target.files[0];
      this.apiRequest.file = this.$refs.fileHandle.files[0];
      console.log('this is the file data >>>', fileHandle);
    },

  }, // method close bracket
}; // export default close bracket
</script>
