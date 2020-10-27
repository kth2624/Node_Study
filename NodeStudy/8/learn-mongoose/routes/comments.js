const express = require("express");
const Comment = require("../schemas/comment");

const router = express.Router();

//다큐먼트를 등록하는 라우터
router.post("/", async (req, res, next) => {
  try {
    const comment = await Comment.create({
      //댓글저장
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    const result = await Comment.populate(comment, { path: "commenter" });
    //populate메서드로 프로미스의 결과로 반환된 comment객체에 다른 컬렉션 다큐머트를 불러옴
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router
  .route("/:id")
  .patch(async (req, res, next) => {
    try {
      const result = await Comment.update(
        {
          _id: req.params.id,
        },
        {
          comment: req.body.comment,
        }
      );
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await Comment.remove({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
