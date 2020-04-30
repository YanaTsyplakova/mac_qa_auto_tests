const { I } = inject();

module.exports = {

  url: 'http://the-internet.herokuapp.com/checkboxes',
  checkbox1: {xpath: '//*[@id="checkboxes"]/input[1]'},   
  checkbox2: {xpath: '//*[@id="checkboxes"]/input[2]'},
}

//  //input[text()=" checkbox 1"]