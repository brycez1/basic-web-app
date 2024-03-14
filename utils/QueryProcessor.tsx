export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Brycez"
    );
  }

  if (query.toLowerCase().includes("largest")) {
    var arr = query.match(/\d+/g);
    if (arr != null) {
      const map1 = arr.map(Number)
      return (Math.max(...map1).toString());
    }
    else {
      return ""
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    var arr = query.match(/\d+/g);
    if (arr != null) {
      const map1 = arr.map(Number)
      const num = map1.reduce((a, b)=> a*b, 1)
      return (num.toString());
    }
    else {
      return ""
    }
  }

  if (query.toLowerCase().includes("plus")) {
    var arr = query.match(/\d+/g);
    if (arr != null) {
      const map1 = arr.map(Number)
      const num = map1.reduce((a, b)=> a+b, 0)
      return (num.toString());
    }
    else {
      return ""
    }
  }

  var isSquare = function (n : number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  var isCube = function (n : number) {
    return n > 0 && Math.cbrt(n) % 1 === 0;
  };

  if (query.toLowerCase().includes("cube")) {
    var arr = query.match(/\d+/g);
    if (arr != null) {
      const map1 = arr.map((x) => parseInt(x));
      const num = map1.filter((num) => isSquare(num) && isCube(num));
      if (num) {
        return (num[0].toString());
      }
    }
    else {
      return ""
    }
  }

  return "";
}
