import Cookies from "js-cookie";

export function isValidUser() {
    return Cookies.get("nickname") !== undefined;
} 