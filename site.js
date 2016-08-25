var manifests = "./manifest.json";
var annotation = "./annotation.json";
jQuery(function() {
  if (typeof manifests === undefined || manifests === null || manifests === "") {
    var manifests = "./manifest.json";
  }
  window.console.log(encodeURIComponent(manifests));
});

$(function() {
  Mirador({
    "id": "viewer",
    "mainMenuSettings": {
      'show': false
    },
    "data": [
      { "manifestUri": manifests, "location": "University of Maryland" }
    ],
    "windowObjects": [
      {
        "loadedManifest": manifests,
        "viewType": "ImageView",
        "displayLayout": false,
        "sidePanel": false,
        "canvasControls": { // The types of controls available to be displayed on a canvas
          "annotations" : {
            "annotationLayer" : true, //whether or not to make annotation layer available in this window
            // "annotationCreation" : true, 
            /*whether or not to make annotation creation available in this window,
                         only valid if annotationLayer is set to True and an annotationEndpoint is defined.
                         This setting does NOT affect whether or not a user can edit an individual annotation that has already been created.*/
            "annotationState" : 'on', //[_'off'_, 'on'] whether or not to turn on the annotation layer on window load
            // "annotationRefresh" : false, //whether or not to display the refresh icon for annotations
          },
          // "imageManipulation" : {
          //   "manipulationLayer" : false,
          // }
      },
      }
    ]
  });
});