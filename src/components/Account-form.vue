<template>
  <form class="auth__form" @submit.prevent="sendForm(login)">
    <div class="auth__form__inputs">

      <div v-if="login">
        <div class="form__group field">
          <input type="email" class="form__field" placeholder="Email" name="name" id='formSingIn__email'
                 v-model="formSingIn.email" required/>
          <label for="email" class="form__label">Email</label>
        </div>

        <div class="form__group field">
          <input type="password" class="form__field" placeholder="Пароль" name="name" id='formSingIn__password'
                 v-model="formSingIn.password" required/>
          <label for="password" class="form__label">Пароль</label>
        </div>

        <div class="sup-functions">
          <label class="remember-me">Запомнить меня!
            <input type="checkbox" name="remember" class="remember-me__btn">
            <span class="remember-me__checkmark"></span>
          </label>

          <div class="password-recovery">
            <button class="password-recovery__link btn-to_link">Забыли пароль?</button>
          </div>
        </div>
      </div>

      <div v-else-if="!login">
        <div class="form__group field">
          <input type="text" class="form__field" name="name" id='name' v-model="formSingUp.name"
                 required/>
          <label for="name" class="form__label">Ваше имя</label>
        </div>

        <div class="form__group field">
          <input type="email" class="form__field" placeholder="Email" name="email" id='email' v-model="formSingUp.email"
                 required/>
          <label for="email" class="form__label">Email</label>
        </div>

        <div class="form__group field">
          <input type="password" class="form__field" placeholder="Пароль" name="password" id='password'
                 v-model="registerPassword.password" required/>
          <label for="password" class="form__label">Пароль</label>
        </div>

        <div class="form__group field">
          <input type="password" class="form__field" placeholder="Пароль" name="check-password" id='check-password'
                 v-model="registerPassword.repeat_password" required/>
          <label for="check-password" class="form__label">Повторите пароль</label>
        </div>
      </div>
    </div>

    <button class="btn btn__submit" :class="classBtn">{{ login ? 'Войти' : 'Зарегистрироваться' }}</button>

  </form>
</template>

<script>
import {mapActions} from "vuex";
import notifications from "../api/notifications";

export default {
  name: "Account",
  props: {
    login: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      formSingIn: {
        email: '',
        password: '',
        remember: false
      },
      formSingUp: {
        email: '',
        name: '',
        password: ''
      },
      registerPassword: {
        password: '',
        repeat_password: '',
      }
    }
  },
  methods: {
    ...mapActions([
      'SIGN_IN',
        'REGISTER'
    ]),
    async sendForm(login) {
      if (login) {
        try {
          await this.SIGN_IN(this.formSingIn)
          await this.$router.push({path: '/'})
        } catch (e) {}
      }

      if(!login) {
        try {
          if (this.checkRegisterPassword()){
            await this.REGISTER(this.formSingUp)
            await this.$router.push({path: '/'})
          }
        } catch (e) {}
      }
    },
    checkRegisterPassword() {
      if (this.registerPassword.password === this.registerPassword.repeat_password) {
        this.formSingUp.password = this.registerPassword.password
        return true
      } else {
        notifications('error', 'Пароли не совпадают!')
      }
      return false
    }
  },
  computed: {
    classBtn() {
      return {
        'btn-gradient-color-login ': this.login,
        'btn-gradient-color-registr': !this.login
      }
    },
  },
  watch() {

  },
}
</script>

<style lang="scss">
$primary: #03a2ff;
$secondary: #bcdff2;

.btn-gradient-color-login {
  background: linear-gradient(to right, $primary, $secondary) !important;
}

.btn-gradient-color-registr {
  background: linear-gradient(to right, $secondary, $primary) !important;
}
</style>