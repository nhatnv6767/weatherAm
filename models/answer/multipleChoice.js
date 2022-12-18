class MultipleChoice extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
    }

    render(index) {

        let answersHTML = ''
        for (let item of this.answers) {
            answersHTML += `
                <div>
                    <input type="radio" name="answer"/>
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