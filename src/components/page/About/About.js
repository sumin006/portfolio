import React from 'react';
import Title from '../Title';
import '../style/AboutMe.css'
import Introduce from '../Introduce';
import ColorCookie from './ColorCookie';

const About = () => {
	return (
		<div className='AboutMe'>
			<div className='inner'>
				<Title title={"김수민 | About Me"}/>
				<div className='content'>
					<div className='comment-top'>
						<b>Contact</b>
							<div className='Acomment'>
								<p>Email</p>
								<a href='/'>sumin006@naver.com</a>
							</div>
							<div className='Acomment'>
								<p>Phone</p>
								<a href='/'>010-4188-1955</a>
							</div>
					</div>
					<div className='comment-bottom'>
						<b>LINK</b>
							<div className='Acomment'>
								<p>Blog</p>
								<a href='https://velog.io/@sumin0gig'>https://velog.io/@sumin0gig</a>
							</div>
							<div className='Acomment'>
								<p>Git Hub</p>
								<a href='https://github.com/sumin006'>https://github.com/sumin006</a>
							</div>
					</div>
				</div>
				<div className='language'>
					<Introduce introduce={"사용 언어"}/>
					<div className='introduce-collection'>
						<div className="introduce">HTML</div>
						<div className="introduce">CSS</div>
						<div className="introduce">SCSS</div>
						<br/>
						<div className="introduce">JavaScript</div>
						<div className="introduce">JQuery</div>
						<div className="introduce">Canvas</div>
						<div className="introduce">TypeScript</div>
						<div className="introduce">React</div>
						<div className="introduce">Redux</div>
						<br/>
						<div className="introduce">Git</div>
						<div className="introduce">GitHub</div>
						<div className="introduce">PHP</div>
						<div className="introduce">MySQL</div>
						<div className="introduce">NodeJS</div>
					</div>
				</div>
				<Introduce introduce={"자기소개"}/>
				<div className='introduce-collection'>
					<div className="introduce">
						안녕하세요. 개발이 아닌 사용으로 시작한 개발자, 김수민입니다.
					</div>
					<div className='introduce'>
						경영학과를 나와 여러 사이트를 이용하며 다양한 사이트의 개발 및 사용자 편의 개선에 흥미를 가지게 되었습니다.
					</div>
					<div className='colors'>
						<div className='left'>
							<ColorCookie/>
						</div>
						<div className='right'>
							<div className='introduce'>
								특히, 사용자의 환경에 따라 커스텀할 수 있는 사이트는 제게 큰 관심거리가 되어주었습니다.
							</div>
							<div className='introduce'>
								선택한 색상이 메인 컬러로 사용된 페이지를 마주했을 때, 어떤 기분이 드셨나요?
							</div>
							<div className='introduce'>
								대다수의 사용자들은 자신의 기호가 반영됨을 느낄 수 있어 좋았다는 반응을 보였습니다.
							</div>
							<div className='introduce'>
								앞으로도 이렇듯 좋은 인상을 남길 수 있는 페이지를 만들어나가고 싶습니다.
							</div>
							<div className='introduce'>
								그를 위해, 최신 트렌드와 기술을 배우며 지속적인 성장을 추구해 나가고자 합니다.
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>

	);
};

export default About;