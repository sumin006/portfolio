import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioList = ({title}) => {
	let textarea;
	let thumbImg;
	let windowImg;
	let mediaImg;
	let link;
	switch (title) {
		case '가계부':
			textarea="사용자가 직접 버튼을 등록, 수정, 삭제할 수 있게 만든 복식부기 형태의 가계부로, 사용자가 입력한 값을 기반으로 하여 재무상태표 및 손익계산서를 작성해주는 사이트"
			thumbImg="./site/ledger/main.png";
			windowImg="./site/ledger/main.png";
			mediaImg="./site/ledger/main-mobile.png";
			link="/portfolio/1";
			break;
		case '쇼핑몰':
			textarea="사용자가 직접 상품 및 배너를 등록, 수정, 삭제할 수 있게 만든 형태의 쇼핑몰로, 관리자 화면에서 등록한 상품을 기반으로 하여 쇼핑몰 화면에 상품 리스트를 출력해주는 사이트 "
			thumbImg="./site/shop/main.png";
			windowImg="./site/shop/main.png";
			mediaImg="";
			link="/portfolio/2";
			break;
		default:
			break;
	}
	return (
		<div className='portfolio'>
				<div className='portfolio-left'>
					<Link to={link}>
						<div className='thumbImg'>
							<img src={thumbImg} alt=''/>
						</div>
						<div className='titleH3'><h3>{title}</h3></div>
						<div className='textarea'>{textarea}</div>
					</Link>
				</div>
			<div className='portfolio-right'>
				<div className='windowImg'>
					<img src={windowImg} alt=''/>
				</div>
				<div className='mediaImg'>
					<img src={mediaImg} alt=''/>
				</div>
			</div>
		</div>
	);
};

export default PortfolioList;