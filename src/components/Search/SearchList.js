import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchList.css';
import ModalBox from '../common/ModalBox';
import SearchCard from './SearchCard';

const SearchList = (props) => {
  const [searchArtifact, setSearchArtifact] = useState({
    title: '',
    link: '',
    searchType: '',
  });

  const handleSearchClick = (search) => (event) => {
    if (
      typeof search.contenttype === 'undefined' ||
      Object.keys(search.files).length === 0
    ) {
      event.preventDefault();
      return;
    }

    setSearchArtifact({
      title: search.name,
      link: search.files.src,
      searchType: search.contenttype,
    });
  };

  if(props.searches.length > 0 ){
  return (
    <div className="row">
      {props.searches.map((search) => {
        return (
          <div className="col-auto col-lg-12 col-sm-6" key={search.id}>
              <SearchCard search={search}></SearchCard>
          </div>
        );
      })}
      <ModalBox
        id="modalSearches"
        searchType={searchArtifact.searchType}
        title={searchArtifact.title}
        link={searchArtifact.link}
      ></ModalBox>
    </div>
  );
  } else {
    return (
      <div className="row">
            <div className="col-auto col-lg-12 col-sm-6">
              <div className="card search-card">
                <h5>No search result found !</h5>
              </div>
            </div>
      </div>
    );
  }

};
export default SearchList;
