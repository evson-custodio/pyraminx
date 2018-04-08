class Pyraminx extends THREE.Object3D {
    constructor(length = 6.0, colorFaceA = 0xff0000, colorFaceB = 0x00ff00, colorFaceC = 0x0000ff, colorFaceD = 0xffff00) {
        super();
        this._math = new TetrahedronMath();
        this._length = length;
        this._tetrahedrons = [];
        this._octahedrons = [];
        this._rotationsVertices = [];
        this._group = new THREE.Object3D();
        this._init(colorFaceA, colorFaceB, colorFaceC, colorFaceD);
    }

    createGroup(groupname) {
        switch (groupname) {
            case 'Tetrahedron A':
            this._group._vertice = this._rotationsVertices[0];
            this.remove(this._tetrahedrons[0]);
            this._group.add(this._tetrahedrons[0]);
            break;
            case 'Tetrahedron B':
            this._group._vertice = this._rotationsVertices[1];
            this.remove(this._tetrahedrons[4]);
            this._group.add(this._tetrahedrons[4]);
            break;
            case 'Tetrahedron C':
            this._group._vertice = this._rotationsVertices[2];
            this.remove(this._tetrahedrons[6]);
            this._group.add(this._tetrahedrons[6]);
            break;
            case 'Tetrahedron D':
            this._group._vertice = this._rotationsVertices[3];
            this.remove(this._tetrahedrons[9]);
            this._group.add(this._tetrahedrons[9]);
            break;
            case 'Octahedron A':
            this._group._vertice = this._rotationsVertices[0];
            this.remove(
                this._octahedrons[0],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3]
            );
            this._group.add(
                this._octahedrons[0],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3]
            );
            break;
            case 'Octahedron B':
            this._group._vertice = this._rotationsVertices[1];
            this.remove(
                this._octahedrons[1],
                this._tetrahedrons[1],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[7]
            );
            this._group.add(
                this._octahedrons[1],
                this._tetrahedrons[1],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[7]
            );
            break;
            case 'Octahedron C':
            this._group._vertice = this._rotationsVertices[2];
            this.remove(
                this._octahedrons[2],
                this._tetrahedrons[2],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[8]
            );
            this._group.add(
                this._octahedrons[2],
                this._tetrahedrons[2],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[8]
            );
            break;
            case 'Octahedron D':
            this._group._vertice = this._rotationsVertices[3];
            this.remove(
                this._octahedrons[3],
                this._tetrahedrons[3],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[3],
                this._tetrahedrons[3],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            break;
            case 'Pyraminx A':
            this._group._vertice = this._rotationsVertices[0];
            this.remove(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            break;
            case 'Pyraminx B':
            this._group._vertice = this._rotationsVertices[1];
            this.remove(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            break;
            case 'Pyraminx C':
            this._group._vertice = this._rotationsVertices[2];
            this.remove(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            break;
            case 'Pyraminx D':
            this._group._vertice = this._rotationsVertices[3];
            this.remove(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            break;
            case 'Line A':
            this._group._vertice = this._rotationsVertices[0];
            this.remove(
                this._octahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3]
            );
            this._group.add(
                this._octahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[3]
            );
            break;
            case 'Line B':
            this._group._vertice = this._rotationsVertices[1];
            this.remove(
                this._octahedrons[1],
                this._tetrahedrons[1],
                this._tetrahedrons[5],
                this._tetrahedrons[7]
            );
            this._group.add(
                this._octahedrons[1],
                this._tetrahedrons[1],
                this._tetrahedrons[5],
                this._tetrahedrons[7]
            );
            break;
            case 'Line C':
            this._group._vertice = this._rotationsVertices[2];
            this.remove(
                this._octahedrons[2],
                this._tetrahedrons[2],
                this._tetrahedrons[5],
                this._tetrahedrons[8]
            );
            this._group.add(
                this._octahedrons[2],
                this._tetrahedrons[2],
                this._tetrahedrons[5],
                this._tetrahedrons[8]
            );
            break;
            case 'Line D':
            this._group._vertice = this._rotationsVertices[3];
            this.remove(
                this._octahedrons[3],
                this._tetrahedrons[3],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
            );
            this._group.add(
                this._octahedrons[3],
                this._tetrahedrons[3],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
            );
            break;
            case 'Face A':
            this._group._vertice = this._rotationsVertices[3];
            this.remove(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6]
            );
            this._group.add(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[2],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[2],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6]
            );
            break;
            case 'Face B':
            this._group._vertice = this._rotationsVertices[2];
            this.remove(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[7],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[0],
                this._octahedrons[1],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[1],
                this._tetrahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[7],
                this._tetrahedrons[9]
            );
            break;
            case 'Face C':
            this._group._vertice = this._rotationsVertices[1];
            this.remove(
                this._octahedrons[0],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[6],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[0],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[0],
                this._tetrahedrons[2],
                this._tetrahedrons[3],
                this._tetrahedrons[6],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            break;
            case 'Face D':
            this._group._vertice = this._rotationsVertices[0];
            this.remove(
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            this._group.add(
                this._octahedrons[1],
                this._octahedrons[2],
                this._octahedrons[3],
                this._tetrahedrons[4],
                this._tetrahedrons[5],
                this._tetrahedrons[6],
                this._tetrahedrons[7],
                this._tetrahedrons[8],
                this._tetrahedrons[9]
            );
            break;
            default:
            return null;
        }

        return this._group;
    }

    resetGroup(matrix) {
        while (this._group.children.length != 0) {
            let c = this._group.children[0];
            this._group.remove(c);
            this.add(c);
            matrix != undefined ? c.applyMatrix(matrix) : null;
        }
        this._group.quaternion.set(0, 0, 0, 1);
        this._group.matrix.identity();
    }

    rotateGroup(groupname, angle = 120, seconds = 1) {
        seconds *= 60;

        let totalAngle = angle * Math.PI / 180;
        let partialAngle = totalAngle / seconds;

        if (this.createGroup(groupname) == null) return null;

        let quaternion = new THREE.Quaternion();
        let partialQuaternion = new THREE.Quaternion();

        quaternion.setFromAxisAngle(this._group._vertice, totalAngle);
        partialQuaternion.setFromAxisAngle(this._group._vertice, partialAngle);

        return () => {
            if (seconds-- > 0) {
                this._group.applyQuaternion(partialQuaternion);
            } else if (seconds == -1) {
                this.resetGroup(this._group.matrix);
                if (angle == 120 || angle == -120) {
                    this.reorganizeGroup(groupname, (angle == 120));
                }
            }
        }
    }
 
    reorganizeGroup(groupname, order = true) {
        switch (groupname) {
            case 'Octahedron A': case 'Line A':
            this.swapTetrahedrons(1, 2, 3, order);
            break;
            case 'Octahedron B': case 'Line B':
            this.swapTetrahedrons(1, 7, 5, order);
            break;
            case 'Octahedron C': case 'Line C':
            this.swapTetrahedrons(2, 5, 8, order);
            break;
            case 'Octahedron D': case 'Line D':
            this.swapTetrahedrons(3, 8, 7, order);
            break;
            case 'Pyraminx A':
            this.swapTetrahedrons(1, 2, 3, order);
            this.swapTetrahedrons(4, 6, 9, order);
            this.swapTetrahedrons(5, 8, 7, order);
            this.swapOctahedrons(1, 2, 3, order);
            break;
            case 'Pyraminx B':
            this.swapTetrahedrons(0, 9, 6, order);
            this.swapTetrahedrons(2, 3, 8, order);
            this.swapTetrahedrons(1, 7, 5, order);
            this.swapOctahedrons(0, 3, 2, order);
            break;
            case 'Pyraminx C':
            this.swapTetrahedrons(0, 4, 9, order);
            this.swapTetrahedrons(1, 7, 3, order);
            this.swapTetrahedrons(2, 5, 8, order);
            this.swapOctahedrons(0, 1, 3, order);
            break;
            case 'Pyraminx D':
            this.swapTetrahedrons(0, 6, 4, order);
            this.swapTetrahedrons(1, 2, 5, order);
            this.swapTetrahedrons(3, 8, 7, order);
            this.swapOctahedrons(0, 2, 1, order);
            break;
            case 'Face A':
            this.swapTetrahedrons(0, 6, 4, order);
            this.swapTetrahedrons(2, 5, 1, order);
            this.swapOctahedrons(0, 2, 1, order);
            break;
            case 'Face B':
            this.swapTetrahedrons(0, 4, 9, order);
            this.swapTetrahedrons(1, 7, 3, order);
            this.swapOctahedrons(0, 1, 3, order);
            break;
            case 'Face C':
            this.swapTetrahedrons(0, 9, 6, order);
            this.swapTetrahedrons(3, 8, 2, order);
            this.swapOctahedrons(0, 3, 2, order);
            break;
            case 'Face D':
            this.swapTetrahedrons(4, 6, 9, order);
            this.swapTetrahedrons(5, 8, 7, order);
            this.swapOctahedrons(1, 2, 3, order);
            break;
        }
    }

    swapTetrahedrons(t1, t2, t3, order = true) {
        if (order == true) {
            let t4 = this._tetrahedrons[t3];
            this._tetrahedrons[t3] = this._tetrahedrons[t2];
            this._tetrahedrons[t2] = this._tetrahedrons[t1];
            this._tetrahedrons[t1] = t4;
        }
        else {
            let t4 = this._tetrahedrons[t1];
            this._tetrahedrons[t1] = this._tetrahedrons[t2];
            this._tetrahedrons[t2] = this._tetrahedrons[t3];
            this._tetrahedrons[t3] = t4;
        }
    }

    swapOctahedrons(o1, o2, o3, order = true) {
        if (order == true) {
            let t4 = this._octahedrons[o3];
            this._octahedrons[o3] = this._octahedrons[o2];
            this._octahedrons[o2] = this._octahedrons[o1];
            this._octahedrons[o1] = t4;
        }
        else {
            let t4 = this._octahedrons[o1];
            this._octahedrons[o1] = this._octahedrons[o2];
            this._octahedrons[o2] = this._octahedrons[o3];
            this._octahedrons[o3] = t4;
        }
    }

    updateVertices(length) {
        this._tetrahedrons.forEach(t => t.setLength(length));
        this._octahedrons.forEach(o => o.setLength(length));
    }

    isRotate() {
        return this._group.children.length > 0;
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

    _organize() {
        let length = this._length / 3;
        let height = this._math.getHeight(length);
        let barycenter = this._math.getBarycenter(length);
        let heightBase = this._math.getHeightBase(length);
        let barycenterBase = this._math.getBarycenterBase(length);

        this._octahedrons[0].name = 'O0';
        this._octahedrons[0].translateY(height / 2);

        this._octahedrons[1].name = 'O1';
        this._octahedrons[1].translateY(-height / 2);
        this._octahedrons[1].translateX(-length / 2);
        this._octahedrons[1].translateZ(barycenterBase);

        this._octahedrons[2].name = 'O2';
        this._octahedrons[2].translateY(-height / 2);
        this._octahedrons[2].translateX(length / 2);
        this._octahedrons[2].translateZ(barycenterBase);

        this._octahedrons[3].name = 'O3';
        this._octahedrons[3].translateY(-height / 2);
        this._octahedrons[3].translateZ(-2 * barycenterBase);

        this._tetrahedrons[0].name = 'T0';
        this._tetrahedrons[0].translateY(1.5 * height);

        this._tetrahedrons[1].name = 'T1';
        this._tetrahedrons[1].translateY(height / 2);
        this._tetrahedrons[1].translateX(-length / 2);
        this._tetrahedrons[1].translateZ(barycenterBase);

        this._tetrahedrons[2].name = 'T2';
        this._tetrahedrons[2].translateY(height / 2);
        this._tetrahedrons[2].translateX(length / 2);
        this._tetrahedrons[2].translateZ(barycenterBase);

        this._tetrahedrons[3].name = 'T3';
        this._tetrahedrons[3].translateY(height / 2);
        this._tetrahedrons[3].translateZ(-2 * barycenterBase);

        this._tetrahedrons[4].name = 'T4';
        this._tetrahedrons[4].translateY(-height / 2);
        this._tetrahedrons[4].translateX(-length);
        this._tetrahedrons[4].translateZ(2 * barycenterBase);

        this._tetrahedrons[5].name = 'T5';
        this._tetrahedrons[5].translateY(-height / 2);
        this._tetrahedrons[5].translateZ(2 * barycenterBase);

        this._tetrahedrons[6].name = 'T6';
        this._tetrahedrons[6].translateY(-height / 2);
        this._tetrahedrons[6].translateX(length);
        this._tetrahedrons[6].translateZ(2 * barycenterBase);

        this._tetrahedrons[7].name = 'T7';
        this._tetrahedrons[7].translateY(-height / 2);
        this._tetrahedrons[7].translateX(-length / 2);
        this._tetrahedrons[7].translateZ(-barycenterBase);

        this._tetrahedrons[8].name = 'T8';
        this._tetrahedrons[8].translateY(-height / 2);
        this._tetrahedrons[8].translateX(length / 2);
        this._tetrahedrons[8].translateZ(-barycenterBase);

        this._tetrahedrons[9].name = 'T9';
        this._tetrahedrons[9].translateY(-height / 2);
        this._tetrahedrons[9].translateZ(-4 * barycenterBase);
    }

    _init(colorFaceA, colorFaceB, colorFaceC, colorFaceD) {
        let length = this._length / 3;
        let grey = 0x777777;

        this._tetrahedrons = [
            new Tetrahedron(length, colorFaceA, colorFaceB, colorFaceC, grey),
            new Tetrahedron(length, colorFaceA, colorFaceB, grey, grey),
            new Tetrahedron(length, colorFaceA, grey, colorFaceC, grey),
            new Tetrahedron(length, grey, colorFaceB, colorFaceC, grey),
            new Tetrahedron(length, colorFaceA, colorFaceB, grey, colorFaceD),
            new Tetrahedron(length, colorFaceA, grey, grey, colorFaceD),
            new Tetrahedron(length, colorFaceA, grey, colorFaceC, colorFaceD),
            new Tetrahedron(length, grey, colorFaceB, grey, colorFaceD),
            new Tetrahedron(length, grey, grey, colorFaceC, colorFaceD),
            new Tetrahedron(length, grey, colorFaceB, colorFaceC, colorFaceD)
        ];

        this._octahedrons = [
            new Octahedron(length, grey, colorFaceA, grey, colorFaceB, grey, colorFaceC, grey, grey),
            new Octahedron(length, colorFaceD, colorFaceA, grey, colorFaceB, grey, grey, grey, grey),
            new Octahedron(length, colorFaceD, colorFaceA, grey, grey, grey, colorFaceC, grey, grey),
            new Octahedron(length, colorFaceD, grey, grey, colorFaceB, grey, colorFaceC, grey, grey)
        ];

        this._rotationsVertices = [
            this._tetrahedrons[0].children[0].geometry.vertices[0].clone().normalize(),
            this._tetrahedrons[0].children[0].geometry.vertices[1].clone().normalize(),
            this._tetrahedrons[0].children[0].geometry.vertices[2].clone().normalize(),
            this._tetrahedrons[0].children[0].geometry.vertices[3].clone().normalize()
        ];

        this._tetrahedrons.forEach(t => this.add(t));
        this._octahedrons.forEach(o => this.add(o));
        this.add(this._group);

        this._organize();
    }
}

(() => {
    return Pyraminx;
})();