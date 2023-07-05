import React,{ Component } from 'react';
import { loadModules } from "esri-loader";
import { loadCss } from "esri-loader";

loadCss("https://js.arcgis.com/4.24/esri/themes/light/main.css")

const options = {
  url: "https://js.arcgis.com/4.27/"
};

const styles = {
    container: {
        height: "100vh",
        width: "100vw",
    },
    mapDiv: {
        padding: 0,
        margin: 0,
        height: "100%",
        width: "100%"
    },

};

class App extends Component {

componentDidMount() {
  loadModules(
    ["esri/Map",
    "esri/views/MapView",
    "esri/widgets/Directions",
    "esri/layers/RouteLayer"],
    options
    ).then(([Map, MapView,Directions,RouteLayer]) => {

        const apiKey = "AAPK39acec73f5444fa694c2bf2cb437603afd4sAUJNSBOHFDYYESy9t1lyuU3GwDbHJFvDXipmZ-eshF0QSkfIzSBqlxcq_voX";
        // create the Map
      const routeLayer = new RouteLayer();
        // show the map at the element
        let view = new MapView({
          map: new Map({
            basemap: "topo-vector",
            layers: [routeLayer]
          }
          ),
          container: "viewDiv",
          zoom: 14,
          center: [-118.24, 34.05],
        });
        let directionsWidget = new Directions({
          layer: routeLayer,
          apiKey,
          view
        });
        view.ui.add(
          directionsWidget,{
            view: view,
            position: "top-right"
          },
        );
      }
    );
}

render() {
  return (
      <div className="App">
          <h1>Carte TravelBoost by Asphere</h1>
          <div style={styles.container}>
              <div id="viewDiv" style={styles.mapDiv} />
          </div>
      </div>

  );
}
}

export default App;

