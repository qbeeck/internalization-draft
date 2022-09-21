export const internalizationValidator = () => {
  return (group: Abs) => {
    for (let key in group.controls) {
      if (!group.controls[key].value) {
        group.controls[key].setErrors({ [key]: true });
      } else {
        group.controls[key].setErrors(null);
      }
    }
  };
};
