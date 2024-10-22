const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "API TEST",
      description: "API 테스트 문서입니다.",
    },
    servers: [
      {
        url: "http://localhost:9999", // 요청 URL
      },
      {
        url: "http://43.203.211.103",
      },
    ],
    components: {
      securitySchemes: {
        api_key: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter JWT token',
        },
      },
    },
  },
  apis: ['./router/*.routes.js', './router/*.js', './api/*/*.routes.js'], // Swagger 파일 연동
};

const specs = swaggerJsDoc(options);
console.log("swagger 연결 완료");
const swaggerOptions = {
  swaggerOptions: {
    docExpansion: 'none', // 기본적으로 모든 섹션을 접어서 열립니다.
    persistAuthorization: true, //웹 페이지를 새로고침을 해도 Token 값 유지
    plugins: [{}],
  },

}
// console.log(JSON.stringify(specs, null, 2));
module.exports = { swaggerUi, specs, swaggerOptions };