<template>
  <div class="container mt-5 bg-lightblue p-4 rounded">
    <h2 class="mb-4">Form Pendaftaran</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">Nama</label>
        <input type="text" class="form-control" v-model="form.name" required />
      </div>
      <div class="mb-3">
        <label class="form-label">No KTP</label>
        <input type="text" class="form-control" v-model="form.noKTP" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Alamat</label>
        <input type="text" class="form-control" v-model="form.address" required />
      </div>
      <div class="mb-3">
        <label class="form-label">No Telp</label>
        <input type="text" class="form-control" v-model="form.phone" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" v-model="form.email" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Paket yang Dipesan</label>
        <select class="form-control" v-model="form.package" required>
          <option>Basic</option>
          <option>Advance</option>
          <option>Pro</option>
          <option>Premium</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        name: '',
        noKTP: '',
        address: '',
        phone: '',
        email: '',
        package: 'Basic'
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('http://localhost:5000/api/forms', this.form)
        alert('Form submitted successfully')
        this.$router.push('/')
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
