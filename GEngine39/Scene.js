

function Scene(name) {
    this.name = name || "scene";
    this.GameObjects = [];
}
Scene.prototype.onStart = function () {
    for (let i = 0; i <  this.GameObjects.length; i++) {
        var gameObject =  this.GameObjects[i];
        gameObject.onStart();
    }
}

Scene.prototype.onUpdate = function() {
  //  console.log("onUpate");

    GE.PhysicsEngine2D.onUpdate();

    for (let i = 0; i < this.GameObjects.length; i++) {
        var gameObject =  this.GameObjects[i];
        gameObject.onUpdate();
    } 
    
    GE.RenderEngine2D.onUpdate();
    //renderer.render();
}


Scene.prototype.onDestroy = function () {
    for (let i = 0; i < GameObjects.length; i++) {
        var gameObject = GameObjects[i];
        gameObject.onDestroy();
    }
}

Scene.prototype.addGameObject = function (gameObject) {
    this.GameObjects.push(gameObject);
}


