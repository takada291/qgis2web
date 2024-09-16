var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '空中写真０７',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '地理院',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var lyr__2 = new ol.layer.Image({
                            opacity: 1,
                            title: "上若生子皆伐跡地空撮幾何補正",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15197614.218506, 4287927.211468, 15197872.257370, 4288226.522148]
                            })
                        });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
