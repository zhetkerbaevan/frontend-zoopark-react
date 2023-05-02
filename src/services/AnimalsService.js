import axios from "axios";

const ANIMALS_API_BASE_URL = "http://localhost:8000/api/v1/animals";
const USERS_API_BASE_URL = "http://localhost:8000/api/v1/users";

class AnimalsService {
    getAnimals(){
        return axios.get(ANIMALS_API_BASE_URL); //response
    }

    getUsers(){
        return axios.get(USERS_API_BASE_URL); //response
    }
}

export default new AnimalsService(); //export object