const router=require("express").Router();
const stripe=require("stripe")("pk_test_51Nb3PGSBphjAJ9mYPYmk3Erz4U7Q75O4zCW8F0kUhj17DksZ0NyOnRmqgg1HfpHjaJF7leJtwatgnqhU1WQGBf1b00xySEpf7X")
const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
router.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
module.exports=router;