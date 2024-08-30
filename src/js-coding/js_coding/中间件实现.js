// koa类中间件实现

function use(fn) {
    this.middlewares.push(fn);
}

function compose(middlewares) {
    
}
