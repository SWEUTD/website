export const authMiddleWare = (history) => {
    const authToken = localStorage.getItem('AuthToken');
    if(authToken === null){
        history.push('/SWEUTD-Website/login')
    }
}