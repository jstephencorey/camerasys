<template>
    <div class="content-chunk" :key="id">
        <template v-if="left">
            <img :src="src" :alt="alt" class="content-image">
            <div class="content">
                    <h3 class="content-title">{{title}}</h3>
                    <p class="content-text">{{bodyText}}</p>
            </div>
        </template>
        <template v-else>
            <div class="content">
                    <h3 class="content-title">{{title}}</h3>
                    <p class="content-text">{{bodyText}}</p>
            </div>
            <img :src="src" :alt="alt" class="content-image">
        </template>
    </div>
</template>

<script>
export default({
    name:"ContentChunk",
    props: {
      id: { required:true, type: Number },
      src: { required:true, type: String },
      title: { required:true, type: String },
      bodyText: { required:true, type: String },
      alt: { required:false, default:"Content Image", type: String },
      left: {default:false, type:Boolean},
    }
})
</script>

<style scoped>

.content-chunk {
    color: var(--project-white);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.content-image {
    width: 80vw;
    height: 20rem;
    opacity: .8;
    margin: 2rem;
}

.content-title {
    font-size:2rem;
    margin-left: 3rem;
}

.content-text {
    padding: 3rem;
    font-size: 1.2rem;
}

.page-container {
    position: relative;
    min-height: 100%;
}

@media only screen and (min-width: 700px) {
    .content-chunk {
        flex-direction: row;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .content-image {
        width: 50vw;
    }
    .content-title {
        margin-left: 0;
    }
}
</style>