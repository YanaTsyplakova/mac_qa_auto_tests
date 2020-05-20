const { I } = inject();

module.exports = {

  url: 'https://the-internet.herokuapp.com/',
  fileDownload: {xpath:'//a[@href = "/download"]'},
  fileUpload: {xpath: '//a[@href="/upload"]'}
}