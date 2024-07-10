<template>
  <div class="admin">
    <h2>Admin Page</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>No KTP</th>
          <th>Alamat</th>
          <th>No Telp</th>
          <th>Email</th>
          <th>Paket</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="form in forms" :key="form._id">
          <td>{{ form.name }}</td>
          <td>{{ form.noKTP }}</td>
          <td>{{ form.address }}</td>
          <td>{{ form.phone }}</td>
          <td>{{ form.email }}</td>
          <td>{{ form.package }}</td>
          <td>
            <button @click="deleteForm(form._id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminPage',
  data() {
    return {
      forms: []
    }
  },
  created() {
    this.fetchForms()
  },
  methods: {
    async fetchForms() {
      try {
        const response = await axios.get('http://localhost:5000/api/forms')
        this.forms = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async deleteForm(id) {
      try {
        await axios.delete(`http://localhost:5000/api/forms/${id}`)
        this.fetchForms()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
/* Add any required styles here */
</style>
