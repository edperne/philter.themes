<template>
  <div>
    <!-- Header -->
    <header id="header">
      <app-header></app-header>
    </header>

    <!-- Content -->
    <section id="layout-content">
      <router-view :key="$route.fullPath"></router-view
      <OthersImages />
    </section>

    <!-- Footer -->
    <footer id="footer">
    <app-footer></app-footer>
    </footer>
  </div>

</template>

<script>
// import your components here
import Header from './partials/header.vue';
import Footer from './partials/footer.vue';
import OthersImages from './components/OthersImages.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    OthersImages,
  },
};
</script>
