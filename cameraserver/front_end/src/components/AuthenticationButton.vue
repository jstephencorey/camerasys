<template>
    <!-- <logout-button v-if="$auth.isAuthenticated" label="Log Out" /> -->
    <logout-button v-if="true" label="Log Out" />
    <login-button v-else label="Log In" />
</template>

<script>
  import LoginButton from '@/components/LoginButton';
  import LogoutButton from '@/components/LogoutButton';

  export default {
    name: 'AuthenticationButton',
    components: { LogoutButton, LoginButton },
  };
</script>