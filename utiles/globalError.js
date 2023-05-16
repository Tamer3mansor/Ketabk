class globalError extends Error{
    constructor(mesg,code,status){
this.mesg=mesg,
this.code=code,
this.status=status;
    }
    
}