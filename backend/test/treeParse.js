const data = [
  {
          "name":"root",
          "_id":"root_id",
       
  },
  {
          "name":"a1",
    "parentAreaRef":{
               "id":"root_id",
            
    },
          "_id":"a1_id",
       
  },
  {
          "name":"a2",
    "parentAreaRef":{
               "id":"a1_id",
            
    },
          "_id":"a2_id",
       
  },
  {
          "name":"a3",
    "parentAreaRef":{
               "id":"a2_id",
            
    },
          "_id":"a3_id",
       
  },
  {
          "name":"b1",
    "parentAreaRef":{
               "id":"root_id",
            
    },
          "_id":"b1_id",
       
  },
  {
          "name":"b2",
    "parentAreaRef":{
               "id":"b1_id",
            
    },
          "_id":"b2_id",
       
  },
  {
          "name":"b3",
    "parentAreaRef":{
               "id":"b1_id",
            
    },
          "_id":"b3_id",
       
  }
]

var idToNodeMap = {}; //Keeps track of nodes using id as key, for fast lookup
var root = null; //Initially set our loop to null

data.forEach(function(datum) {
  datum.children = [];

  idToNodeMap[datum._id] = datum;

  if (typeof datum.parentAreaRef === "undefined") {
    root = datum;
  } else {
    parentNode = idToNodeMap[datum.parentAreaRef.id];
    delete datum.parentAreaRef;

    parentNode.children.push(datum);
  }
});

console.log(root);
