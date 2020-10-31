const urlFormatString = "/:version/api/:collection/:id";
const urlInstance = "/6/api/listings/3?sort=desc&limit=10";

parsedUrlFormatString = urlFormatString.split("/");
parsedUrlInstance = urlInstance.split("/");

let res = [];

parsedUrlFormatString.forEach((element, i) => {
  if (element.charAt(0) === ":") {

    if (parsedUrlInstance[i].search("[?]") >= 1) {
      let a = parsedUrlInstance[i].split("?");
      let b = a[1].split("&");

      res[element.substring(1, element.length)] = a[0];

      b.forEach(el => {

        let c = el.split('=');
        res[c[0]] = c[1];

      });

    } else {
      element = element.substring(1, element.length);
      res[element] = parsedUrlInstance[i]; 
    }
  }
});


console.log(res);