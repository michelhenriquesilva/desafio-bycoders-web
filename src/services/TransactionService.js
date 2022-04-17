import api from "../http/api";

export default class TransactionService {
    static async findAll(){
       const { data } = await api.get('/transaction')
       return data
    }
}