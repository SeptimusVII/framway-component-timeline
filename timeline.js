module.exports = function(app){
    var Timeline = Object.getPrototypeOf(app).Timeline = new app.Component("timeline");
    // Timeline.debug = true;
    Timeline.createdAt      = "2.5.1";
    Timeline.lastUpdate     = "2.5.1";
    Timeline.version        = "1";
    // Timeline.factoryExclude = true;
    // Timeline.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Timeline.requires       = [];

    // Timeline.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Timeline;
}