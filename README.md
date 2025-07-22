# HardwareShop Project

Welcome to the HardwareShop repository! This project is a web-based e-commerce platform designed for a hardware store, offering users a seamless experience to browse, order, and manage hardware items. The project is built with React, Vite, and other modern web technologies.

---

## **Development Timeline**

The project was developed over the course of 9 days, with each day focusing on specific tasks and milestones. Below is a summary of the work completed on each day:

### **Day 1: Project Initialization**
- Set up the project structure using Vite with React for both frontend and admin dashboard.
- Installed necessary dependencies (React Router, Axios, Toastify, etc.).
- Created the initial folder and file structure for frontend and admin modules.

### **Day 2: Backend API Integration**
- Configured API endpoints for fetching items, placing orders, and managing user cart.
- Implemented methods in `StoreContext` for interacting with API endpoints (`fetchItemList`, `loadCartData`, etc.).
- Integrated authentication tokens for API requests.

### **Day 3: Frontend - Homepage Setup**
- Designed the homepage with a header, navigation menu, and featured categories.
- Added assets including icons, logos, and images from the `frontend/src/assets` folder.
- Created the menu list for categories (e.g., Buildware, Paints, Grills).

### **Day 4: Frontend - Place Order Page**
- Developed the Place Order page (`PlaceOrder.jsx`) allowing users to input delivery address and select payment methods.
- Implemented cart total calculations including delivery charges.
- Integrated Razorpay payment API and Cash on Delivery (COD) option.

### **Day 5: Frontend - My Orders Page**
- Built the My Orders page (`MyOrders.jsx`) for users to view their past orders.
- Added functionality to fetch user orders from the backend API.
- Displayed order details including items, quantities, total amounts, and statuses.

### **Day 6: Admin Panel - Orders Management**
- Created the Orders page in admin panel for managing orders (`Orders.jsx`).
- Integrated API to fetch and update order statuses.
- Designed the admin interface with a sidebar and navigation bar.

### **Day 7: Admin Panel - Add Items Page**
- Implemented the Add Items page in admin panel to add new products.
- Enabled uploading images and setting product details (name, category, price, description).

### **Day 8: UI Enhancements**
- Improved UI/UX across the project:
  - Added icons for navigation and actions (e.g., parcel icons, payment icons).
  - Styled pages with CSS for better responsiveness and aesthetics.
- Created consistent themes for frontend and admin dashboard.

### **Day 9: Testing and Deployment**
- Conducted end-to-end testing for both frontend and admin modules.
- Fixed bugs and optimized API interactions.
- Deployed the application on the server and ensured all functionalities worked as intended.

---

## **Key Features**
- **Frontend**:
  - Browse hardware categories and items.
  - Place orders with Razorpay or Cash on Delivery.
  - View order history and track statuses.

- **Admin Panel**:
  - Manage inventory by adding or removing items.
  - View and update order statuses.
  - Access a user-friendly dashboard for operations.

---

## **Technologies Used**
- **Frontend**: React, Vite, Axios, Toastify
- **Admin Panel**: React, Vite
- **Styling**: CSS
- **Backend API**: Integration with RESTful APIs for order and item management.

---

## **Getting Started**

To get started with the project, clone the repository and follow the instructions in the respective `README.md` files for the frontend and admin modules.

### **Frontend Setup**
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### **Admin Panel Setup**
1. Navigate to the `admin` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## **Contributing**

Contributions are welcome! Feel free to fork the repository and submit pull requests to improve the project.

---

## **License**

This project is licensed under the MIT License.
