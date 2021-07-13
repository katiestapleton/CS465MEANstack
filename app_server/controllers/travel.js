// GET travel view
const travel = (req, res) => { 
    pageTitle = process.env.npm_packages_websiteTitle + ' - Travel';
    res.render('travel', { title: pageTitle}); 
};

module.exports = {
    travel
};