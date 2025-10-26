# POE1 Kakao Launcher - 빠른 시작 가이드

## 🚀 5분 안에 시작하기

### 준비물
✅ 스팀덱 (또는 Linux PC)
✅ 인터넷 연결
✅ 카카오 계정

---

## 📦 Step 1: 소스코드 받기

### 옵션 A: GitHub에서 다운로드
```bash
git clone https://github.com/YOUR_USERNAME/poe1-kakao-launcher.git
cd poe1-kakao-launcher
```

### 옵션 B: 압축 파일 사용
1. `poe1-kakao-launcher-source.tar.gz` 다운로드
2. 압축 해제:
   ```bash
   tar -xzf poe1-kakao-launcher-source.tar.gz
   cd poe1-kakao-launcher
   ```

---

## 🔨 Step 2: 빌드하기

### Windows PC에서 빌드 (권장)
```bash
# Node.js 설치 (https://nodejs.org)
# 프로젝트 폴더에서:

npm install
npm run build
```

### Linux/Mac에서 빌드
```bash
# Node.js 설치
sudo apt install nodejs npm  # Ubuntu/Debian
# 또는
brew install node  # Mac

# 빌드
npm install
npm run build
```

빌드 완료 후 `dist/` 폴더에서 설치 파일 확인:
- ✅ `poe1-kakao-launcher-1.0.0-setup.exe`

---

## 📲 Step 3: 스팀덱에 설치

### A. 데스크탑 모드로 전환
1. 전원 버튼 길게 누르기
2. "데스크탑 모드로 전환" 선택

### B. 설치 파일 전송
**방법 1: USB**
- USB에 `.exe` 파일 복사
- 스팀덱에 USB 연결
- 파일 복사

**방법 2: 네트워크**
```bash
# PC에서 (파일이 있는 폴더에서)
python3 -m http.server 8000

# 스팀덱 Firefox에서
http://PC의IP주소:8000
# 파일 다운로드
```

### C. Steam에 추가
1. 데스크탑에서 Steam 실행
2. 좌측 하단: **게임 추가** → **Steam 외부 게임 추가**
3. 다운로드한 `.exe` 파일 선택
4. 추가 완료!

### D. Proton 설정
1. 라이브러리에서 "POE1 Kakao Launcher" 우클릭
2. **속성** → **호환성** 탭
3. ✅ "특정 Steam Play 호환성 도구 사용 강제"
4. **Proton 9.0** 이상 선택

### E. 첫 실행
1. "POE1 Kakao Launcher" 실행
2. 설치 진행 (기본 경로 OK)
3. 설치 완료 후 창 닫기

### F. 경로 수정 (중요!)
1. "POE1 Kakao Launcher" 우클릭 → 속성
2. **대상** 수정:
   ```
   /home/deck/.local/share/Steam/steamapps/compatdata/[숫자]/pfx/drive_c/POE1Launcher/poe1-kakao-launcher.exe
   ```
3. **시작 위치** 수정:
   ```
   /home/deck/.local/share/Steam/steamapps/compatdata/[숫자]/pfx/drive_c/POE1Launcher/
   ```

**[숫자] 찾기:**
```bash
ls -lt /home/deck/.local/share/Steam/steamapps/compatdata/
# 가장 최근 폴더 숫자 확인
```

---

## 🎮 Step 4: 게임하기!

1. **게임 모드로 전환**
2. Steam 라이브러리에서 "POE1 Kakao Launcher" 실행
3. POE 웹사이트 로딩 대기
4. 카카오 로그인
5. **"게임 시작"** 클릭
6. 게임 자동 실행! 🎉

---

## ⚙️ 처음 게임 실행 시

### 게임 설치 프로그램이 나타나면
- ✅ 기본 경로 그대로 사용
- ✅ 설치 완료 후 다시 "게임 시작"

### 클라이언트 선택 화면
- ✅ **PathOfExile_KG.exe** (첫 번째) 선택
- ❌ 글로벌 버전 선택 금지

---

## 🐛 문제 해결

### 런처가 안 열려요
```bash
# Proton 버전 변경
Proton 9.0 → GE-Proton 9.x
```

### 게임이 실행 안 돼요
1. POE1 게임 설치 확인
2. compatdata 폴더 숫자 재확인
3. 카카오 로그인 상태 확인

### 로그인이 안 돼요
- 인터넷 연결 확인
- 카카오 계정 확인
- 런처 재시작

### "지정 PC" 오류
- 카카오 웹사이트에서 지정 PC 설정 해제
- https://poe.game.daum.net

---

## 💡 팁

### 성능 향상
- 스팀덱 설정에서 TDP 조절
- 게임 내 그래픽 옵션 최적화
- VRAM 할당 조정

### 편의 기능
- Steam 입력 설정 커스터마이징
- 단축키 설정
- 자동 로그인 (쿠키 저장)

---

## 📝 개발 모드로 테스트하기

빌드 없이 바로 테스트:
```bash
cd poe1-kakao-launcher
npm install
npm start
```

---

## 🤝 도움이 필요하신가요?

- GitHub Issues: 버그 리포트
- 디스코드/커뮤니티: 실시간 도움
- README.md: 상세 문서

---

## ⭐ 성공하셨나요?

프로젝트에 스타를 눌러주세요! ⭐
다른 사람들도 도와주세요! 🙌

---

**즐거운 POE1 라이프 되세요!** 🎮✨
