import axios from 'axios';

const api = axios.create({
    baseURL: 'https://blogbackend-2cn4.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getHomepageData = () => api.get('/home');

export const getAllPosts = (params) => api.get('/posts', { params });
export const getPost = (idOrSlug) => api.get(`/posts/${idOrSlug}`);
export const incrementPostView = (id) => api.post(`/posts/${id}/view`);

export const getCategories = () => api.get('/categories');
export const getCategory = (slug) => api.get(`/categories/${slug}`);
export const getPostsByCategory = (slug) => api.get(`/categories/${slug}/posts`);

export const getTags = () => api.get('/tags');
export const getPostsByTag = (slug) => api.get(`/tags/${slug}/posts`);

export const getEvents = () => api.get('/events');

export const getAuthors = () => api.get('/authors');
export const getAuthor = (id) => api.get(`/authors/${id}`);

export const search = (query) => api.get(`/search?q=${query}`);

export const getGalleryItems = () => api.get('/gallery');

export const subscribeNewsletter = (email) => api.post('/newsletter/subscribe', { email });

export const getSiteSettings = () => api.get('/settings');

export default api;