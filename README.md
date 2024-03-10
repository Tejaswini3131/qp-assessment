QP Assesment

API Details:

1. ADMIN API
a. Add Grosary Details
   Method: POST
   endPoint: /api/v1/create,
   body: Type = object {
    "product_id": Number,
    "product_name": string,
    "mrp": Number,
    "category": string,
    "discount": decimal,
    "stock": Number
   },
   Response: True

b. Get Grosary Details
   Method: GET
   endPoint: /api/v1/getinv,
   Response: 
   [
      {
        "id": 4,
        "product_id": "5",
        "product_name": "Test4",
        "mrp": 100,
        "category": "Food",
        "discount": "1",
        "stock": 100,
        "status": 1,
        "createdAt": "2024-03-09T14:06:31.000Z",
        "updatedAt": "2024-03-09T14:06:31.000Z"
      }
    ]

c. Remove Grossary
    Method: delete
    endPoint: /api/v1/:id,
    Params: Inventory Id,
    Response: "Inventory deleted!"

d. Update Grossary
    Method: PUT
    endPoint: /api/v1/:id,
    Params: Inventory Id,
    body: { 
      "product_id": "5",
      "product_name": "Test4",
      "mrp": 100,
      "category": "Food",
      "discount": 0.5,
      "stock": 100
    }
    Response: "Data updated!"


2. Portal API
a. Get Available Grossary
   Method: GET
   endPoint: /api/v1/order/inv,
   Response: 
   [
      {
        "id": 4,
        "product_id": "5",
        "product_name": "Test4",
        "mrp": 100,
        "category": "Food",
        "discount": "1",
        "stock": 100,
        "status": 1,
        "createdAt": "2024-03-09T14:06:31.000Z",
        "updatedAt": "2024-03-09T14:06:31.000Z"
      }
    ]

b. Place Order
    Method: POST
    endPoint: /api/v1/order/create,
    Body: {
      "details": [
        {
          "productId": 2,
          "qty": 2
        },
        {
          "productId": 3,
          "qty": 2
        }
      ],
      "userid": 2
    }
    Response: "Order Placed Successfully!"
