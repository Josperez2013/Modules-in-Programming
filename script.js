var notes = [
  {
    text:"This is the first note, most important",
    importance:5,
    date:1
  },
  {
    text:"This is the third note, very important",
    importance:1,
    date:3
  },
  {
    text:"This is the second note, kind of important",
    importance:1,
    date:2
  }
];

function displayApp(){
  noteData();
}

function noteData(){
 //sorting
  
 var sortBy = [
  {
    prop: "importance",
    direction: -1
  },
  {
    prop: "date",
    direction: -1
  }
];
  
  notes.sort(function(a, b) {
  let i = 0,
    result = 0;
  while (i < sortBy.length && result === 0) {
    result =
      sortBy[i].direction *
      (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString()
        ? -1
        : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0);
    i++;
  }
  return result;
});
  
  //displaying
  for(var i=0; i < notes.length; i++){
    var ele = document.createElement("div");
    ele.innerHTML=notes[i].text;
    document.body.appendChild(ele);
    
    
  }
}

displayApp();
addNote();