let {sendEmail} = require('../utiles/mail');

let signUp=((req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let confirm=req.body.confirm;
    console.log(sendEmail(email))
    if(password)
    {
        console.log("here");
        sendEmail(email)
        }
    console.log(email,password,confirm);
    res.send(email,password,confirm)

})
module.exports={
    signUp
}