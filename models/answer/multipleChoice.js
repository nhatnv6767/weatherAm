class MultipleChoice extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
    }

    render() {
        return `
            <div>
                <p>
                    Some kind of question
                </p>
            </div>
        `
    }
}