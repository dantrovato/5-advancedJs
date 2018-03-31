// function constructors
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}



var john = new Person("john", 1990, "male prostitute");
var jane = new Person("jane", 1964, "international spy");
var mark = new Person("mark", 1946, "retired spider");



Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

// Object.create
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
  {
    name: {value: 'jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}

});




// Primitives vs objects

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: 'john',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
obj1.name = 'troia';
console.log(obj1.age);
console.log(obj1.age);



// Functions

var age = 27;
var obj = {
  name: 'jonas',
  city: 'lisbon'
};

function change(a, b,) {
  a = 30;
  b.city = 'san francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);





// Lecture: passing functions as arguments

var years = [1976, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el<= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
//console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);





// functions returning functions

function interviewQuestion(job) {
    if (job === "teacher") {
      return function(name) {
          console.log(name + ', can you explain what UX design is?');
      }
    } else if (job === 'designer') {
        return function(name) {
            console.log('what subject do you teach ,' + name + '?' );
        }
    } else {
        return function(name) {
            console.log('hello ' + name + ', what do you do?');
        }
      }
  }


var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('john');



// immediately invoked function expressions IIFE
(
  function(luck) {
      var score = Math.round(Math.random() * 10);
      console.log(score >= (5 + luck));
  }
)(5);



// closures

function retirement(retirementAge) {
    var a = ' years until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

// var ukRetirement = retirement(67);
// ukRetirement(1976);


function interviewQuestion(job) {
    var a = ', can you explain what UX design is?';
    var b = 'what subject do you teach, ';
    var c = 'hello ';
    var d = ', what do you do?';

    return function(name) {
        if (job === 'designer') {
            console.log(name + a);
        } else if (job === 'teacher') {
            console.log(b + name + '?');
        } else {
            console.log(c + name + d);
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
interviewQuestion('designer')('rob');
teacherQuestion('dan');



// bind call apply

var john = {
    name: 'john',
    job: 'teacher',
    age: 26,
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' everyone, my name is ' +
            this.name + ', i\'m a ' + this.job + ', and i\'m ' +
            this.age + ' years old');
        } else if (style === 'friendly') {
            console.log('Orite everyone, my name is ' +
            this.name + ', i\'m a ' + this.job + ', and i\'m ' +
            this.age + ' years old. have a good ' + timeOfDay);
        }
    }
};

var emily = {
    name: 'emily',
    job: 'prosty',
    age: 35
};

john.presentation.call(emily, 'friendly', 'fuck');
//john.presentation.apply(emily, ['friendly', 'fuck']);

var johnFriendly = john.presentation.bind(emily, 'friendly');
johnFriendly('night');

*/

// coding challenge: console game


(
  function() {
      var gamePlaying = true;
      if (gamePlaying) {
          var Question = function(question, options, rightAnswer) {
              this.question = question;
              this.options = options;
              this.rightAnswer = rightAnswer;
          };

          Question.prototype.quiz = function() {
              console.log(this.question);
              for (var i = 0; i < this.options.length; i++) {
                  console.log(i + ': ' + this.options[i]);
              }
              var guess = prompt('enter number of correct guess');
              if (guess === 'exit') {
                  gamePlaying === false;
              } else if (parseInt(guess) === this.rightAnswer) {
                  console.log('thazza right');
                  displayQuestion();
              } else {
                  console.log('na-aa');
                  displayQuestion();
              }

          }

          var question1 = new Question('who the tallest? ', ['dan', 'ceski', 'toni'], 2);
          var question2 = new Question('who the handsomest? ', ['dan', 'conor', 'fie'], 0);
          var question3 = new Question('who the frenchiest? ', ['lizzie', 'frenchie', 'chilli'], 1);



          function displayQuestion() {
              var questions = [question1, question2, question3];
              var randomise = Math.floor(Math.random() * questions.length);

              switch(randomise) {
                  case 0:
                      question1.quiz();
                      break;
                  case 1:
                      question2.quiz();
                      break;
                  case 2:
                      question3.quiz();
              }
          }

          displayQuestion();

      }
  }
)();
//just added display question on line 250ish





















//
