class FillInBlank extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
    }

    render(index) {
        return `
            <div>
                <p class="lead font-italic" style="font-size:30px;">
                    Câu ${index}: ${this.content}                     
                </p>
                <input id="answer-${this.id}" type="text" class="form-control w-50"/>
            </div>
        `
    }

    checkExact() {
        let value = document.getElementById(`answer-${this.id}`).value.toLowerCase();
        return value === this.answers[0].content.toLowerCase()
    }

}

const newQuestion1 = new FillInBlank(1, 1, "Not at all", [
        {content: "Monday"},
        {content: "Monday1"},
        {content: "Monday2"},
        {content: "Monday3"},
        {content: "Monday4"},
        {content: "Monday5"},
    ]
)

// console.log(newQuestion1.render())