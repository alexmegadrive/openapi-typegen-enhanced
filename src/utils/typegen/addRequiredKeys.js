/* eslint-disable no-restricted-syntax */

/** Функция добавления ключа required в компоненты схемы
 * В схемах сваггера отсутствуют атрибуты required в ключах,
 * из-за чего все модели генерируются с необязательными свойствами,
 * и подставить их в код просто так не выходит, изза возникающих ошибок.
 * Данный скрипт решает эту проблему */

function addRequiredKeys(obj) {
    if (obj && typeof obj === 'object') {
        if (obj.components && obj.components.schemas) {
            const { schemas } = obj.components;
            for (const schemaKey in schemas) {
                if (Object.prototype.hasOwnProperty.call(schemas, schemaKey)) {
                    const schema = schemas[schemaKey];
                    if (schema && schema.properties) {
                        const { properties } = schema;
                        schema.required = Object.keys(properties);
                    }
                }
            }
        }
    }
    return obj;
}

module.exports = {
    addRequiredKeys,
};
