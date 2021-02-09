<template>
  <div>
    <div class="container-fluid">
        <nav id="menu" class="navbar navbar-expand-md navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false"
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-navbar">
                <ul class="navbar-nav ml-md-auto">
                    <router-link tag="li" to="/">
                        <a>Home</a>
                    </router-link>
                    <router-link tag="li" to="/images">
                        <a>Images</a>
                    </router-link>
                    <router-link v-show="user" tag="li" to="/account">
                        <a>Welcome</a>
                    </router-link>
                    <router-link tag="li" to="/account">
                        <a>Login</a>
                    </router-link>
                    <router-link tag="li" to="/account">
                        <a>Register</a>
                    </router-link>
                    <li><a href="#" v-on:click.prevent="logout"
                    v-show="user">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</div>
</template>
<<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  name: 'logout',
  computed: {
    user () {
      return this.$store.getters.isLoggedIn;
      // console.log(user); lisa
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      Swal.fire('You are now logged out!', 'See you later!', 'OK');
    },
  },
};
</script>
