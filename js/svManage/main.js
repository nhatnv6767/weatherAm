//

let studentList = []
const fetchStudents = () => {
    axios({
        url: "https://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
        method: "GET",
    })
        .then((res) => {
            studentList = res.data;

        })
        .catch((err) => {
            console.log(err)
        })
}

const renderStudents = () => {
    // giao dien cua 1 sinh vien
    // o trong cap the tr
    for (let student of studentList) {
        console.log(student)
    }
}

fetchStudents()