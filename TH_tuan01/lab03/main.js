console.log("Nguyên Vũ - 22002885");
console.log("Câu 3");

//data 1
var dolScore1 = 96;
var dolScore2 = 108;
var dolScore3 = 89;

var koalScore1 = 88;
var koalScore2 = 91;
var koalScore3 = 110;

// Tính trung bình
var dolAvg = (dolScore1 + dolScore2 + dolScore3) / 3;
var koalAvg = (koalScore1 + koalScore2 + koalScore3) / 3;

console.log("data 1:");
if (dolAvg >= 100 || koalAvg >= 100) {
  if (dolAvg > koalAvg && dolAvg >= 100) {
    console.log(`Dolphins thắng với điểm trung bình là ${dolAvg.toFixed(2)}!`);
  } else if (koalAvg > dolAvg && koalAvg >= 100) {
    console.log(`Koalas thắng với điểm trung bình là ${koalAvg.toFixed(2)}!`);
  } else if (dolAvg === koalAvg && dolAvg >= 100 && koalAvg >= 100) {
    console.log(
      `Hòa! Cả hai đội đều có điểm trung bình là ${dolAvg.toFixed(2)}.`
    );
  } else {
    console.log(`Không đội nào chiến thắng vì điểm thấp hơn 100.`);
  }
} else {
  console.log(
    `Không đội nào chiến thắng vì không có đội nào đạt yêu cầu tối thiểu 100.`
  );
}

// Bonus 1
var dolScoreBonus1_1 = 97;
var dolScoreBonus1_2 = 112;
var dolScoreBonus1_3 = 101;

var koalScoreBonus1_1 = 109;
var koalScoreBonus1_2 = 95;
var koalScoreBonus1_3 = 123;

// Tính trung bình
var dolAvgBonus1 = (dolScoreBonus1_1 + dolScoreBonus1_2 + dolScoreBonus1_3) / 3;
var koalAvgBonus1 =
  (koalScoreBonus1_1 + koalScoreBonus1_2 + koalScoreBonus1_3) / 3;

console.log("Bonus 1:");
if (dolAvgBonus1 >= 100 || koalAvgBonus1 >= 100) {
  if (dolAvgBonus1 > koalAvgBonus1 && dolAvgBonus1 >= 100) {
    console.log(
      `Dolphins thắng với điểm trung bình là ${dolAvgBonus1.toFixed(2)}!`
    );
  } else if (koalAvgBonus1 > dolAvgBonus1 && koalAvgBonus1 >= 100) {
    console.log(
      `Koalas thắng với điểm trung bình là ${koalAvgBonus1.toFixed(2)}!`
    );
  } else if (
    dolAvgBonus1 === koalAvgBonus1 &&
    dolAvgBonus1 >= 100 &&
    koalAvgBonus1 >= 100
  ) {
    console.log(
      `Hòa! Cả hai đội đều có điểm trung bình là ${dolAvgBonus1.toFixed(2)}.`
    );
  } else {
    console.log(`Không đội nào chiến thắng vì điểm thấp hơn 100.`);
  }
} else {
  console.log(
    `Không đội nào chiến thắng vì không có đội nào đạt yêu cầu tối thiểu 100.`
  );
}

// Bonus 2
var dolScoreBonus2_1 = 97;
var dolScoreBonus2_2 = 112;
var dolScoreBonus2_3 = 101;

var koalScoreBonus2_1 = 109;
var koalScoreBonus2_2 = 95;
var koalScoreBonus2_3 = 106;

// Tính trung bình
var dolAvgBonus2 = (dolScoreBonus2_1 + dolScoreBonus2_2 + dolScoreBonus2_3) / 3;
var koalAvgBonus2 =
  (koalScoreBonus2_1 + koalScoreBonus2_2 + koalScoreBonus2_3) / 3;

console.log("Bonus 2:");
if (dolAvgBonus2 >= 100 || koalAvgBonus2 >= 100) {
  if (dolAvgBonus2 > koalAvgBonus2 && dolAvgBonus2 >= 100) {
    console.log(
      `Dolphins thắng với điểm trung bình là ${dolAvgBonus2.toFixed(2)}!`
    );
  } else if (koalAvgBonus2 > dolAvgBonus2 && koalAvgBonus2 >= 100) {
    console.log(
      `Koalas thắng với điểm trung bình là ${koalAvgBonus2.toFixed(2)}!`
    );
  } else if (
    dolAvgBonus2 === koalAvgBonus2 &&
    dolAvgBonus2 >= 100 &&
    koalAvgBonus2 >= 100
  ) {
    console.log(
      `Hòa! Cả hai đội đều có điểm trung bình là ${dolAvgBonus2.toFixed(2)}.`
    );
  } else {
    console.log(`Không đội nào chiến thắng vì điểm thấp hơn 100.`);
  }
} else {
  console.log(
    `Không đội nào chiến thắng vì không có đội nào đạt yêu cầu tối thiểu 100.`
  );
}
