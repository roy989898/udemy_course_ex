console.log('Starting note .js');


var addNote = (title, body) => {

    console.log('Adding note', title, body);

};

var getAll = () => {
    console.log("Geeting all notes");
};

module.exports = {
    addNote: addNote,
    getAll: getAll
}