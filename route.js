const express = require('express');
const router = express.Router();
const requestServer = '192.168.43.175:3000';

let request = require('superagent');

router.get('/professions', (req, response)=> {
    request.get(`${requestServer}/professions`).end((req, res)=> {
        let professions = res.body.info;
        response.send(professions);
    });
});

router.post('/requirements', (req, response)=> {
    request.post(`${requestServer}/requirements`)
        .send(req.body)
        .end((req, res)=> {
            let professions = res.body.info;
            response.send(professions);
        });
});

router.patch('/point', (req, response)=> {
    request.patch(`${requestServer}/point`)
        .send(req.body)
        .end((req, res)=> {
            let changeResult = res.body;
            response.send(changeResult);
        });
});
router.delete(`/profession`, (req, response)=> {
    request.delete(`${requestServer}/profession`)
        .send(req.body)
        .end((req, res)=> {
            let deleteResult = res.body;
            response.send(deleteResult);
        });
});

router.post('/requirement', (req, response)=> {
    request.post(`${requestServer}/requirement`)
        .send(req.body)
        .end((req, res)=> {
            let addReqResult = res.body;
            response.send(addReqResult)
        });
});

router.post('/examPlans', (req, response)=> {
    request.post(`${requestServer}/examPlans`)
        .send(req.body)
        .end((req, res)=> {
            let selectResult = res.body.info;
            response.send(selectResult)
        });
});


router.delete('/plan', (req, response)=> {
    request.delete(`${requestServer}/plan`)
        .send(req.body)
        .end((req, res)=> {
            let selectPointsResult = res.body;
            response.send(selectPointsResult)
        });
});

router.post('/points', (req, response)=> {
    request.post(`${requestServer}/points`)
        .send(req.body)
        .end((req, res)=> {
            let selectPointsResult = res.body;
            response.send(selectPointsResult)
        });
});

router.post('/plan', (req, response)=> {
    request.post(`${requestServer}/plan`)
        .send(req.body)
        .end((req, res)=> {
            let isSuccess = res.body;
            console.log(isSuccess);
            response.send(isSuccess)
        });
});
module.exports = router;