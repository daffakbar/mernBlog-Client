// Membuat state secara global // bisa digunakan di sluruh projek
const initialState = {
    // dataBlogs: [],
    name: 'Daffa'
}
const globalReducer = (state = initialState , action) => {
    
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Akbar Daffa'
        }
    }
    
    return state
}
export default globalReducer;