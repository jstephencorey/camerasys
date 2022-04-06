<template>
    <button :class="[(light)? 'light-button':'dark-button']">{{label}}</button>
</template>

<script>
export default({
    name:"VueButton",
    props: {
      label: {required:true, type:String},
      light: {default:false, type:Boolean},
    }
})
</script>

<style scoped>

button {
    background-color: var(--primary-color-light);
    border: 0rem;
    color: var(--primary-color-very-dark);
    padding: .7rem;
    border-radius: .7em;
    text-decoration: none;
    font-size: 1rem;
    margin: .2rem;
    user-select: none;
    /* box-shadow: .3rem .3rem 1rem .1rem rgba(0, 0, 0, .3); */
    box-shadow: .05rem .05rem .5rem .01rem rgba(0, 0, 0, .2);
}

.dark-button {
    background: var(--primary-color-dark);
    color: var(--project-white);
}

.dark-button:hover {
    background: var(--primary-color-very-dark);
}

.light-button {
    background: var(--primary-color-light);
    color: var(--primary-color-very-dark);
    border: var(--primary-color-dark) .1rem solid;
}

.light-button:hover {
    background: var(--primary-color);
}
</style>
