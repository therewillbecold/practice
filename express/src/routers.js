const path = require('path')
const _ = require('lodash')
const studentsDataPath = path.resolve(__dirname, 'data/students.json')
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var writeFile = require('write');

module.exports = function (app) {

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    // 路由 Router

    app.get('/', function (req, res) {
        res.render('index', { username: '冰冰', messagenum: 56 })
    })

    app.get('/news', function (req, res) {
        res.send('这是新闻')
    })

    app.get('/games', function (req, res) {
        res.render('games', { games: ['斗地主', '消消乐', '麻将'] })
    })

    app.post('/login', function (req, res) {
        res.send('登陆成功')
    })

    // 渲染同学列表
    app.get('/students', function (req, res) {
        let students = require(studentsDataPath)
        res.render('students.ejs', {students: students})
    })

    // 下载文件
    app.get('/download/students.json', function (req, res) {
        res.download(studentsDataPath)
    })

    // 查询学生信息, :id 可以作为一个参数, 在 req.params中获取到该变量id的值
    app.get('/student/:name', function (req, res) {
        let students = require(studentsDataPath)
        const student = _.filter(students, function (item) {
            return item.name == req.params.name
        })
        res.send(student)
    })

    // 增加一个学生信息
    app.put('/student', function (req, res) {
        const params = req.body;
        console.log('put:', params);
        let students = require(studentsDataPath)
        if (params && params.name) {
            students.push(params)
        }

        writeFile(studentsDataPath, JSON.stringify(students), function (err) {
            if (err) console.log(err);
        });
        res.send('ok')
    })
    // 更新学生信息
    app.post('/student/:num', upload.array(), function (req, res) {
        let students = require(studentsDataPath)
        students[req.params.num] = req.body
        writeFile(studentsDataPath, JSON.stringify(students), function (err) {
            if (err) console.log(err);
        });
        res.send('更改成功')
    })
    // 删除一个学生的信息
    app.delete('/student/:num', function (req, res) {
        let students = require(studentsDataPath);

        students.splice(req.params.num,1);

        writeFile(studentsDataPath, JSON.stringify(students), function (err) {
            if (err) console.log(err);
        });
        res.send('delete this item successfully')
    })

    // ajax 练习数据
    app.get('/fruits', function (req, res) {
        let fruits = require(path.resolve(__dirname, 'data/fruits.json'))
        res.send({
            status: 0,
            data: fruits
        })
    })


    app.post('/fruits/add', function (req, res) {
        let fruits = require(path.resolve(__dirname, 'data/fruits.json'));
        fruits.push(req.body)
        // 把添加后的数组写到文件中
        writeFile(path.resolve(__dirname, 'data/fruits.json'), JSON.stringify(fruits), function (err) {
            if (err) console.log(err);
        });
        res.send('收到')
    })


    app.all('/all', function (req, res) {
        res.send('all路由收到请求')
    })
}