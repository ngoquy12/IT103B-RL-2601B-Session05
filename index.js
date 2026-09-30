// Thao các tác tạo chuỗi
let fullname = "Nguyễn Văn A";
let email = "nva@gmail.com";

console.log("Họ và tên: ", fullname);
console.log("Độ dài của chuỗi là: ", fullname.length);

// Thao các trích xuất ký tự trong 1 chuỗi
console.log("Lấy ra ký tự g trong họ tên: ", fullname[1]);
console.log("Lấy ra ký tự V trong họ tên: ", fullname[7]);
console.log("Ký tự cuối của chuỗi họ tên: ", fullname[fullname.length - 1]);

// Duyệt ra tất cả các ký tự có trong chuỗi, tính cả ký tự khoảng trắng
for (let index = 0; index < fullname.length; index++) {
  console.log(fullname[index]);
}

// charAt()
console.log("Truy xuất không an toàn", fullname[100]);
console.log("Truy xuất an toàn: ", fullname.charAt(100));

// slice() - Cắt chuỗi
console.log("Cắt chuỗi: ", fullname.slice(0, 4));

// Chuẩn hóa làm sạch chuỗi
const className = "  hn-k26-cntt6   ";
console.log("Chuỗi className ban đầu: ", className);

const cleanClassName = className.trim().toUpperCase();
console.log("Chuỗi className sau khi làm sạch: ", cleanClassName);

// Các phương thức tìm kiếm chuỗi
// Tìm kiếm đầu chuỗi
console.log(
  "Tìm kiếm ký tự hn trong chuỗi cleanClassName: ",
  className.trim().startsWith("hn"),
);

// Tìm kiếm chuỗi ở 1 vị trí bất kỳ
console.log(
  "Tìm kiếm ở vị trí bất kỳ trong chuỗi: ",
  cleanClassName.includes("k27"),
);

// Tìm kiếm cuối chuỗi
console.log(
  "Tìm kiếm ký tự hn trong chuỗi cleanClassName: ",
  className.trim().endsWith("cntt6"),
);
