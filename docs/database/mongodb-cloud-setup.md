---
sidebar_position: 6
---

# Setup MongoDB Atlas (Cloud for MongoDB)

## MongoDB Atlas là gì?

- MongoDB Atlas là một nền tảng cơ sở dữ liệu đám mây (cloud database) được cung cấp bởi MongoDB, một nhà cung cấp cơ sở dữ liệu NoSQL mã nguồn mở. MongoDB Atlas cho phép người dùng tạo, quản lý và sử dụng cơ sở dữ liệu MongoDB trên đám mây mà không cần phải tự quản lý cơ sở hạ tầng.
- Hiện tại, bản miễn phí cho MongoDB Atlas cho phép lưu trữ **512MB đến 5GB** dữ liệu.

## Cách setup MongoDB Atlas

### Đăng nhập tài khoản

- Vào trang web [MongoDB Cloud](https://cloud.mongodb.com/) và tiến hành đăng nhập (nếu chưa có tài khoản thì đăng ký trước)

### Tạo Organizations

![1704103488109](image/mongodb-cloud-setup/1704103488109.png)

![1704103800790](image/mongodb-cloud-setup/1704103800790.png)

![1704103869718](image/mongodb-cloud-setup/1704103869718.png)

### Tạo Project

![1704104098346](image/mongodb-cloud-setup/1704104098346.png)

![1704104125797](image/mongodb-cloud-setup/1704104125797.png)

![1704104150240](image/mongodb-cloud-setup/1704104150240.png)

### Tạo Cluster

![1704117128935](image/mongodb-cloud-setup/1704117128935.png)

![1704117279339](image/mongodb-cloud-setup/1704117279339.png)

### Tạo security cho Cluster

![1704117523510](image/mongodb-cloud-setup/1704117523510.png)

- Phần tiếp theo, ta sẽ thêm các địa chỉ IP được phép truy cập đến Database:

![1704117609285](image/mongodb-cloud-setup/1704117609285.png)

### Lấy URI của database

![1704119113301](image/mongodb-cloud-setup/1704119113301.png)

![1704119149780](image/mongodb-cloud-setup/1704119149780.png)

![1704119227604](image/mongodb-cloud-setup/1704119227604.png)

## Tạo một server đơn giản để test database

- Dưới đây là một server đơn giản để thêm mới một user vào CSDL:

```ts
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 8080;

mongoose.connect(
  //Chú ý: "ansta-database" chính là database name trong CSDL
  "mongodb+srv://minhchi1509:ptit_15092002@cluster0.u5c2soc.mongodb.net/ansta-database"
);

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  { collection: "users" } // Tên bảng
);

const User = mongoose.model("User", UserSchema);

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running!`);
});
```

## Xem trực quan CSDL

### Xem thông qua Web

![1704121291179](image/mongodb-cloud-setup/1704121291179.png)

![1704121330723](image/mongodb-cloud-setup/1704121330723.png)

![1704121384298](image/mongodb-cloud-setup/1704121384298.png)

### Xem thông qua Navicat Premium

![1704121449647](image/mongodb-cloud-setup/1704121449647.png)

![1704121624699](image/mongodb-cloud-setup/1704121624699.png)

![1704121663854](image/mongodb-cloud-setup/1704121663854.png)
