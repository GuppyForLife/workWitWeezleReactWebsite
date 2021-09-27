import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { VIDEOS } from '../shared/videos';
import { CONTENTVIDEOS } from '../shared/contentVideos';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import VideoInfo from './VideoInfoComponent';
import Videos from './VideosComponent';
import Contact from './ContactComponent';
import Content from './ContentComponent';
import ContentInfo from './ContentInfoComponent';
import PromoVisuals from './PromoVisualsComponent';
import MainPhotosPage from './PhotosComponent';
import { BEHIND } from '../shared/bts';
import PhotoCollection from './PhotoCollectionComponent';

const Main = () => {

    const [videos] = useState(VIDEOS);
    const [contentVideos] = useState(CONTENTVIDEOS)
    const [photos] = useState(BEHIND)

    const HomePage = () => {
        return <Home />
    }

    const VideosPage = () => {
        return <Videos />
    }


    const ContactPage = () => {
        return <Contact />
    }

    const ContentPage = () => {
        return <Content />
    }

    const PromoPage = () => {
        return <PromoVisuals />
    }

    const PhotosPage = () => {
        return <MainPhotosPage />
    }

    const VideoWithId = ({match}) => {
        return(
            <VideoInfo 
            video = {videos.filter(video => video.id === +match.params.videoId)[0]}
            />
        )
    }

    const ContentWithId = ({match}) => {
        return(
            <ContentInfo 
            contentVideo = {contentVideos.filter(contentVideo => contentVideo.id === +match.params.contentVideoId)[0]}
            />
        )
    }

    const PhotoWithId = ({match}) => {
        return(
            <PhotoCollection 
            photo = {photos.filter(photo => photo.id === +match.params.photoId)[0]}
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
                <Route exact path='/content' component={ContentPage} />
                <Route path='/content/:contentVideoId' component={ContentWithId} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/promo_visuals' component={PromoPage} />
                <Route exact path='/photos' component={PhotosPage} />
                <Route path='/photos/:photoId' component={PhotoWithId} />
                <Redirect to='/home' />
            </Switch>
        </div>
    );
}

export default Main;