//GoogleAppsScript(GAS)でページ遷移を擬似的に実装する方法
//http://qiita.com/kakkiichan/items/a6a653bbe113a1dee2eb

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}
