const move = {
    movePlaneVertices(simplex, time, mesh){
        let frequency = 0.0005, smooth = 8, boost = 2
        mesh.geometry.vertices.forEach((e, i) => {
            let noise = simplex.noise3D(e.x / smooth, e.y / smooth, time * frequency)
            e.z = mesh.position[i] * noise * boost
        })
        mesh.geometry.verticesNeedUpdate = true
    }
}