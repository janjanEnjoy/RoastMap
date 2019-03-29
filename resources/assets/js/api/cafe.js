import { ROAST_CONFIG } from "../config.js";

//暴露请求动作，请求由axios库支持，便可以监听并在 Vuex 动作中执行
export default {

    /**
     * GET /api/v1/cafes
     */
    getCafes:function(){
        return axios.get(ROAST_CONFIG.API_URL+'/cafes');
    },
    getCafe:function(cafeID){
        return axios.get(ROAST_CONFIG.API_URL+'/cafes/'+cafeId);
    },
    postAddNewCafe:function (name,address,city,state,zip) {
        return axios.post(ROAST_CONFIG.API_URL+'/cafes',{
            name:name,
            address:address,
            city:city,
            state:state,
            zip:zip
        })
    }

}