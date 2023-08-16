function doGet(e) {
    const userEmail = Session.getActiveUser().getEmail();
    var htmlOutput =  HtmlService.createTemplateFromFile('Index');
    htmlOutput.email = userEmail;
    return htmlOutput.evaluate();
}

function AddRecord(nombre, consentimiento) {
  const userEmail = Session.getActiveUser().getEmail();
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("DATA_LOGIN");
  dataSheet.appendRow([nombre, consentimiento, userEmail, new Date()]);
  return 'Registro añadido';
}
