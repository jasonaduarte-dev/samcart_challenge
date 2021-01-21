'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('samcart_challenge node.js server');
});

//----------------------------------------
//cars
//----------------------------------------
app.get('/cars', function (req, res) {
        res.send('select a car<br><br><a href="cars/JHK290Xj">Ford F10</a><br><a href="cars/fWI37Ia">Toyota Camry</a><br><a href="cars/1i3xjRIIC">Toyota Rav4</a><br><a href="cars/dku43920s">Ford Bronco</a>');
});

//----------------------------------------
//cars/id
//----------------------------------------
app.get('/cars/:car_id', function (req, res) {
      

	//Data (This would in a real-world scenario be a collection in a document store. (MongoDB)
	//I would let the db.cars.findOne({id:req.params.car_id},{}); find the record and return the results to the js.
	//
	//
	//Milage (mi)
	//Price (cents)

	var objects = [
		{
			"Make":"Ford",
			"Model":"F10",
			"Package":"Base",
			"Color":"Silver",
			"Year":"2010",
			"Category":"Truck",
			"Mileage":"120123",
			"Price":"1999900",
			"id":"JHK290Xj"
		},
                {
			"Make":"Toyota",
	                "Model":"Camry",
	                "Package":"SE",
        	        "Color":"White",
                	"Year":"2019",
	                "Category":"Sedan",
        	        "Mileage":"3999",
                	"Price":"2899000",
	                "id":"fWI37Ia"
		},
                {
			"Make":"Toyota",
	                "Model":"Rav4",
	                "Package":"XSE",
        	        "Color":"Red",
                	"Year":"2018",
	                "Category":"SUV",
        	        "Mileage":"24001",
                	"Price":"2275000",
	                "id":"1i3xjRIIC"
		},
                {
			"Make":"Ford",
	                "Model":"Bronco",
	                "Package":"Badlands",
        	        "Color":"Burnt Orange",
                	"Year":"2022",
	                "Category":"SUV",
        	        "Mileage":"1",
                	"Price":"4499000",
	                "id":"dku43920s"
		}
	];

	var results = [];

	for(var i=0; i<objects.length; i++) {

		if(req.params.car_id == objects[i].id) {
			console.log('car found - ' + objects[i].id);
			results.push(objects[i]);
		}
	}

        res.send(results);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
