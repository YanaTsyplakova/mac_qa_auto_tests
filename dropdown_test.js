Feature('dropdown');

Scenario('test something', (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown')
    I.click('//*[@id="dropdown"]')
    I.selectOption('//*[@id="dropdown"]', 'Option 1')
    I.grabValueFrom('//*[@id="dropdown"]/select[2]')
});
