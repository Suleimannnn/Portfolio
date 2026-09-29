김도경 Technical Art Portfolio - 샘플 파일
============================================

1. 로컬에서 확인
-----------------
이 폴더의 index.html을 더블클릭하면 기본 브라우저에서 확인할 수 있습니다.
모든 리소스가 상대 경로로 연결되어 있어 별도의 서버 없이도 기본 화면이 열립니다.

2. 실제 내용으로 바꿀 곳
-------------------------
- index.html의 자기소개 및 프로젝트 문구
- assets 폴더의 SAMPLE 목업 SVG를 실제 프로젝트 이미지로 교체
- 관련 자료 영역의 GitHub / Demo 주소
- 프로젝트 기간, 팀 인원, 본인의 실제 역할

중요: 샘플 목업을 실제 결과물처럼 제출하지 말고 실제 작업 이미지로 교체하세요.

3. GitHub Pages로 공개 링크 만들기
----------------------------------
A. GitHub에서 새 PUBLIC repository를 하나 만듭니다.
   예: portfolio 또는 technical-art-portfolio

B. 이 폴더 안의 파일을 모두 repository 최상위(root)에 업로드합니다.
   index.html
   style.css
   image-viewer.js
   assets/
   .nojekyll

C. GitHub repository에서
   Settings → Pages → Build and deployment → Source를 "Deploy from a branch"로 선택

D. Branch는 main / (root)를 선택하고 Save를 누릅니다.

E. 배포가 완료되면 보통 다음 형식의 링크가 생성됩니다.
   https://[GitHub사용자명].github.io/[저장소명]/

예:
   사용자명: sample-user
   저장소명: portfolio
   → https://sample-user.github.io/portfolio/

이 주소는 로그인하지 않은 외부 PC와 모바일 브라우저에서도 접속할 수 있습니다.

4. 사용자명.github.io 방식
--------------------------
repository 이름을 정확히 [GitHub사용자명].github.io 로 만들면
https://[GitHub사용자명].github.io/
처럼 더 짧은 주소를 사용할 수 있습니다.

5. 제출 전 체크
---------------
- PC에서 화면 확인
- Chrome 개발자도구 모바일 화면 또는 실제 스마트폰에서 확인
- 모든 이미지가 열리는지 확인
- 프로젝트 이미지 확대 기능 확인
- GitHub / Demo 링크 확인
- ZIP을 다른 폴더에 풀어도 index.html이 정상 실행되는지 확인
