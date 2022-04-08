<template>
    <a @click="signup"> <vue-button :label="label"></vue-button> </a>
</template>

<script>
import VueButton from './VueButton.vue'
  export default {
    name: 'SignupButton',
    props: {
      label: {required:false, type:String, default:"Sign Up"},
    },
    methods: {
      signup() {
        // this.$auth.loginWithRedirect({
        //   screen_hint: 'signup',
        // });
        window.location.assign('/notFound');
      },
    },
    components: {
        VueButton,
    }
  };
</script>