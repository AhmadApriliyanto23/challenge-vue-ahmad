import axios,{AxiosInstance} from "axios";

const api:AxiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers : {
        "Content-Type":"application/json"
    },
    timeout:2000
})


export default{
    login(data:any){
        return api.post('/posts',data)
    }
}