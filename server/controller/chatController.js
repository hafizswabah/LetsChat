export default function chat(req, res) {
    let message = req.body;
    console.log(req.body);
    let responseMessage = "I am Let's Chat, your friendly chatbot here to assist you. How can I help you today?"
    res.json({ responseMessage: responseMessage })
}