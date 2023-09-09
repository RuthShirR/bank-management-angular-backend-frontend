
**Bank Management App (Angular & MongoDB)** 💼🏦💸

A robust Bank Management app built with Angular and powered by MongoDB, enabling users to view and conduct banking operations. Users can enter an account number, see linked operations, and initiate new ones such as withdrawals, deposits, or loans. The backend, developed with Express.js, efficiently processes these operations, working seamlessly with a MongoDB database to manage operation specifics.

**Backend (Express.js)** 🖥️:
- **Setup**:
  - 🔌 Essential modules: Express, CORS, body-parser, mongoose.
  - ⚙️ Development & Production environment configurations.
  - 🗄️ MongoDB for database interactions.

- **Middleware**:
  - 🌐 CORS for cross-origin requests.
  - 📄 Body parser for request handling.
  - 📂 File upload functionality in the 'upload' directory.

- **API Routes**:
  - 🛤️ Main endpoint: '/api/v1/bank'.
  - 📖 Two primary routes: 
    - `GET` to retrieve operations.
    - `POST` to register a new operation.

- **Database Models**:
  - 🧾 Model (`AccountOperation`) for banking actions (withdrawal, deposit, loan).

- **Error Handling**:
  - 🚫 Route-not-found middleware.

- **Server Launch**:
  - 🌍 Initiates upon MongoDB connection success.

**Frontend (Angular)** 🌐:
- **Main App Component**:
  - 🖼️ Includes bank's name, menu, main content, and footer.

- **Routing**:
  - 🛣️ Routes for listing and adding operations.

- **Services**:
  - 🔁 `OperationService` for backend interactions.

- **Components**:
  - 📜 `OperationListComponent` & `OperationFormComponent` for operations.

- **Directives**:
  - 🎨 `FormValidationDirective` for UI form feedback.

- **UI**:
  - 🎨 Responsive design with dynamic elements.

**Summary**: 📝 Your one-stop solution for bank operations! Input account details, fetch activities, and perform actions like withdrawals, deposits, or loans. The robust backend ensures smooth interactions with the MongoDB database.

---

👩‍💻 **Ruth Shir Rosenblum**: A passionate student diving into the world of software and application development at John Bryce. This Angular project is a glimpse of my journey. Always eager to learn, grow, and innovate! 🚀

___

**Feedback** 💌:
Your insights illuminate our path! If you have feedback, suggestions, or wish to contribute, please step forward. Let's enhance this together! Raise an issue or shoot a pull request!

**Contact**: 📩 Email: ruthshir31@gmail.com | 📞 Phone: 0544777129

---

