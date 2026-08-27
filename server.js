require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const services = require("./data/services");
const states = require("./data/states");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));

app.get("/contact", (req, res) => res.render("contact"));

app.get("/about", (req, res) => res.render("about"));

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).render("contact", {
            status: "Please complete all fields before sending your message."
        });
    }

    if (!process.env.MAIL_USER || !process.env.MAIL_APP_PASSWORD) {
        return res.status(503).render("contact", {
            status: "Email delivery is not configured yet. Please use the email address below."
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_APP_PASSWORD
            }
        });

        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: "sevapoint.com@gmail.com",
            replyTo: email,
            subject: `SevaPoint contact message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`
        });

        res.render("contact", {
            status: "Thanks. Your message has been sent successfully."
        });
    } catch (error) {
        console.error("Contact email error:", error);
        res.status(500).render("contact", {
            status: "We could not send your message. Please try again or use the email address below."
        });
    }
});

app.get("/api/services", (req, res) => res.json(services));

app.get("/services/:id", (req, res) => {
    const service = services.find(s => s.id === parseInt(req.params.id));

    if (!service) {
        return res.status(404).send("Service not found");
    }

    res.render("service-details", { service });
});

app.get("/category/:category", (req, res) => {
    const category = req.params.category;

    const categoryServices = services.filter(
        s => s.category.toLowerCase() === category.toLowerCase()
    );

    res.render("category", {
        category,
        services: categoryServices
    });
});

app.get("/states", (req, res) => {
    res.render("states", {
        states
    });
});

app.get("/states/:id", (req, res) => {
    const state = states.find(
        s => s.id === req.params.id
    );

    if (!state) {
        return res.status(404).send("State / UT not found");
    }

    res.render("state-details", {
        state
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 SevaPoint is running on port ${PORT}`);
});