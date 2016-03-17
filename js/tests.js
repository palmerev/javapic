// some vanilla manual tests for checkEmailFormat from join.js

function testValidEmail() {
    var valids = [
            'foo@example.com',
            'x@y.c',
            'cool123@me456.me',
            'fred.is.great@example.com'
        ],
        invalids = [
            '', ' ', '@', '@@@', '123', 'foo', '123@', 'foo@', '123@456', 'foo@bar',
            '123@.', 'foo@.', 'foo@.com', '123@.com', 'foo@bar@.com', 'foo@bar.@com',
            'foo@bar.com@', '@foo.bar.com'
        ],
        failures;

    if (valids.filter(validEmail).length !== valids.length) {
        failures = valids.filter(function (str, _, arr) {
            return arr.indexOf(str) === -1;
        });
        console.log('test of valid emails failed on:');
        failures.forEach(function (str) {
            console.log(str);
        });
    }
    else {
        console.log('tests on valid emails pass');
    }

    if (invalids.filter(validEmail).length !== 0) {
        failures = invalids.filter(function (str, _, arr) {
            return arr.indexOf(str) === -1;
        });
        console.log('test of invalid emails failed on:');
        failures.forEach(function (str) {
            console.log(str);
        })
    }
    else {
        console.log('tests on invalid emails pass');
    }
}
