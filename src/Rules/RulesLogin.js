import axios from "axios";


const metodos = {
    login: async (comando) => {
        const url = "http://localhost:3001/login";
        return await axios
        // .post(url, JSON.stringify(comando))
        .post(url, comando)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default metodos;