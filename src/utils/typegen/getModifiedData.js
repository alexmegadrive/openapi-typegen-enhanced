/**
 * Замена проблемных сочетаний символов для обхода багов библиотеки openapi-typescript-codegen
 * Библиотека некорректно интерпретирует квадратные скобки,
 * А также String с большой буквы не интерпретируется в тип string
 */
const getModifiedData = (data) => {
    const replaceRules = [
        [/String/g, 'string'],
        [/\[A/g, '.A'],
        [/\[S/g, '.S'],
    ];
    let result = data;
    replaceRules.forEach((rule) => {
        result = result.replace(rule[0], rule[1]);
    });
    return result;
};

module.exports = {
    getModifiedData,
};
