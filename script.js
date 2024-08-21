function selectItem() {
  const select = document.createElement("select");
  select.id = "level";
  const options = [1, 2, 3];
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = `${value}`;
    select.appendChild(option);
  });
  document.body.appendChild(select);
  return select;
}

const select = selectItem();
select.addEventListener("change", function () {
  window.alert(`Wybrana opcja: ${this.value}`);
});
