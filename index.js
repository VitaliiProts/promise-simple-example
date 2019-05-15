function applyForVisa(documents) {
    console.log('Wait...');
    let promise = new Promise(function(resolve, reject) { 
        setTimeout(function() {
            Math.random() > 0 ? resolve({}) : reject('Negative');
        }, 1000);
    });
    return promise;
}

const getVisa = visa => {
    console.info('Visa done');
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(visa), 1000);
    });
}

const bookHotel = visa => {
    console.log(visa);
    console.log('Reserve the hotel');
    return Promise.resolve(visa);
}

const buyTickets = booking => {
    console.log('Buy tickets');
    console.log(`Reserve ${booking}`);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(err => console.error(err));