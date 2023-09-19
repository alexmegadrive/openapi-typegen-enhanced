const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { addRequiredKeys } = require("./addRequiredKeys.js");
const { getModifiedData } = require("./getModifiedData.js");

/** Загрузка Swagger схемы с URL и выполнение обработки */

async function downloadSchemas(url, swaggerFilePath) {
  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const dataWithRequiredKeys = addRequiredKeys(response.data);
      const stringifiedData = JSON.stringify(dataWithRequiredKeys);
      const modifiedData = getModifiedData(stringifiedData);

      const swaggerFileDir = path.dirname(swaggerFilePath);
      // Создание директории, если она не существует
      if (!fs.existsSync(swaggerFileDir)) {
        fs.mkdirSync(swaggerFileDir, { recursive: true });
      }

      fs.writeFileSync(swaggerFilePath, modifiedData);

      console.log("Файл Swagger успешно загружен.");
    } else {
      console.error("Не получилось скачать файл:", response.status);
    }
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
}

/* После этого второй командой из скрипта package.json идет обработка загруженного файла ,
  в результате чего создается новая папка src/models/api */

module.exports = {
  downloadSchemas,
};
