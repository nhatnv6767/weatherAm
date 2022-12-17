//

let studentList = []
const fetchStudents = () => {
    axios({
        url: "https://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
        method: "GET",
    })
        .then((res) => {
            studentList = res.data;
            renderStudents()
        })
        .catch((err) => {
            console.log(err)
        })
}

const renderStudents = () => {
    // giao dien cua 1 sinh vien
    // o trong cap the tr
    let htmlContent = ""
    for (let student of studentList) {
        console.log(student)
        htmlContent += `
            <tr>
                <td>${student.MaSV}</td>
                <td>${student.HoTen}</td>
                <td>${student.Email}</td>
                <td>${student.SoDT}</td>
                <td>${student.DiemToan}</td>
                <td>${student.DiemLy}</td>
                <td>${student.DiemHoa}</td>
                <td></td>
                
            </tr>
        `
    }
}

fetchStudents()