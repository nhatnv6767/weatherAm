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
    data.map((item, index) => {
        if (item.questionType === 1) {
            return new MultipleChoice(item.questionType, item.id, item.content, item.answers)
        } else {
            return new FillInBlank(item.questionType, item.id, item.content, item.answers)
        }
    })
}

fetchQuestion().then(() => {
    renderQuestion();
})