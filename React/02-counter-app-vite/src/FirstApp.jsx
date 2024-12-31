// import PropTypes from 'prop-types'

// export const FirstApp = ({title, subtitle}) => {

//     if(!title){
//         throw new Error('El titulo no existe')
//     }
// return (
//     <>
//     <h1>{title}</h1>
//     <p>Estoy aprendiendo React</p>
//     <p>{subtitle}</p>
//     </>
//     )
// }

// FirstApp.propTypes = {
//     title : PropTypes.string.isRequired,
//     subtitle : PropTypes.string
// }

// FirstApp.defaultProps = {
//     title : "esto es un titulo de default",
//     subtitle : "esto es un subtitle de default"
// }
//da warning porque dice pronto defaultProps no sera usado que use js colocando los default como parametros por defecto
//const FirstApp = ({ name = 'Invitado', age = 30 })