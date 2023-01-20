const {contextBridge, ipcRenderer} = require("electron");

const api = {
    req_batterie: (req) => ipcRenderer.invoke("req_batterie", req),
    req_cpu: (req) => ipcRenderer.invoke("req_cpu", req),
    req_graphics: (req) => ipcRenderer.invoke("req_graphics", req),
    req_memory: (req) => ipcRenderer.invoke("req_memory", req),
    req_monitor: (req) => ipcRenderer.invoke("req_monitor", req),
    req_temp: (req) => ipcRenderer.invoke("req_temp", req),
    req_inetChecksite: (req) => ipcRenderer.invoke("req_inetChecksite", req),
    req_Files: (req) => ipcRenderer.invoke("req_Files", req),
    req_versions: (req, app) => ipcRenderer.invoke("req_versions", req, app),
    req_app: (req, app) => ipcRenderer.invoke("req_app", req, app),
    req_network: (req, app) => ipcRenderer.invoke("req_network", req, app),
    req_wifi: (req, app) => ipcRenderer.invoke("req_wifi", req, app),
    req_gateway: (req, app) => ipcRenderer.invoke("req_gateway", req, app),
    req_fsSize: (req, app) => ipcRenderer.invoke("req_fsSize", req, app),

    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    }
}

contextBridge.exposeInMainWorld("api", api)