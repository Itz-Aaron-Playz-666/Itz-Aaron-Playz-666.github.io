import * as react from "https://esm.sh/react"
function buttonList(nameArray) {
  function button(name) {
    return (
      <button type="button">{name}</button>
    );
  }
  nameArray.forEach(function(string) {
    button(string);
  }
  );
}
