<template>
  <nav v-if="posts.length > 0" class="header-nav">
    <ul>
      <!-- Home link -->
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="(post, index) in posts.slice(0, 2)" :key="post.id">
        <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import api from '../../services/api.js'

export default {
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    try {
      const response = await api.getPosts()
      this.posts = response.data
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  },
}
</script>

<style scoped>
.header-nav {
  background-color: #3498db;
  padding: 10px;
}

.header-nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 15px;
}

.header-nav li {
  display: inline;
}

.header-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.header-nav a:hover {
  text-decoration: underline;
}
</style>
