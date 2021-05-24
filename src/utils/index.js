export const validateInputChange = (item) => {
    const name = item.name;
    const value = item.value;
    const regExp = {
        name: /^[a-z ,.'-]+$/i,
        surname: /^[a-z ,.'-]+$/i,
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        age:/^[1-9]?[0-9]{1}$|^100$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    };

    return regExp[name].test(value) ? true : false;
};