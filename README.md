# Color match game
## 1. 요구사항
- 두개의 단어 - 위, 아래
- 위 단어의 의미와 아래 단어의 색깔 비교
- 일치시 정답, 불일치시 오답

## 2. 사용자 스토리
- 사용자는 게임의 룰을 알기 위해 게임에 대한 설명을 확인할 수 있다.
- 사용자는 정답을 고를 수 있다.
- 사용자는 자신이 고른 답이 정답인지 확인 할 수 있다.

## 3. 컴포넌트 설계
### App
- 최상위 컴포넌트.
- 글로벌 css 를 import 하는 역할
### ColorMatch
- 하나의 플레이가 끝난 후 게임의 상태를 업데이트 하는 역할
- key 를 변경하여 component re-rendering 
### Game
- 게임의 상태와 UI 를 총괄하는 컴포넌트

## 4. Game 컴포넌트의 상세로직
### UI logic
1. 글자 및 색 표시 - DisplayWord 컴포넌트에 글자, 색깔을 parameter 로 주어서 표시
2. 정답 및 오답 체크 - Screen 컴포넌트를 이용하여 정답을 체크한 경우에만 보이도록 함.
### State logic
1. upperword_word, lowerword_color,  lowerword_word, gamestatus 네가지의 상태관리
2. 초기값은 0~6 사이의 랜덤값이 지정되도록 함
3. 사용자가 버튼 클릭시, upperword_word 와 lowerword_color 를 비교하여 gamestatus 를 변화
4. gamestatus 에 따라서 Screen 컴포넌트를 변화 -> 정답 및 오답 체크
5. 사용자가 버튼 클릭시, 게임 업데이트

## 5. 향후 개선 방향
- 정답과 오답에 확률이 균등하게 분포되도록 utils 를 수정