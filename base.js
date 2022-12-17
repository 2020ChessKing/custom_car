AFRAME.registerComponent('base', {
    schema: {   
        depth : { type: 'number', default: 3 },
        width : { type: 'number', default: 3},
        height : { type: 'number', default: 0.1 }
    },

    init: function () {
        this.el.setAttribute("geometry", {
            primitive: "box",
            width: this.data.width,
            depth: this.data.depth,
            height: this.data.height,
        })

        this.el.setAttribute("material", { color: '#1769aa' })

        this.el.setAttribute("position", {
            x: 0,
            y: 0,
            z: 0
        })
    }
})