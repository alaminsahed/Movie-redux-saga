import axios from "axios";

export const loadUserApi = async () => {
    const response = await axios.get("http://localhost:3004/users");
    return response;
}

export const AddUserApi = async (user) => {
    const response = await axios.post("http://localhost:3004/users", user);
    return response;
}

export const DeleteUserApi = async (id) => {
    console.log("f", id);
    const response = await axios.delete(`http://localhost:3004/users/${id}`);
    console.log("response", response);
    return response;
}

export const UpdateUserApi = async (id, info) => {
    const response = await axios.put(`http://localhost:3004/users/${id}`, info);
    console.log("response", response);
    return response;
}