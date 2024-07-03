Responsive web design(RWD)
1. Float Layout technique
2. Flex box layout technique
3. Grid layout technique
4. CSS framework layout technique
Size: 480px                         600px           768         992         1200         1400px
Devices: extra small devices       small devices  tablets      laptops     desktops  extra large devices
Class:      -                       sm               md          19          xl          xxl


1. Float Layout 

1. child element
   width: 50% diney
   float: left;(sabai lai left batw didai janey-left to right)
2. Parent element
   overflow:hidden;
3. Responsive
@media(max-width: 600px)
child{
    width:100%;
}

2. Flex box
   display: Flex;-p;[=parent element]
   flex-wrap: wrap/no-wrap;-p
   flex-directuon: row/column;-p
   flex-flow: row wrap;[combination of flex wrap and flex direction]
   flex:1;
   flex-grow:1;
   flex-shrink:1;
   flex-basis:200px;
   flex: 1 1 200px;[certain property of grow,shrink,basis. In place of these we can use flex:1 1 200px]
justify-content: space-between;[helps to divide the div equally]
   "       "   : space-around;[helps to maintain the space of let and right]
               :space-evenly;[helps to create the space equally in all side]
                :start;
                :center;
                :end;
align-items: start|center|end;
gap:30px;
align-selt:

Position
position: relative;    
         :absoulote;
         :fixed;
         :sticky;[content scroll garda navbar position change nagarna use garine]
         :static;-default
         :top; bottom; left; right;
2D transform: rotate(30 deg);
            : translate(30px,40px);
            : translateX(30px);
            : translateY(40px);
            : scale(1,2);
            <!-- used to zoom in x-axis  -->
            : scaleX(1); 
            : scaleY(2);
            : skew(30 deg);
3D transform: rotate(30 deg);
            : rotateX(30deg);
            : rotateY(40deg);
            : rotateZ(30deg);
            : rotate3D(40deg);
transition: 2sec
transition-timing-function: ease;
                         : ease-in;
                         : ease-out;
                         : ease-in-out; 

transition-delay: 2sec;
transition-duration: 2sec;

animation-name: demo;
animation-iteration-count:2/3/infinite;
animation-duration:2sec;
animation-timing-function:ease;
animation-delay:2 sec;
animation-direction:alternative/reverse/alternative-reverse;
@keyframes Demo{ }