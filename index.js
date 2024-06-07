const express = require("express");
const bodyParser = require("body-parser");
const Citizen = require("./models/citizen");
const Location = require("./models/location");
const Report = require("./models/report");
const Route = require("./models/route");
const Truck = require("./models/truck");
const User = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Node JS api");
});

// Rutas para ciudadanos
app.get("/api/citizen", (req, res) => {
  Citizen.getAll((err, citizens) => {
    if (err) throw err;
    res.json(citizens);
  });
});

app.get("/api/citizen/:identification", (req, res) => {
  const identification = req.params.identification;
  Citizen.getByIdentification(identification, (err, citizen) => {
    if (err) throw err;
    if (!citizen) return res.status(404).send("Ciudadano no encontrado");
    res.json(citizen);
  });
});

app.post("/api/citizen", (req, res) => {
  const newCitizen = req.body;
  Citizen.create(newCitizen, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.put("/api/citizen/:identification", (req, res) => {
  const identification = req.params.identification;
  const updatedCitizen = req.body;
  Citizen.update(identification, updatedCitizen, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.delete("/api/citizen/:identification", (req, res) => {
  const identification = req.params.identification;
  Citizen.delete(identification, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Rutas para usuarios
app.get("/api/user", (req, res) => {
    User.getAll((err, users) => {
      if (err) throw err;
      res.json(users);
    });
  });
  
  app.get("/api/user/:name", (req, res) => {
    const name = req.params.name;
    User.getById(name, (err, user) => {
      if (err) throw err;
      if (!user) return res.status(404).send("Usuario no encontrado");
      res.json(user);
    });
  });
  
  app.post("/api/user", (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.put("/api/user/:name", (req, res) => {
    const name = req.params.name;
    const updatedUser = req.body;
    User.update(name, updatedUser, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.delete("/api/user/:name", (req, res) => {
    const name = req.params.name;
    User.delete(name, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // Rutas para reportes
app.get("/api/report", (req, res) => {
    Report.getAll((err, reports) => {
      if (err) throw err;
      res.json(reports);
    });
  });
  
  app.get("/api/report/:identification", (req, res) => {
    const identification = req.params.identification;
    Report.getByIdentification(identification, (err, reports) => {
      if (err) throw err;
      res.json(reports);
    });
  });
  
  app.post("/api/report", (req, res) => {
    const newReport = req.body;
    Report.create(newReport, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.put("/api/report/:identification", (req, res) => {
    const identification = req.params.identification;
    const updatedReport = req.body;
    Report.update(identification, updatedReport, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.delete("/api/report/:identification", (req, res) => {
    const identification = req.params.identification;
    Report.delete(identification, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // Rutas para ubicaciones
app.get("/api/location", (req, res) => {
    Location.getAll((err, locations) => {
      if (err) throw err;
      res.json(locations);
    });
  });
  
  app.get("/api/location/:identification", (req, res) => {
    const identification = req.params.identification;
    Location.getById(identification, (err, location) => {
      if (err) throw err;
      if (!location) return res.status(404).send("Ubicación no encontrada");
      res.json(location);
    });
  });
  
  app.post("/api/location", (req, res) => {
    const newLocation = req.body;
    Location.create(newLocation, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.put("/api/location/:identification", (req, res) => {
    const identification = req.params.identification;
    const updatedLocation = req.body;
    Location.update(identification, updatedLocation, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.delete("/api/location/:identification", (req, res) => {
    const identification = req.params.identification;
    Location.delete(identification, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // Rutas para camionetas
app.get("/api/truck", (req, res) => {
    Truck.getAll((err, trucks) => {
      if (err) throw err;
      res.json(trucks);
    });
  });
  
  app.get("/api/truck/:plate", (req, res) => {
    const plate = req.params.plate;
    Truck.getByPlate(plate, (err, truck) => {
      if (err) throw err;
      if (!truck) return res.status(404).send("Camioneta no encontrada");
      res.json(truck);
    });
  });
  
  app.post("/api/truck", (req, res) => {
    const newTruck = req.body;
    Truck.create(newTruck, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.put("/api/truck/:plate", (req, res) => {
    const plate = req.params.plate;
    const updatedTruck = req.body;
    Truck.update(plate, updatedTruck, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.delete("/api/truck/:plate", (req, res) => {
    const plate = req.params.plate;
    Truck.delete(plate, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // Rutas para rutas
app.get("/api/routes", (req, res) => {
    Route.getAll((err, routes) => {
      if (err) throw err;
      res.json(routes);
    });
  });
  
  app.get("/api/routes/:identification", (req, res) => {
    const identification = req.params.identification;
    Route.getByIdentification(identification, (err, route) => {
      if (err) throw err;
      if (!route) return res.status(404).send("Ruta no encontrada");
      res.json(route);
    });
  });
  
  app.post("/api/routes", (req, res) => {
    const newRoute = req.body;
    Route.create(newRoute, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.put("/api/routes/:identification", (req, res) => {
    const identification = req.params.identification;
    const updatedRoute = req.body;
    Route.update(identification, updatedRoute, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.delete("/api/routes/:identification", (req, res) => {
    const identification = req.params.identification;
    Route.delete(identification, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
