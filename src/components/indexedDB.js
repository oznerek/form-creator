// const addIndexedDB = formData => {
//   let arrQuestions = [];

//   let createForm = formData.createForm;
//   let form = formData.form.question;

//   createForm.map(question => {
//     if (form.values === undefined) {
//       alert(
//         "Pozostaiłeś puste pola. Nie było możliwe poprawne zapisanie danych"
//       );
//     } else {
//       if (question.question.indexOf("_") > -1) {
//         arrQuestions.push(
//           (question = {
//             question: form.values[question.question],
//             answerType: form.values[question.typeValue],
//             condition_question:
//             form.values[`condition`],
//             // form.values[`condition_${question.question}`],
//             conditionAnswer_question:
//               form.values[`conditionAnswer`]
//             //  form.values[`conditionAnswer_${question.question}`]

//           })
//         );
//       } else {
//         arrQuestions.push(
//           (question = {
//             question: form.values[question.question],
//             answerType: form.values[question.typeValue],
//             condition_question: ``,
//             conditionAnswer_question: ``
//           })
//         );
//       }
//     }
//   });
//   return
// };

// export default addIndexedDB;
