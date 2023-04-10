import React from 'react';
import '../style/Portfolio.css'
import {BsGithub} from "react-icons/bs"
import Title from '../Title';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
	const navigate=useNavigate();
	const onClick=()=>{
		navigate("/portfolio/2");
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
							<a href="https://github.com/sumin0gig/ledger-S" target="_blank" rel="noreferrer">
								<li className='gitBtn'>
								SERVER <BsGithub></BsGithub>
								</li>
							</a>
							<a href="https://github.com/sumin0gig/ledger-C" target="_blank" rel="noreferrer">
								<li className='gitBtn'>
								CLIENT <BsGithub></BsGithub>
								</li>
							</a>
						</ul>
							<h4>정확한 복식부기에 기초</h4>
							<p>복식부기란 현금의 입출만을 기록하는 단식부기와는 달리,</p>
							<p>현금입출의 원인과 외상거래도 기록하는 기록법입니다.</p>
							<p>이것을 위해 차변과 대변이라는 두 변을 이용하며</p>
							<p>거래가 발생하여 계정에 기록할 때 상호 대응되도록 기입해</p>
							<p>차변 금액의 합계와 대변 금액의 합계가 항상 같도록 유지합니다.</p>
							<p>덕분에 모든 자산의 현황과 흐름을 정확하게 기입할 수 있습니다.</p>
							<p>이를 따르면 개인 자산도 기업처럼 입체적으로 관리할 수 있습니다.</p>
							<br/>
							<h4>간단한 입력과 검색</h4>
							<p>날짜, 품목, 금액, 차변, 대변만을 입력하여 거래를 입력하고</p>
							<p>거래 발생 날짜를 기준으로 거래를 검색합니다.</p>
							<p>간단하고 직관적인 입력 및 검색으로 오류를 최소화 할 수 있습니다.</p>
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

					<h4>회고록</h4>
					<a href='https://spicy-petalite-fcc.notion.site/household-ledger-35fce911bc5443ddb176fccfc582c3ba' target='_blank'>
						<p className='skillBtn'>
							회고록 바로가기(CLICK)
						</p>
					</a>
				</div>
			</div>
		</div>
		<div className='nextBtn' onClick={onClick}>
			{">"}
		</div>
	</>
	);
};

export default Portfolio;