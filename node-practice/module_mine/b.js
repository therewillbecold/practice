console.log('我是B');

function Bfn(){
    return '我是b的function'
}

exports.Bfn = Bfn;
exports.name = 'bbbb'

// 等价于
// module.exports = {
//     Bfn: Bfn,
//     name: 'bbb'
// }


