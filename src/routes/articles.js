import express from 'express';
import Article from '../models/Article.js'

const router = express.Router();

// GET /articles - returns list of all the articles
// GET /articles/{id} - article
// POST /articles - create a new article. {"title": "string", "text": "string", "category": [123, 321]}
// PUT /articles/{id} - update the article {"title": "string", "text": "string", "category": [123, 321]}
// DELETE /articles/{id} - deletes an article

router.get('/latest', async (req, res) => {
    try {
        const query = Article.find({}).sort({createdAt:'desc'}).limit(3);
        const articles = await query.exec()
        res.json(articles);
    } catch (e) {
        res.json({ error: true, message: e })
    }
});

router.get('/category', async (req, res) => {
    const { categoryId } = req.params;
    try {
        const query = Article.find({}).sort({createdAt:'desc'});
        const articles = await query.exec()
        res.json(articles);
    } catch (e) {
        res.json({ error: true, message: e })
    }
});

router.get('/category/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    try {
        const query = Article.find({category: categoryId}).sort({createdAt:'desc'});
        const articles = await query.exec()
        res.json(articles);
    } catch (e) {
        res.json({ error: true, message: e })
    }
});


router.get('/', async (req, res) => {
    try {
        const query = Article.find({}).sort({createdAt:'desc'});
        const articles = await query.exec()
        res.json(articles);
    } catch (e) {
        res.json({ error: true, message: e })
    }
});

router.post('/', async (req, res) => {
    const newArticleData = {
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
        images: req.body.images,
        thumbnail: req.body.thumbnail,
    };
    const article = new Article(newArticleData);
    try {
        const articleEntity = await article.save();
        res.json(articleEntity);
    } catch (e) {
        res.json({ error: true, message: e })
    }

});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const query = Article.findById(id);
        const article = await query.exec();
        if (!article) {
            res.status(404).json({ notFound: true });
            return;
        };
        article.title = req.body.title;
        article.text = req.body.text;
        article.category = req.body.category;
        article.images = req.body.images;
        article.thumbnail = req.body.thumbnail;

        await article.save();
        res.json(article);


    } catch (e) {
        res.json({ error: true, message: e })
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const query = Article.deleteOne({
            _id: id
        });
        await query.exec();
       
       
        res.json({success: true});


    } catch (e) {
        res.json({ error: true, message: e })
    }
});





export default router;