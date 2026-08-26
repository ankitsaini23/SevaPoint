const express = require("express");
const services = require("./data/services");
const states = require("./data/states");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));

app.get("/api/services", (req, res) => res.json(services));

app.get("/services/:id", (req, res) => {
    const service = services.find(s => s.id === parseInt(req.params.id));
    if (!service) return res.status(404).send("Service not found");
    res.render("service-details", { service });
});

app.get("/category/:category", (req, res) => {
    const category = req.params.category;
    const categoryServices = services.filter(
        s => s.category.toLowerCase() === category.toLowerCase()
    );
    res.render("category", { category, services: categoryServices });
});

app.get("/states", (req, res) => res.render("states", { states }));

app.get("/states/:id", (req, res) => {
    const state = states.find(s => s.id === req.params.id);
    if (!state) return res.status(404).send("State / UT not found");
    res.render("state-details", { state });
});

app.listen(PORT, () => {
    console.log(`🚀 SevaPoint is running at http://localhost:${PORT}`);
});
