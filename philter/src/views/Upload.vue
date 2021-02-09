<template>
  <div id="main">
      <div class="container">
        <div class="row">
            <h2>Add An Image</h2>
        </div>
      </div>
      <AddImage />
  </div>
</template>

<script>
import AddImage from '@/components/AddImage.vue';

export default {
  name: 'Upload',
  components: {
    AddImage,
    // OthersImages,
    
  },
};
</script>
