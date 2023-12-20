---
sidebar_position: 1
---

# Express + Prisma + Docker

## Cấu trúc cây thư mục

![1697644554621](image/express-prisma-dockerize/1697644554621.png)

## Cài đặt các thư viện cần thiết

- Cài đặt các dependencies:

```bash
npm install express dotenv cors cookie-parser @types/node tslib @prisma/client
```

- Cài đặt các devDependencies:

```bash
npm install -D typescript tsc-alias nodemon esno @types/express @types/cors @types/cookie-parser
```

## Khởi tạo cấu hình TypeScript

```bash
npx tsc --init
```

```json title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "CommonJS",
    "outDir": "build",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "baseUrl": ".",
    "paths": {
      "src/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

## Khởi tạo Prisma

- Để khởi tạo Prisma, ta gõ:

```bash
npx prisma init
```

```prisma title="schema.prisma"
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  name      String
  email     String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())

  @@map("user")
}
```

- Để tạo các table trong database ứng với các model ta đã khai báo trong Prisma, gõ:

```bash
npx prisma migrate dev
```

- Để map các model đã khai báo trong Prisma vào Prisma client, gõ:

```bash
npx prisma generate
```

## Code

- Cấu hình để sử dụng biến môi trường trong file **.env**:

```ts title="src/configs/env-config.ts"
import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT,
};

export default env;
```

- Tạo type cho User:

```ts title="src/types/use-types.ts"
export type TUser = {
  name: string;
  email: string;
  password: string;
};
```

- Tạo hàm controller:

```ts title="src/controllers/user-controller.ts"
import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

import { TUser } from "src/types/user-types";

const prisma = new PrismaClient();

const userController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addUser: async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body as TUser;
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default userController;
```

- Tạo route:

```ts title="src/routes/user-route.ts"
import { Router } from "express";
import userController from "src/controllers/user-controller";

const userRoute = Router();

userRoute.get("/", userController.getAllUsers);
userRoute.post("/create", userController.addUser);

export default userRoute;
```

- Hàm chính:

```ts title="src/main.ts"
import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user-route";
import env from "./configs/env-config";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/user", userRoute);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
```

- Thêm biến môi trường vào file **.env**

```.env
PORT=8080
DATABASE_URL="mysql://root:ptit_62699502@localhost:3306/antsadatabase"
```

## Chạy ở môi trường phát triển

- Vào file **package.json** để cấu hình lệnh chạy:

```json title="package.json"
{
  "name": "typescript-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon --exec esno src/main.ts",
    "build": "tsc && tsc-alias",
    "start": "npx prisma migrate deploy && node build/main.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/cookie-parser": "^1.4.4",
    "@types/cors": "^2.8.14",
    "@types/express": "^4.17.19",
    "esno": "^0.17.0",
    "nodemon": "^3.0.1",
    "tsc-alias": "^1.8.8",
    "typescript": "^5.2.2"
  },
  "dependencies": {
    "@prisma/client": "^5.4.2",
    "@types/node": "^20.8.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "tslib": "^2.6.2"
  }
}
```

:::tip

- Gõ `npm run dev` để chạy ứng dụng server ở môi trường phát triển

:::

## Triển khai Docker

- Tạo **Dockerfile**:

```Dockerfile
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/prisma ./prisma
COPY --from=build /usr/src/app/package*.json ./
RUN npm install --omit=dev

CMD [ "npm", "start" ]
```

- Tạo file **.dockerignore** để chỉ định file, thư mục mà Docker sẽ không không copy nó:

```.ignore
node_modules
build
```

- Tạo file **docker-compose.yaml** để chạy 2 container database và backend:

```yaml
version: "3.8"

services:
  backend:
    depends_on:
      - mysqldb
    container_name: antsa-backend
    restart: always
    build:
      context: ./back-end
    env_file:
      - ./env/backend.env
    ports:
      - 8080:8080
    networks:
      - antsa_network

  mysqldb:
    image: mysql:latest
    container_name: antsa-database
    restart: always
    env_file:
      - ./env/database.env
    ports:
      - 3306:3306
    volumes:
      - ./database/backup:/var/lib/mysql
    networks:
      - antsa_network

networks:
  antsa_network:
    driver: bridge
```

- Tạo 2 file biến môi trường trong thư mục **env** để sử dụng trong docker-compose:

```env title="env/backend.env"
PORT=8080
DATABASE_URL=mysql://root:ptit_15092002@mysqldb:3306/antsadatabase
```

```env title="env/database.env"
MYSQL_DATABASE=antsadatabase
MYSQL_ROOT_PASSWORD=ptit_15092002
```

:::note

- Thư mục **database** để lưu trữ dữ liệu trong database, đảm bảo khi khởi động lại container thì dữ liệu đã lưu trong CSDL sẽ không bị mất.

:::

:::tip

- Để khởi động ứng dụng docker compose, gõ:

```bash
docker-compose up --build -d
```

- Bây giờ, ứng dụng của ta đang chạy trên **http://localhost:8080/**
- Để tắt docker compose và xóa các container, gõ:

```bash
docker-compose down
```

:::
