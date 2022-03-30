export class Userdata {
    name: string;
    email: string;
    phonenumber: number;
    address: string;
    password: string;
    confPassword : string;

    constructor(
        name : string,
        email : string,
        phonenumber: number,
        address: string,
        password: string,
        confPassword : string
    ){
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.address = address;
        this.password = password;
        this.confPassword = confPassword;
    }
}
