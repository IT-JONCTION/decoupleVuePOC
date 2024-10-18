<template>
  <div v-if="post" class="post-view">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
  <div v-else>
    <p>Loading post...</p>
  </div>
</template>

<script>
import api from '../../services/api.js'

export default {
  data() {
    return {
      post: null,
    }
  },
  async mounted() {
    this.fetchPost()
  },
  watch: {
    // Watch for changes in the route and fetch the new post when the ID changes
    '$route.params.id': 'fetchPost',
  },
  methods: {
    async fetchPost() {
      const postId = this.$route.params.id
      try {
        const response = await api.getPosts()
        this.post = response.data.find(post => post.id == postId)
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    },
  },
}
</script>

<style scoped>
.post-view {
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #3498db;
  margin-bottom: 15px;
}

p {
  line-height: 1.6;
  color: #333;
}
</style>
