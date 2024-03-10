import { body, param, query } from 'express-validator';

class AdminValidator {
	checkCreateTodo() {
		return [
      body('product_id')
				.notEmpty()
				.withMessage('The Product Id should not be empty'),
			body('product_name')
				.notEmpty()
				.withMessage('The Product Name should not be empty'),
			body('mrp')
				.notEmpty()
				.withMessage('The MRP should not be empty'),
      body('category')
				.notEmpty()
				.withMessage('The Category should not be empty'),
      body('discount')
				.notEmpty()
				.withMessage('The Discount should not be empty'),
      body('stock')
				.notEmpty()
				.withMessage('The Stock should not be empty'),
		];
	}
}

export default new AdminValidator();
