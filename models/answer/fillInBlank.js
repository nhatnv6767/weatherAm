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
                <input type="text" class="form-control w-50"/>
            </div>
        `
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