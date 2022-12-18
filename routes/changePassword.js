const express = require('express');
const {authMiddleware} = require("../authMiddleware/authMiddleware");
const {passXss} = require("../helpers");
const {changeUserPassword, changeRestaurantPassword} = require("../data/changePassword");
const router = express.Router();
router.use(authMiddleware);
router.route('/').get((req, res) => {
    res.render('changePassword', {layout: req._user.isUser ? 'user' : 'restaurant', title: "Change Password"});
}).post(async (req, res) => {
    passXss(req.body);
    try {
        const {prevPassword, password} = req.body;
        if (req._user.isUser) {
            await changeUserPassword(req._user.id, prevPassword, password);
        } else {
            await changeRestaurantPassword(req._user.id, prevPassword, password);
        }
        res.render('changePassword', {
            layout: req._user.isUser ? 'user' : 'restaurant',
            title: "Change Password",
            success: "Password successfully changed"
        });
    } catch (e) {
        res.status(400).render('changePassword', {
            layout: req._user.isUser ? 'user' : 'restaurant', title: "Change Password", error: e
        });
    }
})
module.exports = router;
