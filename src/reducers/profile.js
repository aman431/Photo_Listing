import {
    get_profile, 
    get_repository,
    get_details,
    github_login
} from '../actions/type'; 
// import details from '../components/Details/details';

const intialState = {
    loading: true,
    profile: {},
    repos: {},
    details: null,
    login:{}
}
// console.log(details);
export default function(state=intialState, action){
    const {type, payload} = action;
    switch (type){
        case get_profile:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case get_repository:
            return {
                ...state,
                repos: payload,
                loading: false
            }
        case get_details: 
            return {
                ...state,
                ...payload,
                details: payload,
                loading : false
            }
        case github_login:
            return{
                ...state,
                login: payload,
                loading: false
            }
        default:
            return state
    }
}