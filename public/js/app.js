const httpService = new HttpService();

(async () => {
    eval(await httpService.get('/libs/three'));
    eval(await httpService.get('/three/Detector'));
    eval(await httpService.get('/three/libs/stats.min'));
    eval(await httpService.get('/three/libs/dat.gui.min'));
    eval(await httpService.get('/three/controls/OrbitControls'));

    let Environment = eval(await httpService.get('/objects/Environment'));
    let TetrahedronMath = eval(await httpService.get('/objects/TetrahedronMath'));
    let Tetrahedron = eval(await httpService.get('/objects/Tetrahedron'));
    let Octahedron = eval(await httpService.get('/objects/Octahedron'));
    let Pyraminx = eval(await httpService.get('/objects/Pyraminx'));

    let environment = new Environment();
    let pyraminx = new Pyraminx();

    environment.getScene().add(pyraminx);
    document.body.appendChild(environment.getDomElement());

    let rotate = () => {};
    let events = [];
    let groups = [ 'Tetrahedron', 'Octahedron', 'Pyraminx', 'Line', 'Face' ];
    let group = groups[0];
    let speeds = {
        '100 Millis': 0.1,
        '1 Second': 1.0,
        '2 Seconds': 2.0,
        '3 Seconds': 3.0
    };
    let params = {
        Speed: speeds['100 Millis']
    };

    environment.getGUI().add(params, 'Speed', speeds).onChange(() => {
        document.getElementsByTagName('input').item(5).focus();
    });

    let info = document.getElementById('info');

    for(i in groups) {
        let button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', (Number.parseInt(i) + 1) + ' - ' + groups[i]);
        button.setAttribute('onclick', 'selectGroup("' + groups[i] + '")');
        info.appendChild(button);
    }

    selectGroup = groupname => group = groupname;

    window.addEventListener('keydown', event => events.push(event), false);

    handlerEvents = () => {
        if (events.length != 0) {
            switch (events[0].key) {
                case 'ArrowUp':
                rotate = pyraminx.rotateGroup(group + ' A', 120, params.Speed);
                break;
                case 'ArrowLeft':
                rotate = pyraminx.rotateGroup(group + ' B', 120, params.Speed);
                break;
                case 'ArrowRight':
                rotate = pyraminx.rotateGroup(group + ' C', 120, params.Speed);
                break;
                case 'ArrowDown':
                rotate = pyraminx.rotateGroup(group + ' D', 120, params.Speed);
                break;
                case '1': case '2': case '3': case '4': case '5':
                group = groups[Number.parseInt(events[0].key) - 1];
                break;
            }
            events.shift();
        }
    }

    environment.animate(
        () => {
            if (pyraminx.isRotate()) {
                rotate();
            } else {
                handlerEvents();
            }
        }
    );
})();