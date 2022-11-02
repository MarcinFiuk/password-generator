import { OptionsType } from './../App.types';

export const disableButton = (checkboxesChecked: OptionsType) => {
    const checkboxesValArr = Object.values(checkboxesChecked);
    const stateOfButton = checkboxesValArr.every((state) => state === false);
    return stateOfButton;
};
