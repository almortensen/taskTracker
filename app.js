async function getData(){
try {
  const response = await fetch('./data.json');
  if(!response.ok){
    throw new Error(`response status`, response.status)
  }

  const json = await response.json();
  for(let i = 0; i < json.task.length; i++){
    console.log(json.task[i]);
  }
} catch (error) {
  console.log(error);
}
}
getData()