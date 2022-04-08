<template>
  <div class="wrapper">
    <!--Top menu -->
    <div class="menu-control">
      <a
        href="#"
        @click="menuSpand"
        id="menu-control"
        class="contracted-menu-control"
      >
        <img
          src="/assets/hamburger.png"
          class="menu-control-image"
          id="menu-img"
        />
      </a>
    </div>
    <div class="side-menu contracted-side-menu" id="side-menu">
      <!--profile image & text-->
      <div class="side-menu-profile">
        <!-- <img :src="$auth.user.picture" alt="profile_picture" />
        <h3>{{ $auth.user.name }}</h3> -->
        <img :src="'/assets/eye-logo.png'" alt="profile_picture" />
        <h3>Steve</h3>
        <p>Surveilance Guru</p>
      </div>
      <!--menu item-->
      <ul>
        <li>
          <router-link to="/profile">
            <span class="side-menu-item">Profile</span>
          </router-link>
        </li>
        <li>
          <router-link to="/photos">
            <span class="side-menu-item">Photos</span>
          </router-link>
        </li>
        <li>
          <router-link to="/devices">
            <span class="side-menu-item">Devices</span>
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
/* .wrapper>.side-menu + a:hover {
  width: 100px;
} */

.wrapper .menu-control {
  width: calc(100% - 225px);
  margin-left: 225px;
  transition: all 0.5s ease;
  /* height: 50px; */
}

.wrapper .menu-control a {
  background: var(--primary-color);
  height: 40px;
  width: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  left: 250px;
  z-index: 50;
}

.wrapper .menu-control .menu-control-image {
  height: 28px;
  width: 28px;
}

.wrapper .menu-control a:hover {
  background: var(--primary-color-dark);
}

/* body.active .wrapper .sidebar {
  left: -225px;
}

body.active .wrapper .section {
  margin-left: 0;
  width: 100%;
} */

.wrapper .side-menu {
  background: var(--primary-color-dark);
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100%;
  padding: 20px 0;
  transition: all 0.5s ease;
  z-index: 100;
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

.wrapper .side-menu a {
  text-decoration: none;
}

.contracted-side-menu {
  visibility: collapse;
}

.contracted-menu-control {
  left: 25px !important;
}
</style>

<script>
export default {
  methods: {
    logout() {
      console.log("Logging out");
      // this.$auth.logout();
      // this.$router.push({ path: "/" });
    },
    menuSpand() {
      let sidemenu = document.getElementById("side-menu");
      sidemenu.classList.toggle("contracted-side-menu");
      let menuControl = document.getElementById("menu-control");
      menuControl.classList.toggle("contracted-menu-control");
      let image = document.getElementById("menu-img");
      if (image.src.indexOf("/assets/x.png") != -1) {
        image.src = "/assets/hamburger.png";
      } else {
        image.src = "/assets/x.png";
      }
    },
  },
};
</script>

