const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { sequelize } = require('./models/index');
const index = require('./router/index.js');
const http = require('http');
const api = require("./router");
process.env.firebase = './';

const SocketIo = require('./socket.io/socket.io.js');
const admin = require("firebase-admin");

var serviceAccount = require("./firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// const admin_router = require('./router/admin.routes');
// const board_router = require('./router/board.routes');

const app = express();
const { swaggerUi, specs } = require("./swagger/swagger");

app.use("/api", api);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.set('port', process.env.PORT || 9999);
app.set('view engine', 'ejs');
app.set('views', './include');

sequelize.sync({ force: false }) // db sync true일 때, 서버 실행 시마다 테이블을 재생성함.
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'include')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 메인페이지

app.use('/', index);
app.get('/chat', (req, res) => {
  res.render('chat');
});
app.use('*', (req, res) => {
  res.render('404');
});

const server = http.createServer(app);
SocketIo(server); // Socket.IO 모듈 초기화

server.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

// const server = app.listen(app.get('port'), () => {
//   console.log(app.get('port'), '번 포트에서 대기 중');
// });
// SocketIo(server);