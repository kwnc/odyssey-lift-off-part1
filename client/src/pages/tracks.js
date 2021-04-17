import React from 'react';
import {useQuery, gql} from '@apollo/client';

import {Layout} from '../components';
import QueryResult from '../components/query-result';
import TrackCard from '../containers/track-card';

export const TRACKS = gql`
    query getTracks {
        tracksForHome {
            id
            title
            thumbnail
            length
            modulesCount
            author {
                id
                name
                photo
            }
        }
    }
`;

const SPACECATS = gql`
    query ListSpaceCats {
        spaceCats {
            name
            age
            missions {
                name
                description
            }
        }
    }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const { loading, error, data } = useQuery(TRACKS);

    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.tracksForHome?.map((track) => (
                    <TrackCard key={track.id} track={track} />
                ))}
            </QueryResult>
        </Layout>
    );
};

export default Tracks;
