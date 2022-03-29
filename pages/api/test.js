import dbConnect from "utils/dbConnect";

dbConnect();

async function handler(req, res) {
    res.json({ test: "test" });
}

export default handler;
