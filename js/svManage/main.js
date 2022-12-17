//

const fetchStudents = () => {
    axios({
        url: "https://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
        method: "GET",
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}