import { Button, Card, Collapse, Container, FormElement, Grid, Loading, Row, Spacer, Text } from "@nextui-org/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import InputText from "../element-utils/input-text";

const HomeIndex = () => {
    const [loading, setLoading] = useState(false);
    const [field1, setField1] = useState('미코 스퀘어 프릴원피스');
    const [field2, setField2] = useState('베이지, 블랙');
    const [field3, setField3] = useState('폴리97, 스판3');
    const [field4, setField4] = useState('신축성 있음, 비침 없음, 안감 있음, 두께감 보통');
    const [field5, setField5] = useState('탄탄한 원단감의 폴리 소재와 통기성이 좋은 린넨 혼용 소재에요');
    const [field6, setField6] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    const [userPrompt, setUserPrompt] = useState(''); // prompt
    const [fashionGenAI, setFashionGenAI] = useState(''); // api 결과

    const handlerFashiongenAi = async (): Promise<void> => {
        setLoading(true);

        // 결과 초기화
        setUserPrompt('');
        setFashionGenAI('');
        setErrorMsg('');

        // validation
        if (!field1) {
            setErrorMsg('상품명을 입력하세요.');
            setLoading(false);
            return;
        }
        if (!field2) {
            setErrorMsg('색상을 입력하세요.');
            setLoading(false);
            return;
        }
        if (!field3) {
            setErrorMsg('소재를 입력하세요.');
            setLoading(false);
            return;
        }
        if (!field4) {
            setErrorMsg('신축성, 비침, 안감유무를 입력하세요.');
            setLoading(false);
            return;
        }
        if (!field5) {
            setErrorMsg('제품 특징을 입력하세요.');
            setLoading(false);
            return;
        }
        if (!field6) {
            setErrorMsg('openAI key를 입력하세요.');
            setLoading(false);
            return;
        }

        // api 호출
        const prompt = `상품명은 "${field1}"이야. 색상은 "${field2}"이야. 소재 구성은 "${field3}"이야. 신축성, 비침, 안감유무는 "${field4}"이야. 상품 특징은 ${field5}. 최대한 길게 설명을 써줘.`;
        const url = 'https://api.openai.com/v1/chat/completions';
        const body = {
            "model": "ft:gpt-3.5-turbo-1106:personal::8fHwVwPs",
            "max_tokens": 1600,
            "messages": [
              {
                "role": "system",
                "content": "의류 상품의 특징을 활용해서 상품 디자인 설명을 써줘"
              },
              {
                "role": "user",
                "content": prompt
              }
            ]
          }

        const headers = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${field6}`,
            }
        };

        const response = await axios.post(url, body, headers);
        console.log(response);

        // api 결과
        if (response?.status === 200) {
            const data = response?.data;
            const choices = data?.choices;
            if (choices) {
                let result = '';
                for (const item of choices) {
                    result += item?.message?.content? item?.message?.content + '\n\n' : '';
                    result += item?.text ? item?.text + '\n\n' : '';
                }
                setFashionGenAI(result);
                setUserPrompt(prompt);
            }
        } else {
            
        }
        setLoading(false);
    }

    const handlerChange1 =  (e: ChangeEvent<FormElement>) => {
        setField1(e.target.value);
    }
    const handlerChange2 =  (e: ChangeEvent<FormElement>) => {
        setField2(e.target.value);
    }
    const handlerChange3 =  (e: ChangeEvent<FormElement>) => {
        setField3(e?.target?.value);
    }
    const handlerChange4 =  (e: ChangeEvent<FormElement>) => {
        setField4(e?.target?.value);
    }
    const handlerChange5 =  (e: ChangeEvent<FormElement>) => {
        setField5(e?.target?.value);
    }
    const handlerChange6 =  (e: ChangeEvent<FormElement>) => {
        setField6(e?.target?.value);
    }

    return (
        <Container style={{maxWidth: 1400, width: '100%', padding: 0, margin: 'auto'}}>
            <Text
                h1
                size={40}
                css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Fashion Gen AI
            </Text>
            <Grid.Container gap={1} style={{padding:0}}>
                <Grid xs={12} lg={4} >
                    <InputText
                        onChange={handlerChange1}
                        value={field1}
                        label="제품명"
                        placeholder="제품명"
                        disable={loading}
                    />
                </Grid>
                <Grid xs={12} lg={4} >
                    <InputText
                        onChange={handlerChange2}
                        value={field2}
                        color='primary'
                        label="색상"
                        placeholder="ex) 블랙, 레드, 아이보리"
                        disable={loading}
                    />
                </Grid>
                <Grid xs={12} lg={4} >
                    <InputText
                        onChange={handlerChange3}
                        value={field3}
                        color='secondary'
                        label="소재"
                        placeholder="ex) 면 80, 레이온 20"
                        disable={loading}
                    />
                </Grid>
                <Grid xs={12} lg={4} >
                    <InputText
                        onChange={handlerChange4}
                        value={field4}
                        color='success'
                        label="신축성, 비침, 안감유무"
                        placeholder="ex) 신축성 좋음, 비침 없음, 안감 없음, 두께감 두꺼움"
                        disable={loading}
                    />
                </Grid>
                <Grid xs={12} lg={4} >
                    <InputText
                        onChange={handlerChange5}
                        value={field5}
                        color='warning'
                        label="제품 특징"
                        placeholder="제품 특징을 한문장으로 표현해주세요"
                        disable={loading}
                    />
                </Grid>
                <Grid xs={12} lg={4} >
                    <InputText
                        onChange={handlerChange6}
                        value={field6}
                        color='error'
                        label="openAI key"
                        placeholder="openAI key"
                        disable={loading}
                    />
                </Grid>
            </Grid.Container>
            <Grid.Container gap={4}>
                <Grid xs={12} justify="center">
                    <Button
                        onClick={handlerFashiongenAi}
                        disabled={loading}
                    >
                        {
                        loading
                        ?
                        <Loading color="currentColor" size="sm" />
                        :
                        'Submit'
                        }
                    </Button>
                </Grid>
                {
                    errorMsg &&
                    // <Grid xs={12} justify="center">
                    //     <Card css={{ $$cardColor: '$colors$error' }}>
                    //         <Card.Header>
                    //             <Text b>Error</Text>
                    //         </Card.Header>
                    //             <Card.Divider />
                    //         <Card.Body>
                    //             <Text>
                    //                 {errorMsg}
                    //             </Text>
                    //         </Card.Body>
                    //     </Card>
                    // </Grid>
                    <Grid xs={12} justify="center">
                        <Text color="error">
                            Error: {errorMsg}
                        </Text>
                    </Grid>
                }
            </Grid.Container>
            <Grid.Container gap={1}>
                {
                    userPrompt &&
                    <Grid xs={12}>
                        <Card color="error">
                            <Card.Header>
                                <Text b>User</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body css={{ py: "$10" }}>
                                <Text>
                                    {userPrompt}
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                }
                {
                    fashionGenAI &&
                    <Grid xs={12}>
                        <Card>
                            <Card.Header>
                                <Text b>FashionGenAI</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body css={{ py: "$10" }}>
                                <Text>
                                    {fashionGenAI}
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>

                }
            </Grid.Container>
        </Container>
    );
}

export default HomeIndex;
