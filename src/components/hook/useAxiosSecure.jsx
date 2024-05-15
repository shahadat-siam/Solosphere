import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
}) 
const useAxiosSecure = () => { 
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(
        res => {
            console.log('response asar age aktu break dilam kintu')
            return res
        },
        async  error => {
            console.log('error from interceptors', error.message)
            if(error.response.status === 401 || error.response.status === 403){
               await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )

    // axios.interceptors.request

    return  axiosSecure
};

export default useAxiosSecure;