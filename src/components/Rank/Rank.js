import React from 'react';

const Rank =({name}) => {
	return(

		<div className="center white f3">
		<p className="b f3">  {`${name}, your rank is...`}  </p>
		<p className="b f2">  {'#1'}  </p>
		</div>

		);
}
export default Rank;