const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./models').sequelize;

const port = 3001;

app.use(express.json());    //index.js에서 json타입의 데이터 처리를 위해 사용
app.use(cors());    // 모든 도메인에서 제한 없이 해당 서버에 요청을 보내고 응답을 받을 수 있음.

const db = require('./models/index');

//라우터
const companyRouter = require('./routes/Company');
const loginRouter = require('./routes/Login');

app.use("/company", companyRouter);
app.use("/login", loginRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {    //port 번호 지정
        console.log(`Server on port: ${port}`);
    });
})