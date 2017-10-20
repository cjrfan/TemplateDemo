// 创建node.js server服务器
// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer(function (req, res) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });
//
// server.listen(port, hostname, function () {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// renderString并不常用
// nunjucks.configure({autoescape: true});
// var html = nunjucks.renderString('Hello {{ username }}', {username: 'cjrfan'});


// nunjucks.configure('views', { autoescape: true });
// nunjucks.render('index.html', { foo: 'bar' });
// 在 node 端，'views' 为相对于当前工作目录 (working directory) 的路径。在浏览器端则为一个相对的 url，最好指定为绝对路径 (如 '/views')。

// 使用render直接渲染文件
// 浏览器端得用 绝对路径
var __href = window.location.href.substring(0,window.location.href.lastIndexOf('views/index.html'));
nunjucks.configure(__href+'template', { autoescape: true });
var html = nunjucks.render('template.html', { name: 'cjrfan', age: 18 });


$('#container').html(html);
