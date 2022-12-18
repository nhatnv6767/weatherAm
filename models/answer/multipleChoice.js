class MultipleChoice extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
    }

    render(index) {

        let answersHTML = ''
        for (let item of this.answers) {
            answersHTML += `
                <div>
                    <input value="${item.id}" class="answer-${this.id}" type="radio" name="answer-${this.id}"/>
                    <label class="lead">${item.content}</label>
                </div>
            `
        }

        return `
            <div>
                <p class="lead font-italic" style="font-size:30px;">
                    Câu ${index}: ${this.content}
                </p>
                ${answersHTML}
            </div>
        `
    }

    checkExact() {
        const inputList = document.getElementsByClassName(`answer-${this.id}`)
        let answerId;
        for (let input of inputList) {
            if (input.checked) {
                // gan id nguoi dung chon vao answerId
                answerId = input.value;
            }
        }

        if (!answerId) {
            return false;
        }
        // so sanh voi id cua dap an
        for (let answer of this.answers) {
            if (answerId === answer.id) {
                // nếu người dùng chọn vào answer nào thì check để trả về exact của câu hỏi đó,
                // kết hợp xem với api sẽ rõ
                return answer.exact
            }
        }

        return false;
    }
}

const newQuestion = new MultipleChoice(1, 1, "Not at all", [
        {content: "Monday"},
        {content: "Monday1"},
        {content: "Monday2"},
        {content: "Monday3"},
        {content: "Monday4"},
        {content: "Monday5"},
    ]
)

// console.log(newQuestion.render())