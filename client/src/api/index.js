import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const answersApi = axios.create({
    baseURL: 'http://localhost:3000/api/answer',
})

export const insertTopic = payload => api.post('/topics', payload)
export const getAllTopics = () => api.get('/topics')
export const updateTopicById = (id, payload) => api.put('/topics/${id}', payload)
export const deleteTopicById = id => api.delete('/topics/${id}')
export const getTopicById = id => api.get('/topics/' + id)
export const getAnswerById = id => answersApi.get('/answers/' + id)
export const addAnswer = payload => answersApi.post('/answers', payload)

const apis = {
    insertTopic,
    getAllTopics,
    updateTopicById,
    deleteTopicById,
    getTopicById,
    getAnswerById,
    addAnswer
}

export default apis
