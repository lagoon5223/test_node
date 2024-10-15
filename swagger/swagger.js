const swaggerUi = require("swagger-ui-express")
const swaggereJsDoc = require("swagger-jsdoc")


const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "test_node",
      description:
        "프로젝트 설명 Node.js Swaager swagger-jsdoc 방식 RestFul API 클라이언트 UI",
    },
    servers: [
      {
        url: "http://43.203.211.103", // 요청 URL
      },
    ],
  },
  apis: ['./router/*.routes.js', './router/*.js'], //Swagger 파일 연동
}
const specs = swaggereJsDoc(options)
console.log("swagger 연결 완료")
// console.log(JSON.stringify(specs, null, 2)); 
module.exports = { swaggerUi, specs }
