import api from "../http/api";

export default class ImportTransactionService {
    static async execute(file){
       const { data } = await api.post('/import', file)
       return data
    }
}