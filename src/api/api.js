import * as axios from 'axios';



const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f984b4d0-aa62-48b4-a0ae-8d6fe0ce7082"
    }
});


export const usersAPI =  {
    getUsers (currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data 
        })
    },

    follow (userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }

}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId);
        
    },

    getStatus (userId) {
        return instance.get(`profile/status/` + userId);
    },
    
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const headerAPI = {
    getUserData () {
        return instance.get(`auth/me`)   
    }
}