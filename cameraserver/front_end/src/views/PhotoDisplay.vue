<template>
  <div class="photo-display">
    <section class="image-gallery">
      <div class="image" v-for="photo in photos" :key="photo.id">
        <h2>{{photo.title}}</h2>
        <img :src="photo.path" />
        <p>{{photo.description}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
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
        let response = await axios.get("/api/photos");
        this.photos = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
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
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}
</style>
