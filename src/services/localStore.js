export default function localStore (key, value) {
    if(key === "clear"){
        localStorage.clear();
    } else {
        if(value) {
            localStorage.setItem(key, value);
        } else {
            return localStorage.getItem(key);
        }
    }
}