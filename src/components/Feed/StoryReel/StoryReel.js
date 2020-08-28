import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import arif from '../../../img/story/arif.jpg';
import arman from '../../../img/story/arman.jpg';
import nayem from '../../../img/story/nayem.jpg';
import abir from '../../../img/story/abir.jpg';
import jhankar from '../../../img/story/jhankar.jpg';

// images (story)
import frontEnd from '../../../img/story/storyImage/front-end.jpg'
import html from '../../../img/story/storyImage/html.jpg'
import js from '../../../img/story/storyImage/js.jpg'
import css from '../../../img/story/storyImage/css.jpg'
import frontEndSteps from '../../../img/story/storyImage/front-end-steps.jpg'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={frontEnd}
                profileSrc={arif}
                title="Md Arif Hossain"
            />
            <Story 
                image={html}
                profileSrc={arman}
                title="Md Arman Hossain"
            />
            <Story 
                image={js}
                profileSrc={nayem}
                title="Nayem Khan"
            />
            <Story 
                image={css}
                profileSrc={abir}
                title="Md Abir Hossain"
            />
            <Story 
                image={frontEndSteps}
                profileSrc={jhankar}
                title="Jhankar Mahbub"
            />
        </div>
    )
}

export default StoryReel;
