console.log('Starting notes.js ...')

module.exports.addNote = () => {
    console.log('add note func called');
    return 'New Note';
}

module.exports.add = (val1, val2) => {
    return val1 + val2;
}