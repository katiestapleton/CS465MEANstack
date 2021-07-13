// GET homepage
const index = (req, res) =>
 {
     res.render ('index', {title: 'Travlr Getaways'});
 }
/* GET home page. */
module.exports = {
    index
};
