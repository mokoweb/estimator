const currentlyInfectedImpact = ({ reportedCases }) => reportedCases * 10;

const currentlyInfectedSevere = ({ reportedCases }) => reportedCases * 50;

const infectionsByRequestedTime = (currentlyInfected, { timeToElapse }) => {
  const factor = timeToElapse / 3;
  return Math.trunc(currentlyInfected * (2 ** factor));
};

const covid19ImpactEstimator = (data) => ({
  data, // the input data you got
  impact: {
    currentlyInfected: currentlyInfectedImpact(data),
    infectionsByRequestedTime: infectionsByRequestedTime(currentlyInfectedImpact(data), data)
  }, // your best case estimation
  severeImpact: {
    currentlyInfected: currentlyInfectedSevere(data),
    infectionsByRequestedTime: infectionsByRequestedTime(currentlyInfectedSevere(data), data)
  } // your severe case estimation
});

export default covid19ImpactEstimator;
