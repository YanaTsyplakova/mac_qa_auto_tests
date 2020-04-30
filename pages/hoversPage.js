const { I } = inject();

module.exports = {

  url: 'https://the-internet.herokuapp.com/hovers',
  avatar: {xpath:'//div[1][@class="figure"]/img'},
  hover: {xpath: '//div[@class = "figcaption"]/h5[contains (text(), "name: user1")]'}

}
