---
sidebar_position: 2
---

# Hướng dẫn cài đặt MySQL

## Cài đặt MySQL

- Vào link sau tải file cài đặt: [Download MySQL Installer](https://dev.mysql.com/downloads/installer/)

![1703088797461](image/mysql-installation/1703088797461.png)

- Chạy file **mysql-installer-community-8.0.32.0.msi** vừa mới tải xuống.

![1703088827025](image/mysql-installation/1703088827025.png)

- Pick như hình dưới:

![1703088910963](image/mysql-installation/1703088910963.png)

:::note

- Nếu không sử dụng MySQL Workbench (GUI để tương tác với CSDL) thì có thể bỏ qua không chọn

:::

- Bấm "Execute" để tiến hành cài đặt:

![1703088970049](image/mysql-installation/1703088970049.png)

![1703089018279](image/mysql-installation/1703089018279.png)

- Tiếp tục bấm "Next" để thực hiện cấu hình cho MySQL:

![1703089066936](image/mysql-installation/1703089066936.png)

![1703089166294](image/mysql-installation/1703089166294.png)

- Chọn phương thức xác thực cho MySQL và bấm "Next":

![1703089204378](image/mysql-installation/1703089204378.png)

- Điền mật khẩu cho user "root" trong MySQL:

![1703089229936](image/mysql-installation/1703089229936.png)

![1703089268449](image/mysql-installation/1703089268449.png)

![1703089286508](image/mysql-installation/1703089286508.png)

![1703089296130](image/mysql-installation/1703089296130.png)

## Thêm biến môi trường cho MySQL

- Thêm biến môi trường này vào: **C:\Program Files\MySQL\MySQL Server 8.0\bin**

![1703089398243](image/mysql-installation/1703089398243.png)

## Start, Stop MySQL Server

- Ta có thể thực hiện tắt, mở server MySQL bằng cách sử dụng lệnh sau (Với chế độ Administrator):

```bash
net start mysql80
```

```bash
net stop mysql80
```
