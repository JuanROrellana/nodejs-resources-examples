import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
});

const Customer = mongoose.model('customer', customerSchema);

export default Customer;
