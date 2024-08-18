# nest-blog-api

A scalable and modular RESTful API for managing blog posts, built with NestJS, TypeScript, and MongoDB.

`nest-blog-api` is a backend service for managing blog posts. The API is built with NestJS and follows RESTful principles, ensuring easy integration with front-end applications. It includes features such as pagination, validation, and detailed Swagger documentation for easy API exploration.

## Features

- Create, Read, Update, and Delete (CRUD) operations for blog posts
- Pagination support for listing posts
- Data validation with class-validator
- MongoDB integration using Prisma
- Swagger API documentation
- Modular and scalable code structure

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/iNikolas/nestjs-blog-backend
cd nestjs-blog-backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

```
DATABASE_URL=mongodb+srv://<username>:<password>@<connection_url>/?retryWrites=true&w=majority&appName=<app_name>
```

4. **Generate Prisma client:**

```bash
npx prisma generate
```

## Running the App

1. **Development mode:**

```bash
npm run start:dev
```

2. **Production mode:**

```bash
npm run build
npm run start:prod
```

3. **Swagger Documentation:**

After starting the application, you can view the API documentation at:

```
http://localhost:8000/api
```

This will open the Swagger UI where you can explore the API endpoints and their details.

Alternatively you can view deployed documentation by the next link: [Deployed Api Documentation](https://nestjs-blog-backend.onrender.com/api)

## Deployment

    - **Frontend:** Deployed on[Vercel](https://nextjs-blog-frontend-one.vercel.app/)

    - **Backend:** Deployed on [Render](https://nestjs-blog-backend.onrender.com)

## Contributing

We welcome contributions! If you would like to make significant changes, please open an issue first to discuss your ideas.

You can find frontend source code [here](https://github.com/iNikolas/nextjs-blog-frontend)

## License

[MIT](https://choosealicense.com/licenses/mit/)
