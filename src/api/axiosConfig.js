import axios from "axios";

export default axios.create(
    {
        //baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io', // the base address of the api endpoint which our client can call
        //headers: {"ngrok-skip-broswer-warning": "true"} // data orgins needs to be shared acrosss multiple end points in the Api
        //this setting prevent the  HTTP requests from being blocked by CORS  (Cross Orgin resource Sharing)
        //the api is running in different domian, the CORS may block the access
        baseURL:'http://localhost:8080',
        timeout: 20000,
        headers:{"Content-Type":"application/json"}
    }
)