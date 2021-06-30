import express from 'express';
var router = express.Router();

router.get('/',(req,res) => {
    res.send("hey i am private");
});

export default router;