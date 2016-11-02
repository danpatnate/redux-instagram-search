import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import { getRecentTags, getSelf } from '../../actions/tags';

const styles = {
  avatar: { cursor: 'pointer' },
  caption: { width: '55%', float: 'right', marginRight: '5px' },
  individualTags: { display: 'inline-block', marginRight: '5px', fontSize: '10px', fontWeight: 800 },
  likes: { float: 'left', marginTop: '25%', marginLeft: '17%', fontWeight: 800, fontSize: '18px' },
  noLikes: { float: 'left', marginTop: '25%', marginLeft: '10%', fontWeight: 800, fontSize: '18px' },
  list: { marginTop: '30px' },
  searchBar: { marginLeft: '20px', display: 'inline-block' },
  searchButton: { position: 'absolute', bottom: '-25px' },
  searchButtonContainer: { display: 'inline-block' },
  searchForm: { paddingBottom: '25px' },
  tag: { marginLeft: '50%', marginRight: '5%' },
  tagCard: { display: 'block', boxShadow: '10px 10px 5px #9e9e9e', overflow: 'auto', height: '225px', width: '350px', border: '1px solid #9e9e9e', borderRadius: '15px', marginBottom: '15px' },
  username: { color: '#81D4FA', float: 'right', marginRight: '30%', paddingTop: '10px', fontSize: '25px', cursor: 'pointer' },
  yourDetails: { marginLeft: '25%', fontSize: '40px' },
};

class SelfIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
    };
    _.bindAll(this, [
      'render',
      'componentDidMount',
      'setUserString',
      'formatTagList',
      'formatIndividualTags',
      'navigateToProfile',
      'likes',
      'renderButton',
    ]);
  }

  componentDidMount() {
    getSelf(this.props.dispatch);
  }

  setUserString(e) {
    this.setState({ tag: e.target.value });
  }

  searchTags(e) {
    e.preventDefault();
    getRecentTags(this.props.dispatch, this.state.tag);
  }

  likes(count) {
    if (count === 0) {
      return <div style={styles.noLikes}>&#9829; No likes</div>;
    }
    return (
      <div style={styles.likes}>
        &#9829; {count}
      </div>
    );
  }

  formatIndividualTags(tags) {
    const formattedTags = tags.map(tag =>
      <div
        style={styles.individualTags}
        key={tag}
      >
        #{tag}
      </div>
    );
    return formattedTags;
  }

  navigateToContent(e, link) {
    window.open(link, '_blank');
  }

  navigateToProfile(e, username) {
    window.open(`http://instagram.com/${username}`, '_blank');
  }

  formatTagList(data) {
    const formattedData = data.map(tag =>
      <div
        style={styles.tagCard}
        key={tag.id}
      >
        <a
          style={styles.username}
          onClick={(e) => this.navigateToProfile(e, tag.user.username)}
        >
          {tag.user.username}
        </a>
        <List style={styles.list}>
          <ListItem
            disabled
            leftAvatar={
              <Avatar
                src={tag.user.profile_picture}
                size={100}
                style={styles.avatar}
                onClick={(e) => this.navigateToContent(e, tag.link)}
              />
            }
          />
        </List>
        {this.likes(tag.likes.count)}
        <div style={styles.caption}>
          {tag.caption.text}
        </div>
        <div style={styles.tag}>
          {this.formatIndividualTags(tag.tags)}
        </div>
      </div>
    );
    return formattedData;
  }

  renderButton() {
    if (this.state.tag.length > 0) {
      return <button type="submit" style={styles.searchButton} className="btn btn-default">Search</button>;
    }
    return <button type="submit" style={styles.searchButton} className="btn btn-default" disabled>Search</button>;
  }

  render() {
    let list = null;
    const submitButton = this.renderButton();
    const tags = this.props.tags;
    const data = tags.data;
    if (data && data.length > 0) {
      list = this.formatTagList(data);
    }

    if (this.props.location.pathname === '/you') {
      const userData = this.props.self;
      return (
        <div className="col-sm-10">
          <List>
            <ListItem
              disabled
              leftAvatar={
                <Avatar
                  src={userData.profile_picture}
                  size={200}
                />
              }
            />
            <span style={styles.yourDetails}>
              {userData.username}
            </span>
          </List>
        </div>
      );
    }

    return (
      <div>
        <form
          className="form-horizontal"
          onSubmit={(e) => this.searchTags(e)}
          style={styles.searchForm}
        >
          <TextField
            style={styles.searchBar}
            floatingLabelText="Enter the Instagram tag here"
            onChange={(e) => this.setUserString(e)}
          />
          <div className="form-group" style={styles.searchButtonContainer}>
            <div className="col-sm-offset-1 col-sm-10">
              {submitButton}
            </div>
          </div>
        </form>
        {list}
      </div>
    );
  }
}

SelfIndex.propTypes = {
  tags: PropTypes.object,
  self: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default SelfIndex;
