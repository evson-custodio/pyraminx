class Environment {
    constructor(frustum = 10) {
        this._isRender = false;
        this._frustum = frustum;
        this._aspect = window.innerWidth / window.innerHeight;
        this._scene = new THREE.Scene();
        this._camera = new THREE.OrthographicCamera();
        this._renderer = new THREE.WebGLRenderer({antialias: true});
        this._orbit = new THREE.OrbitControls(this._camera, this._renderer.domElement);
        this._stats = new Stats();
        this._gui = new dat.GUI();
        this._params = {
            Stats: false,
            Orbit: false,
            'Auto Rotate': false,
            'Auto Rotate Speed': 2.0,
            Zoom: false
        };
        this._init();
    }

    getFrustum() {
        return this._frustum;
    }

    getAspect() {
        return this._aspect;
    }

    getScene() {
        return this._scene;
    }

    getCamera() {
        return this._camera;
    }

    getRenderer() {
        return this._renderer;
    }

    getDomElement() {
        return this._renderer.domElement;
    }

    getOrbit() {
        return this._orbit;
    }

    getStats() {
        return this._stats;
    }

    getStatsDom() {
        return this._stats.dom;
    }

    getGUI() {
        return this._gui;
    }

    setFrustum(frustum) {
        this._frustum = frustum;
        this.updateCamera();
    }

    setScene(scene) {
        this._scene = scene;
    }

    updateCamera() {
        this._aspect = window.innerWidth / window.innerHeight;
        this._camera.left = -this._frustum * this._aspect / 2;
        this._camera.right = this._frustum * this._aspect / 2;
        this._camera.top = this._frustum / 2;
        this._camera.bottom = -this._frustum / 2;
        this._camera.near = 1;
        this._camera.far = 2000;
        this._camera.position.z = 10;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(window.innerWidth, window.innerHeight);
    }

    _init() {
        this._renderer.setPixelRatio(window.devicePixelRatio);
        this._renderer.setClearColor(0x000000, 1);
        this.updateCamera();

        this._orbit.enableZoom = false;
        this._orbit.enableRotate = false;
        this._orbit.enablePan = false;
        this._orbit.enableKeys = false;
        this._orbit.autoRotate = false;

        if (!Detector.webgl) {
            Dectector.addGetWebGLMessage();
        }

        this._gui.close();
        this._gui.add(this._params, 'Stats').onChange(() => {
            if (this._params.Stats) {
                document.body.appendChild(this._stats.dom);
            } else {
                document.body.removeChild(this._stats.dom);
            }
        });
        this._gui.add(this._params, 'Orbit').onChange(() => {
            this._orbit.enableRotate = this._params.Orbit;
        });
        this._gui.add(this._params, 'Zoom').onChange(() => {
            this._orbit.enableZoom = this._params.Zoom;
        });
        this._gui.add(this._params, 'Auto Rotate').onChange(() => {
            this._orbit.autoRotate = this._params['Auto Rotate'];
        });
        this._gui.add(this._params, 'Auto Rotate Speed', 0.0, 100.0).onChange(() => {
            this._orbit.autoRotateSpeed = this._params['Auto Rotate Speed'];
        });
    }

    render() {
        if (!this._isRender) {
            this._orbit.addEventListener('change', () => {
                this.render();
            });

            window.addEventListener('resize', () => {
                this.updateCamera();
                this._orbit.update();
                this.render();
            }, false);

            this._isRender = true;
        }

        this._renderer.render(this._scene, this._camera);
    }

    animate(beforeRender = () => {}, afterRender = () => {}) {
        window.requestAnimationFrame(() => {
            this.animate(beforeRender, afterRender);
        });
        this._stats.begin();
        beforeRender();
        if (this._orbit.autoRotate) {
            this._orbit.update();
        }
        this.render();
        afterRender();
        this._stats.end();
    }
}

(() => {
    return Environment;
})();