import PropTypes from 'prop-types'

export const FirstApp = ({title, subtitle}) => {

    if(!title){
        throw new Error('El titulo no existe')
    }
return (
    <>
    <div data-testid="test-title">{title}</div>
    <p>Estoy aprendiendo React</p>
    <p>{subtitle}</p>
    </>
    )
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string
}

FirstApp.defaultProps = {
    title : "esto es un titulo de default",
    subtitle : "esto es un subtitle de default"
}
