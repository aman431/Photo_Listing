import React from 'react'
import { connect } from 'react-redux';
import Time from '../repository/Time';
import Navbar from '../Navbar/index'
function Details({ details, loading }) {
    return !loading && details === undefined ? (
        <>
            <h1>Please Fetch the data again</h1>
        </>
    ) : (
            <div>
                <Navbar />
                <table className="ui celled table" >
                    <thead>
                        <tr>
                            <th>Owner Name</th>
                            <th>Repo Name</th>
                            <th>Link to github repo</th>
                            <th>Description</th>
                            <th>Collabator-URL</th>
                            <th>created At</th>
                            <th>Issue url</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {details.owner_name}
                            </td>
                            <td>
                                {details.name}
                            </td>
                            <td>
                                {details.html_url}
                            </td>
                            <td>
                                {details.description}
                            </td>
                            <td>
                                {details.collaborators_url}
                            </td>
                            <td>
                                <Time time={details.created_at} />
                            </td>
                            <td>
                                {details.issues_url}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}

const mapStateToProps = (state) => ({
    details: state.details,
    loading: state.loading
});

export default connect(mapStateToProps, null)(Details);
