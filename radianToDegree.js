function radianToDegree(radian) {
    if (radian < 0 || radian >= 0) {
        const radianValue = 180 / Math.PI;
        return radian * radianValue;
    }
    else {
        return 'Enter an integer number.'
    }
}
console.log(radianToDegree(1));
console.log(radianToDegree());