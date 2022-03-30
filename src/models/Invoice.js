const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    street: String,
    city: String,
    postCode: String,
    country: String,
});

const InvoiceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Id required"],
        unique: true,
    },
    createdAt: Date,
    paymentDue: Date,
    description: String,
    paymentTerms: Number,
    clientName: String,
    clientEmail: String,
    status: String,
    senderAddress: AddressSchema,
    clientAddress: AddressSchema,
    items: [
        {
            name: String,
            quantity: Number,
            price: Number,
            total: Number,
        },
    ],
    total: Number,
});

module.exports =
    mongoose.models.Invoice || mongoose.model("Invoice", InvoiceSchema);
