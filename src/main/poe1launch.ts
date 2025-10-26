import { app, BrowserWindow, dialog } from 'electron'
import * as fs from 'fs'
import { spawn } from 'child_process'
import * as path from 'path'

export function poe1Launch(win: BrowserWindow, url: string): void {
  // Url Unescape
  const unescapedUrl = decodeURIComponent(url).replace('daumgamestarter://', '')
  console.log('Unescaped Url:', unescapedUrl)

  // '|' Split
  const [gameCode, gameStatus, execute, token, userCode] = unescapedUrl.split('|')
  console.log('Game Code:', gameCode)
  console.log('Game Status:', gameStatus)
  console.log('Execute:', execute)
  console.log('Token:', token)
  console.log('User Code:', userCode)

  const gamePath = 'C:\\Daum Games\\Path of Exile'
  const executeKakao = 'PathOfExile_KG.exe'

  if (poe1IsInstalled(executeKakao)) {
    // 게임이 설치되어 있으면 바로 실행
    dialog
      .showMessageBox(win, {
        type: 'question',
        buttons: [executeKakao, `${executeKakao} (글로벌 버전)`],
        defaultId: 0,
        title: 'Path of Exile 1',
        message: '어떤 클라이언트로 실행할까요?'
      })
      .then((response) => {
        if (response.response === 0) {
          // 카카오 버전 실행
          spawn(`${path.join(gamePath, executeKakao)}`, ['--kakao', token, userCode], {
            cwd: gamePath
          })
        }
        if (response.response === 1) {
          // 글로벌 버전 실행
          spawn(`${path.join(gamePath, executeKakao)}`, {
            cwd: gamePath
          })
        }
      })
  } else {
    // 설치되지 않았으면 안내 메시지
    dialog.showMessageBox(win, {
      type: 'info',
      title: 'Path of Exile 1',
      message: '게임이 설치되지 않았습니다.\n\n웹사이트에서 "게임 시작" 버튼을 눌러 설치를 진행해주세요.\n\n설치 경로: C:\\Daum Games\\Path of Exile'
    })
  }
}

function poe1IsInstalled(execute: string): boolean {
  // 기본 경로에서 설치되어 있는지 여부를 확인
  const installPath = 'C:\\Daum Games\\Path of Exile'

  // 해당 경로에 execute 파일이 있는지 확인
  if (fs.existsSync(path.join(installPath, execute))) {
    return true
  }

  console.log('Path of Exile 1 is not installed')
  return false
}
