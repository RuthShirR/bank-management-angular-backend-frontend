import mongoose from 'mongoose';

// Schema for account operations
const accountOperationSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true },
  type: { type: String, enum: ['withdrawal', 'deposit', 'loan'], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  interest: { type: Number },
  amountOfPayments: { type: Number },
});

const AccountOperation = mongoose.model('AccountOperation', accountOperationSchema);

export default AccountOperation;

