import axios from "axios";
import autoHeader from "./auth-header"
const API_URL = "http://localhost:8080/api/test/";
const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: autoHeader() });
};
const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: autoHeader() });
};
const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: autoHeader() });
};
export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
};