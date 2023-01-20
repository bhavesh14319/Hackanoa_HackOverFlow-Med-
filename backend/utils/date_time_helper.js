const currentDateTime = new Date();

const parseDateTime = ( userDateTime ) => new Date( userDateTime );

exports.redableDateTime = ( config ) => {

    const userDateTime = config.userDateTime ? parseDateTime( config.userDateTime ) : currentDateTime;
    const format = config.format || ':';

    const localDate = userDateTime.toLocaleDateString();
    const localTime = userDateTime.toLocaleTimeString();

    const [time, period] = localTime.split(" ");
    const [hrs, min, sec] = time.split(":");
    //const [month, date, year] = localDate.split('/')

    return {
        dateTime: `${localDate} ${hrs}${format}${min} ${period}`,
        date: localDate,
        time: `${hrs}${format}${min} ${period}`,
        timeWithSec: localTime
    };

};