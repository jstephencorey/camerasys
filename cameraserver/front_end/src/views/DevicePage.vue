<template>
  <div>
    <side-menu />
    <page-title title="Devices" />
    <div class="device-display" v-for="device in devices" :key="device.id">
        <div class="device-box">
          <h3 class="device-title">{{device.name}}</h3>
          <!-- <img
          src="/images/back-door.jpg"
          alt="Door with man looking through"
          class="device-image"
        /> -->
          <p class="device-id"><strong>Device ID:</strong>{{device.deviceId}}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
.device-section {
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
}

.device-box {
    margin: .7rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: var(--primary-color-very-dark) 3px solid;
    padding: 0 1rem;
    border-radius: .5rem;
    height: 5rem;
    width: 10rem;
    background-color: var(--primary-color-dark);
    background: linear-gradient(100deg, var(--primary-color-dark) 0%, var(--primary-color) 50%);
}
</style>

<script>
import SideMenu from "@/components/SideMenu.vue";
import PageTitle from "@/components/PageTitle.vue";

export default {
  name: "DevicePage",
  components: {
    SideMenu,
    PageTitle,
  },
  data() {
    return {
     devices: [{id:0, name:"Camera", deviceId:'6789'},],
    }
  },
};
</script>
