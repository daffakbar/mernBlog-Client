import Axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
    // Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
    // Axios.get(`https://api-blog-mern.herokuapp.com/v1/blog/posts?page=${page}&perPage=2`)
    .then(result => {
        const responAPI = result.data;
        console.log('data API :', result.data)
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responAPI.data})
        dispatch({
            type: 'UPDATE_PAGE',
            payload: {
                currentPage: responAPI.current_page,
                totalPage: Math.ceil(responAPI.total_data / responAPI.per_page)
            }
        })
    })
    .catch(err => {
        console.log('Error :', err)
    })
}