<template>
  <div>
    <div class="profile-header">
      <div class="col-md-2 mb-3">
        <img
          :src="$auth.user.picture"
          alt="User's profile picture"
          class="profile-picture"
        />
      </div>
      <div class="profile-username">
        <h2>{{ $auth.user.name }}</h2>
        <p class="profile-email">{{ $auth.user.email }}</p>
      </div>
    </div>

    <div class="row">
      <pre class="col-12 text-light bg-dark p-4">
{{
        JSON.stringify($auth.user, null, 2)
      }}</pre
      >
    </div>
  </div>
</template>

<style scoped>
.profile-picture {
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
}
</style>