export const validationForm = (form) => {
    const validate = new JustValidate(form, {
        errorLabelStyle: {
            color: '#f00'
        },
        errorFieldStyle: {
            borderColor: '#f00'
        },
        errorFieldCssClass: 'invalid',
        errorsContainer: document.querySelector(".employer__error"),
    });

    validate
    .addField('#logo', [
        {
            rule: 'minFilesCount', 
            value: 1,
            errorMessage: "Добавьте логотип",
        },
        {
            rule: 'files', 
            value: {
                files: {
                    extensions: ['jpeg', 'jpg', 'png'],
                    maxSize: 102400,
                    minSize: 10000,
                    types: ['image/jpeg', 'image/jpg', 'image/png'],
                },
            },
            errorMessage: "Размер файла должен быть не больше 100Кб",
        },
    ])
    .addField('#company', [
        {
            rule: 'required', 
            errorMessage: "Заполните название компании",
        },
    ])
    .addField('#title', [
        {
            rule: 'required', 
            errorMessage: "Заполните название вакансии",
        },
    ])
    .addField('#salary', [
        {
            rule: 'required', 
            errorMessage: "Заполните заработную плату",
        },
    ])
    .addField('#location', [
        {
            rule: 'required', 
            errorMessage: "Заполните город",
        },
    ])
    .addField('#email', [
        {
            rule: 'required', 
            errorMessage: "Заполните e-mail",
        },
        {
            rule: 'email', 
            errorMessage: "Введите корректный e-mail",
        },
    ])
    .addField('#description', [
        {
            rule: 'required', 
            errorMessage: "Заполните описание вакансии",
        },
    ])
    .addRequiredGroup("#format", "Выберите формат")
    .addRequiredGroup("#experience", "Выберите опыт")
    .addRequiredGroup("#type", "Выберите занятость");

return validate;
};
