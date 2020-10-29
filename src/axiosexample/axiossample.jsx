import axios from 'axios';

export class HttpService{
    constructor(){
        this.url = 'http://apiapptrainingnewapp.azurewebsites.net/api/Products'
    }

    getata(){
        let repsonse = axios.get(this.url);
        return Response;
    }

    postData(prd)=>{
        let response = axios.post(this.url, prd, {
            'Content-Type':'application/json',
            
        });
    }

    pudata()=>{
        let response = axios.post(this.url, prd, {
            'Content-Type':'application/json',
            
        })
    }

}
