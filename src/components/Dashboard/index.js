import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { user_profile } from '../../actions/profile';
import Navbar from '../Navbar/index';
import Repos from '../repository/index';

const Home = ({ user_profile, profile, repos, loading }) => {

    const [username, setusername] = useState("");
    const [data, setData] = useState({});
    const [repositories, setRepositories] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const onChangeHandler = (e) => {
        setusername(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        user_profile(username);
        console.log(profile);
        // setisLoading(true);
        // console.log(isLoading);
    }

    return !loading && profile === undefined ? (
        <div>
            <Navbar />
            <img className="image1" src="https://github.blog/wp-content/uploads/2013/04/fffdd290-a5e2-11e2-8099-e1b5d8286da3.jpg?fit=1234%2C272"></img>
            <div style={{ position: 'relative', padding: '20px' }}>
                <div className="ui icon input">
                    <i className="search icon"></i>
                    <input
                        className="prompt"
                        placeholder="search username here..."
                        type="text"
                        value={username}
                        onChange={onChangeHandler}
                    />
                </div>

                <button
                    className="ui primary button"
                    type="submit"
                    onClick={submitHandler}
                    style={{ marginLeft: '10px', marginBottom: '20px' }}
                >
                    <i className="github icon"></i>
        Search
            </button>
            </div>
        </div>
    ) : (
            <div>
                <Navbar />
                <img className="image1" src="https://github.blog/wp-content/uploads/2013/04/fffdd290-a5e2-11e2-8099-e1b5d8286da3.jpg?fit=1234%2C272"></img>
                <div style={{ position: 'relative', padding: '20px' }}>
                    <div className="ui icon input">
                        <i className="search icon"></i>
                        <input
                            className="prompt"
                            placeholder="search username here..."
                            type="text"
                            value={username}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <button
                        className="ui primary button"
                        type="submit"
                        onClick={submitHandler}
                        style={{ marginLeft: '10px', marginBottom: '20px' }}
                    >
                        <i className="github icon"></i>
                        Search
                    </button>
                    {/* {isLoading ? repos.slice(0,5).map(repo => (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div className="ui relaxed divided list" key={repo.name}>
                                    <div className="item">
                                        <div className="content">
                                            <a href="details" className="header" target="_blank">
                                                {repo.name}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : (null)} */}
                    <Repos profile1={profile} repos1={repos} />
                </div>
            </div>
        )
}
const mapStateToProps = (state) => ({
    profile: state.profile,
    repos: state.repos,
    loading: state.loading
})

// export default Home;
export default connect(mapStateToProps, { user_profile })(Home);