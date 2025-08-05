const express = require('express');

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const app = express();

app.get("/",function(req, res) {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans);
})

app.listen(3000);

console.log("Server is running on port http://localhost:3000");