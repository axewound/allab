import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
    /*withCredentials: true,*/
    /*baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',*/
    headers: {
          /*'Authorization': 'Bearer 4us718254sk7ils002z51n1n8r3qyae19i7zeyrt',*/
       /*  "Content-Type": "application/json",
        "access_token": "4us718254sk7ils002z51n1n8r3qyae19i7zeyrt"*/
    }
});



export const usersAPI = {
    getUsers() {
        return instance.get()
            .then(response => {
           /*     console.log(response)*/
                return response.data;
            });
    },
    getProfile(userId) {
      /*  debugger*/
 /*       console.log('Obsolete method. Please profileAPI object.')*/
        return profileAPI.getProfile(1);
    }
}

export const profileAPI = {
    getProfile(userId) {
     /*   debugger*/
console.log(userId)
        return instance.get(`/` + userId);
    }
}
