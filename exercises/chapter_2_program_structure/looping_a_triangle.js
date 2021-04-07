let patron = '#######'
let triangle = ''

for (let i = 0; i < patron.length; i++) {
    triangle += patron[i];
    console.log(triangle);
}


for (let line = "#"; line.length < 8; line += "#")
    console.log(line);