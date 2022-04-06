<template>
<div class="header">
    <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Titillium+Web:wght@200;400&display=swap" rel="stylesheet">
    <nav class="navbar">
        <router-link to="/" class="navbar-logo logo"><img src="/assets/eye_logo.png" class="logo-image-main" alt="Logo"></router-link>
        <div class="auth-button-area">
            <!-- <a href="/pages/login.html"><button class="auth-button login-menu-button" type="Login">Log in</button></a>
            <a href="/pages/register.html"><button class="auth-button register-menu-button" type="Register">Sign up</button></a> -->
            <authentication-button/>
            <!-- <login-button label="LOGIN"/>
            <logout-button label="LOGOUT"/> -->
            <!-- <vue-button linkTo="/register" label="Sign Up"></vue-button> -->
            <signup-button label="Sign Up"/>
        </div>
    </nav>
  </div>
</template>


<script>
import AuthenticationButton from './AuthenticationButton.vue'
import SignupButton from './SignupButton.vue'
export default {
    name:'HorizHeader',
    components:{
        AuthenticationButton,
        SignupButton,
    }
}
</script>


<style scoped>

/* Header */
.logo-image-main {
    width: 8rem;
    height: 4em;
}

.logo {
    display: flex;
    justify-content: center;
    margin: .7rem;
}

.logo-image {
    width: 5rem;
    height: 2.5rem;
}

.auth-button-area {
    /* justify-items: right; */
    margin: 1rem;
}

.navbar{
    /* justify-items: right; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--primary-color-dark);
    background: var(--gradient-background);
    box-shadow: .3rem .3rem 1rem .1rem rgba(0, 0, 0, .3);
}

button {
    background-color: var(--primary-color-light);
    border: 0rem;
    color: var(--primary-color-very-dark);
    padding: .7rem;
    border-radius: .7em;
    text-decoration: none;
    font-size: 1rem;
    margin: .2rem;
    user-select: none;
    box-shadow: .3rem .3rem 1rem .1rem rgba(0, 0, 0, .3);
}

.register-menu-button {
    background: var(--primary-color-dark);
    color: var(--project-white);
}

.register-menu-button:hover {
    background: var(--primary-color-very-dark);
}

.login-menu-button {
    background: var(--primary-color-light);
    color: var(--primary-color-very-dark);
    border: var(--primary-color-dark) .1rem solid;
}

.login-menu-button:hover {
    background: var(--primary-color);
}
.auth-button {
    box-shadow: .05rem .05rem .5rem .01rem rgba(0, 0, 0, .2);
}
</style>