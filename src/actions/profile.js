import {
    get_profile,
    get_repository,
    get_details,
    github_login
} from './type';


export const user_profile = (username) => async (dispatch) => {
    try {
        const Profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await Profile.json();
        const repo = await fetch(profileJson.repos_url);
        const repoJson = await repo.json();

        dispatch({
            type: get_repository,
            payload: repoJson
        })
        dispatch({
            type: get_profile,
            payload: profileJson
        })
    }
    catch (error) {
        console.log(error);

    }
}

export const get_profile_details = (owner_name, full_name, name, description, collaborators_url, html_url, created_at, issues_url) => (dispatch) => {
    try {
        const details = { owner_name, full_name, name, description, collaborators_url, html_url, created_at, issues_url };
        console.log(details);
        dispatch({
            type: get_details,
            payload: details
        })
        console.log(details);
    }
    catch (error) {
        console.log(error);
    }
}

// export const login = () => async (dispatch) => {
//     try {
//         // const code =
//         //     window.location.href.match(/\?code=(.*)/) &&
//         //     window.location.href.match(/\?code=(.*)/)[1];
//         // console.log('Hello Again');
//         const CLIENT_ID = "26c4b329a72917186dee";
//         const REDIRECT_URI = "http://localhost:3000/dashboard";

//         const login_data = await fetch(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`);
//         const responseJson = login_data.json()
//         console.log(responseJson);
//         dispatch({
//             type: github_login,
//             payload: responseJson
//         })
//         console.log('hello');
//     }
//     catch (error) {
//         console.log(error)
//     }
// }