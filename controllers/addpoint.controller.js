const axios = require('axios')
module.exports = {
    jun88: (req,res,next)=>{
        let data = JSON.stringify(req.body);
        let config = {
        method: 'post',
        url: 'https://khuyenmai.jun31.com/addpoint',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };
        axios(config)
        .then(function (response) {
            res.json(response.data)
        }).catch(error =>console.log(error));
    },
    hi88: (req,res,next)=>{
        let data = JSON.stringify(req.body);
        let config = {
        method: 'post',
        url: 'https://api.h376.com//addpoint',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}