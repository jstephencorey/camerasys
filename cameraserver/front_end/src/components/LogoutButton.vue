<template>
    <a @click="logout"><vue-button light=true :label="label"></vue-button></a>
</template>

<script>
import VueButton from "./VueButton.vue";

export default({
    name:"LogoutButton",
    props: {
      label: {required:false, type:String, default:"Log Out"},
    },
    components: {
        VueButton
    },
    methods: {
      logout() {
        console.log("Logging out")
        // this.$auth.logout();
        // this.$router.push({ path: '/' });
      },
    },
})
</script>
