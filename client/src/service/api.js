import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try{
        console.log(data)
        const response= await axios.post(`${URL}/signup`, data);
        return response.data;
        

    }catch(error) {
        console.log('Error while calling signup api',error);
        throw error;

    }
}