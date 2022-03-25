const removeFromArray = function(array) {
    let args = Array.prototype.slice.call(arguments, 1);
    for (const element of args) {
        let index = array.indexOf(element);
        if (index !== -1) {
            array.splice(index,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
