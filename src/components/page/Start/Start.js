import React, { useEffect, useState } from 'react';
import SketchExample from './sketchExample';
import '../style/Start.css'
import SentenceMaker from './sentence';

const Start = () => {

	return (
		<div className='start'>
			<div className='start-quset'>
					<h1>
						{
							<SentenceMaker sentence={"가장 좋아하시는 색상을 골라주세요."} num={3}/>
						}
					</h1>
			</div>
			<div className={'color-animation'}>
				<SketchExample/>			
			</div>
		</div>
	);

	
};

export default Start;