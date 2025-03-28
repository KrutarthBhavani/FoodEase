# FoodEase: Online Restaurant Order Management

## Overview

**FoodEase** is an online restaurant order management system designed to simplify how restaurants handle orders and how customers place them. It allows restaurant owners to manage their menus, track orders, and communicate with customers in real time. Customers can browse restaurants, view available menus, and place orders directly from the platform.

## Core Features

1. **Restaurant Owner Registration & Login**  
   - Owners can create an account for their restaurant, including basic information like opening and closing times, address, and contact details.

2. **User Registration & Login**  
   - Customers can sign up to place orders. Each user has a personal profile with name, email, address, and phone number.

3. **Restaurant Profile Management**  
   - Owners can update restaurant details (address, contact, hours, etc.) and manage their menu items (add/edit/delete).

4. **Menu Management**  
   - Add new menu items, update existing items (including name, price, description), and mark items as available or unavailable.

5. **Order Management (Restaurant View)**  
   - Owners can see a list of incoming, in-progress, and completed orders. They can update the order status (e.g., “Accepted,” “In Progress,” “Delivered,” or “Cancelled”).

6. **Ordering (Customer View)**  
   - Customers can view a list of restaurants, browse their menus, add items to a cart, and submit orders. Customers can also see their current and past orders.

7. **Order Cancellation**  
   - If an order is still pending, customers can cancel it.

8. **Reviews and Ratings**  
   - Customers can leave reviews and ratings for completed orders.

## Tech Stack (Example)

- **Front-End**: HTML, CSS, JavaScript, Handlebars  
- **Back-End**: Node.js, Express.js  
- **Database**: MongoDB  

## Database Collections (If using MongoDB)

1. **Users**  
   - `_id`: ObjectId  
   - `first_name`: string  
   - `last_name`: string  
   - `email`: string  
   - `phone`: string  
   - `address`: string  
   - `city`: string  
   - `state`: string  
   - `birth_date`: string  
   - `password`: string (hashed)  

2. **Restaurants**  
   - `_id`: ObjectId  
   - `name`: string  
   - `restaurantId`: string (unique identifier for the restaurant)  
   - `address`: string  
   - `openTime`: string (e.g., `"11:30"`)  
   - `closeTime`: string (e.g., `"22:00"`)  
   - `contact`: string (restaurant’s contact number)  
   - `menu`: array of menu objects (item name, price, description, availability, etc.)  
   - `password`: string (hashed)  

3. **Orders**  
   - `_id`: ObjectId  
   - `restaurantId`: ObjectId (references Restaurants)  
   - `item`: array of items referencing the restaurant’s menu items  
   - `status`: string (e.g., `"Pending"`, `"In Progress"`, `"Delivered"`, etc.)  
   - `review`: string  
   - `rating`: number (1–5)  
   - `time`: timestamp  
   - `totalAmount`: number  

## Installation

```bash
npm install
```

### To Load DB Dump

```bash
npm run loadDump
```

### To Run 

```bash
npm run start
```
   The server should be running at `http://localhost:3000` (or your specified port).

## Usage

- **Sign up** as a user or restaurant owner.  
- **Log in** to access the functionalities of the platform.  
- Restaurant owners can update their restaurant information, manage their menus, and track orders.  
- Customers can browse restaurants, place or cancel orders, chat with the restaurant, and leave reviews.

## Contributing

1. Fork the project  
2. Create your feature branch: `git checkout -b feature/my-new-feature`  
3. Commit your changes: `git commit -m 'Add some feature'`  
4. Push to the branch: `git push origin feature/my-new-feature`  
5. Open a pull request  


**Team Members**  
- Krutarth Bhavani   
- Jigar Chhatrala  
- Divyesh Dhameliya
- Dev Patel
