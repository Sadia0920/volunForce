import axios from "axios"
import { useContext, useEffect} from 'react'
import { AuthContext } from "../provider/AuthProvider"
import { useNavigate } from "react-router-dom"

const axiosInstance = axios.create({
    baseURL: 'https://volun-force-server.vercel.app',
    withCredentials: true 
})

const useAxiosSecure = () =>{
    const {signOutUser} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {

            if(error.status === 401 || error.status === 403){
                console.log('need to logout the user')
                signOutUser()
                .then(()=>{
                    console.log('logged Out User')
                    navigate('/login')
                })
                .catch(error => {
                    console.log(error)
                })

            }
            return Promise.reject(error);
        })
    },[])

    return axiosInstance;
    
}
export default useAxiosSecure;