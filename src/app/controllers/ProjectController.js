const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project');
const Task = require('../models/task');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    res.send({ ok: true });
});

router.get('/:projectId', async (req, res) => {
    res.send({ ok: true });
});

router.post('/', async (req, res) => {
    try {
        const project = await Project.create(req.body);

        res.send({ project });
    } catch (err) {
        res.status(400).send({ error: 'Error creating new project' });
    }
});

router.put('/:projectId', async (req, res) => {
    res.send({ ok: true });
});

router.delete('/:projectId', async (req, res) => {
    res.send({ ok: true });
});

module.exports = app => app.use('/projects', router);
