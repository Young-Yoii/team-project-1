import { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    ORDER_NO: { // order_no 생성할때 초성이랑 날짜,난수? 합쳐서 생성하려고 하는데, 그러면 string해야되는뎅 중요x!!
      type: String,
      required: true,
    },
    PRODUCT_NO: { // 여기는 참조가 아닌가???
      type: Number,
      required: true,
    },
    CREATED_TIME: {
      type: String,
      required: true,
    },
    UPDATED_TIME: {
      type: String,
      required: true,
    }
  },
  {
    collection: "Order",
    timestamps: true,
  }
);

export { OrderSchema };
