export const validateForm = (email , password)=>{
    const isemailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const ispasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isemailValid) {
        return "Email is Invalid Please check"

    }
    if(!ispasswordValid){
        return "Password is Invalid Please check"

    }
    return null

}