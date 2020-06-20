const object = {
    createPlane(scene, group, simplex){
        let smooth = 10, peak = 2
        let geometry = new THREE.PlaneGeometry(50, 40, 48, 48)
        let material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 1.0,
            wireframe: true
        })
        let mesh = new THREE.Mesh(geometry, material)
        mesh.position = []
        
        for(let i = 0; i < mesh.geometry.vertices.length; i++) {
            let vertex = mesh.geometry.vertices[i]
            let random = simplex.noise2D(vertex.x / smooth, vertex.y / smooth) * peak
            vertex.z = random
            mesh.position[i] = vertex.z
        }
        group.add(mesh)
        scene.add(group)
        console.log(mesh.geometry.vertices)
    }
}