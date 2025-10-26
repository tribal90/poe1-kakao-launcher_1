# POE1 Kakao Launcher 빌드 가이드

## 필요한 것
- Node.js 18.x 이상
- npm 또는 yarn
- Windows (빌드용) 또는 Linux with Wine

## 빌드 단계

### 1. 의존성 설치
```bash
cd poe1-kakao-launcher
npm install
```

### 2. 개발 모드에서 테스트
```bash
npm start
```

### 3. Windows용 실행 파일 빌드
```bash
npm run build
```

빌드가 완료되면 `dist/` 폴더에 다음 파일들이 생성됩니다:
- `poe1-kakao-launcher-1.0.0-setup.exe` - 설치 프로그램
- `poe1-kakao-launcher-1.0.0.exe` - 포터블 버전 (선택사항)

### 4. 릴리스 준비
1. `dist/poe1-kakao-launcher-1.0.0-setup.exe` 파일 확인
2. SHA512 체크섬 생성:
   ```bash
   sha512sum dist/poe1-kakao-launcher-1.0.0-setup.exe
   ```
3. GitHub Releases에 업로드

## Linux/Mac에서 Windows 빌드하기

### Wine 사용 (Linux)
```bash
# Wine 설치 (Ubuntu/Debian)
sudo apt install wine64

# electron-builder는 자동으로 Wine 사용
npm run build
```

### Docker 사용
```bash
# Dockerfile 생성 후
docker build -t poe1-builder .
docker run -v $(pwd):/project poe1-builder npm run build
```

## 문제 해결

### electron-builder 오류
```bash
# 캐시 삭제
rm -rf node_modules
npm install
```

### Windows 인증서 서명 (선택사항)
package.json의 build 섹션에 추가:
```json
"win": {
  "certificateFile": "path/to/cert.pfx",
  "certificatePassword": "password"
}
```

## 버전 업데이트
1. `package.json`의 version 수정
2. `README.md` 업데이트
3. Git 태그 생성:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

## 자동 빌드 (GitHub Actions)

`.github/workflows/build.yml` 파일 생성:
```yaml
name: Build

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: installer
          path: dist/*.exe
```
