var message = '';

var student;

function print(message) {
  document.write('<section>' + message +'</section>');
}

for (var i = 0; i < students.length; ++i) {
  student = students[i];

  message += '<h1> ' + student.name + '</h1>';
  message += '<h2> track: ' + student.track + '</h2>';
  message += '<h2> achievements: ' + student.achievements + '</h2>';
  message += '<h2> points: ' + student.points + '</h2>';


}

print(message);
