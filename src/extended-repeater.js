module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|"
  } = {}
) {
  if (typeof str !== "string") {
    str = String(str);
  }
  if (addition) {
    addition = String(addition);
  }

  let res = "";

  for (let i = 0; i < repeatTimes; i++) {
    res += str;

    if (additionRepeatTimes === 0 && repeatTimes === 1) {
        return res += addition;
    }

    for (let j = 0; j < additionRepeatTimes; j++) {
      res += addition;

      if (j !== additionRepeatTimes - 1) {
        res += additionSeparator;
      }
    }

    if (i !== repeatTimes - 1) {
      res += separator;
    }
  }

  return res;
};
