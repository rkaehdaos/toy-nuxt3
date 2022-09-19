<template>
  <nav>
    <div class="flex justify-between">
    <NuxtLink to="/">
      <img
          src="https://pbsmtipexzqvbentyzuw.supabase.co/storage/v1/object/public/drawbeat.com/public/logo1.svg"
          alt="app.drawbeat.com"
          class="w-[180px]"
      />
    </NuxtLink>

    <ul>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
    </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>