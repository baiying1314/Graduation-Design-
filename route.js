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
var plans = [{
    id: 1,
    course: '高数',
    school: '西安邮电大学',
    long: 8,
    teacher: 'lisa',
    hopeGrade: 60,
    date: '2018-9-4',
    examTime: '2018-10-2',
    AB: '是',
    rule: '闭卷'
},
    {
        id: 2,
        course: '离散',
        school: '西安邮电大学',
        long: 8,
        teacher: 'lisa',
        hopeGrade: 60,
        date: '2018-9-3',
        examTime: '2018-10-1',
        AB: '否',
        rule: '闭卷'
    },
    {
        id: 3,
        course: '软件工程',
        school: '西安邮电大学',
        long: 20,
        teacher: 'marry',
        hopeGrade: 80,
        date: '2017-9-4',
        examTime: '2017-9-10',
        AB: '否',
        rule: '闭卷'
    },
    {
        id: 4,
        course: 'c语言',
        school: '西安邮电大学',
        long: 8,
        teacher: '哈哈',
        hopeGrade: 90,
        date: '2018-9-4',
        examTime: '2018-10-2',
        AB: '否',
        rule: '闭卷'
    },
    {
        id: 5,
        course: 'linux',
        school: '西安邮电大学',
        long: 8,
        teacher: 'lisa',
        hopeGrade: 88,
        date: '2018-5-8',
        examTime: '2018-6-2',
        AB: '是',
        rule: '闭卷'
    }
];
router.get('/professions', (req, res)=> {
    res.send(professions);
});

router.get('/requirments', (req, res)=> {
    res.send(datas);
});

router.patch('/point', (req, res)=> {
    console.log(req.body);
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
    datas.pop();
    res.sendStatus(200);
});

router.post('/requirment', (req, res)=> {
    res.sendStatus(200);
});

router.post('/profession', (req, res)=> {
    res.sendStatus(200);
});

router.get('/examPlans', (req, res)=> {
    res.send(plans);
});
var planDetils = [
    {
        big: 1,
        small: 1,
        pointNum: 1,
        grade: 6,
        avr: 4,
        points: [{point: '2.1', grade: 6}],
        content: 'sffsf',
        cengci: 'base',
        type: 'a'
    }, {
        big: 3,
        small: 4,
        pointNum: 5,
        grade: 10,
        avr: 8,
        points: [{point: '2.1', grade: 2}, {point: '1.3', grade: 2}, {point: '1.3', grade: 2}, {
            point: '1.3',
            grade: 3
        }, {point: '1.3', grade: 1}],
        content: '1111',
        cengci: 'base',
        type: 'a'
    }, {
        big: 2,
        small: 1,
        pointNum: 3,
        grade: 3,
        avr: 2,
        points: [{point: '2.1', grade: 1}, {point: '1.3', grade: 1}, {point: '2.3', grade: 1}],
        content: 'jjjjj',
        cengci: 'base',
        type: 'a'
    }];
router.get(`/planDetils`, (req, res)=> {
    res.send(planDetils);
});

router.delete('/plan', (req, res)=> {
plans.pop();
   res.sendStatus(200);
});

module.exports = router;