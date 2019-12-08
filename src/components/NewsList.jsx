import React from 'react';
import { Link } from '@reach/router';
import Moment from 'react-moment';

const NewsList = props => {
  const { newsStories } = props;
  return (
    <div>
      <div className="row">
        {newsStories.map(newsStory => {
          return (
            <div key={newsStory.id} className="card border-dark mb-3 col-md-3">
              <div className="card-body">
                <Link to={`/news/${newsStory.id}`}>
                  <h2>{newsStory.webTitle}</h2>
                </Link>
                <p>
                  published:{' '}
                  <Moment fromNow>{newsStory.webPublicationDate}</Moment>
                </p>
              </div>
              <div className="card-footer">
                <p>
                  {newsStory.type} / {newsStory.sectionName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;

// {newsStory.pillarName}
// className="col-md-12"
