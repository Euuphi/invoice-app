import dbConnect from "utils/dbConnect";
import Invoice from "models/Invoice";

dbConnect();

const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const invoices = await Invoice.find({});

                res.status(200).json({ success: true, data: invoices });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                const invoice = await Invoice.create(req.body);

                res.status(201).json({ success: true, data: invoice });
            } catch (err) {
                res.status(400).json({ success: false, errorMessage: err });
            }
    }
};

export default handler;
