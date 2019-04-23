# 리엑트 네이티브
우리가 return 할 수 있는 컴포넌트가 정해져있다. ( 리액트 네이티브 documentation 에서 확인 가능.)
- ActivityIndicator 는 빙글빙글 돌아가는 표시

## local state
리엑트 네이티브로 작업은 항상 local state로 한다.

## LinearGridient
expo 에 default 로 존재하고 임포트해서 2개 혹은 그이상의 색상을 추가해서 그레디언트 를 만들 수 있다.

## statusBar
react-native 에서 모바일의 시간, 와이파이, 배터리 등을 관리할 수 있게 한다.

## Vector-icons
fontawesome 과 같은 역할을 하는 친구임.

## React native 기본 navigator
navigator 는 geolocation 을 gelocation 은 getCurrentPosition 이라는 함수를 가지고 있다.

## 날씨앱 흐름
위치정보 get -> 날씨 정보 get -> is loaded = {true}

## 위치정보 에러 처리 방법
console.log 보다 state 에 error: null 로 저장해두고 에러 발생시에 error => { ```this.setState``` : ({error:error})}

## weather api
- fetch 사용하기
- 정보를 받아와서 null인 곳에다가 this.setState로 넣어주기
```
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
      });
```
