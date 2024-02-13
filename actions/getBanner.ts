//"use server";

import instance from "@/Instance"
import { Banner } from "@/schemas/banner"





const getBanner  = async() => {
    try {

        return (await instance.get('/api/web/v1/banner')).data as Banner
    } catch (error) {
        return {} as Banner;
    }
}

export {getBanner}