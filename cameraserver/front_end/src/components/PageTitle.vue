<template>
    <div class="page-title-box">
      <h1 class="page-title">{{title}}</h1>
    </div>
</template>

<script>

export default({
    name: "PageTitle",
    props: {
      title: {required:true, type:String, default: "Page Title"},
    },
})
</script>

<style scoped>

.page-title-box {
  position: relative;
  left: 20%;
  display: flex;
  justify-content: left;
  width: 0%;
}


.page-title {
    font-size: 3.7rem;
    color: var(--primary-color-light);
    background: linear-gradient(275deg, var(--primary-color-very-dark) 0%, var(--primary-color-dark) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media (max-width:600px) {
    .page-title-box {
        left: 5rem;
    }
}
</style>
