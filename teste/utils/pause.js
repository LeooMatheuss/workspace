function pause(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

module.exports = pause;
