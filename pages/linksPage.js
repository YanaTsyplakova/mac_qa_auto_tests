const { I } = inject();

module.exports = {

  url: 'https://the-internet.herokuapp.com/',
  fileDownload: {xpath:'//li/a[@href = "/download"]'},
  fileUpload: {xpath: '//a[@href="/upload"]'}

}