const fetchQuestion = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        })
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

fetchQuestion()