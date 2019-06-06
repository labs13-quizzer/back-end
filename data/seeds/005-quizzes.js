exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('quiz').insert([
    {category: 'Math', type: 'multiple', difficulty: 'medium', question: 'What is the square route of 256?', correct_answer: '16', incorrect_answers: ['12', '14', '15'], points: '2'},
    {category: 'Science', type: 'multiple', difficulty: 'easy', question: 'What is the chemical formula for water?', correct_answer: 'H2O', incorrect_answers: ['H2O2', 'H30', 'HO2'], points: '1'},
    {category: 'English', type: 'multiple', difficulty: 'medium', question: 'Which of these is a correlative conjunction function?', correct_answer: 'Neither/nor', incorrect_answers: ['After', 'Since', 'Although'], points: '2'},
    {category: 'History', type: 'multiple', difficulty: 'medium', question: 'What was the immediate trigger for the start of WWI?', correct_answer: 'Assassination of Archduke Franz Ferdinand', incorrect_answers: ['Assassination of Adolf Hitler', 'Assassination of Benito Mussolini', 'Assassination of Joseph Stalin'], points: '2'},
    {category: 'Math', type: 'multiple', difficulty: 'easy', question: 'Which of these is a non-real number?', correct_answer: '2i', incorrect_answers: ['1', '2990', '-.000002'], points: '1'},
    {category: 'Science', type: 'multiple', difficulty: 'hard', question: 'Brass gets discolored in air because of the presence of which of the following gases in air?', correct_answer: 'Hydrogen sulphide', incorrect_answers: ['Oxygen', 'Carbon dioxide', 'Nitrogen'], points: '3'},
    {category: 'English', type: 'multiple', difficulty: 'easy', question: 'Define the meaning of the idiom used in this question: He passed himself off as a noble man?', correct_answer: 'Pretending to be', incorrect_answers: ['Was looked upon', 'Was regarded as', 'Was thought to be'], points: '1'},
    {category: 'History', type: 'multiple', difficulty: 'medium', question: 'What country gained its independence from the U.S. on July 4, 1946?', correct_answer: 'Philippines', incorrect_answers: ['Cuba', 'Guam', 'Estonia'], points: '2'},
    {category: 'Math', type: 'multiple', difficulty: 'medium', question: 'What is the value of x + x(x^x) when x = 2?', correct_answer: '10', incorrect_answers: ['16', '18', '36'], points: '2'},
    {category: 'Science', type: 'multiple', difficulty: 'hard', question: 'Which of the following is a non metal that remains liquid at room temperature?', correct_answer: 'Bromine', incorrect_answers: ['Phosphorous', 'Chlorine', 'Helium'], points: '3'},
  ]);
};