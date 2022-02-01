function distanceFromHqInBlocks(someValue) {

    if (someValue > 42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

function distanceFromHqInFeet(someValue) {
    let numBlocks = distanceFromHqInBlocks(someValue);
    return numBlocks * 264;
    
}

function distanceTravelledInFeet(start, destination) {

    if (destination >= start) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }

}

function calculatesFarePrice(start, destination) {
    let numFeet = distanceTravelledInFeet(start, destination);
    // let flatFee = 50;

    if (numFeet <= 400) {
        return 0;
    } else if (numFeet <= 2000) {
        return (numFeet - 400) * .02;
    } else if (numFeet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
