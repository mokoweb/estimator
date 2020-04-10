const getInfectionsByRequestedTime = (multiplier, data) => {
  let noOfDays = 0;

  switch (data.periodType) {
    case 'days':
      noOfDays = data.timeToElapse / 3;
      break;

    case 'weeks':
      noOfDays = (data.timeToElapse * 7) / 3;
      break;

    case 'months':
      noOfDays = (data.timeToElapse * 30) / 3;
      break;

    default:
      break;
  }

  return ((2 ** Math.trunc(noOfDays)) * data.reportedCases * multiplier);
};

const hospitalBedsByRequestedTime = (data, multiplier) => 0.35
* (getInfectionsByRequestedTime(multiplier, data) * 0.15) - data.totalHospitalBeds;

const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: getInfectionsByRequestedTime(10, data),
    severeCasesByRequestedTime: getInfectionsByRequestedTime(10, data) * 0.15,
    hospitalBedsByRequestedTime: hospitalBedsByRequestedTime(data, 10)
  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: getInfectionsByRequestedTime(50, data),
    severeCasesByRequestedTime: getInfectionsByRequestedTime(50, data) * 0.15,
    hospitalBedsByRequestedTime: hospitalBedsByRequestedTime(data, 50)
  }
});

export default covid19ImpactEstimator;
