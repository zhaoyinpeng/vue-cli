<template>
  <div id="t">
    <div id="mapboxgl" ref="basicMapbox"></div>
    <div id="coordinates"></div>
    <div id="info"></div>
    <div id="testBox">
      <div id="test">测试</div>
    </div>
    <div id="buttonbox">
      <!-- <button id="addClick" @click="addClick">添加点击事件</button> -->
      <!-- <button id="removeClick" @click="removeClick">取消点击事件</button> -->
      <button id="addgeojson" @click="addgeojson">添加geojson数据</button>
      <button id="delgeojson" @click="delgeojson">删除geojson数据</button>
      <button id="addIcon" @click="addIcon">添加icon图片到地图上</button>
      <button id="getAllLayer" @click="getAllLayer">获取全部图层信息</button>
    </div>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl";
import MapboxglDraw from 'mapbox-gl-draw';
import * as Turf from '@turf/turf'
export default {
  data() {
    return {
      map: null,
      geoLayer: null,
      geoLayerSource: null
    };
  },
  mounted() {
    this.init();
    console.log(this.map);
    console.log(MapboxglDraw);
    console.log(Turf);
  },
  methods: {
    // 初始化
    init() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoienlwIiwiYSI6ImNqdHRvbG4ybDA3a2I0ZW4ybGF6ZmNmeGIifQ.jcpGDwXpU8wdHSf9R1GnXA";
      var coordinates = document.getElementById("coordinates");
      this.map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: "mapbox://styles/mapbox/streets-v9",
        // style: "mapbox://styles/mapbox/streets-v10",
        center: [-68.13734351262877, 45.137451890638886], // 设置地图中心
        dragRotate: true, //如果为true，则启用了“旋转框”交互，按住右键进行旋转
        zoom: 2 // 设置地图比例
      });

      // 使用定位模块
      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserLocation: true,
          zoom: 14
        })
      );
      window.Map = this.map;
      // 建立一个标记点
      var marker = new mapboxgl.Marker({
        draggable: true
      });
      function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = "block";
        coordinates.innerHTML =
          "Longitude: " + lngLat.lng + "<br />Latitude: " + lngLat.lat;
      }
      marker.on("dragend", onDragEnd);

      // 点击获取经纬度模块&点击标记点
      this.map.on("click", function(e) {
        document.getElementById("info").innerHTML =
          JSON.stringify(e.point) + "<br />" + JSON.stringify(e.lngLat);
        // marker.setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(this.map);
        var features = _this.map.queryRenderedFeatures(e.point);
        console.log(features);
        debugger;
      });
      //   this.map.addControl(
      //     new mapboxgl.MapboxGeocoder({
      //       accessToken: mapboxgl.accessToken
      //     })
      //   );
      var _this = this;
      this.map.on("load", function(e) {
        _this.initSource();
        var draw = new MapboxglDraw({
          displayControlsDefault: false,
          controls: {
            polygon: true,
            trash: true
          }
        });
        _this.map.addControl(draw);

        _this.$nextTick(()=>{
          _this.moveDom();
        });
      });
      this.map.on('resize', function(e){
        console.log('resize' + new Date().getTime());
        _this.moveDom();
      });
      // this.map.on('movestart', function(e){
      //   console.log('movestart' + new Date().getTime());
      // });
      this.map.on('move', function(e){
        console.log('move' + new Date().getTime());
        _this.moveDom();
      });
      this.map.on('moveend', function(e){
        console.log('moveend' + new Date().getTime());
        _this.moveDom();
      });
      // this.map.on('dragstart', function(e){
      //   console.log('dragstart' + new Date().getTime());
      // });
      // this.map.on('drag', function(e){
      //   console.log('drag' + new Date().getTime());
      // });
      this.map.on('dragend', function(e){
        console.log('drag' + new Date().getTime());
        _this.moveDom();
      });
      // this.map.on('render', function(e){
      //   console.log('render' + new Date().getTime());
      // });
      // this.map.on('pitchstart', function(e){
      //   console.log('pitchstart' + new Date().getTime());
      // });
      // this.map.on('pitch', function(e){
      //   console.log('pitch' + new Date().getTime());
      // });
      this.map.on('pitchend', function(e){
        console.log('pitchend' + new Date().getTime());
        _this.moveDom();
      });
    },
    initSource() {
      if (!this.geoLayerSource) {
        this.geoLayerSource = {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-67.13734351262877, 45.137451890638886],
                  [-66.96466, 44.8097],
                  [-68.03252, 44.3252],
                  [-69.06, 43.98],
                  [-70.11617, 43.68405],
                  [-70.64573401557249, 43.090083319667144],
                  [-70.75102474636725, 43.08003225358635],
                  [-70.79761105007827, 43.21973948828747],
                  [-70.98176001655037, 43.36789581966826],
                  [-70.94416541205806, 43.46633942318431],
                  [-71.08482, 45.3052400000002],
                  [-70.6600225491012, 45.46022288673396],
                  [-70.30495378282376, 45.914794623389355],
                  [-70.00014034695016, 46.69317088478567],
                  [-69.23708614772835, 47.44777598732787],
                  [-68.90478084987546, 47.184794623394396],
                  [-68.23430497910454, 47.35462921812177],
                  [-67.79035274928509, 47.066248887716995],
                  [-67.79141211614706, 45.702585354182816],
                  [-67.13734351262877, 45.137451890638886]
                ]
              ]
            }
          }
        };
        this.map.addSource("geoLayerSource", this.geoLayerSource);
        let center = Turf.centerOfMass(this.geoLayerSource.data);//用turf获取面的中心位置
        let xy = this.map.project(center.geometry.coordinates);//获取地图经纬度对应的屏幕像素位置
        debugger;

      }
    },
    addgeojson() {
      //   debugger;
      if (!this.geoLayer) {
        this.geoLayer = {
          id: "maine",
          type: "fill",
          layout: {},
          source: "geoLayerSource",
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8
          }
        };
        this.map.addLayer(this.geoLayer);
      }
    },
    delgeojson() {
      if (this.geoLayer) {
        this.map.removeLayer(this.geoLayer.id);
        this.geoLayer = null;
      }
    },
    addIcon() {
      let _this = this;
      _this.map.loadImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png",
        function(error, image) {
          if (error) throw error;
          _this.map.addImage("cat", image);
          _this.map.addLayer({
            id: "points",
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-68.13734351262877, 45.137451890638886]
                    }
                  }
                ]
              }
            },
            layout: {
              "icon-image": "cat",
              "icon-size": 0.25
            }
          });
        }
      );
    },
    getAllLayer() {
      console.log(this.map.getStyle().layers);
    },
    moveDom() {
      let a = document.getElementById('test');
      let xy = this.map.project([-68.13734351262877, 45.137451890638886]);
      a.style.top = xy.y + 'px';
      a.style.left = xy.x + 'px';
    }

  }
};
</script>
<style>
/* @import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css"); */
@import url("../../../node_modules/mapbox-gl/dist/mapbox-gl.css");
/* @import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.0.9/mapbox-gl-draw.css"); */
@import url("./css/mapbox-gl-draw.css");
#mapboxgl {
  width: 700px;
  height: 500px;
  border: 1px solid #ccc;
}
.coordinates {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 5px 10px;
  margin: 0;
  font-size: 11px;
  line-height: 18px;
  border-radius: 3px;
  display: none;
}
#t{
  position: relative;
}
#testBox{
  width: 0px;
  height: 0px;
  position: absolute;
  top: 0;
  left: 0;
}
#test{
  border: 1px solid #ccc;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  color: skyblue;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
}
</style>
