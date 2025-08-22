# PageTurner - Book Store Web Application

##  Project overview
PageTurner is a modern book store web application built with **Next.js 15 (App Router)**.  
It allows users to browse books, view product details, and (after login) add new books to the store.  
Authentication is handled with **NextAuth.js**, supporting both Google OAuth and credential login.  

**Features:**
- Public landing page with hero, product highlights, and footer.  
- Product list and product details pages accessible without login.  
- User authentication with email/password and Google login.  
- Protected dashboard to add new books (only for authenticated users).  
- Responsive design with **Tailwind CSS + DaisyUI**.  

---

## Setup & Installation Instructions

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>



Install dependencies

npm install


Setup environment variables
Create a .env.local file in the root and add:

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
DB_NAME=bookStore
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret


Run the development server

npm run dev


Open http://localhost:3000
 to view the app.

Build for production

npm run build
npm start


Deployment
You can deploy the app to Vercel using your GitHub repository or via Vercel CLI:

vercel --prod

Route Summary
Route	Method	Description	Access
/	GET	Landing page with hero, products highlights, navbar, footer	Public
/login	GET	Login page with credentials & Google OAuth	Public
/register	GET	Register new user and auto-login	Public
/products	GET	List of all products/books	Public
/products/[id]	GET	Product detail page for a specific book	Public
/dashboard/add-product	GET/POST	Add a new book to the database	Protected (authenticated users only)
/api/auth/[...nextauth]	GET/POST	NextAuth API for authentication	Public
/api/products	GET	Fetch all products	Public
/api/products	POST	Add new product to database	Protected (authenticated users only)
Technologies Used

Next.js 15 (App Router)

NextAuth.js (Authentication)

MongoDB (Database)

Tailwind CSS + DaisyUI (Styling)

React Hot Toast (Notifications)