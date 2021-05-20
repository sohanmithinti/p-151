AFRAME.registerComponent('car', {
    schema: {
        xPosition: {type: 'number', default: 1}
    },
    tick: function(){
        this.data.xPosition = this.data.xPosition + 1
        var position = this.el.getAttribute("rotation")
        position.x = this.data.xPosition
        this.el.setAttribute("rotation", {x: position.x, y: position.y, z: position.z})
    }
})