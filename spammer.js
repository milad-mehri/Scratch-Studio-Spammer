
var id = prompt("What is the studio ID?");
var start = Math.floor(Math.random() * 228297019); 
var end = start+500;
for(i=start; i < end; i++){
$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/projects/in/" + id + "/add/?pks=" + i,data: "pks=" + i});
}
$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/projects/in/" + id + "/remove/?pks=" + i,data: "pks=" + i});
