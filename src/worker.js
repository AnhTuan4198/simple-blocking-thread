self.onmessage = ()=>{
  console.log("hello");
  self.postMessage("hello from worker")
}