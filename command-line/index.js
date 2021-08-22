import mongoose from "mongoose";
import Customer from "./models/customer.js";

await mongoose.createConnection("mongodb://localhost:27017/command-line", {
  auth: {
    authSource: "admin",
  },
  user: "root",
  pass: "root",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Add customer
export const customerSave = (customerData) => {
  console.log(customerData);
  // Customer.create(customerData, function (err, small) {
  //   if (err) return console.log(err);
  //   console.log('Saved');
  // });
  // const customer = new Customer(customerData);
  // customer.save(function (err) {
  //   if (err) return console.log(err);
  //   // saved!
  //   console.log('Saved');
  // });
};

// Find Customer
export const customerFind = (firstName) => {
  const customer = Customer.find({firstName}).exec();
  customer.then(function(result) {
    console.log(result) // "Some User token"
  })
};

export default {customerSave, customerFind};