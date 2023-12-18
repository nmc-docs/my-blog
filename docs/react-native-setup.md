---
idebar_position: 5
---

# Setup project React native chạy trên thiết bị Android thật

## Cài đặt môi trường cho React native

### **Bước 1: Cài đặt JDK**

- Mở Window Powershell với quyền Administrator và cài đặt JDK thông qua Chocolatey (Xem cách cài đặt Chocolatey [tại đây](https://chocolatey.org/install#individual-method)):

```bash
choco install -y microsoft-openjdk17
```

- Sau khi cài đặt, để kiểm tra xem cài đặt thành công hay chưa, ta gõ:

```bash
javac --version
```

![1702886692043](image/react-native-setup/1702886692043.png)

### Bước 2: Cài đặt Android SDK

- Tải file zip SDK Tools Package: [tại đây](https://developer.android.com/studio#command-line-tools-only)
- Sau khi tải về và giải nén ra, ta sẽ thấy bên trong có một thư mục tên **cmdline-tools**
- Sau đó, ta vào đường dẫn: `C:\Users\MINH CHI\AppData\Local` và tạo một thư mục mới tên **android-sdk**
- Copy thư mục **cmdline-tools** vào bên trong thư mục **android-sdk** vừa mới tạo

![1702887319759](image/react-native-setup/1702887319759.png)

- Bên trong thư mục **cmdline-tools**, tạo một thư mục mới tên **tools** và di chuyển các file và folder còn lại vào thư mục **tools** đó.

![1702887643155](image/react-native-setup/1702887643155.png)

- Mở cmd lên và di chuyển tới đường dẫn: `C:\Users\MINH CHI\AppData\Local\android-sdk\cmdline-tools\tools\bin`
- Gõ lệnh sau:

```bash
sdkmanager "platform-tools" "platforms;android-34"
```

- Sau khi đã cài đặt thành công, ta sẽ thấy có 2 thư mục **platforms** và **platform-tools** như hình bên dưới:

![1702887857783](image/react-native-setup/1702887857783.png)

- Tiếp theo, vẫn tại đường dẫn `C:\Users\MINH CHI\AppData\Local\android-sdk\cmdline-tools\tools\bin`, ta gõ lệnh sau và sau đó gõ "y" cho đến hết để accepted tất cả các SDK Package Licenses:

```bash
sdkmanager --licenses
```

### Bước 3: Thêm biến môi trường Android

- Ta tạo biến System tên **ANDROID_HOME** với đường dẫn: `C:\Users\MINH CHI\AppData\Local\android-sdk`

![1702888315578](image/react-native-setup/1702888315578.png)

- Sau đó thêm đường dẫn `C:\Users\MINH CHI\AppData\Local\android-sdk\platform-tools` làm biến môi trường bên trong Path:

![1702888416185](image/react-native-setup/1702888416185.png)

## Thiết lập kết nối giữa laptop và thiết bị Android thật

:::note

- Ta sẽ kết nối thiết bị Android thông qua dây cáp USB và ứng dụng Vysor

:::

### Trên thiết bị Android

- Trên thiết bị Android, vào CH Play và tải ứng dụng có tên **Vysor - Android control on PC**:

![1702889290838](image/react-native-setup/1702889290838.png)

- Trên điện thoại, vào **Cài đặt** -> **Giới thiệu điện thoại** và nhấn liên tục vào phiên bản máy để mở chế độ nhà phát triển:

![1702889384880](image/react-native-setup/1702889384880.png)

- Tiếp theo, vào **Cài đặt** -> **Cài đặt bổ sung** -> **Tùy chọn nhà phát triển** và bật các tùy chọn ở dưới. Sau khi bật xong các tùy chọn đó, nên khởi động lại máy để đảm bảo nó hoạt động.

![1702889912099](image/react-native-setup/1702889912099.png)

### Trên PC hoặc laptop

- Trên máy tính, tải và cài đặt ứng dụng [Vysor](https://www.vysor.io/):

![1702888815446](image/react-native-setup/1702888815446.png)

- Sau khi cài đặt thành công, mở ứng dụng Vysor lên, nếu ta đã cắm dây cáp USB và bật chế độ Debug via USB trên điện thoại, thì sẽ như hình dưới. Bấm vào nút Play (màu đỏ) để mở thiết bị Android trên máy tính:

![1702891361660](image/react-native-setup/1702891361660.png)

- Sử dụng lệnh sau để kiểm tra các devices hiện đang kết nối với máy tính:

```bash
adb devices
```

![1702890991806](image/react-native-setup/1702890991806.png)

## Khởi tạo project React native

- Sử dụng lệnh sau để khởi tạo project React native:

```bash
npx react-native@latest init MyFirstRNApp
```

- Sau khi khởi tạo xong project, ta sẽ chạy bằng lệnh:

```bash
npm start
```

- Sau đó nhấn phím "a" để nó chạy trên Android. Quá trình chạy lần đầu có thể sẽ hơi lâu (tầm 5 phút).

![1702892496772](image/react-native-setup/1702892496772.png)
