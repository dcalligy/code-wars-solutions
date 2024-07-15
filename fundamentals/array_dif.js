function arrayDiff(a, b) {
  // const results = [];
  // if (a.length == 0) {
  //   return []
  // }
  // if (b.length == 0) {
  //   return a;
  // }
  // for (const ele of a) {
  //   if (!b.includes(ele)) {
  //     results.push(ele);
  //   };
  // }
  // return results;
  return a.filter((e) => !b.includes(e));
}
