const handleError = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
        return false;
    } else return true;
};

exports.min = function min(array) {
    if (handleError(array)) {
        return array.sort((a, b) => a - b)[0];
    } else return 0;
};

exports.max = function max(array) {
    if (handleError(array)) {
        return array.sort((a, b) => b - a)[0];
    } else return 0;
};

exports.avg = function avg(array) {
    if (handleError(array)) {
        const sum = array.reduce((sum, num) => (sum += num), 0);
        return sum / array.length;
    } else return 0;
};
