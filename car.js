AFRAME.registerComponent("car", {
    schema: {

    },

    init: function () {
        const pos = {x:0, y:0.5, z:0}
        const rotation = {x:0, y:90, z:0}

        this.el.setAttribute('position', pos)
        this.el.setAttribute('rotation', rotation)
    }
})