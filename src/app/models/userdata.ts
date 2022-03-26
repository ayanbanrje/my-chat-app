export class Userdata {
    name: string;
    email: string;
    phonenumber: number;
    address: string;
    psw: string;

    constructor(
        name : string,
        email : string,
        phonenumber: number,
        address: string,
        psw: string
    ){
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.address = address;
        this.psw = psw;
    }
}
