<template>
  <div id="main">
      <UserImages />
      <div id="others-images" class="container">
        <div class="row">
            <h2>Other Images</h2>
        </div>
      <OthersImages />
      </div>
  </div>
</template>

<script>
import OthersImages from '@/components/OthersImages.vue';
import UserImages from '@/components/UserImages.vue';

export default {
  name: 'Images',
  components: {
    UserImages,
    OthersImages,
  },
};
</script>
