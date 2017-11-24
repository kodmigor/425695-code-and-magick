'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var wizards = [
  {
    name: wizardNames[Math.floor(Math.random() * (wizardNames.length - 1))],
    surname: wizardSurnames[Math.floor(Math.random() * (wizardSurnames.length - 1))],
    coatColor: coatColors[Math.floor(Math.random() * (coatColors.length - 1))],
    eyesColor: eyesColors[Math.floor(Math.random() * (eyesColors.length - 1))]
  },
  {
    name: wizardNames[Math.floor(Math.random() * (wizardNames.length - 1))],
    surname: wizardSurnames[Math.floor(Math.random() * (wizardSurnames.length - 1))],
    coatColor: coatColors[Math.floor(Math.random() * (coatColors.length - 1))],
    eyesColor: eyesColors[Math.floor(Math.random() * (eyesColors.length - 1))]
  },
  {
    name: wizardNames[Math.floor(Math.random() * (wizardNames.length - 1))],
    surname: wizardSurnames[Math.floor(Math.random() * (wizardSurnames.length - 1))],
    coatColor: coatColors[Math.floor(Math.random() * (coatColors.length - 1))],
    eyesColor: eyesColors[Math.floor(Math.random() * (eyesColors.length - 1))]
  },
  {
    name: wizardNames[Math.floor(Math.random() * (wizardNames.length - 1))],
    surname: wizardSurnames[Math.floor(Math.random() * (wizardSurnames.length - 1))],
    coatColor: coatColors[Math.floor(Math.random() * (coatColors.length - 1))],
    eyesColor: eyesColors[Math.floor(Math.random() * (eyesColors.length - 1))]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
