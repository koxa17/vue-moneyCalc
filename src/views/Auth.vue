<template>
  <div class="auth">
    <div class="auth__left"></div>

    <div class="auth__right">
      <h1 class="auth__right__title">{{login ? "Войдите" : "Зарегистрируйтесь"}}</h1>
      <h2 class="auth__right__subtitle">что-бы продолжить!</h2>

      <Account-form :login="login"/>

      <div class="switch-to-registration">
        <span class="switch-to-registration__title">{{login ? 'Еще нет аккаунта? ' : 'Уже есть аккаунт? '}} </span>
        <button class="switch-to-registration__btn btn-to_link" @click.stop="login = !login">{{login ? 'Регистрация' : 'Войти'}}</button>
      </div>

    </div>
  </div>
</template>

<script>
import AccountForm from '../components/Account-form.vue'
export default {
  name: "Auth",
  components: {
    AccountForm
  },
  data() {
    return {
      login: true
    }
  },
}
</script>

<style lang="scss">
$primary: #03a2ff;
$secondary: #bcdff2;
$gray: #9b9b9b;

.auth {
  height: 100vh;
  display: flex;
  &__left {
    flex-basis: 70%;
    background: #adc7d3 url("../assets/images/bg.jpg") no-repeat center;
    background-size: cover;
  }
  &__right {
    flex-basis: 30%;
    -webkit-box-shadow: -5px 0px 8px -1px rgba(34, 60, 80, 0.21);
    -moz-box-shadow: -5px 0px 8px -1px rgba(34, 60, 80, 0.21);
    box-shadow: -5px 0px 8px -1px rgba(34, 60, 80, 0.21);
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    &__title{
      font-size: 3rem;
    }
    &__subtitle{
      font-size: 2rem;
      margin-bottom: 70px;
    }
  }

  &__form{
    width: 100%;
    margin-bottom: 100px;
    &__inputs {
      margin-bottom: 50px;
    }
    .btn__submit {
      text-transform: uppercase;
      color: black;
      font-size: 18px;
      box-shadow: -1px 5px 8px 0px rgba(34, 60, 80, 0.5);
      border: 1px solid gray;
      &:hover {
        border-color: black;
        cursor: pointer;
      }
      &:active {
        box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.5);
      }
    }
  }
}

@media (max-width: 560px) {
  .auth {
    display: flex;
    flex-direction: column;
  }
  .switch-to-registration {
    padding-bottom: 25px;
  }
}

.sup-functions {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.btn-to_link {
  background: none;
  border: 1px solid transparent;
  font-size: 16px;
  padding: 0;
  margin: 0;
}

.password-recovery{
  &__link {
    color: $primary;
      &:hover{
        cursor: pointer;
        color: black;
        border-bottom-color: gray;
      }
  }
}

.switch-to-registration {
  color: gray;
  font-size: 14px;
  &__btn {
    font-size: 14px;
    cursor: pointer;
    color: $primary;
    text-decoration: underline;
  }
}

.remember-me {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: gray;
  &:hover {
    color: black;
  }
}

/* Hide the browser's default checkbox */
.remember-me input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.remember-me__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid gray;
}

/* On mouse-over, add a grey background color */
.remember-me:hover input ~ .remember-me__checkmark {
  background-color: $secondary;
}

/* When the checkbox is checked, add a blue background */
.remember-me input:checked ~ .remember-me__checkmark {
  background-color: #2196F3;
}

/* Create the remember-me__checkmark/indicator (hidden when not checked) */
.remember-me__checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the remember-me__checkmark when checked */
.remember-me input:checked ~ .remember-me__checkmark:after {
  display: block;
}

/* Style the remember-me__checkmark/indicator */
.remember-me .remember-me__checkmark:after {
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 25px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight:700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}

</style>