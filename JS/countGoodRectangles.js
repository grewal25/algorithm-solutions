
//solution 1
const countGoodRectangles=(rectangles)=>{
    let k = rectangles.map(m=>Math.min(...m))
    return k.filter(x=>x>=Math.max(...k)).length
}


//solution 2, with Map
var countGoodRectangles = function (rectangles) {
    let map = new Map(),max=0;
    rectangles.forEach(el => {
      max=Math.max(max,Math.min(el[0], el[1]));
      console.log(map.set(Math.min(el[0], el[1]), map.get(Math.min(el[0], el[1])) + 1 || 1));
    });
    return map.get(max);
  };

console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]))