## Скрипт для генерации моделей Typescript по Swagger схемам

Данный скрипт является надстройкой над библиотекой https://www.npmjs.com/package/openapi-typescript-codegen.

При генерации через исходную библиотеку напрямую без скрипта, возможны ошибки из-за некоторых неучтенных моментов (например пропуск генерации по схемам, содержащим определенные последовательности в названиях, или остутствие атрибута required в схемах).
Поэтому для прикладных задач был разработан этот скрипт, который решает эти моменты, выполняя замены по заданному набору правил (getModifiedData), и проставляя атрибут required на компонентах схемы (addRequiredKeys).
Структура папок скрипта сделана таким образом, что файлы скрипта и команду для запуска можно сразу скопировать себе в проект и пользоваться. 

Скрипт позволяет через ту же команду производить повторную загрузку моделей в случае изменений на бэкенде (оригинальная библиотека не дает билдить в имеющуюся папку).


## Использование

Для установки зависимостей выполните команду:

`yarn`

Либо:

`npm i`

Конфигурация расположена в файле getTestApi.js

```
const url = "https://petstore.swagger.io/v2/swagger.json";
const folderPath = "src/models/TestApi/";
const swaggerFilePath = folderPath + "testApi.json";
```

В конфигурации замените url на путь к JSON-у от Swagger-а, замените folderPath на путь к папке, по которой будут лежать ваши модели, также замените пути до скрипта и до папки в package.json/, и измените само название файла.

```
"scripts": {
    "typegen": "node ./getTestApi.js && npx openapi --input ./src/models/TestApi/testApi.json --output ./src/models/TestApi/ --exportServices false --exportCore false"
  },
```

Далее, запускайте скрипт командой:

`yarn typegen`

При запуске удалится папка с моделями (при наличии), далее библиотека создает папку src/models , в которой, в зависимости от вашей конфигурации, будут сами модели, API для них, и core файлы. В конфигурации текущего скрипта оставлена только генерация моделей.
Ознакомьтесь с конфигурацией здесь https://github.com/ferdikoomen/openapi-typescript-codegen.
