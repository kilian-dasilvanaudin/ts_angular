const express =  require('express');
const app = express();
const cors = require('cors');
app.use(cors());

friends = [
    { name: 'Oscar'},
    { name: 'Timothy'},
    { name: 'Timour'},
]

// listFriends = [{friends}];
// console.log(friends);
// console.log(listFriends);

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});


app.get('/api/friends', (req, res) => {
    res.send({friends})
});


app.post('/api/friend', (req, res) => {
    let name = req.query.name;
    friends.push({name});
    res.sendStatus(201);
});


app.delete('/api/friend', (req, res) => {
    let ixdFriend = req.query.name;    
    const hasSameName = (friend) => friend.name === ixdFriend;
    let indexOFItem = friends.findIndex(hasSameName);
    if (indexOFItem == -1){
        res.sendStatus(402);
    }else{
        friends.splice(indexOFItem,1);
        res.sendStatus(202);
    }
    
});

module.exports = app;
