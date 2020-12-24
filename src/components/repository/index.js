import React, { useEffect, useState } from "react";
import Time from './Time';
import Details from '../Details/details';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_profile_details } from '../../actions/profile';

const Index = ({ profile1, repos1, loading, get_profile_details }) => {
    console.log(profile1);
    console.log(repos1);

    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <p>Created At</p>
                            <p>Repositories</p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{profile1.name}</td>
                    <td>
                        {!profile1.avatar_url ? (
                            " "
                        ) : (
                                <img
                                    className="ui small circular image"
                                    src={profile1.avatar_url}
                                    alt={profile1.avatar_url}
                                />
                            )}
                    </td>
                    <td>
                        {repos1.slice(0, 5).map((repo) => (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                {console.log(repos1)}
                                <Time time={repo.created_at} />
                                <div className="ui relaxed divided list" key={repo.name}>
                                    <div className="item">
                                        <div className="content">
                                            <Link to="/details">
                                                <p
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={get_profile_details(
                                                        repo.owner.login,
                                                        repo.full_name,
                                                        repo.name,
                                                        repo.description,
                                                        repo.collaborators_url,
                                                        repo.html_url,
                                                        repo.created_at,
                                                        repo.issues_url
                                                    )}>
                                                    {repo.name}
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default connect(null, { get_profile_details })(Index);

