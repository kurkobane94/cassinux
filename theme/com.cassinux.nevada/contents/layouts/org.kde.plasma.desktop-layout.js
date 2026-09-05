var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Cassinux/cassinux-nevada.jpg",
                    "SlidePaths": "/usr/share/wallpapers/Cassinux/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.5555555555555554,
            "hiding": "normal",
            "lengthMode": "fit",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0,
            "opacity": "translucent"
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "464",
                            "popupWidth": "312"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "31",
                            "popupWidth": "149"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.windowlist"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.5,
            "hiding": "normal",
            "lengthMode": "fill",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0,
            "opacity": "translucent"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
