import React from 'react';
import {BsFillCheckSquareFill,BsGithub} from "react-icons/bs"
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	window.scrollTo(0,0);
	return (
		<footer>
				<ul className='footList inner'>
					<li>
						<div>
						<b>사용자에게 가장 매력적인 UI/UX를 제공하여 계속 방문하고 싶은 서비스를 구축하기 위해 노력하는 프론트 엔드 개발자</b>
						</div>
					</li>
					<li>
						<ul className='linkLists'>
							<Link to="https://github.com/sumin006" target="_blank">
								<li className='linkList github'>
									<BsGithub></BsGithub>
									<p> GITHUB</p>
								</li>
							</Link>
							<Link to="https://velog.io/@sumin0gig" target="_blank">
								<li className='linkList velog'>
									<BsFillCheckSquareFill></BsFillCheckSquareFill>
									<p> VELOG</p>
								</li>
							</Link>
						</ul>
					</li>
				</ul>
		</footer>
	);
};

export default Footer;