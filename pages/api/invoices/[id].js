import dbConnect from "utils/dbConnect";
import Invoice from "models/Invoice";

dbConnect();

const handler = async (req, res) => {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case "GET":
            try {
                const invoice = await Invoice.findOne({ id });

                if (!invoice) {
                    return res.status(400).json({
                        success: false,
                        message: "No invoice matching query was found",
                    });
                }

                res.status(200).json({ success: true, data: invoice });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    error,
                });
            }
            break;
        case "PUT":
            try {
                const invoice = await Invoice.findOneAndUpdate(
                    { id },
                    req.body,
                    {
                        new: true,
                        runValidators: true,
                    }
                );

                if (!invoice) {
                    return res.status(400).json({
                        success: false,
                        message: "No invoice matching query was found",
                    });
                }

                res.status(200).json({ success: true, data: invoice });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
            break;
        case "DELETE":
            try {
                const deletedInvoice = await Invoice.deleteOne({ id });

                if (!deletedInvoice) {
                    return res.status(400).json({
                        success: false,
                        message: "No invoice matching query was found",
                    });
                }

                res.status(200).json({ success: true, data: deletedInvoice });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
            break;
    }
};

export default handler;
