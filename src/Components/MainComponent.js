import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { VIDEOS } from '../shared/videos';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import VideoInfo from './VideoInfoComponent';
import Videos from './VideosComponent';
import Contact from './ContactComponent';

const Main = () => {

    const [videos] = useState(VIDEOS);

    const HomePage = () => {
        return <Home />
    }

    const VideosPage = () => {
        return <Videos />
    }


    const ContactPage = () => {
        return <Contact />
    }

    const VideoWithId = ({match}) => {
        return(
            <VideoInfo 
            video = {videos.filter(video => video.id === +match.params.videoId)[0]}
            />
        )
    }

    return(
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/videos' component={VideosPage} />
                <Route path='/videos/:videoId' component={VideoWithId} />
                <Route path='/contact' component={ContactPage} />
                <Redirect to='/home' />
            </Switch>
        </div>
    );
}

export default Main;