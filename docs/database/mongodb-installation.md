---
sidebar_position: 3
---

# Cách cài đặt MongoDB Community Server

## Cài đặt MongoDB Server

- Vào đường link sau để tải file cài đặt: [MongoDB Community Server](https://www.mongodb.com/try/download/community)

![1704122159110](image/mongodb-installation/1704122159110.png)

- Tiến hành chạy file cài đặt:

![1704122523280](image/mongodb-installation/1704122523280.png)

![1704122624198](image/mongodb-installation/1704122624198.png)

![1704122739816](image/mongodb-installation/1704122739816.png)

## Cài đặt MongoDB Shell

- Mongosh là một giao diện dòng lệnh cho MongoDB, được phát triển bởi MongoDB Inc. Nó được xây dựng trên top của MongoDB Database Tools và cung cấp một giao diện người dùng tương tác để quản lý và làm việc với các triển khai MongoDB của bạn.
- Mongosh cho phép bạn thực hiện nhiều tác vụ quản trị và bảo trì khác nhau, bao gồm:

  - Kết nối với một triển khai MongoDB
  - Tạo và quản lý cơ sở dữ liệu, bộ sưu tập và tài liệu
  - Thực thi các truy vấn SQL và MongoDB
  - Nhập và xuất dữ liệu
  - Giám sát hiệu suất
  - Khắc phục sự cố

- Vào link sau để tải file cài đặt MSI: [MongoDB Shell](https://www.mongodb.com/try/download/shell)

![1704124761747](image/mongodb-installation/1704124761747.png)

- Tiến hành chạy file cài đặt:

![1704124846660](image/mongodb-installation/1704124846660.png)

- Sau khi cài đặt sau, ta thêm biến môi trường (**C:\Program Files\mongosh**)

![1704124989827](image/mongodb-installation/1704124989827.png)

## Cài đặt MongoDB Database Tools

- MongoDB Database Tools là một bộ công cụ dòng lệnh được thiết kế để giúp bạn quản lý và làm việc hiệu quả với các triển khai MongoDB của mình. Các công cụ này được phát hành độc lập với lịch phát hành MongoDB Server, cho phép bạn truy cập các tính năng mới nhanh hơn và nhận các bản cập nhật thường xuyên hơn.
- Dưới đây là các công cụ chính trong bộ MongoDB Database Tools:

  - **mongodump:** Công cụ này được sử dụng để tạo bản sao lưu nhị phân (binary backup) toàn bộ hoặc một phần nội dung của cơ sở dữ liệu MongoDB. Các bản sao lưu này có thể được sử dụng để khôi phục dữ liệu trong trường hợp xảy ra sự cố hoặc chuyển dữ liệu sang một môi trường khác.
  - **mongorestore:** Công cụ này được sử dụng để khôi phục dữ liệu từ các bản sao lưu được tạo bằng mongodump. Nó cho phép bạn nhập dữ liệu vào một triển khai MongoDB hiện có hoặc tạo một triển khai mới từ bản sao lưu.
  - **bsondump:** Công cụ này được sử dụng để chuyển đổi các tệp BSON dump (được tạo bởi mongodump) thành định dạng JSON, giúp dễ dàng xem và kiểm tra nội dung của chúng.
  - **mongoimport:** Công cụ này được sử dụng để nhập dữ liệu từ các tệp ở nhiều định dạng, bao gồm JSON, CSV và TSV, vào một triển khai MongoDB.
  - **mongoexport:** Công cụ này được sử dụng để xuất dữ liệu từ một triển khai MongoDB sang các tệp ở định dạng JSON, CSV hoặc TSV.
  - **mongostat:** Công cụ này cung cấp một cái nhìn tổng quan về hiệu suất hoạt động của MongoDB, bao gồm số lượng kết nối, hoạt động đọc/ghi, bộ nhớ sử dụng, v.v.
  - **mongotop:** Công cụ này hiển thị các bộ sưu tập và chỉ mục đang sử dụng nhiều tài nguyên nhất trong triển khai MongoDB, giúp bạn xác định những khu vực cần tối ưu hóa.

- Các công cụ này có thể được sử dụng để thực hiện nhiều tác vụ quản trị và bảo trì khác nhau, bao gồm:

  - Sao lưu và khôi phục dữ liệu
  - Nhập và xuất dữ liệu
  - Giám sát hiệu suất
  - Khắc phục sự cố
  - Chuyển dữ liệu giữa các môi trường
  - Di chuyển từ triển khai MongoDB tự lưu trữ sang MongoDB Atlas (dịch vụ MongoDB được quản lý hoàn toàn trên cloud)

- Vào link sau để tải file cài đặt MSI: [MongoDB Command Line Database Tools Download](https://www.mongodb.com/try/download/database-tools)
- Sau khi tải về, ta tiến hành chạy file cài đặt đó.
- Tiếp theo, ta thêm biến môi trường (**C:\Program Files\MongoDB\Tools\100\bin**)

![1704286154233](image/mongodb-installation/1704286154233.png)

## Thêm mới user xác thực cho MongoDB

- Sau khi cài đặt, MongoDB không hề bật một cơ chế xác thực nào để tương tác với database cả. Điều này làm cho bất kỳ ai cũng có thể tạo, xóa hay đọc bất kỳ thông tin nào trong db của bạn.
- Do vậy, ta sẽ bật xác thực cho MongoDB và tạo tài khoản quản trị cho database.
- Mở bash lên và gõ lần lượt các lệnh sau theo thứ tự:

```bash
mongosh
```

```bash
use admin
```

```bash
db.createUser({ user: "admin", pwd: "ptit_15092002", roles: ["root"]})
```

- Tiếp theo, ta bật xác thực cho MongoDB bằng cách vào file sau "**C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg"** và thêm dòng sau:

```bash
security:
  authorization: "enabled"
```

:::caution

- Chú ý: dòng authorization: "enabled" thụt vào đầu dòng 2 dấu cách

:::

- Sau đó, ta restart lại MongoDB ở trong Services của Windows bằng lệnh:

```bash
net stop mongodb && net start mongodb
```

:::note

- Và từ giờ nếu muốn truy cập database để thao tác với cơ sở dữ liệu thì sẽ phải xác thực trước

:::

## Lấy URI để kết nối

- URI của MongoDB khi **KHÔNG** có xác thực sẽ là:

```bash
mongodb://<host>:<port>
```

- URI của MongoDB khi **CÓ** xác thực sẽ là:

```bash
mongodb://<username>:<password>@<host>:<port>/?authSource=admin
```

- Ví dụ:

```bash
mongodb://localhost:27017
```

```bash
mongodb://admin:ptit_15092002@localhost:27017/?authSource=admin
```

## Tạo server đơn giản để test database MongoDB

```ts
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 8080;

mongoose.connect(
  //Chú ý: "ansta-database" chính là database name trong CSDL
  "mongodb://localhost:27017/antsa-database"
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

:::caution

- Nếu MongoDB bật chế độ xác thực thì URI kết nối sẽ là:

```ts
"mongodb://admin:ptit_15092002@localhost:27017/antsa-database?authSource=admin";
```

:::
