const router = require('express').Router();
const File = require('../models/file')


router.get('/:uuid', async (req, res) => {

    try{
        const file = await File.findOne({ uuid: req.params.uuid });

        // If file is not found, we display the error link has been expired
        if(!file){
            return res.render('download', { error: 'Link has been expired.'});
        }
        
        // If there is no problem, we display the following
        return res.render( 'download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })

    // If there is some error, we display something went wrong
    }catch(err){
        return res.render('download', { error: 'Something went wrong.'});
    }

});


module.exports = router;