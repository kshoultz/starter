//Hi mom!!!
var starter = {
    id: -1,
    firstName: 'Kevin',
    lastName: 'Shoultz',
    age: undefined,
    userName: null,
    start: function() {
        var test = 'Hard coded console log message.';
        console.log(test);
        return true;
    }, 
    end: function(message) {
        console.log(message);
        return false;
    }
};

starter.start();

console.log(starter.famousQuote);

console.log(`Kevin's age is: ` + parseInt(starter.age, 10)); // Non breaking problem.
starter.age = '143';

starter.middle();

starter.end('So, this is how it ends...');