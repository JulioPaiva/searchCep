module.exports = (app) => {
    app.get('/auth', async (req, res) => {
        res.status(200).send({ 'token': 'JS_e_Tudo'})
    });
}
