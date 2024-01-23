export function getDateAndMinutes(hours) {
    var days = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 0
    };
    if (typeof hours !== 'number' || hours < 0 || hours > 24) {
        return new Error(hours + " is not a valid hour");
    }
    var currDate = new Date(new Date().setHours(19, 0, 0));
    var dayMillDiff = 0;
    var dayInMill = 1000 * 60 * 60 * 24;
    while (currDate.getDay() != 6 || dayMillDiff == 0) {
        dayMillDiff += dayInMill;
        currDate = new Date(currDate.getTime() + dayInMill);
    }
    var monday = new Date(currDate.getTime() + dayInMill * 2).setHours(hours);
    var diff = monday - currDate;

    return {
        startDate: currDate,
        monday: new Date(monday),
        duration: Math.floor(((monday - currDate) / 1000) / 60)
    };
}
export function timeToStart(startDate) {
    if (!startDate) return 0;
    return startDate.valueOf() - Date.now();
}

export function timeToEnd(startDate, duration) {
    if (!startDate || !duration) return 0;
    return (
        new Date(startDate.getTime() + duration * 1000 * 60).valueOf() - Date.now()
    );
}