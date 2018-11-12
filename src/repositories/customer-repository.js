const moongose = require("mongoose");
const Customer = moongose.model("Customer");

exports.create = async data => {
  var customer = new Customer(data);
  await customer.save();
};

exports.authenticate = async data => {
  const res = await Customer.findOne({
    email: data.email,
    password: data.password
  });
  return res;
};

exports.getById = async id => {
  const res = await Customer.findById(id);
  return res;
};
