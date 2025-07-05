<h1 align="center">주식 가상 매매사이트</h1>

<p align="center">
실제 주식 거래를 학습할 수 있는 가상 투자 웹 애플리케이션입니다.<br/>
계좌 생성부터 매수·매도, 포트폴리오 관리까지 통합적으로 제공하는 풀스택 환경으로 개발되었습니다.
</p>

---

## ✨ Features

- 회원 가입 및 로그인
- 이메일 기반 아이디/비밀번호 찾기
- 사이트 활용 목적 안내 튜토리얼 제공
- 전일 대비 변동량 TOP3 차트 제공
- 관리자·사용자 권한 분리 게시판
- 초기 가상 자금(1,000,000원) 할당
- 주식 검색, 실시간 시세 및 과거 데이터 조회
- 주식 매수·매도 및 거래 단위 지정
- 마이페이지에서 자산 현황과 수익률 확인

---

## 📹 Screenshots

🔗 [시연영상 바로가기](https://www.youtube.com/watch?v=ZWegyUl0zI4)

<p align="center">

  ![주식가상매매사이트](https://github.com/user-attachments/assets/91ddf6b5-5d00-4612-a830-8e718306a105)

</p>

---

## 🛠️ Skills & Tech Stack

### 💻 Frontend

| 구분       | 내용                                                                                 |
|-----------|--------------------------------------------------------------------------------------|
| **프레임워크** | React                                                                             |
| **환경**     | Vite (번들러)                                                                      |
| **언어**     | JavaScript (ES6), JSX                                                              |

**🌐 프론트 서버 구동**
```bash
cd FrontEnd
yarn          
yarn dev      
```

---

## 🖥️ Backend

| 구분       | 내용                                                                           |
|-----------|------------------------------------------------------------------------------|
| **런타임**   | Node.js                                                                     |
| **프레임워크** | Express.js                                                                  |
| **언어**     | JavaScript                                                                  |

**🌐 백엔드 서버 구동**
```bash
cd BackEnd
npm install   
npm start     
```

---

## 🗄️ Database

| 구분     | 내용                                                                               |
|---------|----------------------------------------------------------------------------------|
| **DBMS** | MySQL                                                                            |관리                           |

**🌐 DB 초기화**
```bash
npx sequelize db:create
npx sequelize-cli db:migrate
```

---

# 👫🏻 Contributors

| 이름       | 역할                |
|------------|-------------------|
| 최승아     | 팀장 / 프론트엔드 개발 |
| 신윤석     | 프론트엔드 개발         |
| 고동우     | 백엔드 개발         |
| 한은진     | 백엔드 개발     |

---

## 📦 Main Packages

### 🖥️ Frontend Packages

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)


---

### 🖥️ Backend Packages

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-3C3C3C?style=for-the-badge&logo=maildotru&logoColor=white)


---

## 📂 Directory Structure

```
주식 가상 매매사이트/
 ├── BackEnd/
 │   ├── bin/
 │   ├── config/
 │   ├── migrations/
 │   ├── models/
 │   ├── public/
 │   │   └── stylesheets/
 │   ├── routes/
 │   └── views/
 │
 └── FrontEnd/
     ├── public/
     ├── src/
     │   ├── assets/
     │   │   └── images/
     │   ├── components/
     │   │   ├── chart/
     │   │   └── topbar/
     │   ├── data/
     │   │   └── stocks/
     │   ├── pages/
     │   │   ├── common/
     │   │   │   ├── find/
     │   │   │   ├── login/
     │   │   │   └── signup/
     │   │   ├── manager/
     │   │   │   ├── account/
     │   │   │   └── board/
     │   │   └── user/
     │   │       ├── board/
     │   │       ├── investment/
     │   │       ├── main/
     │   │       ├── mypage/
     │   │       ├── search/
     │   │       └── stockInfo/
     └── 기타 설정 파일
```


<!-- # 주식 가상 매매 사이트 (금융시장 플랫폼)

## 소개
주식 가상 매매 사이트는 사용자가 가상 자금을 사용하여 주식을 사고 팔 수 있는 웹 애플리케이션입니다. 이 프로젝트는 주식 거래에 대한 이해를 높이고, 실제 거래에 앞서 연습할 수 있는 환경을 제공하기 위해 개발되었습니다.

## 기능
- **회원 가입 및 로그인**: 사용자는 계정을 생성하고 로그인할 수 있습니다.
- **아이디 및 비밀번호 찾기**: 회원가입 시, 입력한 이메일을 사용하여 아이디 및 비밀번호를 찾을 수 있습니다.
- **튜토리얼 제공**: 메인 페이지에 해당 사이트 활용 목적이 제시되어져 있습니다.
- **전일 대비 변동량 TOP3 제공**: 메인 페이지에 전일과 비교하여 변동량이 제일 큰 주식 3개를 차트로 보여줍니다.
- **게시판**: 주식에 대한 정보 혹은 의견을 게시판을 통해 나눌 수 있습니다. 관리자와 사용자가 게시판에 수행할 수 있는 행동은 차이가 있게 구현되어져 있습니다.
- **가상 자금 할당**: 회원 가입 시 초기 가상 자금이 할당됩니다. 초기 자금은 1,000,000원으로 고정하여 할당됩니다.
- **주식 검색 및 정보 제공**: 사용자는 특정 주식을 검색하고 실시간 가격, 과거 데이터 등 관련 정보를 확인할 수 있습니다. 각 주식에 대한 데이터를 차트를 통해 시각적으로 확인할 수 있습니다.
- **주식 매매/매도(가상투자)**: 사용자는 원하는 주식을 검색한 후, 주식 거래가 가능한 주식이라면 투자를 진행할 수 있습니다. 개인에게 할당괸 가상 자금을 사용하여 원하는 주식을 사고 팔 수 있습니다. 거래시, 거래 단위를 지정하여 편리하게 투자 가능합니다.
- **가상투자 마이페이지**: 사용자는 자신의 주식 포트폴리오를 관리하고, 초기 투자 자금, 매수 원금, 총 주식 평가금액, 현 투자 가능 금액, 수익률, 수익 금액, 보유 주식 수 등을 확인할 수 있습니다. 

## 설치 및 실행 방법
### 요구 사항
- React
- Node.js
- npm
- MySQL

### 설치
1. 저장소를 클론합니다.
    ```sh
    git clone https://github.com/winnaba61/virtual-invest.git
    ```
2. 프로젝트 디렉토리로 이동합니다.
    ```sh
    cd virtual-invest
    ```
3. 필요한 패키지를 설치합니다.
    ```sh
    npm install
    ```

### 데이터베이스 설정
1. MySQL을 설치하고 서버를 설정합니다.

2. /BackEnd/config/config.json에서 development 항목 내의 환경을 MySQL 서버 환경에 맞게 수정합니다.

3. /BackEnd/app.js 파일의 15번째 줄 connection 파트를 MySQL 서버 환경에 맞게 수정합니다.

4. 데이터 베이스에 이번 프로젝트에 필요한 스키마를 생성합니다.
    ```sh
    npx sequelize db:create --env development 
    ```
5. 데이터 베이스에 이번 프로젝트에 필요한 테이블을 생성합니다.
    ```sh
    npx sequelize-cli db:migrate
    ```
6. 테이블을 지우고 싶을 경우, 다음 명령어를 실행합니다.
    ```sh
    npx sequelize-cli db:migrate:undo:all
    ```

### 서버 실행
1. 개발 서버를 시작합니다.
    ```sh
    node app.js 혹은 npm start
    ```
2. 클라이언트 서버를 시작합니다.
    ```sh
    yarn vite 혹은 yarn dev
    ```

## 기여 방법
1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다.
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. 변경 사항을 커밋합니다.
    ```sh
    git commit -m "Add your feature description"
    ```
4. 브랜치를 푸시합니다.
    ```sh
    git push origin feature/your-feature-name
    ```
5. 풀 리퀘스트를 생성합니다.

## 팀장

2020202028 최승아 (winnaba61)

## 팀원

2019202053 신윤석 (tlsdbstjr)

2020202033 고동우 (DwKwCs)

2021202022 한은진 (hanejj) -->
