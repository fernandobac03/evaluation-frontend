import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../app.service';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls} from 'ol/control.js';
import MousePosition from 'ol/control/MousePosition.js';
import {createStringXY} from 'ol/coordinate.js';
import Collection from 'ol/Collection.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import WKT from 'ol/format/WKT.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import Draw from 'ol/interaction/Draw.js';
import {fromLonLat as fromLL} from 'ol/proj';
import Select from 'ol/interaction/Select.js';
import {click, pointerMove, altKeyOnly} from 'ol/events/condition.js';



declare var ol: any;
@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit, OnChanges {
  wktStringA: string;
  wktstrings: string[];
  constructor(private appser: AppService) { }
  latitude: number = -1.00;
  longitude: number = -79.00;

  features = new Collection();
  current_shape = "point";
  vector;
  draw;
  fill = new Fill({
    color: 'rgba(180, 145, 4,0.6)'
  });
  stroke = new Stroke({
    color: '#b49104',
    width: 5
  });
  // text = new style.Text({
  //   font: '12px Calibri,sans-serif',
  //   fill: new Fill({ color: '#000' }),
  //   stroke: new Stroke({
  //     color: '#fff', width: 2
  //   }),
  //   // get the text from the feature - `this` is ol.Feature
  //   // and show only under certain resolution
  //   text: 'algo'
  // })
  styles = [
    new Style({
      image: new CircleStyle({
        fill: this.fill,
        stroke: this.stroke,
        //text: this.text,
        radius: 7
      }),
      fill: this.fill,
      stroke: this.stroke
    })
  ];
  format = new WKT();
  map;
  raster;

  select = null; // ref to currently selected interaction
  // select interaction working on "pointermove"
  selectPointerMove = new Select({
    condition: pointerMove
  });

  ngOnChanges(changes: SimpleChanges){
    this.changeInteraction();
  }
  ngOnInit() {
  }
  iniciar() {
    this.createVector();
    this.raster = new TileLayer({
      source: new OSM()
    });
    this.map = new Map({
      layers: [this.raster, this.vector],
      target: 'map',
      view: new View({
        center: fromLL([this.longitude, this.latitude]),
        zoom: 7
      })
    });
    //this.setCenter();
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(7);
  }
  addInteraction(shape) {
    this.draw = new Draw({
      features: this.features,
      type: /** @type {ol.geom.GeometryType} */ shape
    });
    this.map.addInteraction(this.draw);
  }
  createVector() {
    this.vector = new VectorLayer({
      source: new VectorSource({ features: this.features }),
      style: this.styles
    });
  }

  prepareFeature(WKT) {
    let newFeature;
    if (!WKT || WKT === '') {
      console.log('No WKT String')
      return;
    } else {
      if (WKT.startsWith('<http://www.opengis.net/def/crs/EPSG/0/4326>')){
        console.log('Eliminando prefix en WKT')
        WKT = WKT.substr(45);
      }
      try {
        newFeature = this.format.readFeature(WKT.toString());
      } catch (err) {
        console.log("No Read WKT ")
      }
    }
    if (!newFeature) {
      console.log('Geometria no ha sido recuperada correctamente')
      return;
    } else {
      this.map.removeLayer(this.vector);
      newFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
      this.features.push(newFeature);
    }
  }
  drawFeature() {
  this.vector = new VectorLayer({
    source: new VectorSource({features: this.features}),
    style: this.styles
  });
  //this.selectGeom(this.current_shape);
  this.map.addLayer(this.vector);
  var derived_feature = this.features.getArray()[0];
  var extent = derived_feature.getGeometry().getExtent();
  var minx = derived_feature.getGeometry().getExtent()[0];
  var miny = derived_feature.getGeometry().getExtent()[1];
  var maxx = derived_feature.getGeometry().getExtent()[2];
  var maxy = derived_feature.getGeometry().getExtent()[3];
  var centerx = (minx + maxx) / 2;
  var centery = (miny + maxy) / 2;

  this.map.setView(new View({
      center: [minx, miny],
      zoom: 15
    })
  );
  //this.map.getView().fit(extent, this.map.getSize());
}


  changeInteraction() {
    if (this.select !== null) {
      this.map.removeInteraction(this.select);
    }
    this.select = this.selectPointerMove;
    if (this.select !== null) {
      this.map.addInteraction(this.select);
      this.select.on('select', function(e) {
       console.log("clik en el Feature");
      });
    }
  }



//   plotWKT(WKTA, WKTB) { //para dibujar dos geometrías al mismo tiempo--- no se utiliza
//     let newFeatureA;
//     let newFeatureB;
//     console.log('Geometría A')
//     console.log(WKTA)
//     console.log('Geometría B')
//     console.log(WKTB)
//
//     if (!WKTA || WKTA === '') {
//       console.log('No WKTA String')
//       return;
//     } else {
//       if (!WKTA.startsWith('POINT')){
//       console.log('Eliminando prefix en WKTA')
//       WKTA = WKTA.substr(45);
//       }
//       try {
//       newFeatureA = this.format.readFeature(WKTA.toString());
//       } catch (err) {
//         console.log("No Read WKT A")
//       }
//     }
//     if (!WKTB || WKTB === '') {
//       console.log('No WKTB String')
//       return;
//     } else {
//       if (!WKTB.startsWith('POINT')){
//         console.log('Eliminando prefix en WKTB')
//         WKTB = WKTB.substr(45);
//       }
//       try {
//         newFeatureB = this.format.readFeature(WKTB.toString());
//       } catch (err) {
//         console.log("No Read WKT B")
//       }
//     }
//     this.features.clear();
//     if (!newFeatureA) {
//     console.log('Geometria A no ha sido recuperada correctamente')
//     return;
//   } else {
//       this.map.removeLayer(this.vector);
//       newFeatureA.getGeometry().transform('EPSG:4326', 'EPSG:3857');
//     this.features.push(newFeatureA);
//   }
//     if (!newFeatureB) {
//       console.log('Geometría B no ha sido recuperada correctamente')
//       return;
//     } else {
//       this.map.removeLayer(this.vector);
//       newFeatureB.getGeometry().transform('EPSG:4326', 'EPSG:3857');
//       this.features.push(newFeatureB);
//     }
//   this.vector = new ol.layer.Vector({
//     source: new ol.source.Vector({features: this.features}),
//     style: this.styles
//   });
//   this.selectGeom(this.current_shape);
//   this.map.addLayer(this.vector);
//   var derived_feature = this.features.getArray()[0];
//   var extent = derived_feature.getGeometry().getExtent();
//   var minx = derived_feature.getGeometry().getExtent()[0];
//   var miny = derived_feature.getGeometry().getExtent()[1];
//   var maxx = derived_feature.getGeometry().getExtent()[2];
//   var maxy = derived_feature.getGeometry().getExtent()[3];
//   var centerx = (minx + maxx) / 2;
//   var centery = (miny + maxy) / 2;
//    this.map.setView(new ol.View({
//        center: [minx, miny],
//        zoom: 13
//      })
//    );
//   //this.map.getView().fit(extent, this.map.getSize());
// }
// mostrarEnMapa() {
//     this.appser.currentWKTs.subscribe(WKTs =>  {
//      const wktA = WKTs[0];
//      const wktB = WKTs[1];
//      this.plotWKT(wktA, wktB);
//     });
//   }
  clearMap() {
    this.features.clear();
    this.map.removeLayer(this.vector);
    this.features.clear();
    this.vector = new VectorLayer({
      source: new VectorSource({ features: this.features }),
      style: this.styles
    });
    //this.selectGeom(this.current_shape);
    this.map.addLayer(this.vector);
  }
  selectGeom(shape) {
    this.current_shape = shape;
    this.map.removeInteraction(this.draw);
    this.addInteraction(shape);
  }



}
