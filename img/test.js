// Mảng các chuỗi cần tìm kiếm
const danh_sách_sản_phẩm = ["Áo thun trắng", "Quần jean đen", "Áo khoác xám", "Áo sơ mi trắng", "Giày thể thao"];

// Hàm tìm kiếm sản phẩm theo từ khóa
function tìm_kiếm_sản_phẩm(từ_khóa) {
    // Sử dụng phương thức filter() để lọc các phần tử thỏa mãn điều kiện
    const kết_quả_tìm_kiếm = danh_sách_sản_phẩm.filter(sản_phẩm => {
        // Kiểm tra xem từ khóa có tồn tại trong tên sản phẩm không
        return sản_phẩm.toLowerCase().includes(từ_khóa.toLowerCase());
    });

    return kết_quả_tìm_kiếm;
}

// Tìm kiếm sản phẩm có chứa từ khóa "áo"
const kết_quả = tìm_kiếm_sản_phẩm("jean ");

// In ra kết quả tìm kiếm
console.log("Kết quả tìm kiếm:", kết_quả);
