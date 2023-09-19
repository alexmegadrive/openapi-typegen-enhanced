const { downloadSchemas } = require("./src/utils/typegen/downloadSchemas.js");
const { removeFolder } = require("./src/utils/typegen/removeFolder.js");

const url = "https://petstore.swagger.io/v2/swagger.json";
const folderPath = "src/models/TestApi/";
const swaggerFilePath = folderPath + "testApi.json";

removeFolder(folderPath);
downloadSchemas(url, swaggerFilePath);
