(function() {
    window.drawChart = function() {
        var container = document.getElementById("chart");
        var data = [];
        for (var i = 0; i < 5; i++) {
            data.push([Math.floor(Math.random() * 100), i + 1]);
        }
        var options = {
            bars: {
                show: true,
                horizontal: true,
                barWidth: 0.75
            },
            grid: {
                verticalLines: false,
                horizontalLines: false,
                outline: ""
            },
            xaxis: {
                min: 0,
                max: 100,
                showLabels: false
            },
            yaxis: {
                tickFormatter: tickWithImageFormatter
            }
        };
        Flotr.draw(container, [data], options);
    }

    function tickWithImageFormatter(value, axisOptions) {
        var images = [
            {icon: "twitter.png", label: "Twitter"},
            {icon: "googleplus.png", label: "Google+"},
            {icon: "amazon.png", label: "Amazon"},
            {icon: "skype.png", label: "Skype"},
            {icon: "yahoo.png", label: "Yahoo!"}
        ];
        return "<table class='tick-table'><tr><td><img src='" + images[value - 1].icon + "'></img></td><td>" + images[value - 1].label + "</td></tr></table>";
    }
})();
