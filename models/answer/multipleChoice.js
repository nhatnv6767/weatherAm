class MultipleChoice extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
    }

    render() {
        return `
            <div>
                <p class="lead font-italic" style="font-size:30px;">
                    Câu 1: ${this.content}
                </p>
            </div>
        `
    }
}