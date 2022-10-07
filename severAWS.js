const express = require("express");
const app = express();
const port = 3003;

const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/say',async(req,res)=>{
    try {
        console.log("Inside app.get(say). keyword=",req.query.keyword);
        const response = await axios ({
            url:  "https://vzmd6hfny1.execute-api.ap-northeast-1.amazonaws.com/default/myHelloFunction?keyword="+req.query.keyword ,
            method:"get",
        });
        console.log("response data:",response.data);
        res.status(200).json(response.data);
    } catch (err) {
        console.log("error:",error);
        res.status(500).json({message:err});
}
});




app.listen(port, () => {
  console.log("App is listening at http://localhost:${port}");
});
