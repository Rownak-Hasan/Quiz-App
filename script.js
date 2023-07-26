const correctAnswers = [
  'B',
  'C',
  'B',
  'D',
  'C'
];
const form = document.querySelector('.quiz');
const scoreCard = document.querySelector('.score-card');
const tryAgainBtn = document.querySelector('.reload');
const questions = document.querySelectorAll('.question');

form.addEventListener('submit', (e)=> {

  e.preventDefault();

  let score = 0;

  const userInput = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value
  ]

  userInput.forEach((answer, index)=> {
    if(answer === correctAnswers[index]) {
      score++;
      questions[index].classList.add('correct');
    } else {
      questions[index].classList.add('wrong');
    }
  });

  scoreCard.classList.remove('hide');
  scoreCard.querySelector('p').textContent = `You scored ${score}/5!`;

  tryAgainBtn.addEventListener('click', ()=> {
    location.reload();
  })

  scrollTo(0, 0);

})