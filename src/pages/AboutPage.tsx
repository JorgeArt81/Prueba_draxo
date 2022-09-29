import { PageInfo } from '@/components'

export const AboutPage = () => {
    return (
        <>
            <PageInfo className='info-show' />
            <section className='about-page'>
                <h1>Prueba Técnica para React Developer</h1>
                <h2>Posición: Junior Front-End Developer</h2>
                <p>
                    Desarrollar una landing page responsive que consuma una API que retorna un JSON con
                    información de casas diseñadas por arquitectos de la era moderna en los Estados Unidos.
                </p>
                <p>
                    Para nuestro landing vamos a leer la data de casas en la ciudad de San Francisco. Hay 2
                    versiones de la UI una versión tipo lista y otra versión tipo Mapa.
                </p>
                <p>
                    El diseño debe ser fiel a la UI en el archivo de Figma.
                </p>
            </section>
        </>
    )
}
