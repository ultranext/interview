/**
 * const fn = function(params) {
  return axios.get('/api/users', { params }).then(res => {
    return res.data;
   }, err => {
       console.log('reject=', err);
   }).catch(err => {
    console.log('catch=', err);
   });
}
requestRetry(fn, { retries: 3, delay: 1000 })       (params);
 */