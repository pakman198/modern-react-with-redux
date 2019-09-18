import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui three column grid">
  		<div className="four column row">
				<div className="column">
					<div className="ui container comments">
					<ApprovalCard>
							<h4>Warning!</h4>
							<p>Are you sure?</p>
						</ApprovalCard>

						<ApprovalCard>
							<CommentDetail 
								author="Sam"
								timeAgo="Today at 4:45PM"
								content="Nice blog post"
								avatar={faker.image.avatar()}
							/>
						</ApprovalCard>

						<ApprovalCard>
							<CommentDetail 
								author="Alex"
								timeAgo="Today at 2:00AM"
								content="Amazing job!"
								avatar={faker.image.avatar()}
							/>
						</ApprovalCard>

						<ApprovalCard>
							<CommentDetail 
								author="Jane"
								timeAgo="Yesterday at 6:30PM"
								content="Thanks for sharing!"
								avatar={faker.image.avatar()}
							/>
						</ApprovalCard>
					</div>
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
