const express = require('express');
const router = express.Router();

var datas = [
    {
        profession_level_id: 1,
        profession: "软件工程",
        level: '2014',
        gra_requirements: '动手实践能力',
        index_point: "iyrieyr"
    },
    {
        profession_level_id: 1,
        profession: "软件工程",
        level: '2014',
        gra_requirements: '动手实践能力',
        index_point: "uiuoio"
    },
    {
        profession_level_id: 2,
        profession: "软件工程",
        level: '2015',
        gra_requirements: '动手实践能力',
        index_point: "11111"
    },
    {
        profession_level_id: 3,
        profession: "软件工程",
        level: '2014',
        gra_requirements: '写作能力',
        index_point: "22222"
    },
    {
        profession_level_id: 4,
        profession: "软件工程",
        level: '2015',
        gra_requirements: '写作能力',
        index_point: "fdfdf"
    },
    {
        profession_level_id: 5,
        profession: "网络工程",
        level: '2015',
        gra_requirements: '写作能力',
        index_point: "yuytu"
    },
    {
        profession_level_id: 6,
        profession: "网络工程",
        level: '2017',
        gra_requirements: '写作能力',
        index_point: "dgfdg"
    },
    {
        profession_level_id: 7,
        profession: "网络工程",
        level: '2015',
        gra_requirements: 'xx能力',
        index_point: "dferett"
    }
];
var deArr = [{
    profession_level_id: 1,
    profession: "软件工程",
    level: '2014',
    gra_requirements: '动手实践能力',
    index_point: "uiuoio"
},
    {
        profession_level_id: 2,
        profession: "软件工程",
        level: '2015',
        gra_requirements: '动手实践能力',
        index_point: "11111"
    },
    {
        profession_level_id: 3,
        profession: "软件工程",
        level: '2014',
        gra_requirements: '写作能力',
        index_point: "22222"
    },
    {
        profession_level_id: 4,
        profession: "软件工程",
        level: '2015',
        gra_requirements: '写作能力',
        index_point: "fdfdf"
    },
    {
        profession_level_id: 5,
        profession: "网络工程",
        level: '2015',
        gra_requirements: '写作能力',
        index_point: "yuytu"
    },
    {
        profession_level_id: 6,
        profession: "网络工程",
        level: '2017',
        gra_requirements: '写作能力',
        index_point: "dgfdg"
    },
    {
        profession_level_id: 7,
        profession: "网络工程",
        level: '2015',
        gra_requirements: 'xx能力',
        index_point: "dferett"
    }
];

var professions = ["软件工程", "网络工程", "计算机科学与技术", "行政管理", "人力资源"];
router.get('/professions', (req, res)=> {
    res.send(professions);
});

router.get('/requirments',(req,res)=>{
    res.send(datas);
});

router.patch('/point',(req,res)=>{
    datas = [
        {
            profession_level_id: 1,
            profession: "软件工程",
            level: '2014',
            gra_requirements: '动手实践能力',
            index_point: "111"
        },
        {
            profession_level_id: 1,
            profession: "软件工程",
            level: '2014',
            gra_requirements: '动手实践能力',
            index_point: "uiuoio"
        },
        {
            profession_level_id: 2,
            profession: "软件工程",
            level: '2015',
            gra_requirements: '动手实践能力',
            index_point: "11111"
        },
        {
            profession_level_id: 3,
            profession: "软件工程",
            level: '2014',
            gra_requirements: '写作能力',
            index_point: "22222"
        },
        {
            profession_level_id: 4,
            profession: "软件工程",
            level: '2015',
            gra_requirements: '写作能力',
            index_point: "fdfdf"
        },
        {
            profession_level_id: 5,
            profession: "网络工程",
            level: '2015',
            gra_requirements: '写作能力',
            index_point: "yuytu"
        },
        {
            profession_level_id: 6,
            profession: "网络工程",
            level: '2017',
            gra_requirements: '写作能力',
            index_point: "dgfdg"
        },
        {
            profession_level_id: 7,
            profession: "网络工程",
            level: '2015',
            gra_requirements: 'xx能力',
            index_point: "dferett"
        }
    ];
    res.sendStatus(200);
});
router.delete(`/profession`, (req, res)=> {
    datas = [
        {
            profession_level_id: 1,
            profession: "软件工程",
            level: '2014',
            gra_requirements: '动手实践能力',
            index_point: "uiuoio"
        },
        {
            profession_level_id: 2,
            profession: "软件工程",
            level: '2015',
            gra_requirements: '动手实践能力',
            index_point: "11111"
        },
        {
            profession_level_id: 3,
            profession: "软件工程",
            level: '2014',
            gra_requirements: '写作能力',
            index_point: "22222"
        },
        {
            profession_level_id: 4,
            profession: "软件工程",
            level: '2015',
            gra_requirements: '写作能力',
            index_point: "fdfdf"
        },
        {
            profession_level_id: 5,
            profession: "网络工程",
            level: '2015',
            gra_requirements: '写作能力',
            index_point: "yuytu"
        },
        {
            profession_level_id: 6,
            profession: "网络工程",
            level: '2017',
            gra_requirements: '写作能力',
            index_point: "dgfdg"
        },
        {
            profession_level_id: 7,
            profession: "网络工程",
            level: '2015',
            gra_requirements: 'xx能力',
            index_point: "dferett"
        }
    ];
    res.sendStatus(200);
});

router.post('/requirment',(req,res)=>{
    res.sendStatus(200);
});

router.post('/profession',(req,res)=>{
    res.sendStatus(200);
});


module.exports = router;