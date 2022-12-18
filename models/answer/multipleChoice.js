class MultipleChoice extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
    }

    render() {

        let answersHTML = ''
        for (let item of this.answers) {
            answersHTML += `
                <div>
                    <input/>
                    <label class="lead">${item.content}</label>
                </div>
            `
        }

        return `
            <div>
                <p class="lead font-italic" style="font-size:30px;">
                    Câu 1: ${this.content}
                </p>
                ${answersHTML}
            </div>
        `
    }
}