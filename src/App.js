
import { useCallback, useEffect, useRef, useState } from 'react';
import ImportTransactionService from '../src/services/ImportTransactionService'
import TransactionService from '../src/services/TransactionService'
import './App.css';


function App() {

  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)

  const renderItem = useCallback(( { id, type, date, time, card, document, shop, shop_owner, amount} ) => {
    return(
      <tr className='transaction-item'>
        <td>{date} {time}</td>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{document}</td>
        <td>{card}</td>
        <td>{shop_owner}</td>
        <td>{shop}</td>
      </tr>
    )
  }, [])

  const fileInputRef = useRef();

  const handleFileUpload = async (event) => {
    try{
      setLoading(true)
      const formData = new FormData();        
      formData.append('file', event.target.files[0]);
      await ImportTransactionService.execute(formData)
      getTransactions()
    }catch(err){

    }finally{
      setLoading(false)
    }
  }

  const getTransactions = async () => {
    try{
      setLoading(true)
      const data = await TransactionService.get()
      setTransactions(data)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div className="App">
      <section>
        <h2>Transações</h2>
        <div className='transactions' >
          <table border="0" cellPadding={0} cellSpacing={0}>
            <thead className='transactions-head'>
              <tr>
                <th>Data/Hora</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>CPF</th>
                <th>Nº Cartão</th>
                <th>Nome do proprietário</th>
                <th>Nome da loja</th>
              </tr>
            </thead>
            <tbody className='transactions-body'>
              {loading && (<p className='empty'>Buscando...</p>)}
              {!transactions.length && !loading && (<p className='empty'>Nenhum registro encontrado</p>)}
              {transactions.map( item => renderItem(item))}
            </tbody>
          </table>
        </div>
      </section>
      <input type="file" hidden ref={fileInputRef} onChange={handleFileUpload} /> 
      <button type='button' className="button-fab" onClick={() => fileInputRef.current.click()} >+</button>
    </div>
  );
}

export default App;
