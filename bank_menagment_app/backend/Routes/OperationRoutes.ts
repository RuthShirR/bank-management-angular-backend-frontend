import express from 'express';
import { getAllOperations, addOperation } from '../Logic/BankLogic';

const router = express.Router();

// Route to get all operations for a specific account
router.get('/operations/:accountNumber', async (req, res) => {
  const { accountNumber } = req.params;
  try {
    const operations = await getAllOperations(accountNumber);
    res.json(operations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch operations' });
  }
});

// Route to add a new operation
router.post('/operations', async (req, res) => {
  const { accountNumber, type, amount, interest, amountOfPayments } = req.body;
  try {
    const operationData = {
      accountNumber,
      type,
      amount,
      date: new Date(),
      interest,
      amountOfPayments,
    };
    const operation = await addOperation(operationData);
    res.json(operation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add operation' });
  }
});

export default router;

