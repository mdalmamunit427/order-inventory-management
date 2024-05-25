# order-inventory-management

### 2. How to run the application locally

Firstly to run the application have to install dependency :   
* Run command in CLI -  npm install.   
* all dependency will be  install.
* this project has been validated using zod.
* To run this project command: 
```
npm run start
```

### **Live URL**

- GitHub Repository URL (Server): https://github.com/mdalmamunit427/order-inventory-management.git
- Live Server Link: https://web.programming-hero.com/

**Objective:** Develop a Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for effective data management. Ensure data integrity through validation using Joi/Zod.

### Set up the Project

- Create a new Express project.
- Set up a MongoDB database using Mongoose for storing product and order data.

### Define Data Models

- Create Mongoose models for **Product** data based on the provided data structure. (You can follow [sample-data.json](./sample-data.json) file for ideas).
- Define appropriate data types, validations.

### E-commerce Product Data Types

- **name** (string):
    - The name of the product.
- **description** (string):
    - A brief description of the product.
- **price** (number):
    - The price of the product.
- **category** (string):
    - The category to which the product belongs.
- **tags** (array of strings):
    - An array of tags or keywords associated with the product.
- **variants** (array of objects):
    - An array containing different variants or options of the product, such as size, color, or style.
        - **type** (string): The type of variant (e.g., size, color).
        - **value** (string): The specific value of the variant (e.g., "Small", "Red").
- **inventory** (object):
    - An object representing the product's inventory details.
        - **quantity** (number): The available quantity of the product in stock.
        - **inStock** (boolean): Indicates whether the product is currently in stock.



## Product Management

### **1. Create a New Product**

- **Endpoint**: **`/api/products`**
- **Method:** `POST`
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product created successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        }
    }
    ```
    

### **2. Retrieve a List of All Products**

- **Endpoint**: **`/api/products`**
- **Method:** `GET`
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Products fetched successfully!",
        "data": [
            {
                "name": "iPhone 13",
                "description": "A sleek and powerful smartphone with cutting-edge features.",
                "price": 999,
                "category": "Electronics",
                "tags": ["smartphone", "Apple", "iOS"],
                "variants": [
                    {
                        "type": "Color",
                        "value": "Midnight Blue"
                    },
                    {
                        "type": "Storage Capacity",
                        "value": "256GB"
                    }
                ],
                "inventory": {
                    "quantity": 50,
                    "inStock": true
                }
            },
            {
                "name": "Samsung Galaxy S21",
                "description": "High-performance Android smartphone with advanced camera capabilities.",
                "price": 799,
                "category": "Electronics",
                "tags": ["smartphone", "Samsung", "Android"],
                "variants": [
                    {
                        "type": "Color",
                        "value": "Phantom Black"
                    },
                    {
                        "type": "Storage Capacity",
                        "value": "128GB"
                    }
                ],
                "inventory": {
                    "quantity": 30,
                    "inStock": true
                }
            }
            // Additional products can be added here...
        ]
    }
    ```
    

### **3. Retrieve a Specific Product by ID**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product fetched successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        }
    }
    ```
    

### **4. Update Product Information**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `PUT`**
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product updated successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 49,
                "inStock": true
            }
        }
    }
    ```
    

### **5. Delete a Product**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `DELETE`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product deleted successfully!",
        "data": null
     }
     
    // The product should be deleted from the database.
    ```
    

### **6. Search a product**

- **Endpoint**: `/api/products?searchTerm=iphone`
- **Method: GET**
- **Sample Response**:

```jsx
{
    "success": true,
    "message": "Products matching search term 'iphone' fetched successfully!",
    "data": [
        {
            "name": "iPhone 13 Pro",
            "description": "The latest flagship iPhone model with advanced camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "iPhone SE",
            "description": "Compact and affordable iPhone model with powerful performance.",
            "price": 399,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "White"
                },
                {
                    "type": "Storage",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 20,
                "inStock": true
            }
        }
    ]
}
```

## Order Management

### **Order Management API Endpoints**

### **1.Create a New Order**

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**
- **Request Body**:
    
    ```json
    {
        "email": "level2@programming-hero.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
    }
    ```
    
- **Response**:
    
    ```json
    {
        "success": true,
        "message": "Order created successfully!",
        "data": {
            "email": "level2@programming-hero.com",
            "productId": "5fd67e890b60c903cd8544a3",
            "price": 999,
            "quantity": 1
        }
    }
    
    ```
    

### **2.Retrieve All Orders**

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Orders fetched successfully!",
        "data": [
            {
                "email": "level2@programming-hero.com",
                "productId": "5fd67e890b60c903cd8544a3",
                "price": 999,
                "quantity": 1
            }
            // more orders...
        ]
    }
    ```
    

### **3. Retrieve Orders by User Email**

- **Endpoint**: `/api/orders?email=level2@programming-hero.com`
- **Method:** `GET`
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Orders fetched successfully for user email!",
        "data": [
            {
                "email": "level2@programming-hero.com",
                "productId": "5fd67e890b60c903cd8544a3",
                "price": 999,
                "quantity": 1
            }
            // more orders for the user...
        ]
    }
    ```
    

**Inventory Update**: 

When creating new order (**`/api/orders`** ) ,reduce the `quantity` of the ordered product in inventory and update the **`inStock`** property.

### **Inventory Management Logic**

- When a new order is created, the system should check the available quantity in inventory.
- If the ordered quantity exceeds the available quantity, return an error response indicating insufficient stock.
- Update the inventory quantity and **`inStock`** status based on the ordered quantity:
    - If the inventory quantity reaches zero, set **`inStock`** to **`false`**.
    - Otherwise, keep **`inStock`** as **`true`**.

## **Error Handling:**

### **Sample Error Responses**

- Insufficient Quantity Error

```jsx
{
    "success": false,
    "message": "Insufficient quantity available in inventory"
}
```

- Not Found Error

```jsx
{
 "success": false,
 "message": "Order not found"
}
```

- Not Found Route

```jsx
{
 "success": false,
 "message": "Route not found"
}
```

### **Validation with Joi/Zod**

- Used **Joi/Zod** to validate incoming data for product and order creation and updating operations.
- Ensured that the data adheres to the structure defined in the models.
- Handled validation errors gracefully and provide meaningful error messages in the API responses.







