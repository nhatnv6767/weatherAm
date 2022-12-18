let questionList = []
const fetchQuestion = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        })


    } catch (e) {
        console.log(e)
    }
}

const renderQuestion = () => {
    let htmlContent = "";
    for (let item of questionList) {
        htmlContent += item.render()
    }

    document.getElementById("questionsContainer").innerText = htmlContent;
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

fetchQuestion().then(() => {
    renderQuestion();
})