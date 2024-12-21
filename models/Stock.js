import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ticker: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  buyPrice: { type: Number, required: true },
});

export default mongoose.model("Stock", stockSchema);
