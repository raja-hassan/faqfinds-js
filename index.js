const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        questions.forEach((q) => {
            if (q !== question) {
                q.nextElementSibling.classList.remove('show');
            }
        });

        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            answer.classList.add('show');
        }
    });
});
