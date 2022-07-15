var map = L.map('map').setView([16.41904, 101.16056], 7);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osm = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
}).addTo(map);

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// var road = L.Geoserver.wfs("https://infraplus-ru.org/geoserver/wfs", {
//     layers: "insar:insar_vector_road",
//     onEachFeature: function (feature, layer) {
//         var popupContent = "<table>" +
//             "<tr>" + "<td>" + "<b>" + "ทางหลวงหมายเลข" + "</b>" + "</td>" + "<td>" + feature.properties.route + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "ตอนควบคุม" + "</b>" + "</td>" + "<td>" + feature.properties.control + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "ชื่อตอน" + "</b>" + "</td>" + "<td>" + feature.properties.Name + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "กม. เริ่มต้น" + "</b>" + "</td>" + "<td>" + feature.properties.km_start + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "กม. สิ้นสุด" + "</b>" + "</td>" + "<td>" + feature.properties.km_end + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "ระยะทาง" + "</b>" + "</td>" + "<td>" + feature.properties.length + " กม." + "</td>" + "</tr>" +
//             "</table>"
//         layer.bindPopup(popupContent);
//     }
// });

$.getJSON('assets/geojson/roadnet.geojson', function (data) {
    road.addData(data);
});

var road = L.geoJson(null, {
    onEachFeature: function (feature, layer) {
        var popupContent = "<table>" +
            "<tr>" + "<td>" + "<b>" + "ทางหลวงหมายเลข" + "</b>" + "</td>" + "<td>" + feature.properties.route + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "ตอนควบคุม" + "</b>" + "</td>" + "<td>" + feature.properties.control + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "ชื่อตอน" + "</b>" + "</td>" + "<td>" + feature.properties.Name + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "กม. เริ่มต้น" + "</b>" + "</td>" + "<td>" + feature.properties.km_start + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "กม. สิ้นสุด" + "</b>" + "</td>" + "<td>" + feature.properties.km_end + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "ระยะทาง" + "</b>" + "</td>" + "<td>" + feature.properties.length + " กม." + "</td>" + "</tr>" +
            "</table>"
        layer.bindPopup(popupContent);
    }
});

// $.getJSON('assets/geojson/ref_province.geojson', function (data) {
//     province.addData(data);
// });

// var province = L.geoJson(null, {
//     onEachFeature: function (feature, layer) {
//         var popupContent = "<table>" +
//             "<tr>" + "<td>" + "<b>" + "จังหวัด" + "</b>" + "</td>" + "<td>" + feature.properties.name_th + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "ภาค" + "</b>" + "</td>" + "<td>" + feature.properties.region_name_th + "</td>" + "</tr>" +
//             "</table>"
//         layer.bindPopup(popupContent);
//     }
// });

// var point = L.Geoserver.wfs("https://infraplus-ru.org/geoserver/wfs", {
//     layers: "insar:20site",
//     onEachFeature: function (feature, layer) {
//         var popupContent = "<table>" +
//             "<tr>" + "<td>" + "<b>" + "ทางหลวงหมายเลข" + "</b>" + "</td>" + "<td>" + feature.properties.Route + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "ตอนควบคุม" + "</b>" + "</td>" + "<td>" + feature.properties.Control + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "ชื่อตอน" + "</b>" + "</td>" + "<td>" + feature.properties.Name + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "กม." + "</b>" + "</td>" + "<td>" + feature.properties.Km + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "จังหวัด" + "</b>" + "</td>" + "<td>" + feature.properties.Province + "</td>" + "</tr>" +
//             "<tr>" + "<td>" + "<b>" + "ภัยพิบัติ" + "</b>" + "</td>" + "<td>" + feature.properties.Disaster + "</td>" + "</tr>" +
//             "</table>" +
//             "<a href='*.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>"
//         layer.bindPopup(popupContent);
//     }
// }).addTo(map);

$.getJSON('assets/geojson/20site_update.geojson', function (data) {
    point.addData(data);
});

var point = L.geoJson(null, {
    onEachFeature: function (feature, layer) {
        var popupContent = "<table>" +
            "<tr>" + "<td>" + "<b>" + "ทางหลวงหมายเลข" + "</b>" + "</td>" + "<td>" + feature.properties.Route + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "ตอนควบคุม" + "</b>" + "</td>" + "<td>" + feature.properties.Control + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "ชื่อตอน" + "</b>" + "</td>" + "<td>" + feature.properties.Name + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "กม." + "</b>" + "</td>" + "<td>" + feature.properties.Km + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "จังหวัด" + "</b>" + "</td>" + "<td>" + feature.properties.Province + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "<b>" + "ภัยพิบัติ" + "</b>" + "</td>" + "<td>" + feature.properties.Disaster + "</td>" + "</tr>" +
            "</table>"
        layer.bindPopup(popupContent);
        if (feature.properties.Route == 3412) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Ayuttaya_3412.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Name == 'ดอยหลวงเชียงดาว') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Chiangdao.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 107) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Chiangmai_107_100+000.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 7) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Chonburi_7.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 11 || feature.properties.Province == 'ลำปาง') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Lampang_11_499.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 2243) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Lopburi_2243_0+340.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 2247) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Lopburi_2247_1+500.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 108) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Maehongson_108_178-179.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 302) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Nonthaburi_302.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 11 || feature.properties.Province == 'แพร่') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Phrae_11_354+900.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 1022) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Phrae_1022.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 1124) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Phrae_1124_30+658.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 1217) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Phrae_1217_2+650.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 34) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Samutprakan_34_29+30.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 21) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Saraburi_21_7+700.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Name == 'เขตอุทยานแห่งชาติดอยสุเทพ-ปุย') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Suthep.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 12 || feature.properties.Km == '33+000 - 34+000') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Tak_12_33-34.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 12 || feature.properties.Km == '64+500 - 67+000') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Tak_12_64+500.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 1090 || feature.properties.Km == '69+100') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Tak_1090_69+100.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 1090 || feature.properties.Km == '163+100 - 163+175') {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Tak_1090_163+100.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
        else if (feature.properties.Route == 3050) {
            layer.bindPopup(popupContent + "<a href='assets/pdf/Stories_report/Stories_Nakhonnayo_3050.pdf' target='_blank' style='font-size: 16px; padding: 5px;'>รายงาน</a>")
        }
    }
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 2.5,
    fillColor: "red",
    color: "transparent",
    weight: 1,
    opacity: 1,
    fillOpacity: 1,
    scaleRadius: true
};

/*Legend specific*/
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4><b>อัตราการเคลื่อนตัวในแนว line of sight (LOS)</b></h4>";
    div.innerHTML += '<span>> 10 mm/ปี</span><br>';
    div.innerHTML += '<img src="http://insarmaps.miami.edu/img/jet_scale.PNG" style="height: 150px; width: 35px;"><span>0 mm/ปี</span><br>';
    div.innerHTML += '<span>< -10 mm/ปี</span><br>';
    return div;
};

legend.addTo(map);

map.createPane('top');
map.getPane('top').style.zIndex = 1001;
var section_km = L.tileLayer.wms("https://infraplus-ru.org/geoserver/wms", {
    layers: "insar:section_km",
    format: "image/png",
    transparent: true,
    pane: "top"
});

map.on('moveend', function () {
    if (map.getZoom() < 12 && map.hasLayer(section_km)) {
        map.removeLayer(section_km);
    }
    if (map.getZoom() >= 12 && map.hasLayer(section_km) == false) {
        map.addLayer(section_km);
    }
});

var SBASsource = L.WMS.Source.extend({
    'showFeatureInfo': function (latlng, info) {
        if (!this._map) {
            return;
        }
        var x = parseInt(latlng.utm().x).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "_");
        var y = parseInt(latlng.utm().y).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "_");
        var scene = info.split(/\r?\n/)[0].split(" ")[3].split(":")[2].split("'")[0];
        console.log(x);
        console.log(y);
        console.log(scene);
        axios.get("http://127.0.0.1:8000/" + x + "/" + y + "/" + scene,
            { headers: { 'Access-Control-Allow-Origin': '*' } }).then((resp) => {
                console.log(resp);
                // console.log(resp.data.date);
                // console.log(resp.data.CumDispl_m_);

                new Chart("myChart", {
                    type: "line",
                    data: {
                        labels: resp.data.date,
                        datasets: [{
                            fill: false,
                            pointRadius: 2,
                            pointBackgroundColor: "red",
                            borderColor: "transparent",
                            data: resp.data.CumDispl_m_,
                            trendlineLinear: {
                                style: "rgba(255,105,180, .8)",
                                lineStyle: "dotted|solid",
                                width: 2
                            }
                        }]
                    },
                    options: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: scene,
                            fontSize: 14
                        }
                    }
                });

                // // Define Data
                // var data = [{
                //     x: resp.data.date,
                //     y: resp.data.CumDispl_m_,
                //     mode: "markers"
                // }];

                // // var total = 0;
                // // for (var i = 0; i < (resp.data.CumDispl_m_).length; i++) {
                // //     total += (resp.data.CumDispl_m_)[i];
                // // }
                // // var avg = total * 1000 / (resp.data.CumDispl_m_).length;

                // // Define Layout
                // var layout = {
                //     xaxis: { title: "Year" },
                //     yaxis: {
                //         // range: [-10, 5],
                //         title: "Cumulative Displacement (m)",
                //         'zeroline': false
                //     },
                //     title: "ตำบล: " + resp.data.tambon + "<br>" + "Avg.Velo.: " + (resp.data.velo_mmy).toFixed(3) + " mm/year"
                // };

                // // Display using Plotly
                // Plotly.newPlot("myPlot", data, layout);
            })
        var info = '<canvas id="myChart" style="width: 350px; height: 250px;"></canvas>';
        // var info = '<div id="myPlot" style="width: 500px; height: 400px; left: 0; top: 0; margin-top: -13.5px; margin-bottom: -13.5px; margin-left: -21px;"></div>'
        this._map.openPopup(info, latlng);
    }
});

var GeoserverSBASsource = new SBASsource("https://infraplus-ru.org/geoserver/wms",
    {
        format: "image/png",
        transparent: true,
        infoformat: "text/plain"
    }
);

var PSISource = L.WMS.Source.extend({
    'showFeatureInfo': function (latlng, info) {
        if (!this._map) {
            return;
        }
        var info = '<table>' +
            '<tr>' + '<td>' + '<b>ทางหลวงหมายเลข</b>' + '</td>' + '<td>' + info.split(/\r?\n/)[24].split('route = ')[1] + '</td>' + '</tr>' +
            '<tr>' + '<td>' + '<b>ตอนควบคุม</b>' + '</td>' + '<td>' + info.split(/\r?\n/)[25].split('control = ')[1] + '</td>' + '</tr>' +
            '<tr>' + '<td>' + '<b>ชื่อตอน</b>' + '</td>' + '<td>' + info.split(/\r?\n/)[10].split('Name = ')[1] + '</td>' + '</tr>' +
            '<tr>' + '<td>' + '<b>อัตราการเคลื่อนตัวในแนว line of sight (LOS)</br>' + '</td>' + '<td>' + parseFloat(info.split(/\r?\n/)[6].split('mm_y = ')[1]).toFixed(3) + ' mm/ปี' + '</td>' + '</tr>' +
            // '<tr>' + '<td>' + '<b>ปี</b>' + '</td>' + '<td>' + parseInt(info.split(/\r?\n/)[32].split('year_route = ')[1]) + '</td>' + '</tr>' +
            '</table>'
        this._map.openPopup(info, latlng);
    }
});

var GeoserverPSISource = new PSISource("https://infraplus-ru.org/geoserver/wms",
    {
        format: "image/png",
        transparent: true,
        infoformat: "text/plain"
    }
);

var layers = {
    'AYA_NBI_SPK_DSC': GeoserverSBASsource.getLayer("insar:AYA_NBI_SPK_DSC").addTo(map),
    'AYA_NBI_SPK_LRI_DSC': GeoserverSBASsource.getLayer("insar:AYA_NBI_SPK_LRI_DSC"),
    'CBI_ASC': GeoserverSBASsource.getLayer("insar:CBI_ASC"),
    'CBI_DSC': GeoserverSBASsource.getLayer("insar:CBI_DSC"),
    'CBI_NBI_SPK_ASC': GeoserverSBASsource.getLayer("insar:CBI_NBI_SPK_ASC"),
    'CBI_SPK_NBI_ASC': GeoserverSBASsource.getLayer("insar:CBI_SPK_NBI_ASC"),
    'CMI_LPG_ASC': GeoserverSBASsource.getLayer("insar:CMI_LPG_ASC"),
    'CMI_LPG_DSC': GeoserverSBASsource.getLayer("insar:CMI_LPG_DSC"),
    'LRI_SRI_AYA_ASC': GeoserverSBASsource.getLayer("insar:LRI_SRI_AYA_ASC"),
    'Northern_BKK_DSC': GeoserverSBASsource.getLayer("insar:Northern_BKK_DSC"),
    'PRE_ASC_1': GeoserverSBASsource.getLayer("insar:PRE_ASC_1"),
    'PRE_ASC_2': GeoserverSBASsource.getLayer("insar:PRE_ASC_2"),
    'PRE_ASC_3': GeoserverSBASsource.getLayer("insar:PRE_ASC_3"),
    'PRE_DSC': GeoserverSBASsource.getLayer("insar:PRE_DSC"),
    'PRE_DSC_2': GeoserverSBASsource.getLayer("insar:PRE_DSC_2"),
    'TAK_ASC': GeoserverSBASsource.getLayer("insar:TAK_ASC"),
    'TAK_DSC': GeoserverSBASsource.getLayer("insar:TAK_DSC"),
    'TAK_DSC_2': GeoserverSBASsource.getLayer("insar:TAK_DSC_2"),
    'PS_CHIANGMAI_ASC': GeoserverPSISource.getLayer("insar:PS_CHIANGMAI_ASC"),
    'PS_CHIANGMAI_DSC': GeoserverPSISource.getLayer("insar:PS_CHIANGMAI_DSC"),
    'PS_PATTAYA_ASC': GeoserverPSISource.getLayer('insar:PS_PATTAYA_ASC'),
    'PS_TAK_ASC': GeoserverPSISource.getLayer('insar:PS_TAK_ASC')
};

var baseMaps = {
    "OpenStreetMap": osm,
    "Google Satellite": googleSat
};

var groupedOverlays = {
    "ชั้นข้อมูลพื้นฐาน": {
        "จุดเกิดภัยพิบัติ": point,
        "เส้นโครงข่ายถนน": road,
        // "ขอบเขตจังหวัด": province
    },
    "Small BAseline Subset (SBAS)": {
        "AYA_NBI_SPK_DSC": layers["AYA_NBI_SPK_DSC"],
        "AYA_NBI_SPK_LRI_DSC": layers["AYA_NBI_SPK_LRI_DSC"],
        "CBI_ASC": layers["CBI_ASC"],
        "CBI_DSC": layers["CBI_DSC"],
        "CBI_NBI_SPK_ASC": layers["CBI_NBI_SPK_ASC"],
        "CBI_SPK_NBI_ASC": layers["CBI_SPK_NBI_ASC"],
        "CMI_LPG_ASC": layers["CMI_LPG_ASC"],
        "CMI_LPG_DSC": layers["CMI_LPG_DSC"],
        "LPG_ASC": layers["PRE_ASC_1"],
        "LRI_SRI_AYA_ASC": layers["LRI_SRI_AYA_ASC"],
        "Northern_BKK_DSC": layers["Northern_BKK_DSC"],
        "PRE_ASC": layers["PRE_ASC_3"],
        "PRE_DSC": layers["PRE_DSC"],
        "PRE_DSC_2": layers["PRE_DSC_2"],
        "TAK_ASC": layers["TAK_ASC"],
        "TAK_DSC": layers["TAK_DSC"],
        "TAK_DSC_2": layers["TAK_DSC_2"],
        "UTD_ASC": layers["PRE_ASC_2"]
    },
    "Persistent Scatterer Interferometry (PSI)": {
        "PS_CMI_CRI_LPG_LPN_MSN_NAN_PRE_<br>PYO_ASC": layers["PS_CHIANGMAI_ASC"],
        "PS_CMI_CRI_LPG_LPN_MSN_NAN_PRE_<br>PYO_DSC": layers["PS_CHIANGMAI_DSC"],
        "PS_CBI_RYG_ASC": layers["PS_PATTAYA_ASC"],
        "PS_LEI_LPG_NAN_PLK_PRE_STI_UTD_ASC": layers["PS_TAK_ASC"]
    }
}

var layerControl = L.control.groupedLayers(baseMaps, groupedOverlays, {
}).addTo(map);

// map.on('click', function (e) {
//     let latlng = map.mouseEventToLatLng(e.originalEvent);
//     // console.log(latlng.lat + ', ' + latlng.lng);
//     var x = parseInt(latlng.utm().x).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "_");
//     var y = parseInt(latlng.utm().y).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "_");
//     // console.log(x);
//     // console.log(y);
// });