const apiKey = "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"
const { Configuration, OpenAIApi } = require("openai");

const express = require('express');
const cors = require('cors');
const app = express();

const configuration = new Configuration({
    apiKey: apiKey
  });
  const openai = new OpenAIApi(configuration);

// CORS 이슈 해결
// let corsOptions = {
//     origin: 'https://www.domain.com',
//     credentials: true
// }
// app.use(cors(corsOptions));
app.use(cors());

// POST 요청 받을수 있게 만듬
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// GET method route
app.get('/', function (req, res) {
    res.send('문구 생성 사이트');
  });

// POST method route
app.post('/generate', async function (req, res) {
    const completion = await openai.createCompletion({
    model: req.body.model,
    max_tokens: req.body.max_tokens,
    tempreature: req.body.tempreature,
    prompt: req.body.prompt
    });
    let resData = completion
    let description = resData.data.choices[0].text
    console.log(resData);
    res.json({"AI": description});
});

app.listen(3000);

// 스윙미 프릴 크롭티
// 아이보리, 베이지, 스카이블루, 그레이, 블랙
// 레이온100
// 소프트한 터치감과 차르르 감기는 레이온100 소재이며 신축성이 좋은 소재감이에요

// 파니 슬릿 세미부츠컷슬랙스
// 폴리90, 스판10
// 베이지, 블랙
// 스판10% 함유로 신축성 좋은 폴리 소재에요