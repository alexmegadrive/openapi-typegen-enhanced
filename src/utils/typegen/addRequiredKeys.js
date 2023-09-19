/* eslint-disable no-restricted-syntax */

/** Функция добавления ключа required в компоненты схемы
 * Во некоторых компонентах схем сваггера отсутствуют атрибуты required в ключах
 * (несмотря на то, что на стороне фронтенда они подразумеваются обязательными),
 * и из-за этого все модели генерируются с необязательными свойствами,
 * и замена схем в проекте приводит к поломке кода.
 * Данный скрипт решает эту проблему, добавляя ключ required к компонентам */

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
