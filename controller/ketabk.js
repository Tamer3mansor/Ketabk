let signUp=((req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let confirm=req.body.confirm;
    console.log(email,password,confirm);
    res.send(email,password,confirm)

})
module.exports={
    signUp
}