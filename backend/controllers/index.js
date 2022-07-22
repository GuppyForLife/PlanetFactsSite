const Planet = require("../models/Planet");

/**
 * @desc Gets all planets
 * @route GET /api/planets
 */
exports.getAllPlanets = async (req, res) => {
  try {
    const planets = await Planet.findAll();

    if (!planets) {
      res.status(400).json({
        success: false,
        message: `No planets found`,
      });
    } else {
      res.status(200).json({
        planets,
        success: true,
        message: `All planets found`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `- Error: ${error.message}`,
    });
  }
};
