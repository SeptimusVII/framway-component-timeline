module.exports = function(app){
    var Timeline = Object.getPrototypeOf(app).Timeline = new app.Component("timeline");
    // Timeline.debug = true;
    Timeline.createdAt      = "2.5.1";
    Timeline.lastUpdate     = "2.5.1";
    Timeline.version        = "1";
    // Timeline.factoryExclude = true;
    // Timeline.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Timeline.requires       = [];

    Timeline.prototype.onCreate = function(){
        var timeline = this;
        timeline.el = timeline.$el.get(0);
        timeline.wrapper = timeline.el.querySelector('.timeline__wrapper');
        timeline.content = timeline.el.querySelector('.timeline__content');
        timeline.picture = timeline.el.querySelector('.timeline__picture');

        timeline.onResize();
    }

    Timeline.prototype.onResize = function(){
       var timeline = this; 
        timeline.el.classList.remove('cols-1');
        if (timeline.content.scrollWidth > timeline.content.clientWidth)
            timeline.el.classList.add('cols-1');
    }
    return Timeline;
}