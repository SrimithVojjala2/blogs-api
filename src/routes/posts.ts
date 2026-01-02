import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;
