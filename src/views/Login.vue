<template>
  <div class="login container mt-5 bg-lightblue p-4 rounded">
    <h2 class="mb-4">Login Admin</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" v-model="form.username" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="form.password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminLogin',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/api/admin/login', this.form)
        const token = response.data.token
        localStorage.setItem('adminToken', token)
        this.$router.push('/admin')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.bg-lightblue {
  background-color: #e3f2fd;
}
</style>
