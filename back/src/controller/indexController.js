const signin = (req, res) => {
    res.render('Sign-inup/Login.html');
};

const signup=(req, res) => {
    res.sendFile('../front/Sign-inup/Login.html', { root: __dirname + "/../.." });

};

module.exports = {
    signin,
    signup,
}