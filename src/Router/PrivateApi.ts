import express from 'express';
var router = express.Router();

router.get('/',(req,res) => {
    let a = 1/0;
    res.send("hey i am private");
});

export default router;