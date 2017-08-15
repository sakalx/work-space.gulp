;(() => {
  const
      hours = 1000 * 60 * 60,
      //days = hours * 24,
      // years = days * 365;

      currentDate = new Date().getTime(),
      startDate = new Date(2017, 3, 1).getTime(),
      passedHours = Math.round(((currentDate - startDate) / hours)/2);

  document.getElementById('exp-hrs').innerHTML = ` ${passedHours}<sup>hrs</sup>`;
})();
