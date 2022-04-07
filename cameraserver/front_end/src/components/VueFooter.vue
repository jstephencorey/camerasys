<template>
  <footer class="footer">
      <p>Author: Joseph Corey</p>
      <p>
        <a href="mailto:jstephencorey@gmail.com" class="link"
          >jstephencorey@gmail.com</a
        >
      </p>
      <p>
        <a href="https://github.com/jstephencorey/camerasys" class="link"
          >Github link</a
        >
      </p>
    </footer>
</template>



<style scoped>

/* Footer */
.footer {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  background: linear-gradient(
    90deg,
    var(--primary-color-dark) 0%,
    var(--primary-color) 40%,
    var(--primary-color) 60%,
    var(--primary-color-dark) 100%
  );
  color: var(--primary-color-very-dark);
  justify-content: space-around;
  align-items: center;
  padding-top: 0.5rem;
  position: relative;
  /* position: absolute; */
  /* bottom: 0;
  left: 0; */

  width: 100vw;
}

.hidden-footer {
  display: none;
}
</style>