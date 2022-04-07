const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    street: String,
    city: String,
    postCode: String,
    country: String,
});

const ItemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Item id is required"],
        unique: [true, "Unique item id is required"],
    },
    name: String,
    quantity: Number,
    price: Number,
    total: Number,
});

const InvoiceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Invoice id is required"],
        unique: [true, "Unique invoice id is required"],
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
    items: [ItemSchema],
    total: Number,
});

module.exports =
    mongoose.models.Invoice || mongoose.model("Invoice", InvoiceSchema);
