<template>
  <div class="home bg-lightblue text-center py-5">
    <h1 class="mb-4">Selamat Datang di PT AMERTA</h1>
    <p class="mb-4">
      PT AMERTA ASA MEDIA adalah penyedia layanan internet terbaik di Indonesia. Kami berkomitmen
      untuk memberikan layanan internet yang cepat, stabil, dan terpercaya.
    </p>
    <router-link to="/register">
      <button class="btn btn-primary">Daftar Paket</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.bg-lightblue {
  background-color: #e3f2fd;
}
</style>
