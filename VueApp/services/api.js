import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  getPosts() {
    return apiClient.get('/posts')
  },
  createPost(data) {
    return apiClient.post('/posts', data)
  },
  updatePost(id, data) {
    return apiClient.put(`/posts/${id}`, data)
  },
  deletePost(id) {
    return apiClient.delete(`/posts/${id}`)
  },
}
