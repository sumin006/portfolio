import React from 'react';
import '../style/Portfolio.css'
import {BsGithub} from "react-icons/bs"
import Title from '../Title';
import { useNavigate } from 'react-router-dom';

const Portfolio2 = () => {
	const navigate=useNavigate();
	const onClick=()=>{
		navigate("/portfolio/2");
	}
	return (
		<>
		<div className='nextBtn' onClick={onClick}>
			{">"}
		</div>
		<div className='portfolio-site'>
			<div className='inner'>
				<Title title={"쇼핑몰"}/>
				<div>
					<button className='skillBtn'>HTML</button>
					<button className='skillBtn'>CSS</button>
					<button className='skillBtn'>JavaScript</button>
					<button className='skillBtn'>TypeScript</button>
					<button className='skillBtn'>React</button>
					<button className='skillBtn'>Redux</button>
					<button className='skillBtn'>Node JS</button>
				</div>
				<span>사용자의 재고 관리를 고려한 쇼핑몰 사이트입니다.</span>
				<hr/>
				<div className='deployment'>
					<div className='expl2'>
						<div>
							<img src='.././site/shop/mainImg.png' alt='page1'/>
						</div>
						<div>
						<ul className='gitBtns'>
							<a href="https://github.com/sumin006/shop-S" target="_blank" rel="noreferrer">
								<li className='gitBtn'>
								SERVER <BsGithub></BsGithub>
								</li>
							</a>
							<a href="https://github.com/sumin006/shop-C" target="_blank" rel="noreferrer">
								<li className='gitBtn'>
								CLIENT <BsGithub></BsGithub>
								</li>
							</a>
						</ul>
							<h4>직관적인 쇼핑몰 사이트</h4>
							<p>메인 페이지 내에 2가지의 슬라이더와 상품 배열을 노출하여</p>
							<p>소비자에게 많은 상품의 노출을 극대화 시킵니다.</p>
							<br/>
							<h4>관리자가 지정할 수 있는 리스트</h4>
							<p>기본으로 지정된 관리자 아이디는 admin, 비밀번호는 12345678입니다.</p>
							<p>관리자로 로그인 했을 시, 관리자 페이지에 접근할 수 있습니다.</p>
							<br/>
							<p>관리자 페이지에서 관리할 수 있는 것들 중에는 아래 리스트가 포함됩니다.</p>
							<p>- 쇼핑몰에서 판매하는 상품의 상세조건 삭제, 수정, 추가</p>
							<p>- 메인화면 좌측 상단에 나타나는 BEST LIST의 목록 및 순위</p>
							<p>- 메인 홈페이지 내 배너 슬라이더의 이미지, 링크</p>
							<p>- 배너 슬라이더 아래의 BEST 10 목록</p>
							<p>- 멤버의 관리자 페이지 접속 권한</p>

						</div>
					</div>
					
					<div className='expl1'>
						<div>
							<img src='.././site/shop/login.png' alt='page2'/>
						</div>
						<div>
							<h4>암호화 된 로그인 및 회원가입</h4>
							<p>회원가입 시 정규표현식 및 bcrypt 암호화를 통한 비밀번호 입력으로 보안성을 높혔습니다.</p>
							<p>때문에 관리자 비밀번호를 제외한 모든 비밀번호가 8글자 이상, 영소문자, 영대문자, 특수문자, 숫자를 포함해야 합니다.</p>
							<p>또한, 이미 가입된 아이디와의 중복을 방지하기 위한 아이디 체크가 실행됩니다.</p>
						</div>
					</div>

					<div className='expl3'>
						<div>
							<h4>수량에 따른 UI 변화</h4>
							<p>상품의 수량이 몇개 남았냐에 따라 UI가 변경됩니다.</p>
							<p>상품의 수량이 10개 이하라면 수량임박! 을 알리는 알림창이,
								상품의 수량이 0개 이하라면 품절을 안내하는 선택할 수 없는 버튼이 작성됩니다.</p>
							<p>이 상품의 수량은 소비자가 상품을 구매하거나,</p>
							<p>관리자가 관리자 화면에서 수량을 증감 시킬 때 바뀌게 됩니다.</p>
						</div>
						<div>
							<img src='.././site/shop/p-amount1.png' alt='page3'/>
						</div>
						<div>
							<img src='.././site/shop/p-amount2.gif' alt='page3'/>
						</div>

					</div>

					<div className='expl3'>
						<div>
							<h4>가격에 따라 변화하는 상품 구매</h4>
							<p>위의 페이지에서 장바구니 버튼을 누르면, 상품이 장바구니에 담기게 됩니다.</p>
							<p>상품을 체크하고 구매하기 버튼을 누르면, 결제 페이지로 이동할 수 있습니다. </p>
							<p>체크한 상품의 전체 가격이 80,000원을 넘으면 배송비 3,000원이 0원으로 작성됩니다.</p>
							<br/>
							<h4>편리한 상품 확인</h4>
							<p>주문 상품 정보를 누르면 장바구니에 넣은 상품의 페이지로 이동할 수 있습니다.</p>
						</div>
						<div>
							<img src='.././site/shop/cart.png' alt='page5'/>
						</div>
						<div>
							<img src='.././site/shop/credit.png' alt='page6'/>
						</div>
					</div>
					
					<div className='expl1'>
						<div>
							<img src='.././site/shop/Search.png' alt='page4'/>
						</div>
						<div>
							<h4>자세한 상품 검색</h4>
							<p>어떤 페이지에서든 우측 상단의 상품 검색 아이콘을 눌러 상품 검색창을 펼 수 있습니다.
								이 검색창에서는 제품명, 가격, 카테고리, BEST, NEW... 해당하는 조건을 골라 상품을 검색할 수 있습니다.</p>
							<p>이 검색은 관리자 페이지 중 재고관리 페이지에서도 사용할 수 있습니다.</p>
						</div>
					</div>

					<div className='expl3'>
						<div>
							<h4>편리한 관리자 페이지</h4>
							<p>기본으로 지정된 관리자 아이디는 admin, 비밀번호는 12345678입니다.</p>
							<p>관리자 권한을 부여받은 아이디로 접속하면, 관리자페이지에 접근 할 수 있습니다.</p>
							<p>이 페이지에서는 상품의 여러가지 설정이 가능한 상품 관리,
							멤버의 접근 권한을 설정할 수 있는 멤버 관리,
							쇼핑몰 홈페이지 메인의 슬라이더를 수정할 수 있는 메인베너 관리가 있습니다.</p>
							<p>
								한 페이지에서 여러가지 기능이 가능할 경우, 상단의 타이틀 버튼들을 통해 편리하게 이동할 수 있습니다.
							</p>
						</div>
						<div>
							<img src='.././site/shop/admin-mobile.png' alt='page4'/>
						</div>
						<div>
							<h4>모바일 환경 최적화</h4>
							<p>media Query를 이용하여, 모든 페이지에서 PC뿐만 아니라 모바일에서도 편리하게 이용가능한 UI를 제공합니다.</p>
							<p>관리자 페이지의 몇 기능을 제외한 모든 기능을 모바일에서도 동일하게 사용할 수 있습니다.</p>
							<p></p>
						</div>
					</div>

				</div>
			</div>
		</div>
		</>
	);
};

export default Portfolio2;