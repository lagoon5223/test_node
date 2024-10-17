const swaggerUi = require("swagger-ui-express")
const swaggereJsDoc = require("swagger-jsdoc")


const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "API TEST",
      description:
        "API 테스트 문서입니다.",
    },
    servers: [
      {
        url: "http://localhost:9999", // 요청 URL
      },
      {
        url: "http://43.203.211.103",
      }
    ],
  },
  apis: ['./router/*.routes.js', './router/*.js', './api/*/*.routes.js'], //Swagger 파일 연동
}
const specs = swaggereJsDoc(options)
console.log("swagger 연결 완료")
// console.log(JSON.stringify(specs, null, 2)); 
module.exports = { swaggerUi, specs }
