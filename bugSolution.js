```javascript
db.collection('myCollection').updateMany({}, [{$set: {age: parseInt(age)}}]); // Convert age to number if it's a string
db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: 1}}); 
```