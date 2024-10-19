const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// Add new service
router.post('/add', async (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: 'Service name and price are required' });
  }
  try {
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get all services
router.get('/all', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update service
router.put('/update/:id', async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, { name, description, price }, { new: true });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete service
router.delete('/delete/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;