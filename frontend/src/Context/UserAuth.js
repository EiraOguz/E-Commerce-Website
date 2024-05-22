export const isLoggedIn = () => {
    const token = sessionStorage.getItem('token');
    return token ? true : false;
};
export const logout = () => {
    sessionStorage.removeItem('token');
};  