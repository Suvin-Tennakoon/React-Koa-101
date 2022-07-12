import Router from '@koa/router';
import {deletePOst, get, getAll, save, update} from '../api/posts.api.js';

const postRouter = new Router({
    prefix:'/posts'
});

postRouter.get('/', (ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

postRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

postRouter.get('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

postRouter.put('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

postRouter.del('/:id', (ctx) => {
    const id = ctx.params.id;
    deletePOst(id);
    ctx.status = 204;
});

export default postRouter;