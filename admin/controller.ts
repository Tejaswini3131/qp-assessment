import { Request, Response } from "express";
import { GrossaryInstance } from "../Storage/modal/grossary";
import { Op } from 'sequelize';


class AdminController {
  async createGrossary(req: Request, res:Response) {
    try {
      const genarteNumber = Math.floor(100000 + Math.random() * 900000);
      
      const isProductIdExist = await GrossaryInstance.findOne({
        where: {
          product_id: req.body.product_id
        },
        attributes: ['id'],
        raw: true
      });

      if (isProductIdExist) {
        return res.status(400).send('Product Id already exist!');
      }
      await GrossaryInstance.create({ ...req.body});
      return res.status(200).send(true);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  async viewGrossary(req: Request, res:Response) {
    try {
      const result = await GrossaryInstance.findAll({
        where: {
          status: true
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
  async removeGrossary(req: Request, res:Response) {
    try {
      const { id } = req.params;
			const record = await GrossaryInstance.findOne({ where: { id } });

			if (!record) {
				return res.json({ msg: "Can not find existing record" });
			}

			await record.destroy();
			return res.status(200).send('Inventory deleted!');
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  async updateGrossary(req: Request, res:Response) {
    try {
      const { id } = req.params;
			const record = await GrossaryInstance.findOne({ where: { id } });

			if (!record) {
				return res.json({ msg: "Can not find existing record" });
			}

      const isProductIdExist = await GrossaryInstance.findOne({
        where: {
          product_id: req.body.product_id,
          id: { [Op.eq]: req.params.id },
        },
        attributes: ['id'],
        raw: true
      });
      
      if (isProductIdExist) {
        return res.status(400).send('Product Id already exist!');
      } 
			const updatedRecord = await GrossaryInstance.update(req.body, {
        where: {
          id: req.params.id
        }
      });
			return res.json("Data updated!");
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

export default new AdminController();
