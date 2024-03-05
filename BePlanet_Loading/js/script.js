var count = 0;
var thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },
    initFunctionInvoking(data) {
        document.querySelector('.loading-active').style.left = '0%';
        document.querySelector('.loading-active').style.width = ((data.idx / count) * 100) + '%';
    },
    startDataFileEntries(data) {
        count = data.count;
    },
    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector('.loading-active').style.left = '0%';
        document.querySelector('.loading-active').style.width = ((thisCount / count) * 100) + '%';
    }
};