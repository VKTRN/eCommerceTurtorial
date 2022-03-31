import {Router} from "express"
import Stripe   from "stripe"
import dotenv   from "dotenv"

dotenv.config()

const stripe = Stripe(process.env.STRIPE_SECRET)
const router = Router()

const charge = (req) => {
  return {source: req.body.tokenId, amount: req.body.amount, currency: "usd"}
}

const stripeCallback = (err, res) => {
  if (stripeErr) {
    res.status(500).json(err);
  } else {
    res.status(200).json(res);
  }
}

router.post("/payment", (req, res) => {stripe.charges.create(charge(req), stripeCallback)});

export default router