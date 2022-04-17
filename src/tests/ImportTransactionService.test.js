import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ImportTransactionService from '../services/ImportTransactionService'

const data = [
	{
		"type": "3",
		"date": "2019-03-01",
		"amount": 142,
		"document": "09620676017",
		"card": "4753****3153",
		"time": "15:34:53",
		"shop_owner": "JOÃO MACEDO",
		"shop": "BAR DO JOÃO"
	},
	{
		"type": "5",
		"date": "2019-03-01",
		"amount": 132,
		"document": "55641815063",
		"card": "3123****7687",
		"time": "14:56:07",
		"shop_owner": "MARIA JOSEFINA",
		"shop": "LOJA DO Ó - MATRIZ"
	},
	{
		"type": "3",
		"date": "2019-03-01",
		"amount": 122,
		"document": "84515254073",
		"card": "6777****1313",
		"time": "17:27:12",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	},
	{
		"type": "2",
		"date": "2019-03-01",
		"amount": 112,
		"document": "09620676017",
		"card": "3648****0099",
		"time": "23:42:34",
		"shop_owner": "JOÃO MACEDO",
		"shop": "BAR DO JOÃO"
	},
	{
		"type": "1",
		"date": "2019-03-01",
		"amount": 152,
		"document": "09620676017",
		"card": "1234****7890",
		"time": "23:30:00",
		"shop_owner": "JOÃO MACEDO",
		"shop": "BAR DO JOÃO"
	},
	{
		"type": "2",
		"date": "2019-03-01",
		"amount": 107,
		"document": "84515254073",
		"card": "8723****9987",
		"time": "12:33:33",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	},
	{
		"type": "2",
		"date": "2019-03-01",
		"amount": 502,
		"document": "84515254073",
		"card": "8473****1231",
		"time": "23:12:33",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	},
	{
		"type": "3",
		"date": "2019-03-01",
		"amount": 602,
		"document": "23270298056",
		"card": "6777****1313",
		"time": "17:27:12",
		"shop_owner": "JOSÉ COSTA",
		"shop": "MERCEARIA 3 IRMÃOS"
	},
	{
		"type": "1",
		"date": "2019-03-01",
		"amount": 200,
		"document": "55641815063",
		"card": "1234****3324",
		"time": "09:00:02",
		"shop_owner": "MARIA JOSEFINA",
		"shop": "LOJA DO Ó - MATRIZ"
	},
	{
		"type": "5",
		"date": "2019-03-01",
		"amount": 802,
		"document": "84515254073",
		"card": "3123****7687",
		"time": "14:56:07",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	},
	{
		"type": "2",
		"date": "2019-03-01",
		"amount": 102,
		"document": "23270298056",
		"card": "8473****1231",
		"time": "23:12:33",
		"shop_owner": "JOSÉ COSTA",
		"shop": "MERCEARIA 3 IRMÃOS"
	},
	{
		"type": "3",
		"date": "2019-03-01",
		"amount": 6102,
		"document": "23270298056",
		"card": "6777****1313",
		"time": "17:27:12",
		"shop_owner": "JOSÉ COSTA",
		"shop": "MERCEARIA 3 IRMÃOS"
	},
	{
		"type": "4",
		"date": "2019-03-01",
		"amount": 152.32,
		"document": "55641815063",
		"card": "1234****6678",
		"time": "10:00:00",
		"shop_owner": "MARIA JOSEFINA",
		"shop": "LOJA DO Ó - FILIAL"
	},
	{
		"type": "8",
		"date": "2019-03-01",
		"amount": 102.03,
		"document": "84515254073",
		"card": "2344****1222",
		"time": "12:32:22",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	},
	{
		"type": "3",
		"date": "2019-03-01",
		"amount": 103,
		"document": "23270298056",
		"card": "6777****1313",
		"time": "17:27:12",
		"shop_owner": "JOSÉ COSTA",
		"shop": "MERCEARIA 3 IRMÃOS"
	},
	{
		"type": "9",
		"date": "2019-03-01",
		"amount": 102,
		"document": "55641815063",
		"card": "6228****9090",
		"time": "00:00:00",
		"shop_owner": "MARIA JOSEFINA",
		"shop": "LOJA DO Ó - MATRIZ"
	},
	{
		"type": "4",
		"date": "2019-06-01",
		"amount": 506.17,
		"document": "84515254073",
		"card": "1234****2231",
		"time": "10:00:00",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	},
	{
		"type": "2",
		"date": "2019-03-01",
		"amount": 109,
		"document": "23270298056",
		"card": "8723****9987",
		"time": "12:33:33",
		"shop_owner": "JOSÉ COSTA",
		"shop": "MERCEARIA 3 IRMÃOS"
	},
	{
		"type": "8",
		"date": "2019-03-01",
		"amount": 2,
		"document": "84515254073",
		"card": "2344****1222",
		"time": "12:32:22",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	},
	{
		"type": "2",
		"date": "2019-03-01",
		"amount": 5,
		"document": "23270298056",
		"card": "7677****8778",
		"time": "14:18:08",
		"shop_owner": "JOSÉ COSTA",
		"shop": "MERCEARIA 3 IRMÃOS"
	},
	{
		"type": "3",
		"date": "2019-03-01",
		"amount": 192,
		"document": "84515254073",
		"card": "6777****1313",
		"time": "17:27:12",
		"shop_owner": "MARCOS PEREIRA",
		"shop": "MERCADO DA AVENIDA"
	}
]

const server = setupServer(
  rest.post('*import', (req, res, ctx) => {
    return res(ctx.json(data));
  }),
);

describe('ImportTransactionService', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('Should be import file and process transactions', async () => {
    const response = await ImportTransactionService.execute();
    expect(response).toEqual(data);
  });
});
