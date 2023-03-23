// function flattenArray(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//       return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
//     }, []);
//   }
//   const arr=[1,2,[3,4],[6,3,4,[2,3]]]
//   console.log(flattenArray(arr))

  function flatdata(arr){
    return arr.reduce(function (fl,tofl){
      return fl.concat(Array.isArray(tofl)?flatdata(tofl):tofl)
    },[])
  }
  const arr=[[1,2],[3,4],[6,3,4,[2,3]]]
  console.log(flatdata(arr))