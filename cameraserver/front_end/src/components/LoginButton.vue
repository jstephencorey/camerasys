<template>
    <a @click="login"> <vue-button light=true :label="label"></vue-button> </a>
</template>

<script>
import VueButton from "./VueButton.vue";

export default({
    name:"LoginButton",
    props: {
      label: {required:false, type:String, default: "Log In"},
    },
    components: {
        VueButton
    },
    methods: {
      async login() {
        // await this.$auth.loginWithRedirect();
        alert();
      },
    },
})
</script>
