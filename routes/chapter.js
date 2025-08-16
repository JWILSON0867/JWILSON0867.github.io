const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('chapterSelect')
})

//const chapterPublicIDs = [
//    ["1_BLUE_MOON_Ep_1_PG_restart_remaster_grhoab", "1_BLUE_MOON_Ep_1_PG_restart_remaster_grhoab", "1_BLUE_MOON_Ep_1_PG_restart_remaster_grhoab"], 

//    ["BLUE_MOON_Ep_1_PG_1_remaster_oiewlb", "BLUE_MOON_Ep_1_PG_1_remaster_oiewlb", "BLUE_MOON_Ep_1_PG_1_remaster_oiewlb"]
//]

const chaptersData = [
    {
        title: "Blue Moon Ep 1",
        images: [
            "1_BLUE_MOON_Ep_1_PG_restart_remaster_grhoab",
            "BLUE_MOON_Ep_1_PG_1_remaster_oiewlb",
            "BLUE_MOON_Ep_1_PG_2_remaster_xcb2ft"
        ]
    },

    {
        title: "Blue Moon Ep 2",
        images: [
            "BLUE_MOON_Ep_1_PG_1_remaster_oiewlb",
            "BLUE_MOON_Ep_1_PG_1_remaster_oiewlb",
            "BLUE_MOON_Ep_1_PG_1_remaster_oiewlb"
        ]
    }
];


router.route('/:id')

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = id - 1;

    if(index < 0 || index > chaptersData.length) {
        return res.status(404).send("Chapter not found")
    }

    const chapterImages = chaptersData[index].images;
    const chapterTitle = chaptersData[index].title; // array of Cloudinary IDs for this chapter

    res.render('chapterPages', { id, chapterImages, chapterTitle });
})

module.exports = router