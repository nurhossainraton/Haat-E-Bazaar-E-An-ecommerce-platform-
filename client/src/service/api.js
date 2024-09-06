import axios from 'axios';

const URL=`http://localhost:8000`;

export const signUp = async (data) => {
    try {
        console.log("data in api",data);
        //console.log(data);
        const response = await axios.post(`${URL}/signup`, data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("response in api",response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const logIn = async (data) => {
    try {
        console.log("data in login api",data);
        //console.log(data);
        const response = await axios.post(`${URL}/login`, data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('Here it is')
        
        console.log("response in api",response);
        return response;
    } catch (error) {
        console.error(error);
        return error.response
    }
}