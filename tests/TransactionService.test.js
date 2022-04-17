import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TransactionService from '../services/TransactionService'

const data = [
	{
		"shop": "MERCADO DA AVENIDA",
		"total": "2335.20"
	},
	{
		"shop": "BAR DO JOÃO",
		"total": "406.00"
	},
	{
		"shop": "LOJA DO Ó - MATRIZ",
		"total": "434.00"
	},
	{
		"shop": "MERCEARIA 3 IRMÃOS",
		"total": "7023.00"
	},
	{
		"shop": "LOJA DO Ó - FILIAL",
		"total": "152.32"
	}
]

const server = setupServer(
  rest.get('*transaction', (req, res, ctx) => {
    return res(ctx.json(data));
  }),
);

describe('TransactionService', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('Should be get list transactions', async () => {
    const response = await TransactionService.findAll();
    expect(response).toEqual(data);
  });
});
