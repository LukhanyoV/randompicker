const express = require("express")
const app = express()

app.engine("hbs", require("express-handlebars").engine({
    defaultLayout: "main",
    extname: "hbs"
}))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/random", (req, res) => {
    const {items} = req.query
    res.render("random", {
        items: items.split(",").map(item => item.trim())
    })
})

module.exports = app

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 App running at http://localhost:${PORT}`))