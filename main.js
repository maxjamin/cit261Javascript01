

console.log("starting test...");

var numberOfUsers = 15;
var maxAdditionOfUsers = 10;

/*if statements*/
if(numberOfUsers < 100)
{
	console.log("The numberOfUsers is too low")
}

/*Add some additional users*/
for(i=0; i < maxAdditionOfUsers; i++)
{
	numberOfUsers += 1;
}

for(i=0; i < maxAdditionOfUsers; i++)
{
	numberOfUsers02 += 1;
}

console.log( "The additional users: ", numberOfUsers);