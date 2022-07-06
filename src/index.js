import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let max = 10000;
  let result = false;
  for (let i = 0; i < max; i++) {
    x1 = x1 + v1;
    x2 = x2 + v2;
    if (x1 === x2) {
      result = true;
      break;
    }
  }
  return result ? "YES" : "NO";
}

let meet = kangaroo(0, 3, 4, 2);
console.log(meet);
