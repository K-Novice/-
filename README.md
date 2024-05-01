# -
카카오톡 비공식 봇을 위한 모듈로서
비공식 봇 이용자들을 위한 간단한 함수들을 모아둔 모듈입니다.
다들 잘 쓰시길 바랍니다.

기능: 
1. 보조사 선택 함수
 String.selectAssistant (int)
ex) '강아지'.selectAssistant (1) = 강아지는

2. 포멧 함수
 String.format ({
   key : value...
   })
ex) '이름: {name}'.format({
      name : '초보'
    }) = '이름: 초보'

3. 변환 함수
 Array.replace (a, b)
ex) [1, 3, 4].replace (1, 5) = [5, 3, 4]
