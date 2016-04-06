define(["dependence"], function() {
    // do something
    avalon.state("stateName", {
        url: "url", // url配置里出现的参数会放在onEnter的resolve和reject参数之前
        // abstract: true, // 抽象状态
        onEnter: function(resolve, reject) {
            // return false
        },
        views: {
            "viewName": {
                templateUrl: "templateUrl", // 指定模板
                controllerUrl: "controllerUrl" // 指定控制器
            }
        }
    })

    avalon.router.get("url", function(a) {
        
    });
    return {}    
})