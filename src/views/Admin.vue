<template>
  <div class="admin container mt-5 bg-lightblue p-4 rounded">
    <h2 class="mb-4">Admin Page</h2>
    <table class="table table-striped">
      <thead class="table-primary">
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
            <button @click="openEditForm(form)" class="btn btn-warning">Update</button>
            <button @click="deleteForm(form._id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for updating form -->
    <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update Form</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateForm">
              <div class="mb-3">
                <label class="form-label">Nama</label>
                <input type="text" class="form-control" v-model="currentForm.name" required />
              </div>
              <div class="mb-3">
                <label class="form-label">No KTP</label>
                <input type="text" class="form-control" v-model="currentForm.noKTP" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Alamat</label>
                <input type="text" class="form-control" v-model="currentForm.address" required />
              </div>
              <div class="mb-3">
                <label class="form-label">No Telp</label>
                <input type="text" class="form-control" v-model="currentForm.phone" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="currentForm.email" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Paket yang Dipesan</label>
                <select class="form-control" v-model="currentForm.package" required>
                  <option>Basic</option>
                  <option>Advance</option>
                  <option>Pro</option>
                  <option>Premium</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminPage',
  data() {
    return {
      forms: [],
      showModal: false,
      currentForm: {
        _id: '',
        name: '',
        noKTP: '',
        address: '',
        phone: '',
        email: '',
        package: 'Basic'
      }
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
    },
    openEditForm(form) {
      this.currentForm = { ...form }
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    async updateForm() {
      try {
        await axios.put(`http://localhost:5000/api/forms/${this.currentForm._id}`, this.currentForm)
        this.fetchForms()
        this.closeModal()
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
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  position: relative;
  top: 20%;
}
</style>
