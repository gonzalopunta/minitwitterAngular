export class Registrar{
    username:string;
    email:string;
    password:string;
    code:string;
    constructor(username:string,email:string,password:string){
        this.username = username;
        this.email = email;
        this.password = password;
        this.code= 'UDEMYANDROID';
    }
}