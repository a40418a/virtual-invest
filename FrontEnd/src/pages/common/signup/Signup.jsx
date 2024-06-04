import './signup.css';
import { useRef, useState } from 'react';

export const Signup = () => {
    const nameRef = useRef(null);
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const birthdayRef = useRef(null);
    const emailRef = useRef(null);
    const admin = 0;
    const phoneRef = useRef(null); // 전화번호 입력에 대한 useRef 추가

    let checkID = 0;

    const handleButtonClickSignup = () => {
        if (nameRef.current.value == '') {
            alert('이름을 입력하세요');
            return;
        }
        if (idRef.current.value == '') {
            alert('계좌번호를 입력하세요');
            return;
        }
        if (checkID == 0) {
            alert('아이디 중복을 체크하세요.');
            return;
        }

        if (passwordRef.current.value == '') {
            alert('비밀번호를 입력하세요');
            return;
        }
        if (confirmPasswordRef.current.value != passwordRef.current.value) {
            alert('비밀번호가 일치하는지 확인해세요');
            return;
        }

        if (birthdayRef.current.value == '') {
            alert('생년월일을 입력하세요');
            return;
        }
        
        if (!birthdayRef.current.value.match(/^\d{4}-\d{2}-\d{2}$/)) {
            alert('생년월일을 YYYY-MM-DD형식으로 입력하세요');
            return;
        }
        /*
        if (isNaN(birthdayRef.current.value)) {
            alert('생년월일에 숫자만 입력하세요');
            return;
        }
        */
        if (emailRef.current.value == '') {
            alert('이메일을 입력하세요');
            return;
        }

        if (phoneRef.current.value == '') {
            alert('전화번호를 입력하세요');
            return;
        }

        // database submit
        fetch('http://localhost:3000/api/regist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: nameRef.current.value,
                user_id: idRef.current.value,
                user_passwd: passwordRef.current.value,
                user_birth: birthdayRef.current.value,
                user_email: emailRef.current.value,
                user_admin: admin,
                user_phone: phoneRef.current.value, // 전화번호 추가
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((response) => {
                alert('회원가입 성공.');
                console.log('regist successful:');
                window.location.href = 'http://localhost:5173';
            })
            .catch((error) => {
                console.error('Error registing:', error);
                alert('회원가입 실패.');
            });
    };

    const handleButtonClickCheckID = () => {
        //계좌번호 유효성 검사
        if (isNaN(idRef.current.value)) {
            alert("계좌번호는 숫자만 가능합니다.");
            return;
        }
        //중복체크 시작
        fetch('http://localhost:3000/api/checkID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: idRef.current.value,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((response) => {
                if (response.ischeck === 'exist') {
                    console.log('ID check cant use:');
                    alert('중복된 계좌번호입니다.');
                } else if (response.ischeck === 'null') {
                    console.log('ID check can use:');
                    alert('사용가능한 계좌번호입니다.');
                    checkID = 1;
                }
            })
            .catch((error) => {
                console.error('Error checking:', error);
                alert('회원가입 실패.');
            });
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-title" id="logo">
                    소프트웨어 공학 팀프로젝트 -2조
                </div>
                <div className="signup-title">회원가입</div>
                <input type="text" placeholder="이름" className="signup-input" ref={nameRef} />
                <div>
                    <input type="text" placeholder="계좌 번호" className="check-input" ref={idRef} />
                    <button className="check-button" onClick={handleButtonClickCheckID}>
                        중복 체크
                    </button>
                </div>
                <input type="password" placeholder="PW" className="signup-input" ref={passwordRef} />
                <input type="password" placeholder="PW 확인" className="signup-input" ref={confirmPasswordRef} />
                <input type="text" placeholder="생년월일 (YYYY-MM-DD)" className="signup-input" ref={birthdayRef} />
                <input type="text" placeholder="이메일" className="signup-input" ref={emailRef} />
                <input type="text" placeholder="전화번호" className="signup-input" ref={phoneRef} />{' '}
                {/* 전화번호 입력 추가 */}
                <button className="signup-button" onClick={handleButtonClickSignup}>
                    회원가입
                </button>
            </div>
        </div>
    );
};
