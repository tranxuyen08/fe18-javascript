var fields = {
    email: {
        message: "Nhập địa chỉ hợp lệ.",
        required: "Yêu cầu nhập địa chỉ email.",
        isEmail: "Địa chỉ email không hợp lệ."
    },
    password: {
        required: "Yêu cầu nhập password."
    },
    repassword: {
        required: "Yêu cầu nhập lại password.",
        noMatch: ["Password không trùng khớp.", "password"]
    },
    first_name: {
        required: "Yêu cầu nhập thông tin."
    },
    last_name: {
        required: "Yêu cầu nhập thông tin."
    },
    zipcode: {
        message: "Nhập theo định dạng 5 số hoặc 9 số.",
        required: "Yêu cầu nhập mã ZIP code.",
        isZip: "Mã ZIP code không hợp lệ."
    },
    phone: {
        message: "Nhập theo định dạng (+84) 0000-111-222.",
        required: "Yêu cầu nhập số điện thoại.",
        isPhone: "Số điện thoại không hợp lệ."
    },
    card_number: {
        message: "Nhập theo định dạng 1111-2222-3333-4444.",
        required: "Yêu cầu nhập số thẻ.",
        isCard: "Số thẻ không hợp lệ."
    },
    date: {
        message: "Nhập theo định dạng mm/yyyy.",
        required: "Yêu cầu nhập ngày hết hạn.",
        isDate: "Ngày hết hạn không hợp lệ.",
        hasExpired: "Thẻ đã hết hạn."
    }
};