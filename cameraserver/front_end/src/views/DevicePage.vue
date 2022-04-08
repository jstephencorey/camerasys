<template>
  <div>
    <side-menu />
    <page-title title="Devices" />
    <div class="body-area">
      <div class="device-display">
        <div class="device-box" v-for="device in devices" :key="device._id">
          <h3 class="device-title">Device: {{ device.deviceName }}</h3>
          <p class="device-id"><strong>Description:</strong>{{ device.description }}</p>
        </div>
      </div>
      <div class="device-add-section">
        <div class="form">
        <h2 class="form-title">Add Device:</h2>
        <input v-model="deviceName" placeholder="Device Name" />
        <input v-model="description" placeholder="Description" />
        <a @click="addDevice"><vue-button label="Add" /></a>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.device-display {
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  padding: 2rem;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 15rem;
  width: 20rem;
}
.form-title {
  font-size: 1.5rem;
  color:whitesmoke;
  padding-bottom: 1rem;
}

.body-area {
  margin: 2rem;
}

.device-box {
  margin: 0.7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: var(--primary-color-very-dark) 3px solid;
  padding: 0 1rem;
  border-radius: 0.5rem;
  height: 5rem;
  width: 20rem;
  background-color: var(--primary-color-dark);
  background: linear-gradient(
    100deg,
    var(--primary-color-dark) 0%,
    var(--primary-color) 50%
  );
}
</style>

<script>
import axios from "axios";
import SideMenu from "@/components/SideMenu.vue";
import PageTitle from "@/components/PageTitle.vue";
import VueButton from "@/components/VueButton.vue";

export default {
  name: "DevicePage",
  components: {
    SideMenu,
    PageTitle,
    VueButton,
  },
  data() {
    return {
      devices: [],
    };
  },
  created() {
    this.getDevices();
  },
  methods: {
    async getDevices() {
      try {
        let response = await axios.get("/api/devices", { params: { user: this.$auth.user.email } });
        this.devices = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addDevice() {
      await axios.post("/api/devices", {
          deviceName: this.deviceName,
          description: this.description,
          user: this.$auth.user.email,
        });
      this.deviceName = '';
      this.description = '';
      this.getDevices();
    }
  },
};
</script>
