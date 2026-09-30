const {app, BrowserWindow, shell} = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({
    width: 1440, height: 920, minWidth: 1050, minHeight: 700,
    backgroundColor:'#08090b',
    autoHideMenuBar:true,
    webPreferences:{contextIsolation:true}
  });
  win.loadFile(path.join(__dirname,'../dist/index.html'));
}
app.whenReady().then(()=>{createWindow(); app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
