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
        htmlContent += `
            <tr>
                <td>${student.MaSV}</td>
                <td>${student.HoTen}</td>
                <td>${student.Email}</td>
                <td>${student.SoDT}</td>
                <td>${student.DiemToan}</td>
                <td>${student.DiemLy}</td>
                <td>${student.DiemHoa}</td>
                <td>
                    <button class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>
        `
    }
    // console.log(htmlContent)
    document.getElementById("tableDanhSach").innerHTML = htmlContent
}

const addStudent = () => {
    const studentId = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const idCard = document.getElementById("idCard").value;
    const math = document.getElementById("math").value;
    const physics = document.getElementById("physics").value;
    const chemistry = document.getElementById("chemistry").value;

    const newStudent = new Student(studentId, name, email, phone, idCard, math, physics, chemistry)
    axios({
        url: "https://svcy.myclass.vn/api/SinhVien/ThemSinhVien",
        method: "POST",
        data: newStudent,
    }).then((res) => {
        fetchStudents()
    }).catch((err) => {
        console.log(err)
    })
}

fetchStudents()