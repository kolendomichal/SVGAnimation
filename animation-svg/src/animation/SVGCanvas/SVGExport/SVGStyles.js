const SVGStyles = `.mouse { fill: #E5E4E3; }
.anim {
    animation-name: simpleAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}
@keyframes simpleAnimation {
    from { transform: translate(0, 0); }
    to   { transform: translate(0, 200px); }
}

.moveDown {
    animation-name: moveDownAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}
@keyframes moveDownAnimation {
    from { transform: translate(0, 0); }
    to   { transform: translate(0, 200px); }
}

.moveUp {
    animation-name: moveUpAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}
@keyframes moveUpAnimation {
    from { transform: translate(0, 200px); }
    to   { transform: translate(0, 0px); }
}

.moveLeft {
    animation-name: moveLeftAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}
@keyframes moveLeftAnimation {
    from { transform: translate(0px, 0); }
    to   { transform: translate(-200px, 0px); }
}

.moveRight {
    animation-name: moveRightAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}
@keyframes moveRightAnimation {
    from { transform: translate(0px, 0); }
    to   { transform: translate(200px, 0px); }
}`;

export default SVGStyles;