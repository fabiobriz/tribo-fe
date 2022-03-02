import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/pacotes/";

export const getAll = async() => {
    return (await axios.get(API_URL,
        {headers: authHeader()}
    )).data;
}
export const getById = async(id) => {
    return (await axios.get(API_URL + id,
        {headers: authHeader()}
    )).data;
}

export const create = async(descricao, aldeia, valor, dataIda, dataVolta, imagens) => {
    var dados = {descricao:descricao, aldeia:aldeia, valor:valor, dataIda:dataIda, dataVolta:dataVolta, imagens:imagens};
    await axios.post(API_URL, dados,{
        headers: authHeader()
    });
}

export const update = async(id, descricao, aldeia, valor, dataIda, dataVolta, imagens) => {
    var dados = {descricao:descricao, aldeia:aldeia, valor:valor, dataIda:dataIda, dataVolta:dataVolta, imagens:imagens};
    await axios.put(API_URL + id, dados,{
        headers: authHeader()
    });
}

export const deleteItem = async(id) => {
    await axios.delete(API_URL + id,{
        headers: authHeader()
        }
    );
}

