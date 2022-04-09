import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const users = [];
router.get('/', (req, res) => {
  res.send(users);
});
router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  console.log(users);
  res.send(`user is added in the data base with the name ${users.name}`);
});

router.get('/:chapterName', (req, res) => {
  const { chapterName } = req.params;

  const found = users.find((user) => user.id == chapterName);

  res.send(found);
});
export default router;
