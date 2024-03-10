import { Request, Response } from "express";
import { OrderInstance } from "../Storage/modal/order";
import { OrderDetailsInstance } from "../Storage/modal/orderdetails";
import { GrossaryInstance } from "../Storage/modal/grossary";
import { Op } from 'sequelize';

class OrderController {
  async getAvailbleGrossary(req: Request, res:Response) {
    try {
      const result = await GrossaryInstance.findAll({
        where: {
          status: true,
          stock: { [Op.gt]: 0 },
        },
        order: [
          ['product_id', 'desc']
        ],
        raw: true
      });

      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  async placeOrder(req: Request, res:Response) {
    try {
      const orderId =  Math.floor(100000 + Math.random() * 900000);
      let totalAmnt = 0;
      const orderDetailsPayload = [];
      
      for (const data of req.body.details) {
        const isProductExist = await GrossaryInstance.findOne({
          where: {
            product_id: data.productId,
            status: true,
            stock: { [Op.gt]: 0 }
          },
          raw: true
        });

        if (!isProductExist) {
          return res.status(404).send('Product details not found');
        }

        if (isProductExist && Number(data.qty) > Number(isProductExist.stock)) {
          return res.status(404).send(`Product Id: ${data.productId} Available stock is ${isProductExist.stock}`);
        }

        const result = (Number(isProductExist.discount) /  100) * Number(isProductExist.mrp);
        orderDetailsPayload.push({
          order_id: 0,
          inv_id: isProductExist.id,
          final_price: result,
          qty: data.qty
        });
      }

      const finalAmnt = orderDetailsPayload.reduce((sum, product) => sum + product.final_price, 0);
      const orderData = {
        order_id: `ORD-${orderId}`,
        user_id: req.body.userid,
        total_amnt: finalAmnt
      }

      const order = await OrderInstance.create(orderData);
      
      orderDetailsPayload.forEach(list => {
        return list.order_id = Number(order.toJSON().id);
      });

      await OrderDetailsInstance.bulkCreate(orderDetailsPayload);
      return res.status(200).send('Order Placed Successfully!');
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new OrderController();
