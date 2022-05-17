const fibonacci = function(input) {
    const fnum = Number(input);
    if (isNaN(fnum) || fnum < 1) {
        return "OOPS"
    }
    if (fnum < 3) {
        return 1;
    }
    const last_values = [1, 1];
    for (let index = 0; index < fnum-2 ; index++) {
        let calculate_value = last_values[0] + last_values[1];
        last_values[0] = last_values[1];
        last_values[1] = calculate_value;
    }
    return last_values[1];
};

// Do not edit below this line
module.exports = fibonacci;
