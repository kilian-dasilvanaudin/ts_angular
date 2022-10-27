const app=require('./app');
const port = 4567;


app.listen(port, () =>{
    console.log('Listening on %d', port)
});

