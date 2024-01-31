import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// 1) register user
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}