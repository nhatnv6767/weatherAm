//

let studentList = []
const fetchStudents = () => {
    axios({
        url: "https://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
        method: "GET",
    })
        .then((res) => {
            studentList = res.data;
            console.log(studentList)
        })
        .catch((err) => {
            console.log(err)
        })
}

fetchStudents()