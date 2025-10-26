# POE1 Kakao Launcher for Steam Deck

카카오 버전의 Path of Exile 1을 스팀덱에서 실행하기 위한 Electron 기반 런처입니다.

## 특징

- 다음게임스타터 우회
- POE 카카오 웹사이트 통합
- 스팀덱 최적화
- 자동 게임 실행

## 설치 방법 (스팀덱)

### 1. 데스크탑 모드로 전환
스팀 버튼을 길게 눌러서 "데스크탑 모드로 전환" 선택

### 2. 런처 다운로드
- Firefox 또는 Chrome 브라우저 실행
- [Releases 페이지](https://github.com/YOUR_USERNAME/poe1-kakao-launcher/releases)에서 최신 버전 다운로드
- `poe1-kakao-launcher-x.x.x-setup.exe` 파일 다운로드

### 3. Steam에 외부 게임으로 추가
1. 데스크탑 모드에서 Steam 실행
2. 좌측 하단 "게임 추가" → "Steam 외부 게임 추가"
3. 다운로드한 설치 파일 선택
4. 호환성 탭에서 "특정 Steam Play 호환성 도구 사용 강제" 체크
5. **Proton 9.0 이상** 또는 **GE-Proton** 선택

### 4. 런처 설치
1. Steam 라이브러리에서 "POE1 Kakao Launcher" 실행
2. 설치 진행 (기본 경로 사용 권장)
3. 설치 완료 후 창 닫기

### 5. 경로 수정
1. Steam 라이브러리에서 "POE1 Kakao Launcher" 우클릭 → 속성
2. **대상** 필드를 다음과 같이 수정:
   ```
   /home/deck/.local/share/Steam/steamapps/compatdata/[랜덤숫자]/pfx/drive_c/POE1Launcher/poe1-kakao-launcher.exe
   ```
3. **시작 위치** 필드를 다음과 같이 수정:
   ```
   /home/deck/.local/share/Steam/steamapps/compatdata/[랜덤숫자]/pfx/drive_c/POE1Launcher/
   ```
   
   ⚠️ `[랜덤숫자]`는 각 스팀덱마다 다릅니다. 파일 브라우저에서 최근 날짜 기준으로 정렬하여 찾으세요.

### 6. 게임 모드로 전환 및 실행
1. 스팀 버튼 → "게임 모드로 전환"
2. Steam 라이브러리에서 "POE1 Kakao Launcher" 실행
3. POE 카카오 웹사이트가 로드되면 로그인
4. "게임 시작" 버튼 클릭
5. POE1 게임 자동 실행

## 사용 팁

### 처음 실행 시
- 게임 설치 프로그램이 나타나면 기본 경로로 설치
- 설치 완료 후 다시 "게임 시작" 클릭

### 클라이언트 선택
- "어떤 클라이언트로 실행할까요?" 메시지가 나타나면
- **PathOfExile_KG.exe** (첫 번째) 선택

### 주의사항
- 지정 PC 설정이 활성화되어 있으면 실행이 안 될 수 있습니다
- 카카오 웹사이트에서 지정 PC 설정을 해제해주세요
- 로그인 상태인데 게임 시작 버튼이 안 보이면 POE 로고를 터치하여 새로고침

## 문제 해결

### 게임이 실행되지 않을 때
1. Proton 버전 변경 (9.0 이상 또는 GE-Proton)
2. compatdata 폴더의 랜덤숫자 확인
3. POE1 게임이 제대로 설치되었는지 확인

### 로그인이 안 될 때
- 인터넷 연결 확인
- 카카오 계정 로그인 상태 확인
- 브라우저 캐시 삭제 (런처 재설치)

## 개발 정보

### 로컬 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 모드 실행
npm start

# 빌드 (Windows용)
npm run build
```

### 기술 스택
- Electron 28.x
- Node.js
- HTML/CSS/JavaScript

### 주요 파일
- `main.js` - Electron 메인 프로세스, 게임 실행 로직
- `index.html` - POE 카카오 웹사이트 webview
- `preload.js` - 브리지 스크립트
- `package.json` - 프로젝트 설정

## POE1 vs POE2 차이점

| 항목 | POE1 | POE2 |
|------|------|------|
| 웹사이트 | poe.game.daum.net | poe2.game.daum.net |
| 실행파일 | PathOfExile_KG.exe | PathOfExile_x64_KG.exe |
| 설치경로 | Daum Games/Path of Exile | Daum Games/Path of Exile 2 |

## 기여하기

버그 리포트, 기능 제안, Pull Request 환영합니다!

## 라이센스

MIT License

## 크레딧

- POE2 Kakao Launcher 개발자님께 감사드립니다
- 스팀덱 커뮤니티의 모든 분들께 감사드립니다

## 면책 조항

이 프로젝트는 비공식 팬메이드 런처입니다. 
Grinding Gear Games, 카카오게임즈와는 무관합니다.
