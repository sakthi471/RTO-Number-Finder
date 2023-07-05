const inputEl = document.querySelector("input");

const getJsonData = async () => {
  const response = await fetch("RTO-Number-Finder/assets/json/data.json");
  return await response.json();
};

const searchRecord = async (value) => {
  const data = await getJsonData();
  const uppercase = value.toUpperCase();

  const resultData = data.find((record) => {
    return record.code === uppercase || uppercase.startsWith(record.code);
  });
  const resultSectionEl = document.querySelector("#resultSsextion");

  if (resultData) {
    resultSectionEl.classList.remove("hidden");
    resultSectionEl.querySelector("#qurey").innerText = uppercase;

    resultSectionEl.querySelector("#code").innerText = resultData.code;
    resultSectionEl.querySelector("#location").innerText = resultData.location;
    resultSectionEl.querySelector("#rto").innerText = resultData.type;
    resultSectionEl.querySelector("#district").innerText = resultData.district;
  } else {
    resultSectionEl.classList.add("hidden");
  }
};

// inputEl.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     if (inputEl.value.length > 3) {
//       searchRecord(inputEl.value);
//       console.log("key presssed");
//     }
//   }
// });


  function search(){
  if (inputEl.value.length > 3) {
          searchRecord(inputEl.value);
         
    }
 }
