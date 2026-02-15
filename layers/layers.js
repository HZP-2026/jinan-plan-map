var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '高德地图 - 影像地图',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://wprd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}'
            })
        });
var lyr__1 = new ol.layer.Image({
        opacity: 1,
        
    title: '高新区-机场东<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13047739.917848, 4417178.381690, 13058362.017170, 4425757.523558]
        })
    });
var lyr__2 = new ol.layer.Image({
        opacity: 1,
        
    title: '高新区-机场南<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13044673.916819, 4412108.635161, 13050607.787927, 4416938.699131]
        })
    });
var lyr__3 = new ol.layer.Image({
        opacity: 1,
        
    title: '高新区-机场西<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13040980.691326, 4411995.320985, 13045850.256440, 4415955.283931]
        })
    });
var lyr__4 = new ol.layer.Image({
        opacity: 1,
        
    title: '高新区-机场片区<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13043595.760469, 4412987.929229, 13050656.816174, 4422846.735236]
        })
    });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4];
