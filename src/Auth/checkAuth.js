
export const checkAuth = (user, navigate) =>{

    if(!user || user == ""){
        navigate("/login")
    }
}