const jwt = require('jsonwebtoken');

//회원 인증 미들웨어
const UserAuth = (req, res, next) => {
  verifyToken(req, res, next, "USER")
}

//어드민 인증 미들웨어
const AdminAuth = (req, res, next) => {
  verifyToken(req, res, next, "ADMIN")
}



//통합검증 로직
const verifyToken = (req, res, next, type) => {
  // 인증 완료
  try {

    // console.log(type)
    const headers = req.headers
    // console.log(headers)
    const [tokenType, token] = headers?.authorization?.split(" ") // " "기준으로 tokenType = "Bearer", token = "토큰값"으로 만들어줌
    console.log(tokenType)
    // console.log(token)

    if (tokenType !== "Bearer") {
      return res.status(401).json({
        code: 401,
        message: '유효하지 않은 토큰입니다.'
      });
    }
    // console.log(req.headers.authorization.length)
    //req.headers.authorization는 포스트맨에서 authorization키에 있는 value 값을 가져오는 것 <- 토큰을 가져옴
    // const authorization = req.headers.authorization.slice(7,req.headers.authorization.length)//토큰 검사하기 위해 bearer를 없앰
    // console.log(authorization)
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);//verify를 쓰면 토큰을 해석해서 decoded에 해석한 값을 넣어준다.
    
    //verify (토큰,시크릿키) <- 토큰이랑 시크릿키로 토큰이 유효한지 확인하는 것.
    console.log("decoded", decoded)

    if (type === "ADMIN" && decoded.admin_id !== undefined) {
      console.log("관리자만 통과")
      next()
    } else if (type === "USER" && (decoded.user_id !== undefined || decoded.admin_id !== undefined)) {
      console.log("회원과 관리자 모두 통과")
      next()
    } else {
      throw new Error("아이디가 없음")
    }
  }
  // 인증 실패 
  catch (error) {
        if (error.name === 'TokenExpiredError') {
          return res.status(419).json({
            code: 419,
            message: '토큰이 만료되었습니다.'
          });
        }
    
    
    return res.status(401).json({
      code: 401,
      message: error.message
    });
  }
}

module.exports = { UserAuth, AdminAuth }
