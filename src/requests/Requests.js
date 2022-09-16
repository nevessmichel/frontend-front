import axios from "axios";

const API_URL = 'http://localhost:8080/';

export const CreateUserRequest = async (data) => {
    let url = API_URL+'user/create';
    return axios.post(url,data);
}

export const LoginRequest = async (data) =>{
    let url = API_URL+'user/login';
    return axios.post(url,data);
}

export const ObjectivesListRequest = async () => {
    return [
        {name:"objective 1", description:"description 1"},
        {name:"objective 2", description:"description 2"},
        {name:"objective 3", description:"description 3"},
        {name:"objective 4", description:"description 4"},
        {name:"objective 5", description:"description 5"},
        {name:"objective 6", description:"description 6"}
    ]
}