import React from 'react';
import '../style/Portfolio.css'
import {BsGithub} from "react-icons/bs"
import Title from '../Title';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
	const navigate=useNavigate();
	const onClickprev=()=>{
		navigate("/portfolio/1");
	}
	const onClicknext=()=>{
		navigate("/portfolio/3");
	}
	return (
	<>
		<div className='portfolio-site'>
			<div className='inner'>
				<Title title={"가계부"}/>
				<div>
					<button className='skillBtn'>HTML</button>
					<button className='skillBtn'>CSS</button>
					<button className='skillBtn'>JavaScript</button>
					<button className='skillBtn'>React</button>
					<button className='skillBtn'>Redux</button>
					<button className='skillBtn'>Node JS</button>
				</div>
				<span>사용자가 스스로 작성한 계정과목의 분류에 따라 재산의 증감을 기록할 수 있는 가계부입니다.</span>
				<hr/>
				<div className='deployment'>
					<div className='expl2'>
						<div>
							<img src='.././site/ledger/page1_add-mobile.png' alt='page1'/>
						</div>
						<div>
						<ul className='gitBtns'>
							<a href="https://github.com/sumin006/ledger-S" target="_blank" rel="noreferrer">
								<li className='gitBtn'>
								SERVER <BsGithub></BsGithub>
								</li>
							</a>
							<a href="https://github.com/sumin006/ledger-C" target="_blank" rel="noreferrer">
								<li className='gitBtn'>
								CLIENT <BsGithub></BsGithub>
								</li>
							</a>
						</ul>
							<h4>복잡한 계산을 대신 해주는 가계부</h4>
							<p>네이버 가계부 및 후잉 가계부 사이트를 벤치마킹하여</p>
							<p>사용자가 간단한 수입/지출내역을 입력하면</p>
							<p>입력한 값을 컴퓨터가 직접 계산 및 분류하여</p>
							<p>자신의 수입/지출이 어떤 곳에서 발생했는지를</p>
							<p>확인할 수 있도록 유도하는 사이트입니다.</p>
							<br/>
							<h4>간단한 입력과 검색</h4>
							<p>날짜, 품목, 금액, 차변, 대변만을 입력하여 거래를 입력하고</p>
							<p>거래 발생 날짜를 기준으로 거래를 검색합니다.</p>
							<p>간단하고 직관적인 입력 및 검색으로 오류를 최소화 할 수 있습니다.</p>
							<br/>
							<h4>모바일 환경 최적화</h4>
							<p>media Query를 이용하여,</p>
							<p>모든 페이지에서 PC뿐만 아니라 모바일에서도 편리하게 이용가능한 UI를 제공합니다.</p>
							<p></p>
						</div>
					</div>
					
					<div className='expl1'>
						<div>
							<img src='.././site/ledger/page1.gif' alt='page1'/>
							<img src='.././site/ledger/page1-btns.png' alt='page1-btns'/>
						</div>
						<div>
							<h4>사용자의 환경에 맞는 커스텀</h4>
							<p>사용자가 원하는 분류 기준에 따라 계정과목을 분류하고 이용할 수 있도록 지원합니다. 만들어놓은 계정과목명을 변경하면 원장에 기입되어 있는 계정과목명 또한 함께 변경되어 사용자의 편의성을 극대화 합니다. </p>
						</div>
					</div>

					<div className='expl2'>
						<div>
							<h4>선택에 따라 달라지는 금액 및 비율</h4>
							<p>자금 현황 페이지에서는 사용자가 지정한 기간에 해당하는 자금의 상황을 파악할 수 있습니다.</p>
							<p>특히 수익 및 비용 란에서는 금액이 고정 및 유동으로 나누어져 있습니다. 이는 사용자가 금액 분류(계정과목)를 결정 할 때에 선택한, 유동성 여부에 따라 설정 됩니다.</p>
							<br/>
							<p>즉, 사용자가 유동 비용이라고 선택한 계정과목으로 작성한 금액만이 유동비용으로 출력됩니다.</p>
							<br/>
							<p>때문에 사용자가 유동 비용으로 작성했던 계정과목을 수정하게 되면 자금 현황 페이지에서도 금액이 변경됩니다.</p>
						</div>
						<div>
							<img src='.././site/ledger/fundstate-2.png' alt='page1'/>
						</div>
					</div>

					<h4>회고록</h4>
					<a href='https://spicy-petalite-fcc.notion.site/household-ledger-35fce911bc5443ddb176fccfc582c3ba' target='_blank'>
						<p className='skillBtn'>
							회고록 바로가기(CLICK)
						</p>
					</a>
				</div>
			</div>
		</div>
		<div className='nextBtn' onClick={onClicknext}>
			{">"}
		</div>
		<div className='prevBtn' onClick={onClickprev}>
			{"<"}
		</div>
	</>
	);
};

export default Portfolio;