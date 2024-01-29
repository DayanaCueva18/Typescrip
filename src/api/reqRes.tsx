import axios from "axios";

//determinar la url de nuestro endpoint
export const reqResApi= axios.create({
    baseURL:'https://reqres.in/api'


})