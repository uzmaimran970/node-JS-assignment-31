// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!


 let username1 : string[] = ["uzma","kainat","maham","marium"];

 if (username1.length === 0){
     console.log("we need to find some users")
 }else{
     username1 = [];
     console.log(`All users have been removed` + username1.length)
 }