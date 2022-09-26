import { NextApiHandler } from "next";
import Stripe from "stripe";

const checkout: NextApiHandler = async (req, res) => {
  const stripeKay = process.env.STRIPE_SECRET_KEY;

  if(!stripeKay){
    res.status(500).json({message: `Missing STRIPE_SECTET_KEY!`});
    return;
  }

  const stripe = new Stripe(stripeKay, { apiVersion: "2022-08-01"});

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    locale: "pl",
    payment_method_types: ["p24", "card"],
    success_url: "http://localhot:3000/checkout/sucess?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/checkout/cancel",
    line_items: [
      {
        price_data: {
          currency: "PLN",
          unit_amount: 1999,
          product_data: {
            name: "My product"
          },
        },
        quantity: 3,
      }
    ]
  })

  res.status(201).json({ session: stripeCheckoutSession });
}

export default checkout;