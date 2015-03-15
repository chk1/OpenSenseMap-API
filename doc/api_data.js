define({ "api": [
  {
    "type": "get",
    "url": "/boxes",
    "title": "Get all SenseBoxes",
    "name": "findAllBoxes",
    "group": "Boxes",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://opensensemap.org:8000/boxes"
      }
    ],
    "filename": "./app.js",
    "groupTitle": "Boxes"
  },
  {
    "type": "get",
    "url": "/boxes/:boxId",
    "title": "Get one SenseBox",
    "name": "findBox",
    "version": "0.0.1",
    "group": "Boxes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "boxId",
            "description": "<p>SenseBox unique ID.</p> "
          }
        ]
      }
    },
    "filename": "./app.js",
    "groupTitle": "Boxes"
  },
  {
    "type": "post",
    "url": "/boxes",
    "title": "Post new SenseBox",
    "description": "<p>Create a new SenseBox.</p> ",
    "version": "0.0.1",
    "group": "Boxes",
    "name": "postNewBox",
    "filename": "./app.js",
    "groupTitle": "Boxes"
  },
  {
    "type": "put",
    "url": "/boxes/:boxId",
    "title": "Update a SenseBox",
    "description": "<p>Modify the specified SenseBox.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "boxId",
            "description": "<p>SenseBox unique ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.1",
    "group": "Boxes",
    "name": "updateBox",
    "filename": "./app.js",
    "groupTitle": "Boxes"
  },
  {
    "type": "get",
    "url": "/boxes/:boxId/sensors",
    "title": "Get all last measurements",
    "description": "<p>Get last measurements of all sensors of the secified SenseBox.</p> ",
    "version": "0.0.1",
    "group": "Measurements",
    "name": "getMeasurements",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "boxId",
            "description": "<p>SenseBox unique ID.</p> "
          }
        ]
      }
    },
    "filename": "./app.js",
    "groupTitle": "Measurements"
  },
  {
    "type": "post",
    "url": "/boxes/:boxId/:sensorId",
    "title": "Post new measurement",
    "description": "<p>Posts a new measurement to a specific sensor of a box.</p> ",
    "version": "0.0.1",
    "group": "Measurements",
    "name": "postNewMeasurement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "boxId",
            "description": "<p>SenseBox unique ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "sensorId",
            "description": "<p>Sensors unique ID.</p> "
          }
        ]
      }
    },
    "filename": "./app.js",
    "groupTitle": "Measurements"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_Users_matze_Development_OpenSenseMap_API_doc_main_js",
    "groupTitle": "_Users_matze_Development_OpenSenseMap_API_doc_main_js",
    "name": ""
  }
] });