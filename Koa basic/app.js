import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import postsRouter from "./router/posts.router.js";

const app = new Koa();
app.use(bodyParser());

app.use(postsRouter.routes())
    .use(postsRouter.allowedMethods());

app.use(ctx => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = '<h3>Not found</h3>';
    ctx.status = 404;
});

app.listen(3000, () => {
    console.log('Application running on port 3000');
});