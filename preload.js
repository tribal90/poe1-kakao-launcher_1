const { contextBridge, ipcRenderer } = require('electron');

// 필요한 경우 렌더러 프로세스와 메인 프로세스 간 통신을 위한 API 노출
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  // 필요한 추가 API를 여기에 정의
});
