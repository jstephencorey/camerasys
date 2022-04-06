<template>
  <div class="wrapper">
    <!--Top menu -->
    <div class="side-menu">
      <!--profile image & text-->
      <div class="side-menu-profile">
        <img :src="$auth.user.picture" alt="profile_picture" />
        <h3>{{ $auth.user.name }}</h3>
        <p>Surveilance Guru</p>
      </div>
      <!--menu item-->
      <ul>
        <li>
          <router-link to="/photos">
            <span class="side-menu-item">Photos</span>
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            <span class="side-menu-item">Profile</span>
          </router-link>
        </li>
        <li>
          <a @click="logout">
            <span class="side-menu-item">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.wrapper .side-menu {
  background: rgb(5, 68, 104);
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100%;
  padding: 20px 0;
  transition: all 0.5s ease;
}
.wrapper .side-menu .side-menu-profile {
  margin-bottom: 30px;
  text-align: center;
}

.wrapper .side-menu .side-menu-profile img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}

.wrapper .side-menu .side-menu-profile h3 {
  color: #ffffff;
  margin: 10px 0 5px;
}

.wrapper .side-menu .side-menu-profile p {
  color: rgb(206, 240, 253);
  font-size: 14px;
}

.wrapper .side-menu .side-menu-item {
  display: block;
  padding: 13px 30px;
  border-bottom: 1px solid #10558d;
  color: rgb(241, 237, 237);
  font-size: 16px;
  position: relative;
}

.wrapper .side-menu .side-menu-item:hover,
.wrapper .side-menu .side-menu-item.active {
  color: #0c7db1;

  background: white;
  border-right: 2px solid rgb(5, 68, 104);
}
</style>

<script>
export default {
  methods: {
    logout() {
      console.log("Logging out");
      this.$auth.logout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

