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

/**
 * @desc Get single planet by id
 * @route GET /api/planets
 */
 exports.getSinglePlanet = async (req, res) => {
  try {
    const singlePlanet = await Planet.findByPk(req.params.id);

    if (!singlePlanet) {
      res.status(400).json({
        success: false,
        message: `No planet found`,
      });
    } else {
      res.status(200).json({
        singlePlanet,
        success: true,
        message: `Planet found`,
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
