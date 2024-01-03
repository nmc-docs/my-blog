---
sidebar_position: 4
---

# Các thao tác với MongoDB

## Quản lý user và các quyền của user đó

- Đầu tiên, ta sẽ đăng nhập vào database với tài khoản admin (với quyền root):

```bash
mongosh -u <username> -p <password>
```

- Truy cập vào database có tên **admin** (đây là database chứa thông tin của tất cả các user cùng với quyền của user đó trong hệ thống):

```bash
use admin
```

### Tạo mới một user và cấp quyền cho user đó

```bash
db.createUser(
  {
    user: "username",
    pwd: "password",
    roles: [ { role: "readWrite", db: "antsa-database" }, {...} ]
  }
)
```

### Cấp quyền cho một user

```bash
db.grantRolesToUser("username", [{role: "readWrite", db: "antsa-database"}, {...}]);
```

:::caution

- Lưu ý: nếu trong cùng một database mà có nhiều quyền thì quyền cấp thấp hơn sẽ có độ ưu tiên cao hơn.
- Ví dụ: với cùng một database mà user có 2 quyền **read** và **readWrite** thì quyền **readWrite** sẽ bị ghi đè (tức user chỉ có quyền **read** đối với database đó).

:::

### Hủy quyền cho một user

```bash
db.revokeRolesFromUser("username", [{role: "read", db: "antsa-database"}, {...}])
```

### Xóa thông tin user

- Xóa một user có username cụ thể:

```bash
db.dropUser(<username>)
```

- Xóa tất cả các user có trong hệ thống database:

```bash
db.dropAllUsers()
```

### Xem thông tin của user

- Xem thông tin của tất cả các user đang có trong hệ thống database:

```bash
db.getUsers()
```

- Xem thông tin của một user cụ thể:

```bash
db.getUser(<username>)
```

## Các quyền của một user trong hệ thống cơ sở dữ liệu MongoDB

| Role                   | Description                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `read`                 | Chỉ có quyền đọc đối với database được chỉ định                                                                       |
| `readWrite`            | Có quyền đọc, thay đổi dữ liệu đối với database được chỉ định                                                         |
| `dbAdmin`              | Có quyền quản trị như tạo, xóa database, tạo, xóa bảng,... đối với database được chỉ định                             |
| `userAdmin`            | Có quyền thay đổi role (gán quyền, xóa quyền, thay đổi quyền) cho các user đang làm việc trong database được chỉ định |
| `dbOwner`              | Có tất cả các quyền của `readWrite`, `dbAdmin` và `userAdmin` đối với database được chỉ định                          |
| `readAnyDatabase`      | Có quyền giống như `read` nhưng áp dụng cho tất cả các database                                                       |
| `readWriteAnyDatabase` | Có quyền giống như `readWrite` nhưng áp dụng cho tất cả các database                                                  |
| `dbAdminAnyDatabase`   | Có quyền giống như `dbAdmin` nhưng áp dụng cho tất cả các database                                                    |
| `userAdminAnyDatabase` | Có quyền giống như `userAdmin` nhưng áp dụng cho tất cả các database                                                  |
| `root`                 | Đây là quyền quản trị cao nhất trong server MongoDB, nó có tất cả các quyền quản trị trong toàn bộ hệ thống CSDL      |

## Backup và Restore database

- **Backup database** là quá trình sao lưu toàn bộ hoặc một phần dữ liệu cơ sở dữ liệu sang một vị trí lưu trữ khác, như máy tính cục bộ, ổ đĩa đám mây, hoặc máy chủ lưu trữ. Backup database giúp bảo vệ dữ liệu khỏi các sự cố như ổ cứng bị hỏng, mất điện, hoặc tấn công mạng.
- **Restore database** là quá trình khôi phục dữ liệu cơ sở dữ liệu từ bản sao lưu đã được tạo trước đó. Restore database được sử dụng khi có sự cố xảy ra khiến dữ liệu cơ sở dữ liệu bị mất hoặc bị hỏng.

➡️ Việc backup và restore database là rất quan trọng đối với bất kỳ cơ sở dữ liệu nào, đặc biệt là đối với các cơ sở dữ liệu lớn hoặc quan trọng. Backup và restore database giúp bảo vệ dữ liệu khỏi các sự cố và đảm bảo rằng dữ liệu có thể được khôi phục khi cần thiết.

### Backup database trong MongoDB

- Cú pháp:

```bash
mongodump <options>
```

| Options        | Description                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| `--uri`        | Là URI đến CSDL cần backup                                                                                     |
| `--out`        | Chỉ định đường dẫn đến thư mục chứa tất cả file/folder backup                                                  |
| `--db`         | Chỉ định tên database sẽ được backup, nếu không chỉ định, sẽ backup tất cả các database đang có trong hệ thống |
| `--collection` | Chỉ định những collections (tables) sẽ được backup, nếu không được chỉ định, sẽ backup tất cả các collections. |

- Ví dụ:

```bash
mongodump --uri="mongodb://admin:ptit_15092002@localhost:27017/?authSource=admin" --out="D:\mongodb-backup" --db="antsa-database"
```

### Restore database trong MongoDB

- Cú pháp:

```bash
mongorestore <options>
```

| Options        | Description                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--uri`        | Chỉ định URI của database cần khôi phục                                                                                                                                                                                                              |
| `--dir`        | Chỉ định đường dẫn của thư mục chứa các file/folder backup để khôi phục                                                                                                                                                                              |
| `--db`         | Chỉ định tên database cần được khôi phục.<br />- Nếu tên database không tồn tại trong thư mục backup thì MongoDB sẽ tạo mới database đó. <br />- Nếu không được chỉ định, nó sẽ đọc từ file backup và khôi phục lại tất cả các database có trong đó. |
| `--collection` | Chỉ định những collections (tables) nào sẽ được khôi phục lại<br />- Nếu không được chỉ định, nó sẽ khôi phục tất cả các collections từ file backup                                                                                                  |
|                |                                                                                                                                                                                                                                                      |

- Ví dụ:

```bash
mongorestore --uri="mongodb://admin:ptit_15092002@localhost:27017" --dir="D:\mongo-backup"
```
