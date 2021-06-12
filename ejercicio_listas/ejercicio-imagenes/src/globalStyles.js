import  {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Hind-Light.woff'


const GlobalStyles = createGlobalStyle`
.ContainerText{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    font-family: Impact;
    font-size:20px;
}
.ContainerText p{
    font-family: 'Hind';
    font-size: 30px;
    margin: 0 20px;
}

.ContainerImage{
    display: flex;
    width: 50%;
    margin-right: 10px;
    justify-content: center;
}
.ContainerImage img{
    width: 100%;
    height: auto;
}

/* fuentes*/

@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
`;


export default  GlobalStyles;
