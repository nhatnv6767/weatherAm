let questionList = []
const fetchQuestion = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        })

        questionList = res.data
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

fetchQuestion().then(() => {
    renderQuestion();
})