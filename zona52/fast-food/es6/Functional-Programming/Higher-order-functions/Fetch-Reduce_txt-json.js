const log = data => {
  console.log(`%c Our data.txt 👿`, `font-size: 21px; color: darkred`);
  console.log(`%c ${data}`, `color: #f3f`);
  const creatJson = data.
      trim().
      split('\n').
      map(line => line.split('\t')).
      reduce((custemers, [name, order, price, quantity]) => {
        custemers[name] = custemers[name] || [];
        custemers[name].push({order, price, quantity});

        console.log(custemers);
        console.log(name, order, price, quantity);
        return custemers
      }, {});

  console.log(`%c Our data.json 😈`, `font-size: 21px; color: gold`);
  console.log(JSON.stringify(creatJson, null, 2));
};

//AJAX
//check status request
const checkStatus = response => {
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};
//Fetch
fetch('data.txt').
    then(checkStatus).
    then(isText => isText.text()).//isJson => isJson.json()).
    then(log).
    catch(err => console.error(`%c 😭 ${err}`, `font-size: 18px; color: darkred`));

