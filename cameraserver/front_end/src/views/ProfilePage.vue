<template>
  <div>
    <side-menu />
    <page-title title="Profile" />
    <div class="profile-area">
      <div class="profile-header">
        <img
          :src="$auth.user.picture"
          alt="User's profile picture"
          class="profile-picture"
        />
        <div class="user-info">
            <h2 class="profile-username">Name: {{ $auth.user.name }}</h2>
            <p class="profile-email">Email: {{ $auth.user.email }}</p>
        </div>
      </div>
      <p class="welcome-message">
        Welcome to Surveil! Check out all our cool features. In the menu, you'll
        find a place to view the photos taken by your security cameras, a place
        to view all your security cameras and add more, and a button to log out
        when you're done. Thank you for joining Surveil!
      </p>
    </div>
  </div>
</template>

<style scoped>
.profile-area {
  margin-left: 2rem;
  color: whitesmoke;
}
.profile-header {
  display: flex;
  flex-direction: row;
}
.user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 7rem;
  margin-left: 2rem;
}

.profile-picture {
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
}

.welcome-message {
  margin: 3rem;
}

@media (max-width:600px) {
.profile-header {
  margin: 0 0 0 30%;
  display: flex;
  flex-direction: column;
}

}
</style>

<script>
import SideMenu from "@/components/SideMenu.vue";
import PageTitle from "@/components/PageTitle.vue";

export default {
  name: "ProfilePage",
  components: {
    SideMenu,
    PageTitle,
  },
};
</script>
