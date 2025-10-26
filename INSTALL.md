# 📦 POE1 Kakao Launcher 설치 가이드

## Windows PC에서 빌드

### 1. 준비물
- Node.js 18 이상 (https://nodejs.org)
- Git (선택사항)

### 2. 프로젝트 준비
```cmd
# 폴더로 이동
cd poe1-kakao-launcher

# 의존성 설치
npm install
```

### 3. 빌드
```cmd
npm run build:win
```

빌드 완료 후 `dist` 폴더에 `poe1-kakao-launcher-v0.1.0-setup.exe` 파일이 생성됩니다.

---

## 스팀덱에 설치

### 1. 파일 전송
**setup.exe 파일**을 스팀덱으로 전송합니다:
- USB 메모리 사용
- 또는 네트워크 공유
- 또는 클라우드 (Google Drive 등)

### 2. 데스크탑 모드
전원 버튼 길게 누르기 → "Switch to Desktop"

### 3. Steam에 추가
1. Steam 데스크탑 앱 실행
2. 좌측 하단 "게임" 클릭
3. "Steam 외부 게임 추가..." 선택
4. setup.exe 파일 선택
5. "선택한 프로그램 추가" 클릭

### 4. Proton 설정
1. 라이브러리에서 추가한 게임 우클릭
2. "속성..." 선택
3. "호환성" 탭
4. ✅ "특정 Steam Play 호환성 도구 사용 강제" 체크
5. **Proton 9.0** 선택 (또는 GE-Proton 9.x)

### 5. 첫 실행 (설치)
1. "플레이" 버튼 클릭
2. 설치 프로그램이 실행됩니다
3. 설치 경로는 **기본값 그대로** 사용
4. 설치 완료까지 대기 (1-2분)
5. 설치 완료 후 POE 웹사이트가 열립니다
6. **지금은 창을 닫습니다** (X 버튼)

### 6. compatdata 숫자 확인
**Konsole 터미널**을 열고:
```bash
ls -lt ~/.local/share/Steam/steamapps/compatdata/ | head -5
```

**가장 위에 나오는 숫자를 메모**하세요 (예: 3456789012)

### 7. 경로 수정 (⚠️ 매우 중요!)
1. Steam에서 게임 우클릭 → "속성..."
2. "Shortcut" (또는 "바로 가기") 탭 클릭

**Target (대상) 필드:**
```
"/home/deck/.local/share/Steam/steamapps/compatdata/[숫자]/pfx/drive_c/Program Files/poe1-kakao-launcher/poe1-kakao-launcher.exe"
```

**Start In (시작 위치) 필드:**
```
"/home/deck/.local/share/Steam/steamapps/compatdata/[숫자]/pfx/drive_c/Program Files/poe1-kakao-launcher/"
```

⚠️ **[숫자]를 6단계에서 확인한 실제 숫자로 변경하세요!**

⚠️ **따옴표를 반드시 포함하세요!**

⚠️ **Start In 끝에 슬래시(/)를 반드시 넣으세요!**

### 8. 게임 모드로 복귀
데스크탑에서 Steam 아이콘 더블클릭 → "Return to Gaming Mode"

### 9. 실행!
1. 라이브러리에서 "poe1-kakao-launcher" 찾기
2. A 버튼 (또는 터치)
3. POE 웹사이트 로딩...
4. 카카오 로그인
5. "게임 시작" 버튼 클릭
6. PathOfExile_KG.exe 선택 (첫 번째!)
7. 게임 플레이! 🎉

---

## 🐛 문제 해결

### 플레이 버튼 눌러도 반응 없음
- Proton 버전 확인 (9.0 이상)
- 경로 다시 확인 (따옴표, 슬래시)
- compatdata 숫자 재확인
- Steam 재시작

### 웹사이트 안 열림
- 인터넷 연결 확인
- DNS 설정: 8.8.8.8

### 로그인 안 됨
- PC에서 카카오 로그인 가능한지 확인
- "지정 PC" 기능 해제

### 게임 설치 안내만 뜸
- POE 웹사이트에서 수동으로 게임 다운로드
- 설치 경로: `C:\Daum Games\Path of Exile`

### 로그 확인
```bash
tail -f ~/.local/share/Steam/logs/compat_log.txt
```

---

## ✅ 성공!

모든 단계를 완료하셨다면 이제 스팀덱에서 POE1 카카오를 즐기실 수 있습니다!

**Happy Exiling!** ⚔️💎
