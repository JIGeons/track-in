const express = require('express');
const router = express.Router();
const { memberpassword } = require('../models/index.js');

const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get("/", async(req,res) => {
  const listOfPassword = await memberpassword.findAll({});
  res.json(listOfPassword);
});

router.post('/', async (req, res) => {
  const { companyId, memberId, password } = req.body;

  try {
    const foundMember = await memberpassword.findOne({
      where: {
        companyId: companyId,
        memberId: memberId,
        password: password
      }
    });

    if (foundMember) {
      console.log(`${memberId} 사원님 로그인 성공하셨습니다!`);
      res.json({ success: true });
    } else {
      console.error('로그인에 실패하였습니다.');
      res.status(401).json({ success: false, message: 'Invalid memberId or password' });
    }
  } catch (err) {
    console.error('로그인에 실패하였습니다.', err);
    res.status(500).json({ success: false, message: 'An error occurred while logging in' });
  }
});


module.exports = router;
