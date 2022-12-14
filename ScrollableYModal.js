/*
 * This component is a modal box that automatically has vertical scrollbar if content is too long and/or if modal is risized.
 * A modal looks pretty easy to do, but when you have to deal with Y-axis resizing things start to get complicated.
 * No worries, I made from scratch this modal that could help :)
 * Source of inspiration: https://css-tricks.com/considerations-styling-modal/
 */ 

import styled, {keyframes} from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// animation for fade in
const fadeIn = keyframes`
    from {
        margin-left: -100%;
    }
    to {
        margin-left: 0%;
    }
`;

const ModalOverlay = styled.div`
    color: #4A82A6;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    animation: ${fadeIn} 0.5s;
    -moz-animation: ${fadeIn} 0.5s; /* Firefox */
    -webkit-animation: ${fadeIn} 0.5s; /* Safari and Chrome */
    -o-animation: ${fadeIn} 0.5s; /* Opera */
`;

const ModalBoxContainer = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;
    height: 550px;
    max-height: calc(100% - 6px);
    width: 50%;
    max-width: 650px;
    border: 2px solid black;
    border-radius: 0px 25px 25px 0px;
    background-color: #fff;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
    animation: ${fadeIn} 0.5s;
    -moz-animation: ${fadeIn} 0.5s; /* Firefox */
    -webkit-animation: ${fadeIn} 0.5s; /* Safari and Chrome */
    -o-animation: ${fadeIn} 0.5s; /* Opera */
    // TBD: add responsiveness
`;

const ModalBoxControl = styled.div`
    position: absolute;
    top: 0px;
    right: 11px;
    z-index: 1200;
`;

const ModalBoxContent = styled.div`
    color: #333;
`;

const NonScrollableContent = styled.div`
    margin: 30px;
`;

const ScrollableContent = styled.div`
    position: absolute;
    width: auto;
    height: calc(100% - 140px);
    overflow-y: auto;
    margin: 10px 30px 30px 30px;
    padding: 0px 10px 0px 0px;
    /* scroll bar width */
    &::-webkit-scrollbar {
      width: 10px;
    }
    
    /* scroll bar track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px #333; 
      border-radius: 10px;
    }
     
    /* scroll bar handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(51,51,51,0.8);
      opacity: 0.6;
      border-radius: 10px;
    }
    
    /* scroll bar handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(51,51,51,1);
    }
`;

const longText = `
Winston Wolf, also known as "The Wolf", was a member of the organized crime cartel run by Marsellus Wallace, based out of Los Angeles, California. Wolf's specialty was cleaning up evidence left behind by Wallace's men. When hitman Vincent Vega accidentally shot and killed one of their own men, Marvin, Marsellus called in The Wolf to take care of it.
Vincent and his partner Jules Winnfield had already taken the car with Marvin's bloody remains to the home of one of Marsellus' "friends", Jimmie Dimmick. When The Wolf arrived, he wasted no time and began issuing instructions to Vincent and Jules on how to clean up the car and dispose of the body. Vincent did not care for Winston's abrupt demeanor, citing that "...a 'please' would be nice" when giving out orders. Winston explained that he expediency was key towards making this whole mess go away, and as such, sometimes manners need to be ignored. However, Winston punctuated this statement by asking him, "Pretty please, with sugar on top... clean the fucking car".
To make restitution with Jimmie Dimmick for the inconvenience, Mister Wolf was allowed to pay him a large sum of money. Once the car was cleaned up and Vincent and Jules were cleaned up, Winston Wolf drove off in the vehicle and disposed of it.
`;

const ScrollableYModal = ({ showModalBox, setShowModalBox }) => {
    return (
        showModalBox &&
        <div>
            <ModalOverlay showModalOverlay={showModalBox} onClick={() => setShowModalBox(!showModalBox)}/>
            <ModalBoxContainer>
                <ModalBoxControl>
                    <IconButton aria-label="close" onClick={() => setShowModalBox(!showModalBox)}>
                        <CloseIcon/>
                    </IconButton>
                </ModalBoxControl>
                <ModalBoxContent>
                    <NonScrollableContent>
                        <p>This short title <b>IS NOT</b> scrollable</p>
                    </NonScrollableContent>
                    <ScrollableContent>
                        <p>The following text <b>IS</b> scrollable</p>
                        <p>{longText}</p>
                        <p>Source: <a href="https://quentin-tarantino.fandom.com/wiki/The_Wolf" target="_blank" rel="noreferrer">Quentin Tarantino Wiki</a></p>
                    </ScrollableContent>
                </ModalBoxContent>
            </ModalBoxContainer>
        </div>
        
    );
};

export default ScrollableYModal;