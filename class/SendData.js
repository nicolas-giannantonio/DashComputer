const systeminformation = require("systeminformation");

class SendData {
  static handle(requestName, functionType) {
    ipcMain.handle(requestName, () => {
      return new Promise((resolve, reject) => {
        resolve(
          systeminformation.functionType.then((data) => {
            return data;
          })
        );
        reject("error");
      });
    });
  }
}
