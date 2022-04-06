<template>
<div class="homepage">
  <horiz-header></horiz-header>
  <div class="front-page-splash">
        <h1 class="main-header">Surveil</h1>
        <h2>DIY Home security and surveillance</h2>
        <signup-button label="Start Today"></signup-button>
    </div>
    <div v-for="content in contentBlocks" :key="content.id">
        <content-chunk  :id=content.id :src=content.src :alt=content.alt :title=content.title :bodyText=content.bodyText :left=content.left></content-chunk>
    </div>
</div>
</template>

<script>
import HorizHeader from '../components/HorizHeader.vue';
import ContentChunk from '../components/ContentChunk.vue';
import SignupButton from '../components/SignupButton.vue';

export default {
  name: 'HomePage',
  components:{
    HorizHeader,
    ContentChunk,
    SignupButton,
  },
  data() {
    return {
     contentBlocks: [{id:0,src:"/assets/girl-computer.jpg", alt:"Girl at computer", title:"What are we?", bodyText:"We are a place for you to connect your homemade security systems so you can collect and view all your data, pictures, and videos into one central place.", left:true},
                     {id:1,src:"/assets/tech-eye.jpg", alt:"Tech looking eye", title:"Our vision", bodyText:"Our vision is to make a user-friendly, powerful, one-stop hub for all your connected DIY home security needs"}],
    }
  },
  // created() {
  //   this.getItems();
  // },
  // methods: {
  //   async getItems() {
  //     try {
  //       let response = await axios.get("/api/photos");
  //       this.items = response.data;
  //       return true;
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   },
  // }
}
</script>

<style scoped>

.front-page-splash {
    text-align: center;
    width: 100%;
    padding-bottom: 3rem;
    color: var(--primary-color-light);
}

.front-page-splash h2 {
    margin-bottom: 1rem;
}

.front-page-splash h1 {
    font-size: 16vw;
    width: 100%;
    height: 100%;
    font-family: 'Ubuntu Mono', monospace;
    color: var(--primary-color-light);
    /* Set the background color */
    background: linear-gradient(to left, var(--primary-color-very-dark) 0%, var(--primary-color-dark) 100%);
    /* Mask the color to the text, and remove the rest  */
    -webkit-background-clip: text;
    background-clip: text;
    /* Make the text fill color value transparent so the masked background color comes through */
    -webkit-text-fill-color: transparent;
    display: inline-block;
    /* text-shadow: 2px 1px 1px var(--primary-color-very-dark); */
}

</style>
