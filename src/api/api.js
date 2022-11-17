import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
    headers:     {
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
        console.log('Obsolete method. Please profileAPI object.')
        debugger
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        debugger
        return instance.get(`/` + userId);
    }
}
