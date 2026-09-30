// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

// Dọn dẹp khoảng trắng
const cleanAppointmentCode = rawAppointmentCode.trim().toUpperCase(); // Xóa khoảng trắng và chuyển đổi thành in hoa

const isValidPrefix = cleanAppointmentCode.startsWith("MED-");

const departmentCode = cleanAppointmentCode.slice(4, 7);
const appointmentNumber = cleanAppointmentCode.slice(8, 12); // Tăng số thứ tự gọi khám để linh hoạt

const formattedPatientName = cleanPatientName.trim().toUpperCase();
const normalizedCode = cleanAppointmentCode.toUpperCase();
const isCodeValid = normalizedCode.startsWith("MED-");

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode.toUpperCase());
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);
