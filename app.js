const showAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  console.log(data);

  document.getElementById("adv-ID").innerHTML = `advice # ${data.slip.id}`;
  document.querySelector(".adv-text").innerHTML = `"${data.slip.advice}"`;
};

showAdvice();
