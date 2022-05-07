<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid justify-content-xl-around">
        <router-link class="navbar-brand navbar-logo-title" to="/">К<img src="../assets/images/logo.png" alt="" width="30">шелек </router-link>
        <div id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <div class="btn-group">
                <button type="button" class="btn dropdown-toggle nav__user-btn d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" aria-expanded="false" id="dropDownUserMenu">
                  <div class="circle__avatar">
                    <img src="../assets/images/avatar.png" alt="" class="avatar__img">
                  </div>
                  {{ currentUser.name }}
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropDownUserMenu">
                  <li><div class="dropdown-header">{{ currentUser.email }}</div></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><button class="dropdown-item" type="button" @click="logout">Выход</button></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container" id="container">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { firebaseLogout } from "../api/auth";

export default {
  name: "page",
  data(){
    return {
      user: null
    }
  },
  methods: {
    ...mapGetters([
      'GET_CURRENT_USER'
    ]),
    ...mapActions([
      'LOG_OUT',
    ]),
    async logout() {
      await this.LOG_OUT()
      this.$router.push('/auth')
    }
  },
  computed: {
    currentUser() {
      debugger;
      return this.GET_CURRENT_USER()
    }
  }
}
</script>

<style scoped>
.container {
  min-width: 250px;
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 10px;
}

.navbar{
  background: white;
  box-shadow: 0px -13px 25px 0px;
  min-width: 250px;
}

.navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-logo-title {
  font-size: 3rem;
}

@media(max-width: 560px) {
  .navbar-logo-title {
    font-size: 2rem;
  }
}

.nav__user-btn {
  background: none;
}

.circle__avatar {
  width: 50px;
  height: 50px;
  margin: 0 10px;
}

.avatar__img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

.nav__user-btn[aria-expanded="false"].dropdown-toggle::after {
  transition: transform .3s;
}

.nav__user-btn[aria-expanded="true"].dropdown-toggle::after {
  transition: transform .3s;
  transform: rotate(180deg);
}

</style>