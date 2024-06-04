const defaultdice = require('./dice_Images/defaultdice.jpg');
const d4 = require('./dice_Images/d4.jpg');
const d6 = require('./dice_Images/d6.jpg');
const d8 = require('./dice_Images/d8.jpg');
const d10 = require('./dice_Images/d10.jpg');
const d12 = require('./dice_Images/d12.jpg');
const d20 = require('./dice_Images/d20.jpg');
const d00 = require('./dice_Images/d100.jpg');
const dF = require('./dice_Images/dF.jpg');
// and so on...

const diceImages = {
    defaultdice,
    d4,
    d6,
    d8,
    d10,
    d12,
    d20,
    d00,
    dF,
};

export default diceImages;

export type DiceImageKeys = keyof typeof diceImages;