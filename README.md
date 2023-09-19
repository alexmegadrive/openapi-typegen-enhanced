## Скрипт для преобразования Swagger в модели Typescript

Данный скрипт является надстройкой над библиотекой https://www.npmjs.com/package/openapi-typescript-codegen.

При генерации через исходную библиотеку, возможны ошибки из-за некоторых неучтенных моментов, скрипт решает эти моменты, выполняя замену проблемных комбинаций символов, а также проставляя атрибут required на компонентах схемы (без них подобные библиотеки генерируют типы, в которых все ключи опциональны, что в итоге не дает подставит такие типы в готовый код)

Также скрипт доработан для того, чтобы можно было одной командой загружать обновленные модели.

## Использование

Конфигурация расположена в файле getTestApi.js

```
const url = "https://petstore.swagger.io/v2/swagger.json";
const folderPath = "src/models/TestApi/";
const swaggerFilePath = folderPath + "testApi.json";
```

Замените url на путь к JSON-у от Swagger-а, замените folderPath на путь к папке, по которой будут лежать ваши модели, а также замените пути до скрипта и до папки в package.json/

```
"scripts": {
    "typegen": "node ./getTestApi.js && npx openapi --input ./src/models/TestApi/testApi.json --output ./src/models/TestApi/ --exportServices false --exportCore false"
  },
```

Далее, запускайте скрипт командой:

`yarn typegen`

При запуске удалится папка с моделями (при наличии), далее библиотека создаст папку src/models , в которой, в зависимости от вашей конфигурации, будут сами модели, API для них, и core файлы. Ознакомьтесь с конфигурацией здесь https://www.npmjs.com/package/openapi-typescript-codegen.
