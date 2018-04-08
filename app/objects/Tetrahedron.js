class Tetrahedron extends THREE.Object3D {
    constructor(length = 2.0, colorFaceA = 0xff0000, colorFaceB = 0x00ff00, colorFaceC = 0x0000ff, colorFaceD = 0xffff00) {
        super();
        this._math = new TetrahedronMath();
        this._length = length;
        this._init(colorFaceA, colorFaceB, colorFaceC, colorFaceD);
    }

    getLength() {
        return this._length;
    }

    getHeight() {
        return this._math.getHeight(this._length);
    }

    getBarycenter() {
        return this._math.getBarycenter(this._length);
    }

    getHeightBase() {
        return this._math.getHeightBase(this._length);
    }

    getBarycenterBase() {
        return this._math.getBarycenterBase(this._length);
    }

    setLength(length) {
        this._length = length;
        this.updateVertices();
    }

    updateVertices() {
        let v = [
            new THREE.Vector3(0, 3 * this.getBarycenter(), 0),
            new THREE.Vector3(-this._length / 2, -this.getBarycenter(), this.getBarycenterBase()),
            new THREE.Vector3(this._length / 2, -this.getBarycenter(), this.getBarycenterBase()),
            new THREE.Vector3(0, -this.getBarycenter(), -2 * this.getBarycenterBase())
        ];

        this.children[0].geometry.vertices = v;

        this.children[1].geometry.vertices = [
            v[0], v[1], v[0], v[2], v[0], v[3],
            v[1], v[2], v[1], v[3],
            v[2], v[3]
        ];
    }

    _init(colorFaceA, colorFaceB, colorFaceC, colorFaceD) {
        let meshGeometry = new THREE.Geometry();
        let meshMaterial = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors});
        let lineGeometry = new THREE.Geometry();
        let lineMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 1.0
        });

        this.add(
            new THREE.Mesh(meshGeometry, meshMaterial),
            new THREE.LineSegments(lineGeometry, lineMaterial)
        );

        this.updateVertices();

        meshGeometry.faces.push(
            new THREE.Face3(2, 0, 1, null, new THREE.Color(colorFaceA)),
            new THREE.Face3(1, 0, 3, null, new THREE.Color(colorFaceB)),
            new THREE.Face3(0, 2, 3, null, new THREE.Color(colorFaceC)),
            new THREE.Face3(2, 1, 3, null, new THREE.Color(colorFaceD))
        );
    }
}

(() => {
    return Tetrahedron;
})();