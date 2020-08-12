const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  " Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

//Funcionalidades
function getSubject(subjectNumber) {
  const arrayPosition = subjects[+subjectNumber - 1];
  return arrayPosition;
}

function convertHourstoMinutes(time) {
  const [hour, minutes] = time.split(":");
  return Number(hour * 60 + minutes);
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHourstoMinutes,
};
