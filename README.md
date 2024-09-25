# NestJS Microservice Application

## Overview

This is a NestJS microservice application designed to manage customers and products. It leverages PostgreSQL as the database and supports containerization using Docker. Additionally, Kubernetes is used for orchestration, making it suitable for scalable deployments.

## Features

- RESTful API for customer and product management
- Data validation using DTOs
- Prisma ORM for database interactions
- Docker support for containerization
- Kubernetes configurations for deployment and service management

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Kubernetes](https://kubernetes.io/docs/setup/) (with `kubectl` configured)
- [PostgreSQL](https://www.postgresql.org/) (if running locally)

## Project Structure

```plaintext
microservice-app/
├── src/
│   ├── customer/
│   ├── product/
│   ├── prisma/
│
│   ├── app.module.ts
│   └── main.ts
├── prisma/
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── .env
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nestjs-microservice-app.git
cd nestjs-microservice-app
```

### 2. Install Dependencies

Install the required packages:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
```

Replace `user`, `password`, and `mydb` with your actual PostgreSQL credentials.

### 4. Run Locally with Docker

#### Build Docker Image

To build the Docker image, run:

```bash
docker-compose build
```

#### Start Containers

Run the application along with the PostgreSQL database:

```bash
docker-compose up
```

### 5. Run Migrations

After starting the application, run the Prisma migrations:

```bash
docker-compose exec app npx prisma migrate deploy
```

## Kubernetes Deployment

### 1. Build and Push Docker Image

Build the Docker image:

```bash
docker build -t your-username/nestjs-microservice:latest -f docker/Dockerfile .
```

Push the image to your Docker registry:

```bash
docker push your-username/nestjs-microservice:latest
```

### 2. Deploy to Kubernetes

Apply the Kubernetes configurations:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### 3. Verify Deployment

Check the status of your pods and services:

```bash
kubectl get pods
kubectl get services
```

### 4. Run Database Migrations on Kubernetes

Access the running pod and run the migrations:

```bash
kubectl exec -it <your-pod-name> -- /bin/sh
npx prisma migrate deploy
```

## Usage

After running the application, you can access the API endpoints:

- **Customers**

  - `GET /customers`: Retrieve all customers
  - `POST /customers`: Create a new customer
  - `GET /customers/:id`: Retrieve a specific customer
  - `PUT /customers/:id`: Update a specific customer
  - `DELETE /customers/:id`: Delete a specific customer

- **Products**
  - `GET /products`: Retrieve all products
  - `POST /products`: Create a new product
  - `GET /products/:id`: Retrieve a specific product
  - `PUT /products/:id`: Update a specific product
  - `DELETE /products/:id`: Delete a specific product

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Instructions to Save as `README.md`
1. Create a file named `README.md` in the root directory of your project.
2. Copy and paste the above content into the `README.md` file.
3. Save the file.

This `README.md` provides a comprehensive guide for anyone looking to understand, set up, and contribute to your NestJS microservice application. Feel free to customize it further to fit your project needs!
```
