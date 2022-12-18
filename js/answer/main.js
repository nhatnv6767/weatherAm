let questionList = []
const fetchQuestion = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        })
        return res.data;

    } catch (e) {
        console.log(e)
    }
}

const renderQuestion = () => {
    let htmlContent = "";
    for (let i in questionList) {
        // +i nghia la chuyen tu chuoi len so
        htmlContent += questionList[i].render(+i + 1)
    }

    document.getElementById("questionsContainer").innerHTML = htmlContent;
}
// mac dinh khong truyen vao thi la mang []
const mapData = (data = []) => {
    questionList = data.map((item, index) => {
        const {questionType, id, content, answers} = item
        if (item.questionType === 1) {
            return new MultipleChoice(questionType, id, content, answers)
        } else {
            return new FillInBlank(questionType, id, content, answers)
        }
    })
}

const submit = () => {
    let result = 0;
    for (let item of questionList) {
        if (item.checkExact()) {
            result++;
        }
    }

    alert("Kết quả: " + result + "/" + questionList.length)
}

fetchQuestion().then((data) => {
    mapData(data)
    renderQuestion();
})