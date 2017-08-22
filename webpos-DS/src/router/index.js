import Koa from 'koa'
import Router from 'koa-router'
import Request from 'request'

let app = new Koa();
let router = new Router();

router.get('/nihao', function(ctx, next) {
    let d;
    // await Request({ uri: 'webpos.com.cn' }, (err, response, body) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     d = body;
    // })
    ctx.body = 'asdfasdfasdfasdf';
});


app
    .use(router.routes())
    .use(router.allowedMethods());