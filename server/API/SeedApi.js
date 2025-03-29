const express = require("express");
const SeedModel = require("../schemas/seeds"); // Import the Seed model

const router = express.Router();

// ✅ POST: Add a new seed
router.post("/add", async (req, res) => {
    try {
        const { name, price, quantity, renatlid } = req.body;

        if (!name || !price || !quantity || !renatlid) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newSeed = new SeedModel({ name, price, quantity, renatlid });
        await newSeed.save();

        res.status(201).json({ message: "Seed added successfully", seed: newSeed });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ GET: Fetch all seeds
router.get("/", async (req, res) => {
    try {
        const seeds = await SeedModel.find();
        res.status(200).json(seeds);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ GET: Fetch a specific seed by ID
router.get("/:id", async (req, res) => {
    try {
        const seed = await SeedModel.findById(req.params.id);
        if (!seed) {
            return res.status(404).json({ error: "Seed not found" });
        }
        res.status(200).json(seed);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
