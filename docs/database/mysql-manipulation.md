---
sidebar_position: 3
---

# Các thao tác với MySQL

## Quản lý các user cùng với quyền của user đó

- Trước tiên, ta phải đăng nhập với tài khoản **root**:

```bash
mysql -u root -p
```

- Sau khi nhập mật khẩu xong, ta sẽ tiến hành thêm và cấp quyền cho user

### Tạo mới một user

:::info

- Cú pháp:

```bash
CREATE USER [username]@[host] IDENTIFIED BY [password];
```

:::

- Ví dụ: tạo một user truy cập vào database ở localhost

```bash
CREATE USER 'minhchi1509'@'localhost' IDENTIFIED BY 'ptit_15092002';
```

:::note

- Để cho phép user truy cập vào database từ bất kỳ host nào, ta sử dụng dấu `%`
- Ví dụ:

```bash
CREATE USER 'minhchi1509'@'%' IDENTIFIED BY 'ptit_15092002';
```

:::

### Gán quyền cho user

:::info

- Cú pháp:

```bash
GRANT [roles] ON [database-name].[table] TO [username]@[host];
```

:::

:::caution

- Nếu tên database, tên bảng có chứa các ký tự đặc biệt thì bao bọc chúng lại bởi dấu backtick **``**

:::

- Ví dụ:

```bash
GRANT SELECT, INSERT ON `next-db`.`post` TO 'minhchi1509'@'localhost';
```

- Để gán toàn bộ quyền đối với tất cả các database và table, ta dùng:

```bash
GRANT ALL PRIVILEGES ON *.* TO 'minhchi1509'@'localhost';
```

### Xóa quyền đối với user

:::info

- Cú pháp:

```bash
REVOKE [roles] ON [database-name].[table] FROM [username]@[host];
```

:::

- Ví dụ:

```bash
REVOKE SELECT, INSERT ON `next-db`.`post` FROM 'minhchi1509'@'localhost';
```

- Để xóa toàn bộ quyền đối với một user, ta dùng:

```bash
REVOKE ALL PRIVILEGES ON *.* FROM 'minhchi1509'@'localhost';
```

### Xem thông tin user

:::info

- Xem tất cả các username đang có cùng host của chúng:

```bash
SELECT User, Host from mysql.user;
```

- Xem các quyền của một user:

```bash
SHOW GRANTS FOR [username]@[host];
```

:::

:::note

- Sau khi thực hiện gán quyền hay xóa quyền xong, ta nên dùng lệnh sau để làm mới quyền để đảm bảo rằng thay đổi được áp dụng ngay lập tức:

```bash
FLUSH PRIVILEGES;
```

:::

## Backup và Restore trong MySQL

### Backup database trong MySQL

:::info

- Cú pháp:

```bash
mysqldump -u root -p [database_name] --tables [t1] [t2] [t3] > [target_backup_file]
```

- Để backup tất cả các database:

```bash
mysqldump -u root -p --all-databases > [target_backup_file]
```

:::

- Ví dụ:

```bash
mysqldump -u root -p next-db --tables post user > "D:\next-db-backup.sql"
```

### Restore database trong MySQL

:::info

- Cú pháp:

```bash
mysql -u root -p [database_name] < [backup_file_dir]
```

- Nếu bạn đã sao lưu tất cả các cơ sở dữ liệu của mình bằng tùy chọn **--all-databases** và bạn muốn restore database từ một tệp sao lưu có chứa nhiều cơ sở dữ liệu, hãy sử dụng tùy chọn **--one-database** như dưới đây:

```bash
mysql -u root -p --one-database [database_name] < [backup_file_dir]
```

:::
