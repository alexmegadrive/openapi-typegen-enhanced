const fs = require("fs");

/** Удаление папки со сгенерированными типами  */

function removeFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log(`Папка ${folderPath} не найдена, продолжаю работу.`);
    return;
  }
  fs.rm(folderPath, { recursive: true }, (error) => {
    if (error) {
      if (error.code !== "ENOTEMPTY" && error.code !== "ENOENT") {
        console.error("\nОшибка:", error);
      } else {
        console.log(`Файлы в папке ${folderPath} удалены.`);
      }
    } else {
      console.log(`Папка ${folderPath} удалена.`);
    }
  });
}

module.exports = {
  removeFolder,
};
