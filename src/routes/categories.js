import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        
        const query = Category.find({});
        const categories = await query.exec();
        res.json(categories);
    } catch(e) {
        res.json({error: true, message: e});
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {        
        const query = Category.findOne({_id: id});
        const categories = await query.exec();
        res.json(categories);
    } catch(e) {
        res.json({error: true, message: e});
    }
});

router.post('/', async (req, res) => {
    const newCategoryData = {
        title: req.body.title,        
    };
    const category = new Category(newCategoryData);
    try {
        const categoryEntity = await category.save();
        res.json(categoryEntity);
    } catch(e) {
        res.json({error: true, message: e});
    }
});

// router.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const query = Category.findById(id);
//         const category = await query.exec();
//         if (!category) {
//             res.status(404).json({notFound: true});
//             return;
//         }
//         // updates the ojbect proerties
//         category.title = req.body.title;    
//         await category.save(); // triggers the save in the database
//         res.json(category);
//     } catch(e) {
//         res.json({error: true, message: e});
//     }
// });

// router.delete('/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const query = Category.deleteOne({
//             _id: id
//         });
//         await query.exec();
        
//         res.json({success: true});
//     } catch(e) {
//         res.json({error: true, message: e});
//     }
// });

export default router;