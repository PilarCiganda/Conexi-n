import axios from "axios";

const login = axios.create({
    baseURL: "http://localhost:3001",
    headers: {"Content-Type": "aplication/json"},
});

export default login;