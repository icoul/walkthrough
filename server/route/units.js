import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('units');
})

router.get('/get/:id', (req, res) => {
  res.send(`unit id: ${req.params.id}`);
})

export default router;