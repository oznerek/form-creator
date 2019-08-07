export const addQuestion = () => ({
    type: 'ADD_NEW_QUESTION',
    payload: {question:'question', typeValue: 'type'}
});

export const addSubQuestion = (question, wartosc) => ({
    type: 'ADD_SUB_QUESTION',
    payload: {question: question, typeValue:  'type', prevTypeValue: wartosc}
});

export const deleteInput = (inputName) => ({
    type: 'DELETE_QUESTION',
    payload: {input: inputName}
});

export const addInput = (inputName) => ({
    type: 'ADD_INPUT',
    payload: {input: inputName}
})
