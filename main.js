const { app, BrowserWindow, protocol, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');

// POE1 설정
const POE_GAME_URL = 'https://poe.game.daum.net';
const POE_EXECUTABLE = 'PathOfExile_KG.exe';

let mainWindow;
let gameInstalled = false;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true
    },
    icon: path.join(__dirname, 'icon.png')
  });

  // POE 카카오 웹사이트 로드
  mainWindow.loadFile('index.html');

  // 개발자 도구 (필요시)
  // mainWindow.webContents.openDevTools();

  // 웹뷰에서 다음게임스타터 프로토콜 감지
  mainWindow.webContents.session.protocol.registerStringProtocol('daumgamestarter', (request, callback) => {
    const url = request.url;
    console.log('DaumGameStarter Protocol detected:', url);
    
    // URL 파싱
    const urlWithoutProtocol = url.substring('daumgamestarter://'.length);
    const parts = urlWithoutProtocol.split('|');
    
    if (parts[0] === 'poe') {
      // POE 실행
      launchPOE(parts);
    }
    
    callback('OK');
  });

  // 외부 링크는 기본 브라우저로 열기
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function launchPOE(urlParts) {
  console.log('Launching POE with params:', urlParts);
  
  // POE 설치 경로 확인
  const possiblePaths = [
    path.join(process.env.HOME || process.env.USERPROFILE, 'Daum Games', 'Path of Exile', POE_EXECUTABLE),
    path.join('C:', 'Daum Games', 'Path of Exile', POE_EXECUTABLE),
    path.join('C:', 'Program Files (x86)', 'Daum Games', 'Path of Exile', POE_EXECUTABLE)
  ];

  let poePath = null;
  for (const testPath of possiblePaths) {
    if (fs.existsSync(testPath)) {
      poePath = testPath;
      break;
    }
  }

  if (!poePath) {
    console.error('POE executable not found!');
    return;
  }

  // enc_str과 member_id 추출
  const encStr = urlParts[3] || '';
  const memberId = urlParts[4] || '';

  console.log('POE Path:', poePath);
  console.log('Launching with --kakao', encStr, memberId);

  // POE 실행
  const workingDir = path.dirname(poePath);
  const args = ['--nologo', '-gc', '2', '--kakao', encStr, memberId];

  execFile(poePath, args, { cwd: workingDir }, (error, stdout, stderr) => {
    if (error) {
      console.error('Error launching POE:', error);
      return;
    }
    console.log('POE launched successfully');
  });
}

// 프로토콜 핸들러 등록
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('daumgamestarter', process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('daumgamestarter');
}

// Proton/Wine 호환성을 위한 명령줄 스위치
app.commandLine.appendSwitch('no-sandbox');
app.commandLine.appendSwitch('disable-gpu-sandbox');
app.commandLine.appendSwitch('in-process-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');

// 앱 준비 완료
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 모든 윈도우 닫힘
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 프로토콜로 앱 실행 (이미 실행 중인 경우)
app.on('open-url', (event, url) => {
  event.preventDefault();
  if (url.startsWith('daumgamestarter://')) {
    const urlWithoutProtocol = url.substring('daumgamestarter://'.length);
    const parts = urlWithoutProtocol.split('|');
    if (parts[0] === 'poe') {
      launchPOE(parts);
    }
  }
});
