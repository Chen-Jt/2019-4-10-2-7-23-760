module.exports = function main(inputs) {
    cost = 6;
    if (inputs.distance > 2) {
        if (inputs.distance > 8)
            cost += 4.8 + (inputs.distance - 8) * (1.2);
        else
            cost += 0.8 * (inputs.distance - 2);
    }
    cost += inputs.parkTime * 0.25;
    return Math.round(cost);
};