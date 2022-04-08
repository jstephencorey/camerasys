<template>
  <div class="photo-page">
    <side-menu/>
    <page-title title="Footage"/>
    <section class="photo-section user-area-section" id='photo-section'>
      <div class="photo-display" v-for="photo in photos" :key="photo.id">
        <h2 class="camera-label">{{photo.camera}}</h2>
        <img :src="photo.path" class="image"/>
        <p class="timestamp">{{getDateTime(photo.timestamp)}}</p>
      </div>
    </section>
  </div>
</template>



<script>
import axios from "axios";
import SideMenu from '../components/SideMenu.vue';
import PageTitle from '../components/PageTitle.vue';
export default {
  components: { SideMenu, PageTitle },
  name: "PhotoDisplay",
  data() {
    return {
     photos: [],
    }
  },
  created() {
    this.getPhotos();
  },
  methods: {
    async getPhotos() {
      try {
        console.log("EMAI:L");
        // console.log(this.$auth.user.email );
        // let response = await axios.get("/api/photos", { params: { user: this.$auth.user.email } });
        let response = await axios.get("/api/photos", { params: { user: "this.$auth.user.email" } });
        this.photos = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    getDateTime(timestamp){
      // return `${timestamp}, hello`;
      // let ts = new Date(timestamp);
      // return ts.toTimeString();
      // const current_timestamp = new Date().getTime() 
      // console.log(current_timestamp);
      
      var  date = new Date(parseInt(timestamp));
      
      return (date.getDate()+"/"+(date.getMonth()+1)+
                "/"+date.getFullYear()+" "+date.getHours()+   
                ":"+date.getMinutes()+":"+date.getSeconds());
    }
  }
};
  // data() {
  //   return {
  //     title: "",
  //     file: null,
  //     addItem: null,
  //     items: [],
  //     findTitle: "",
  //     findItem: null,
  //     findDesc: "",
  //   };
  // },
  // computed: {
  //   suggestions() {
  //     let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
  //     return items.sort((a, b) => a.title > b.title);
  //   }
  // },
  // created() {
  //   this.getItems();
  // },
  // methods: {
  //   fileChanged(event) {
  //     this.file = event.target.files[0];
  //   },
  //   async upload() {
  //     try {
  //       const formData = new FormData();
  //       formData.append("photo", this.file, this.file.name);
  //       let r1 = await axios.post("/api/photos", formData);
  //       let r2 = await axios.post("/api/items", {
  //         title: this.title,
  //         description: this.description,
  //         path: r1.data.path,
  //       });
  //       this.addItem = r2.data;
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   },
  //   async getItems() {
  //     try {
  //       let response = await axios.get("/api/items");
  //       this.items = response.data;
  //       return true;
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   },
  //   selectItem(item) {
  //     this.findTitle = "";
  //     this.findItem = item;
  //   },
  //   async deleteItem(item) {
  //     try {
  //       await axios.delete("/api/items/" + item._id);
  //       this.findItem = null;
  //       this.getItems();
  //       return true;
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   },
  //   async editItem(item) {
  //     try {
  //       await axios.put("/api/items/" + item._id, {
  //         title: this.findItem.title,
  //         description: this.findItem.description,
  //       });
  //       this.findItem = null;
  //       this.getItems();
  //       return true;
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   },
  // },
// };
</script>

<style scoped>

.photo-page {
  height: 100%;
  width: 100vw;
}

.timestamp {
  color: white;
}

.camera-label {
  color: white;
}

.photo-section {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
}

.user-area-section {
    /* position: absolute;
    left: 8rem;
    top: 5rem; */
    min-height: calc(100vh - 5rem);
}

/* @media (max-width:600px) {
    .user-area-section {
        position: relative;
        left: 0rem;
        top: 0rem;
        justify-content: center;
        width: 100vw
    }
} */

.photo-display {
    margin: .5rem;
}

.image {
    height: 10rem;
    width: 10rem;
}

</style>
