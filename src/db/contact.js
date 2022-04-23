// Mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLAS);
}

// Define mongoose Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
