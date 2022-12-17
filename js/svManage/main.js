//

const fetchStudents = () => {
    axios({
        url: "https://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
        method: "GET",
    }).then((res) => {
    })
        .catch((err) => {
        })
}