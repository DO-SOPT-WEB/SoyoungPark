# 🖤 API 통신에 대하여

### 로딩 / 에러 처리를 하는 방법에는 어떤 것들이 있을까?

- 리액트 쿼리

  useQuery에 있는 로딩, 에러 상태를 나타내는 속성을 이용해 처리할 수 있다.

- 명령형으로 처리

  API 호출 로직에 try-catch 이용해서 처리(가독성 좋지 X)

- 선언형으로 처리

  Suspence(로딩 처리), ErrorBoundary(에러 처리) 이용

### 패칭 라이브러리란 무엇이고 어떤 것들이 있을까?

- 서버로부터 데이터를 가져오는 작업(데이터 패칭)을 단순화하고 관리를 유용하게 하기 위한 라이브러리이다.
- axios, swr, react-query 등이 있다.

### 패칭 라이브러리를 쓰는 이유는 무엇일까?

- 간편한 비동기 데이터 요청이 가능

- 상태 관리 및 업데이트가 쉬워짐

- 캐싱과 최적화

- 로딩, 오류 처리가 편리해짐
