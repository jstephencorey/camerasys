<template>
  <div id="app">
    <title>Surveil</title>
    <div class="content">
      <router-view />
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueFooter from './components/VueFooter.vue';

export default ({
  name:'App',
  components:{
    VueFooter,
  }
})
</script>


<style>
:root {
    --primary-color: #2f86d8;
    --primary-color-dark: #014c8d;
    --primary-color-light: #a9cef0;
    --primary-color-very-dark: #020024;
    --secondary-color-dark: #c97c00;
    --secondary-color-light: #ebd4af;
    /* --secondary-color-dark: #7c2b00;
    --secondary-color-light: #fae4d9; */
    --project-white: #f5f5f5;
    --gradient-background: linear-gradient(330deg, var(--primary-color-very-dark) 0%, var(--primary-color-dark) 66%, var(--primary-color) 100%);
}

* {
    font-family: 'Titillium Web', sans-serif;
    font-size: 13pt;
    margin: 0rem;
    padding: 0rem;
    box-sizing: border-box;
}

html,
body {
    margin: 0px;
    height: 100%;
    background-image: var(--gradient-background);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: block;
}

.link {
    color: var(--primary-color-very-dark);
    text-decoration: underline;
}

.link:hover {
    color: var(--primary-color-dark);
}
</style>
