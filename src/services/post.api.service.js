import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {}
});

const getAllPosts = () => {
  return axiosInstance.get('/posts')
}

const getPostById = (id) => {
  return axiosInstance.get(`/posts/${id}`)
}

export {getAllPosts, getPostById}