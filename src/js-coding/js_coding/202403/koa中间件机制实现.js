/**
 * const app = new Koa();

const m = async function (context, next) {
  // do sth to handle request
  await next();
  // do sth to handle response
};

app.use(m);
app.use(m1);
app.use(m2);
 */