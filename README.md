# 🧪 Cypress E2E Testing for SauceDemo

A robust Cypress-based end-to-end testing suite for [https://www.saucedemo.com](https://www.saucedemo.com), designed to validate key workflows including authentication, inventory browsing, cart management, checkout flow, navigation, UI visuals, and performance metrics. This project follows the Page Object Model pattern for scalability and maintainability.

---

## 👤 Author

**👨‍💻 Software QA Engineer**  
Passionate about building reliable, automated testing systems that ensure product quality and user experience.  
Email: ravrommelbanaag@gmail.com <br>
GitHub: [banaagravrommel](https://github.com/banaagravrommel) <br>
Upwork: [Upwork](https://www.upwork.com/freelancers/~01b284d446bbd60450)
---

## ✅ Features Tested

- 🔐 **Authentication**
  - Successful and failed login attempts
  - Error message validations

- 📦 **Inventory Page**
  - Product visibility, sorting, image & price checks

- 🛒 **Cart Page**
  - Add/remove items, badge updates, and navigation

- 🚚 **Checkout Flow**
  - Form validations, data entry, and order confirmation

- 🔄 **Navigation & Session**
  - Page transitions, logout, and session resets

- 👀 **Visual/UI Assertions**
  - Navbar, footer, cart icon, and layout visibility

- ⚙️ **Performance Metrics**
  - Login and page load time measurement with result logging

---

## 🧰 Tech Stack

- [Cypress v12+](https://docs.cypress.io/)
- Node.js (v16+ recommended)
- JavaScript (ES6)
- GitHub Actions (for optional CI integration)

---

## 📁 Project Structure
```bash
cypress-e-commerce-project/
│
├── cypress/
│   ├── e2e/                  # All test specs (login, cart, etc.)
│   │   ├── login.cy.js
│   │   ├── cart.cy.js
│   │   ├── checkout.cy.js
│   │   ├── inventory.cy.js
│   │   ├── navigation.cy.js
│   │   ├── performance.cy.js
│   │   └── visual.cy.js
│   │
│   ├── pages/                # Page Objects
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   └── Navbar.js
│   │
│   ├── support/              # Custom commands and setup
│   │   ├── e2e.js
│   │   └── commands.js
│   │
│   └── results/              # Performance logs, screenshots, videos
│
├── .github/workflows/        # GitHub Actions CI configuration
│   └── cypress-ci.yml
│
├── cypress.config.js         # Cypress configuration
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
