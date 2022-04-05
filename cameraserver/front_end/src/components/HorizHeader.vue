<template>
<div class="header">
    <nav class="navbar-light">]
            <a class="navbar-brand logo" href="/"><img src="/assets/eye_logo.png" class="logo-image-main" alt="Logo"></a>
            <div>
                <a href="/pages/login.html"><button class="btn login-menu-button" type="Login">Log in</button></a>
                <a href="/pages/register.html"><button class="btn register-menu-button" type="Register">Sign up</button></a>
            </div>
    </nav>
  </div>
</template>


<style scoped>

/* Header */
.logo-image-main {
    width: 8rem;
    height: 4em;
}

.logo-image {
    width: 8rem;
    height: 4em;
}

.logo {
    display: flex;
    justify-content: center;
    margin: 0rem;
}

.navbar-brand .logo-image {
    width: 5rem;
    height: 2.5rem;
}

.navbar-light {
    background-color: var(--primary-color-dark);
    background: var(--gradient-background);
    box-shadow: .3rem .3rem 1rem .1rem rgba(0, 0, 0, .3);
}

.button {
    background-color: var(--primary-color-light);
    border: 0rem;
    color: var(--primary-color-very-dark);
    padding: .3rem;
    border-radius: .7em;
    text-decoration: none;
    font-size: 1.7rem;
    margin: 0rem;
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
.btn {
    box-shadow: .05rem .05rem .5rem .01rem rgba(0, 0, 0, .2);
}
</style>