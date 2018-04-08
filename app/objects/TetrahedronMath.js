class TetrahedronMath {

    getHeight(length) {
        return length * Math.sqrt(6) / 3;
    }

    getBarycenter(length) {
        return this.getHeight(length) / 4;
    }

    getHeightBase(length) {
        return length * Math.sqrt(3) / 2;
    }

    getBarycenterBase(length) {
        return this.getHeightBase(length) / 3;
    }
}

(() => {
    return TetrahedronMath;
})();