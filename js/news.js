(function() {
    'use strict';

    function NewsService($http) {
        var service = {};
        service.news = null;
        var geoloc = null;
        var FEED_URL = "";

        service.init = function(geoposition) {
            console.log("news feed");
            // geoloc = geoposition;
            // $.get(FEED_URL, function (data) {
            //     $(data).find("entry").each(function () { // or "item" or whatever suits your feed
            //         var el = $(this);

            //         console.log("------------------------");
            //         console.log(el);
            //     });
            // });
        };

        return service;
    }

    angular.module('SmartMirror')
        .factory('NewsService', NewsService);

}());
