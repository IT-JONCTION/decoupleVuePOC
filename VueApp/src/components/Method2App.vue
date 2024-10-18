<template>
  <div>
    <h1>List of Posts</h1>
    <button @click="showForm(null)">New Post</button>

    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
        <button @click="showForm(post)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>

    <div v-if="formVisible">
      <h2 v-if="formData.id">Edit Post</h2>
      <h2 v-else>New Post</h2>

      <form @submit.prevent="savePost">
        <div>
          <label for="title">Title:</label>
          <input type="text" v-model="formData.title" />
        </div>
        <div>
          <label for="content">Content:</label>
          <textarea v-model="formData.content"></textarea>
        </div>
        <button type="submit">Save</button>
        <button type="button" @click="cancelForm">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../../services/api.js'

export default {
  data() {
    return {
      posts: [],
      formVisible: false,
      formData: { id: null, title: '', content: '' },
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      const response = await api.getPosts()
      this.posts = response.data
    },
    showForm(post) {
      if (post) {
        this.formData = { ...post }
      } else {
        this.formData = { id: null, title: '', content: '' }
      }
      this.formVisible = true
    },
    cancelForm() {
      this.formVisible = false
    },
    async savePost() {
      if (this.formData.id) {
        await api.updatePost(this.formData.id, this.formData)
      } else {
        await api.createPost(this.formData)
      }
      this.formVisible = false
      this.fetchPosts()
    },
    async deletePost(id) {
      if (confirm('Are you sure you want to delete this post?')) {
        await api.deletePost(id)
        this.fetchPosts()
      }
    },
  },
}
</script>
